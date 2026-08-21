import { promises as fs } from 'fs'
import path from 'path'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  category: string
}

const dataPath = path.join(process.cwd(), 'data', 'projects.json')

export async function readProjects(): Promise<Project[]> {
  const raw = await fs.readFile(dataPath, 'utf-8')
  return JSON.parse(raw)
}

export async function writeProjects(projects: Project[]): Promise<void> {
  await fs.writeFile(dataPath, JSON.stringify(projects, null, 2), 'utf-8')
}

export function isAuthorized(req: Request): boolean {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false
  return req.headers.get('x-admin-password') === password
}
