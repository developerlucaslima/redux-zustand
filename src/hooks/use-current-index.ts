import { useAppSelector } from '../store'

export function useCurrentIndex() {
  return useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    return { currentModuleIndex, currentLessonIndex }
  })
}
