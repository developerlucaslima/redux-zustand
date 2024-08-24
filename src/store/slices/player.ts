import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Iniciando com Redux',
          lessons: [
            {
              id: 'Jai8w6K_GnY',
              title: 'Introdução ao Redux',
              duration: '13:45',
            },
            {
              id: 'w-DW4DhDfcw',
              title: 'Configurando Redux no Projeto',
              duration: '10:05',
            },
            {
              id: 'D83-55LUdKE',
              title: 'Entendendo Actions e Reducers',
              duration: '06:33',
            },
            {
              id: 'W_ATsETujaY',
              title: 'Integração com Redux DevTools',
              duration: '09:12',
            },
            {
              id: 'Pj8dPeameYo',
              title: 'Middleware no Redux',
              duration: '03:23',
            },
            {
              id: '8KBq2vhwbac',
              title: 'Async Actions com Redux Thunk',
              duration: '11:34',
            },
          ],
        },
        {
          id: '2',
          title: 'Estrutura Avançada com Zustand',
          lessons: [
            {
              id: 'gE48FQXRZ_o',
              title: 'Introdução ao Zustand',
              duration: '13:45',
            },
            {
              id: 'Ng_Vk4tBl0g',
              title: 'Criando e Usando Stores no Zustand',
              duration: '10:05',
            },
            {
              id: 'h5JA3wfuW1k',
              title: 'Utilizando Middleware no Zustand',
              duration: '06:33',
            },
            {
              id: '1G0vSTqWELg',
              title: 'Persistência de Estado com Zustand',
              duration: '09:12',
            },
          ],
        },
      ],
    },
    currentLessonIndex: 0,
    currentModuleIndex: 0,
  },
  reducers: {
    play: (state, action) => {
      state.currentLessonIndex = action.payload[0]
      state.currentModuleIndex = action.payload[1]
    },
  },
})

export const player = playerSlice.reducer
export const { play } = playerSlice.actions
