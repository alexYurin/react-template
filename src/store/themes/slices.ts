import { StateCreator } from 'zustand'
import { ThemeSlice } from './types'

const DEFAULT_THEME = import.meta.env.VITE_THEME_DEFAULT

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  themeName: DEFAULT_THEME,
  setTheme: (themeName) => {
    set(() => ({ themeName }))
  },
})
