import React from 'react'
import Fetchdata from './Fetchdata'

const Home = () => {



  return (
    <>
      <div className='w-full mx-auto bg-orange-200 flex flex-col justify-center items-center h-[50vh]'>
        
          <h1 className='text-4xl font-bold text-zinc-700'>Welcome to News Hub</h1>
          <h2 className='text-2xl font-bold text-neutral-500'>This app is created with the help of News API</h2>
        
      </div>
      <div className='max-w-[1240px] mx-auto mt-2 shadow-lg rounded-md overflow-hidden'>
      <Fetchdata/>
        
      </div>
    </>
  )
}

export default Home
