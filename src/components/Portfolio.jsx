import React from 'react'
import skymeet from "../assest/portfolio/skymeet.png"
// import installNode from "../assest/portfolio/installNode.jpg"
import IndiaTuch from "../assest/portfolio/IndiaTuch.png"
import reactParallax from "../assest/portfolio/portfolio.png"
import MoviesStore from "../assest/portfolio/movies-store.png"
// import reactWeather from "../assest/portfolio/reactWeather.jpg"
const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:skymeet,
            href:"https://sky989723.github.io/SkyMeet/",
            viewlink:"https://github.com/SKY989723/SkyMeet"
        },
        {
            id:2,
            src:IndiaTuch,
            href:"https://sky989723.github.io/IndiaTuch/",
            viewlink:"https://github.com/SKY989723/IndiaTuch"
            
        },
        {
            id:3,
            src:MoviesStore,
            href:"https://movies-store-g97j.onrender.com/",
            viewlink:"https://github.com/SKY989723/movies-store"
            
        },
        {
            id:4,
            src:reactParallax,
            href:"",
            viewlink:""
     
        },
        // {
        //     id:5,
        //     src:installNode
        // },
        // {
        //     id:6,
        //     src:reactWeather
        // },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 
    w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb- pt-20 md:pt-60'>
            <p className='text-4xl font-bond inline border-b-4 border-gray-500'>portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id, src,href,viewlink})=>(


        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
                <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                <a href={viewlink} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
            </div>
        </div>

            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
