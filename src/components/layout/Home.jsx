import React from 'react'

const Home = () => {
  return (
    <div className='p-16 md:p-14 w-full h-auto md:h-1/2 flex flex-col bg-gray-100'>
      <div className='upper flex flex-col w-full p-2 md:p-5'>
        <h2 className='p-2 font-semibold w-full text-3xl'>Donation process</h2>
        <p className='p-2 w-full md:w-1/2 font-semi-bold'>
          An award winning digital agency based in London. We design and build
          beautiful digital products that make a difference.
        </p>
      </div>
      <div className='p-2 md:p-5 w-full'>
        <div className='down flex flex-wrap md:flex-nowrap gap-2 w-full'>
          <div className='box flex flex-col w-full sm:w-1/2 md:w-1/4'>
            <div className='number bg-blue-600 w-[50px] h-[50px] rounded-2xl flex p-2 justify-center items-center'>
              <span className='p-6 text-blue-200 font-semibold text-2xl'>1</span>
            </div>
            <h2 className='pt-2 md:pt-5 font-semibold text-2xl'>Registration</h2>
            <p className='w-full md:w-11/12'>
              An award winning agency based in London. We design beautiful
              products that make a difference.
            </p>
          </div>
          <div className='box flex flex-col w-full sm:w-1/2 md:w-1/4'>
            <div className='number bg-yellow-600 w-[50px] h-[50px] rounded-2xl flex p-2 justify-center items-center'>
              <span className='p-6 text-yellow-200 font-semibold text-2xl'>2</span>
            </div>
            <h2 className='pt-2 md:pt-5 font-semibold text-2xl'>Registration</h2>
            <p className='w-full md:w-11/12'>
              An award winning agency based in London. We design beautiful
              products that make a difference.
            </p>
          </div>
          <div className='box flex flex-col w-full sm:w-1/2 md:w-1/4'>
            <div className='number bg-green-600 w-[50px] h-[50px] rounded-2xl flex p-2 justify-center items-center'>
              <span className='p-6 text-green-200 font-semibold text-2xl'>3</span>
            </div>
            <h2 className='pt-2 md:pt-5 font-semibold text-2xl'>Registration</h2>
            <p className='w-full md:w-11/12'>
              An award winning agency based in London. We design beautiful
              products that make a difference.
            </p>
          </div>
          <div className='box flex flex-col w-full sm:w-1/2 md:w-1/4'>
            <div className='number bg-orange-600 w-[50px] h-[50px] rounded-2xl flex p-2 justify-center items-center'>
              <span className='p-6 text-orange-200 font-semibold text-2xl'>4</span>
            </div>
            <h2 className='pt-2 md:pt-5 font-semibold text-2xl'>Registration</h2>
            <p className='w-full md:w-11/12'>
              An award winning agency based in London. We design beautiful
              products that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
