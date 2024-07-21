'use client'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import Create from './Create'
import { getItem } from '@/app/SupabaseFunc'
import Card from './Card'
import Link from 'next/link'

type HeroProps = {
    name: string,
    place: string,
    descitpion: string,
    date: string,
}

const Hero = () => {

    const [openBox, setOpenBox] = useState(false)
    const [data, setData] = useState<HeroProps[]>([])

    const getData = async () => {
        await getItem({setData})
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)

  return (
    <div className='w-full min-h-[90vh] relative'>
        <button className='fixed bottom-5 right-5 p-6 text-lg shadow-lg rounded-full' onClick={() => setOpenBox(true)}>
            <span><FiPlus /></span>
        </button>

        <div className='p-10 flex flex-wrap gap-10'>

            <Card item={{name: 'Keys', place: 'Indore', descitpion: 'lskdjlskdjf', date: '7 Nov'}} image='/keys.jpeg' />
            <Card item={{name: 'Keys', place: 'Indore', descitpion: 'lskdjlskdjf', date: '7 Nov'}} image='/keys.jpeg' />
            <Card item={{name: 'Keys', place: 'Indore', descitpion: 'lskdjlskdjf', date: '7 Nov'}} image='/keys.jpeg' />
            <Card item={{name: 'Keys', place: 'Indore', descitpion: 'lskdjlskdjf', date: '7 Nov'}} image='/keys.jpeg' />
            <Card item={{name: 'Keys', place: 'Indore', descitpion: 'lskdjlskdjf', date: '7 Nov'}} image='/keys.jpeg' />
            <Card item={{name: 'Keys', place: 'Indore', descitpion: 'lskdjlskdjf', date: '7 Nov'}} image='/keys.jpeg' />
            <Card item={{name: 'Keys', place: 'Indore', descitpion: 'lskdjlskdjf', date: '7 Nov'}} image='/keys.jpeg' />
            <Card item={{name: 'Keys', place: 'Indore', descitpion: 'lskdjlskdjf', date: '7 Nov'}} image='/keys.jpeg' />

            {data.map((e, i) => {
                return (
                    <Link href={`/details/${e.name}`} key={i}>
                        <Card item={e}/>
                    </Link>
                )
            })}
        </div>


        {openBox && <Create setOpenBox={setOpenBox} />}
    </div>
  )
}

export default Hero