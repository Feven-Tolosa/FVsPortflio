import { NextResponse } from 'next/server'
import { readProjects, writeProjects, isAuthorized, type Project } from '@/lib/projects'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const projects = await readProjects()
    return NextResponse.json({ projects })
  } catch (error) {
    console.error('Projects load error:', error)
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { title, description, image, link, tags, category } = await req.json()

    if (!title || !description || !image || !link) {
      return NextResponse.json(
        { error: 'Title, description, image and link are required' },
        { status: 400 },
      )
    }

    const projects = await readProjects()

    const slug =
      String(title)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || 'project'

    const newProject: Project = {
      id: `${slug}-${Date.now()}`,
      title,
      description,
      image,
      link,
      tags: Array.isArray(tags) ? tags : [],
      category: category || 'web',
    }

    projects.unshift(newProject)
    await writeProjects(projects)

    return NextResponse.json({ success: true, project: newProject })
  } catch (error) {
    console.error('Project save error:', error)
    return NextResponse.json({ error: 'Failed to save project' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const id = new URL(req.url).searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    }

    const projects = await readProjects()
    const filtered = projects.filter((p) => p.id !== id)

    if (filtered.length === projects.length) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    await writeProjects(filtered)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Project delete error:', error)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
