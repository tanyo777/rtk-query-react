import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './api/productsApi'
import { themeSlice } from './slices/themeSlice'
import { usersApi } from './api/usersApi'

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer
  },

  // the default middlewares are: thunk, immutability check and Serializability check middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(usersApi.middleware)
})
setupListeners(store.dispatch)
