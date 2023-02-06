import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Fetchdata = ({cat}) => {

  const [Data, setData] = useState("")

    const  fetchData =async()=>{
        await axios
        .get(
          cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=82bac01a082e4b9ab7c43c7ed2f974a7`
          : "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=82bac01a082e4b9ab7c43c7ed2f974a7")
        .then((res) =>
        //  console.log(res.data.articles)
         setData(res.data.articles)
         )}

    useEffect(()=>{
        fetchData()
    },[cat])

    
  return (
    <>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 gap-6 mt-7'>
        {Data?Data.map((item, index)=>(
          <>
            
            <div className='flex justify-center items-center flex-col hover:scale-105 duration-500'>
            <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={item.urlToImage} alt="no image found" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{item.description}</p>
        <a href={item.url} target="blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
        </a>
    </div>
</div>
            
            </div>
          </>
        )):"Loading..."}
      </div>
    </>
  )
}

export default Fetchdata
