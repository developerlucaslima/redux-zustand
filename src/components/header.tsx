import { useCurrentLessonAndModule } from '../hooks/use-current-lesson-and-module'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLessonAndModule()

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">
        Module: {currentModule.title}
      </span>
    </div>
  )
}
