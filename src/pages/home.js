import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart'
const Home = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-5'>List Products</h1>
        <h2>This Add to Cart created by <a href='https://abdelrahman-profile.netlify.app/' target='_blank' rel="noreferrer" className='text-blue-500'>AbdelRahman</a></h2>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product, key) =>
          <ProductCart key={key} data={product} />
        )}
      </div>
    </div>
  )
}

export default Home