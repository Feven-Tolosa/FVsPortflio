import { promises as fs } from 'fs'
import path from 'path'
import { get, head, put } from '@vercel/blob'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  category: string
}

const BLOB_PATH = 'projects.json'
const dataPath = path.join(process.cwd(), 'data', 'projects.json')

function useBlob(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN)
}

async function readLocal(): Promise<Project[]> {
  const raw = await fs.readFile(dataPath, 'utf-8')
  return JSON.parse(raw)
}

export async function readProjects(): Promise<Project[]> {
  if (!useBlob()) return readLocal()

  try {
    const meta = await head(BLOB_PATH)
    const res = await get(meta.url)
    return JSON.parse(await res.text()) as Project[]
  } catch {
    // First run after deploy: seed the blob with the bundled projects.json
    const projects = await readLocal()
    await writeProjects(projects)
    return projects
  }
}

export async function writeProjects(projects: Project[]): Promise<void> {
  if (!useBlob()) {
    await fs.writeFile(dataPath, JSON.stringify(projects, null, 2), 'utf-8')
    return
  }

  await put(BLOB_PATH, JSON.stringify(projects, null, 2), {
    access: 'public',
    addRandomSuffix: false,
  })
}

export function isAuthorized(req: Request): boolean {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false
  return req.headers.get('x-admin-password') === password
}
