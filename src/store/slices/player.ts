import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Getting Started with Redux',
          lessons: [
            {
              id: 'Jai8w6K_GnY',
              title: 'Introduction to Redux',
              duration: '13:45',
            },
            {
              id: 'w-DW4DhDfcw',
              title: 'Setting Up Redux in the Project',
              duration: '10:05',
            },
            {
              id: 'D83-55LUdKE',
              title: 'Understanding Actions and Reducers',
              duration: '06:33',
            },
            {
              id: 'W_ATsETujaY',
              title: 'Integration with Redux DevTools',
              duration: '09:12',
            },
            {
              id: 'Pj8dPeameYo',
              title: 'Middleware in Redux',
              duration: '03:23',
            },
            {
              id: '8KBq2vhwbac',
              title: 'Async Actions with Redux Thunk',
              duration: '11:34',
            },
          ],
        },
        {
          id: '2',
          title: 'Advanced Structure with Zustand',
          lessons: [
            {
              id: 'gE48FQXRZ_o',
              title: 'Introduction to Zustand',
              duration: '13:45',
            },
            {
              id: 'Ng_Vk4tBl0g',
              title: 'Creating and Using Stores in Zustand',
              duration: '10:05',
            },
            {
              id: 'h5JA3wfuW1k',
              title: 'Using Middleware in Zustand',
              duration: '06:33',
            },
            {
              id: '1G0vSTqWELg',
              title: 'State Persistence with Zustand',
              duration: '09:12',
            },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson =
        state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course.modules[nextModuleIndex]

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    },
  },
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions
