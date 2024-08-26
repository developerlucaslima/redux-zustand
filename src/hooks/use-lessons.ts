import { useAppSelector } from '../store'

export function useLessons(moduleIndex: number) {
  return useAppSelector((state) => {
    const lessons = state.player.course.modules[moduleIndex].lessons

    return { lessons }
  })
}
