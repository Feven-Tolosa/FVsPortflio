'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Lock, Plus, Trash2, Loader2 } from 'lucide-react'
import type { Project } from '@/lib/projects'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [saving, setSaving] = useState(false)
  const [loadingList, setLoadingList] = useState(false)

  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    tags: '',
    category: 'web',
  })

  const loadProjects = useCallback(async (pass: string) => {
    setLoadingList(true)
    try {
      const res = await fetch('/api/projects', {
        headers: { 'x-admin-password': pass },
      })
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
      loadProjects(saved).then(setAuthed)
      setPassword(saved)
    }
  }, [loadProjects])

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)
    loadProjects(password).then((ok) => {
      if (ok) {
        setAuthed(true)
        sessionStorage.setItem('admin-password', password)
      } else {
        setMessage({ type: 'error', text: 'Wrong password or server not configured' })
      }
    })
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)
    setSaving(true)
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
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
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to add project')
      setForm({ title: '', description: '', image: '', link: '', tags: '', category: form.category })
      setMessage({ type: 'success', text: 'Project added successfully' })
      await loadProjects(password)
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
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to delete project')
      setMessage({ type: 'success', text: 'Project deleted' })
      await loadProjects(password)
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Something went wrong' })
    }
  }

  return (
    <main className='min-h-screen py-16 px-6'>
      <div className='container mx-auto max-w-3xl relative z-10'>
        <h1 className='text-4xl font-bold mb-2'>
          Admin <span className='gradient-text'>Panel</span>
        </h1>
        <p className='text-[var(--text-secondary)] mb-10'>Manage your portfolio projects</p>

        {!authed ? (
          <form onSubmit={handleLogin} className='glass-card rounded-2xl p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <span className='w-10 h-10 rounded-xl gradient-btn flex items-center justify-center'>
                <Lock size={18} />
              </span>
              <h2 className='text-xl font-semibold'>Login</h2>
            </div>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Admin password'
              className='input-glass w-full rounded-xl px-4 py-3 mb-4'
              required
            />
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

            {/* Add project form */}
            <form onSubmit={handleAdd} className='glass-card rounded-2xl p-8 mb-8'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='w-10 h-10 rounded-xl gradient-btn flex items-center justify-center'>
                  <Plus size={18} />
                </span>
                <h2 className='text-xl font-semibold'>Add New Project</h2>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <input
                  type='text'
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder='Project title *'
                  className='input-glass rounded-xl px-4 py-3'
                  required
                />
                <input
                  type='url'
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  placeholder='Live URL (https://...) *'
                  className='input-glass rounded-xl px-4 py-3'
                  required
                />
              </div>

              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder='Description *'
                rows={3}
                className='input-glass w-full rounded-xl px-4 py-3 mb-4 resize-none'
                required
              />

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <input
                  type='text'
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder='Image path (/images/my.png) or full URL *'
                  className='input-glass rounded-xl px-4 py-3'
                  required
                />
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className='input-glass rounded-xl px-4 py-3 bg-[var(--bg-primary)]'
                >
                  <option value='web'>Web Apps</option>
                  <option value='clone'>Clones</option>
                </select>
              </div>

              <input
                type='text'
                value={form.tags}
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                placeholder='Tags, comma separated (Next.js, React, Tailwind)'
                className='input-glass w-full rounded-xl px-4 py-3 mb-6'
              />

              <button
                type='submit'
                disabled={saving}
                className='gradient-btn rounded-xl px-8 py-3 font-medium disabled:opacity-60 inline-flex items-center gap-2'
              >
                {saving && <Loader2 size={16} className='animate-spin' />}
                {saving ? 'Saving...' : 'Add Project'}
              </button>
            </form>

            {/* Existing projects */}
            <div className='glass-card rounded-2xl p-8'>
              <h2 className='text-xl font-semibold mb-6'>Existing Projects ({projects.length})</h2>
              {loadingList ? (
                <p className='text-[var(--text-secondary)] text-sm flex items-center gap-2'>
                  <Loader2 size={14} className='animate-spin' /> Loading...
                </p>
              ) : (
                <ul className='space-y-3'>
                  {projects.map((p) => (
                    <li
                      key={p.id}
                      className='flex items-center gap-4 rounded-xl border border-[var(--border-subtle)] p-3'
                    >
                      <div className='relative w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-[var(--bg-secondary)]'>
                        <Image src={p.image} alt={p.title} fill sizes='64px' className='object-cover' unoptimized />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='font-medium truncate'>{p.title}</p>
                        <p className='text-xs text-[var(--text-tertiary)] truncate'>{p.link}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className='shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/10 transition-colors'
                        aria-label={`Delete ${p.title}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
