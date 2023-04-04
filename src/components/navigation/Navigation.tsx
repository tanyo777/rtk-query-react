import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleTheme } from '../../slices/themeSlice'
import { useDeleteProductMutation } from '../../api/productsApi'

const Navigation = (): JSX.Element => {
  const dispatch = useDispatch()
  const [deleteProduct, result] = useDeleteProductMutation()

  const changeThemeHandler = (): void => {
    dispatch(toggleTheme())
  }

  const deleteProductHandler = (e: any): void => {
    e.preventDefault()

    const mutationPayload = {
      id: 1
    }

    deleteProduct(mutationPayload)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
      <button onClick={changeThemeHandler}>change theme</button>
      {result.isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <button onClick={deleteProductHandler}>delete product</button>
      )}
    </div>
  )
}

export default Navigation
