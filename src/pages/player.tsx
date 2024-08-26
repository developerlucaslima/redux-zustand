import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'

import { Header } from '../components/header'
import { Module } from '../components/module'
import { Video } from '../components/video'
import { useCurrentLessonAndModule } from '../hooks/use-current-lesson-and-module'
import { api } from '../lib/axios'
import { useAppSelector } from '../store'
import { start } from '../store/slices/player'

export function Player() {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLessonAndModule()

  const modules = useAppSelector((store) => store.player.course?.modules)

  useEffect(() => {
    api.get(`/course/1`).then((response) => {
      dispatch(start(response.data))
    })
  })

  return (
    <>
      <Helmet title={currentLesson?.title} />
      <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
        <div className="flex w-[1100px] flex-col gap-6">
          <div className="flex items-center justify-between">
            <Header />

            <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
              <MessageCircle className="w-4 h-4" />
              Leave feedback
            </button>
          </div>

          <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
            <div className="flex-1">
              <Video />
            </div>
            <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
              {modules &&
                modules.map((module, index) => {
                  return (
                    <Module
                      key={module.id}
                      moduleIndex={index}
                      title={module.title}
                      amountOfLessons={module.lessons.length}
                    />
                  )
                })}
            </aside>
          </main>
        </div>
      </div>
    </>
  )
}
