import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'

import { useCurrentLessonAndModule } from '../hooks/use-current-lesson-and-module'
import { next } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  function handlePlayNext() {
    dispatch(next())
  }

  const { currentLesson } = useCurrentLessonAndModule()

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
