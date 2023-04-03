import { useGetProductQuery } from '../api/apiSlice'
import React from 'react'

const Product = (): JSX.Element => {
  const { data: product, isLoading, isError, isSuccess } = useGetProductQuery({ id: 1 })

  let content

  if (isLoading) {
    content = <h2>Loading...</h2>
  } else if (isError) {
    content = <h2>Cannot load product!</h2>
  } else if (isSuccess) {
    content = (
      <div>
        <h1 style={{ color: 'lightgray', textShadow: '1px 2px gray' }}>{product.title}</h1>
        <p>{product.description}</p>
      </div>
    )
  }

  return <div>{content}</div>
}

export default Product
