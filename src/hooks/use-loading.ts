import { useAppSelector } from '../store'

export function useLoading() {
  return useAppSelector((state) => {
    const loading = state.player.isLoading

    return { loading }
  })
}
