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

  //   add extra side effect on api calls
  //   extraReducers(builder) {
  //     builder.addMatcher(apiSlice.endpoints.getProducts.matchFulfilled, (state) => {
  //       state.themeColor = ThemeColor.DARK
  //     })
  //   }
})

export const { toggleTheme } = themeSlice.actions
