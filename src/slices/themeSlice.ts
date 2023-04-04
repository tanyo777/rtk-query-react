import { createSlice } from '@reduxjs/toolkit'

enum ThemeColor {
  DARK = '#212129',
  LIGHT = '#FAFAFA'
}

interface Theme {
  themeColor: ThemeColor
}

const initialState: Theme = {
  themeColor: ThemeColor.LIGHT
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.themeColor === ThemeColor.LIGHT) {
        state.themeColor = ThemeColor.DARK
      } else {
        state.themeColor = ThemeColor.LIGHT
      }
    }
  }
})

export const { toggleTheme } = themeSlice.actions
