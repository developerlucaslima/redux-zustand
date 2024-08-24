import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

import { Lesson } from './lesson'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleLessons() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="ease-in-out duration-300">
      <button
        onClick={toggleLessons}
        className="flex w-full items-center gap-3 bg-zinc-800 p-4"
      >
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">
            {amountOfLessons} classes
          </span>
        </div>

        {isOpen ? (
          <ChevronUp className="w-5 h-5 ml-auto text-zinc-400" />
        ) : (
          <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
        )}
      </button>

      {isOpen && (
        <nav className="relative flex flex-col gap-4 p-6 ease-in-out duration-300">
          <Lesson title="Fundamentos do Redux" duration="09:13" />
          <Lesson title="Fundamentos do Redux" duration="09:13" />
          <Lesson title="Fundamentos do Redux" duration="09:13" />
        </nav>
      )}
    </div>
  )
}
