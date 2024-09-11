import { Loader } from 'lucide-react'
import ReactPlayer from 'react-player'

import { useCurrentLessonAndModule } from '../hooks/use-current-lesson-and-module'
import { useLoading } from '../hooks/use-loading'
import { useAppDispatch } from '../store'
import { next } from '../store/slices/player'

export function Video() {
  const dispatch = useAppDispatch()
  const { currentLesson } = useCurrentLessonAndModule()
  const isCourseLoading = useLoading()

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
