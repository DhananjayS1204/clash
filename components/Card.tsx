import Image from 'next/image'
import React from 'react'

const Card = ({item, image}: any) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 w-[300px] h-[400px] flex flex-col hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className='w-full h-[180px] relative'>
        <Image 
          src={image} 
          alt='item image' 
          width={50}
          height={50}
          className='w-full h-full rounded-t-lg' 
        />
      </div>

      <div className="p-4 flex flex-col h-full">
        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
        
        {/* Lost In */}
        <div className='flex items-center gap-2 mb-2'>
          <p className="text-sm font-medium text-gray-600">Lost In:</p>
          <p className="text-md text-gray-700">{item.place}</p>
        </div>
        
        {/* Lost On */}
        <div className='flex items-center gap-2 mb-2'>
          <p className="text-sm font-medium text-gray-600">Lost On:</p>
          <p className="text-md text-gray-700">{item.date}</p>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
      </div>
    </div>
  )
}

export default Card
