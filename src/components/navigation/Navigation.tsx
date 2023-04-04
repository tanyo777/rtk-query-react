import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleTheme } from '../../slices/themeSlice'

const Navigation = (): JSX.Element => {
  const dispatch = useDispatch()
  const { themeColor } = useSelector((state: any) => state.theme)

  const changeThemeHandler = (): void => {
    dispatch(toggleTheme())
  }

  return (
    <div style={{ background: themeColor }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
      <button onClick={changeThemeHandler}>change theme</button>
    </div>
  )
}

export default Navigation
