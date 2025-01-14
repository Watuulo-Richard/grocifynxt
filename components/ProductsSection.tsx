import React from 'react'
import Aside from './Aside'
import SingleCard from './SingleCard'
import { fetchProducts } from '@/actions/prdts'

export default async function ProductsSection() {
    const returnProducts = await fetchProducts()
    console.log(returnProducts)
  return (
    <div>
        <section id="products-section" className='flex bg-gray-200 w-[90%] h-[650px]  mx-auto my-12'>  
            <Aside/>
            {/* Grid-Container */}
            <div className="scrollbar-hide my-4 p-4 grid  gap-2 md:grid-cols-3 lg:grid-cols-5 overflow-scroll w-[80%]">
                {
                  returnProducts?.map((product)=>{
                    return (
                      <SingleCard key={product.id} product={product}/>
                    )
                  })
                }
            </div>
        </section>
    </div>
  )
}
