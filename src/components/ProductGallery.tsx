"use client"

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  images: ReadonlyArray<string>
}

export default function ProductGallery({ images }: Props) {
  const [current, setCurrent] = useState(0)
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-80 border rounded">
        <Image
          src={images[current]}
          alt={`Imagem ${current + 1}`}
          fill
          className="object-cover rounded"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`relative w-20 h-20 border rounded ${current === idx ? 'ring-2 ring-primary' : ''}`}
            >
              <Image src={img} alt={`Thumb ${idx + 1}`} fill className="object-cover rounded" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
