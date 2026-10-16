'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Lock,
  Plus,
  Trash2,
  Loader2,
  Eye,
  EyeOff,
  Pencil,
  X,
  LogOut,
  ExternalLink,
} from 'lucide-react'
import type { Project } from '@/lib/projects'

const emptyForm = {
  title: '',
  description: '',
  image: '',
  link: '',
  tags: '',
  category: 'web',
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [authed, setAuthed] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [saving, setSaving] = useState(false)
  const [loadingList, setLoadingList] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const [form, setForm] = useState(emptyForm)

  const verifyPassword = useCallback(async (pass: string): Promise<string | null> => {
    try {
      const res = await fetch('/api/projects/verify', {
        method: 'POST',
        headers: { 'x-admin-password': pass },
      })
      if (res.ok) return null
      const data = await res.json().catch(() => ({}))
      return data.error || 'Login failed'
    } catch {
      return 'Could not reach the server'
    }
  }, [])

  const loadProjects = useCallback(async () => {
    setLoadingList(true)
    try {
      const res = await fetch('/api/projects')
      if (!res.ok) throw new Error('failed')
      const data = await res.json()
      setProjects(data.projects || [])
      return true
    } catch {
      return false
    } finally {
      setLoadingList(false)
    }
  }, [])

  useEffect(() => {
    const saved = sessionStorage.getItem('admin-password')
    if (saved) {
      setPassword(saved)
      verifyPassword(saved).then((err) => {
        if (!err) {
          setAuthed(true)
          loadProjects()
        } else {
          sessionStorage.removeItem('admin-password')
        }
      })
    }
  }, [verifyPassword, loadProjects])

  function resetForm() {
    setForm(emptyForm)
    setEditingId(null)
  }

  function handleLogout() {
    sessionStorage.removeItem('admin-password')
    setPassword('')
    setAuthed(false)
    setProjects([])
    resetForm()
    setMessage(null)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)
    const err = await verifyPassword(password)
    if (err) {
      setMessage({ type: 'error', text: err })
      return
    }
    setAuthed(true)
    sessionStorage.setItem('admin-password', password)
    await loadProjects()
  }

  function handleEdit(project: Project) {
    setEditingId(project.id)
    setForm({
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link,
      tags: project.tags.join(', '),
      category: project.category,
    })
    setMessage(null)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)
    setSaving(true)
    try {
      const url = editingId
        ? `/api/projects?id=${encodeURIComponent(editingId)}`
        : '/api/projects'
      const res = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify({
          ...form,
          tags: form.tags
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(
          res.status === 401
            ? 'Wrong password'
            : data.error ||
                `Failed to ${editingId ? 'update' : 'add'} project (HTTP ${res.status})`,
        )
      }
      const saved = data.project as Project
      const wasEditing = Boolean(editingId)
      if (wasEditing) {
        setProjects((prev) => prev.map((p) => (p.id === saved.id ? saved : p)))
      } else {
        setProjects((prev) => [saved, ...prev])
      }
      resetForm()
      setMessage({
        type: 'success',
        text: wasEditing ? 'Project updated successfully' : 'Project added successfully',
      })
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Something went wrong' })
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this project?')) return
    setMessage(null)
    try {
      const res = await fetch(`/api/projects?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': password },
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(
          res.status === 401
            ? 'Wrong password'
            : data.error || `Failed to delete project (HTTP ${res.status})`,
        )
      }
      if (editingId === id) resetForm()
      setProjects((prev) => prev.filter((p) => p.id !== id))
      setMessage({ type: 'success', text: 'Project deleted' })
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Something went wrong' })
    }
  }

  return (
    <main className='min-h-screen py-16 px-6'>
      <div className='container mx-auto max-w-6xl relative z-10'>
        <div className='flex flex-wrap items-center justify-between gap-4 mb-10'>
          <div>
            <h1 className='text-4xl font-bold mb-2'>
              Admin <span className='gradient-text'>Panel</span>
            </h1>
            <p className='text-[var(--text-secondary)]'>Manage your portfolio projects</p>
          </div>
          {authed && (
            <button
              onClick={handleLogout}
              className='inline-flex items-center gap-2 rounded-xl border border-[var(--border-glass)] px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors'
            >
              <LogOut size={16} /> Log out
            </button>
          )}
        </div>

        {!authed ? (
          <form onSubmit={handleLogin} className='glass-card rounded-2xl p-8 max-w-md mx-auto'>
            <div className='flex items-center gap-3 mb-6'>
              <span className='w-10 h-10 rounded-xl gradient-btn flex items-center justify-center'>
                <Lock size={18} />
              </span>
              <h2 className='text-xl font-semibold'>Login</h2>
            </div>
            <div className='relative mb-4'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Admin password'
                className='input-glass w-full rounded-xl px-4 py-3 pr-12'
                required
              />
              <button
                type='button'
                onClick={() => setShowPassword((v) => !v)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <button type='submit' className='gradient-btn w-full rounded-xl px-4 py-3 font-medium'>
              Enter
            </button>
          </form>
        ) : (
          <>
            {message && (
              <div
                className={`mb-6 rounded-xl px-4 py-3 text-sm border ${
                  message.type === 'success'
                    ? 'bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400'
                    : 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400'
                }`}
              >
                {message.text}
              </div>
            )}

            <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-8 items-start'>
              {/* Add / Edit project form */}
              <form
                onSubmit={handleSubmit}
                className='glass-card rounded-2xl p-8 lg:sticky lg:top-8'
              >
                <div className='flex items-center justify-between gap-3 mb-6'>
                  <div className='flex items-center gap-3'>
                    <span className='w-10 h-10 rounded-xl gradient-btn flex items-center justify-center'>
                      {editingId ? <Pencil size={18} /> : <Plus size={18} />}
                    </span>
                    <h2 className='text-xl font-semibold'>
                      {editingId ? 'Edit Project' : 'Add New Project'}
                    </h2>
                  </div>
                  {editingId && (
                    <button
                      type='button'
                      onClick={resetForm}
                      className='inline-flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors'
                    >
                      <X size={14} /> Cancel
                    </button>
                  )}
                </div>

                <div className='space-y-4'>
                  <input
                    type='text'
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder='Project title *'
                    className='input-glass w-full rounded-xl px-4 py-3'
                    required
                  />
                  <input
                    type='url'
                    value={form.link}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    placeholder='Live URL (https://...) *'
                    className='input-glass w-full rounded-xl px-4 py-3'
                    required
                  />
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder='Description *'
                    rows={3}
                    className='input-glass w-full rounded-xl px-4 py-3 resize-none'
                    required
                  />
                  <input
                    type='text'
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder='Image path (/images/my.png) or full URL *'
                    className='input-glass w-full rounded-xl px-4 py-3'
                    required
                  />
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className='input-glass w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)]'
                  >
                    <option value='web'>Web Apps</option>
                    <option value='clone'>Clones</option>
                  </select>
                  <input
                    type='text'
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder='Tags, comma separated (Next.js, React, Tailwind)'
                    className='input-glass w-full rounded-xl px-4 py-3'
                  />
                </div>

                <div className='flex items-center gap-3 mt-6'>
                  <button
                    type='submit'
                    disabled={saving}
                    className='gradient-btn rounded-xl px-8 py-3 font-medium disabled:opacity-60 inline-flex items-center gap-2'
                  >
                    {saving && <Loader2 size={16} className='animate-spin' />}
                    {saving
                      ? 'Saving...'
                      : editingId
                        ? 'Update Project'
                        : 'Add Project'}
                  </button>
                  {editingId && (
                    <button
                      type='button'
                      onClick={resetForm}
                      className='rounded-xl px-6 py-3 font-medium border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors'
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>

              {/* Existing projects */}
              <div>
                <div className='flex items-center justify-between mb-5'>
                  <h2 className='text-xl font-semibold'>Your Projects</h2>
                  <span className='text-sm text-[var(--text-secondary)]'>
                    {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                  </span>
                </div>

                {loadingList ? (
                  <p className='text-[var(--text-secondary)] text-sm flex items-center gap-2'>
                    <Loader2 size={14} className='animate-spin' /> Loading...
                  </p>
                ) : projects.length === 0 ? (
                  <div className='glass-card rounded-2xl p-10 text-center text-[var(--text-secondary)]'>
                    No projects yet. Add your first project using the form.
                  </div>
                ) : (
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {projects.map((p) => (
                      <article
                        key={p.id}
                        className={`glass-card rounded-2xl overflow-hidden flex flex-col transition-all ${
                          editingId === p.id ? 'ring-2 ring-[var(--accent,#6366f1)]' : ''
                        }`}
                      >
                        <div className='relative w-full h-40 bg-[var(--bg-secondary)]'>
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes='(max-width: 640px) 100vw, 400px'
                            className='object-cover'
                            unoptimized
                          />
                          <span className='absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-medium text-white capitalize'>
                            {p.category}
                          </span>
                        </div>
                        <div className='p-5 flex flex-col flex-1'>
                          <h3 className='font-semibold text-lg truncate'>{p.title}</h3>
                          <p className='text-sm text-[var(--text-secondary)] mt-1 line-clamp-2'>
                            {p.description}
                          </p>
                          {p.tags.length > 0 && (
                            <div className='flex flex-wrap gap-2 mt-3'>
                              {p.tags.map((t) => (
                                <span
                                  key={t}
                                  className='rounded-full border border-[var(--border-glass)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]'
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className='flex items-center gap-2 mt-5 pt-4 border-t border-[var(--border-subtle)]'>
                            <a
                              href={p.link}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors'
                            >
                              <ExternalLink size={14} /> Visit
                            </a>
                            <div className='ml-auto flex items-center gap-1'>
                              <button
                                onClick={() => handleEdit(p)}
                                className='w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors'
                                aria-label={`Edit ${p.title}`}
                              >
                                <Pencil size={16} />
                              </button>
                              <button
                                onClick={() => handleDelete(p.id)}
                                className='w-9 h-9 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/10 transition-colors'
                                aria-label={`Delete ${p.title}`}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
