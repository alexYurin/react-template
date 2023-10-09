export enum ThemeEnum {
  'DARK' = 'dark',
  'LIGHT' = 'light',
}

export interface ThemeSlice {
  themeName: ThemeEnum
  setTheme: (themeName: ThemeEnum) => void
}
