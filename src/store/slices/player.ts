import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Introduction to State Management',
          lessons: [
            { id: 'Jai8w6K_GnY', title: 'What is Redux?', duration: '13:45' },
            {
              id: 'w-DW4DhDfcw',
              title: 'Setting Up Redux in Your Project',
              duration: '10:05',
            },
            {
              id: 'D83-55LUdKE',
              title: 'Understanding Actions and Reducers',
              duration: '06:33',
            },
            { id: 'W_ATsETujaY', title: 'Redux DevTools', duration: '09:12' },
            {
              id: 'Pj8dPeameYo',
              title: 'Using Middleware in Redux',
              duration: '03:23',
            },
            {
              id: '8KBq2vhwbac',
              title: 'Async Operations with Redux Thunk',
              duration: '11:34',
            },
          ],
        },
        {
          id: '2',
          title: 'Advanced Redux Concepts',
          lessons: [
            {
              id: 'gE48FQXRZ_o',
              title: 'Redux Toolkit Overview',
              duration: '13:45',
            },
            {
              id: 'Ng_Vk4tBl0g',
              title: 'Creating and Managing Slices',
              duration: '10:05',
            },
            {
              id: 'h5JA3wfuW1k',
              title: 'Memoization with Reselect',
              duration: '06:33',
            },
            {
              id: '1G0vSTqWELg',
              title: 'Normalizing State Shape',
              duration: '09:12',
            },
          ],
        },
        {
          id: '3',
          title: 'State Management with Zustand',
          lessons: [
            {
              id: 'Jai8w6K_GnY',
              title: 'Introduction to Zustand',
              duration: '13:45',
            },
            {
              id: 'w-DW4DhDfcw',
              title: 'Setting Up Zustand in Your Project',
              duration: '10:05',
            },
            {
              id: 'D83-55LUdKE',
              title: 'Creating and Using Stores in Zustand',
              duration: '06:33',
            },
            {
              id: 'W_ATsETujaY',
              title: 'Middleware in Zustand',
              duration: '09:12',
            },
            {
              id: 'Pj8dPeameYo',
              title: 'Persisting State with Zustand',
              duration: '03:23',
            },
            {
              id: '8KBq2vhwbac',
              title: 'Advanced Patterns in Zustand',
              duration: '11:34',
            },
          ],
        },
      ],
    },
  },
  reducers: {},
})

export const player = playerSlice.reducer
