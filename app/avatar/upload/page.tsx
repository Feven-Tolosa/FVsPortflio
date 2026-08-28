'use client'

import type { PutBlobResult } from '@vercel/blob'
import { useState, useRef } from 'react'

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [blob, setBlob] = useState<PutBlobResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault()
          setError(null)

          if (!inputFileRef.current?.files) {
            throw new Error('No file selected')
          }

          const file = inputFileRef.current.files[0]

          const response = await fetch(
            `/api/avatar/upload?filename=${encodeURIComponent(file.name)}`,
            {
              method: 'POST',
              body: file,
            },
          )
          const data = await response.json()
          if (!response.ok) {
            setError(data.error || 'Upload failed')
            return
          }

          setBlob(data as PutBlobResult)
        }}
      >
        <input
          name='file'
          ref={inputFileRef}
          type='file'
          accept='image/jpeg, image/png, image/webp'
          required
        />
        <button type='submit'>Upload</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {blob && (
        <div>
          <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  )
}
