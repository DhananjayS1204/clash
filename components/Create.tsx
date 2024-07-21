'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { IoMdClose } from 'react-icons/io'
import { postItem } from '@/app/SupabaseFunc'

const Create = ({setOpenBox}:any) => {

    const[name, setName] = useState('')
    const[place, setPlace] = useState('')
    const[date, setDate] = useState('')
    const[description, setDescription] = useState('')
    const[type, setType] = useState('')
    const[img, setImg] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const openFilePicker = () => {
      document.getElementById('fileInput').click();
    };

    console.log(selectedFile)
  

    const closeDialog = () => { 
        setOpenBox(false)
    }

    const Post = async () => {
        await postItem({name, place, date, description, type, img})
        closeDialog()
    }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeDialog}></div>
          <div className="bg-white p-8 rounded-xl shadow-lg z-10  w-[500px] min-h-[600px]">
            <div className='flex-between'>
                <h2 className="text-3xl font-bold mb-4">Lost & Found</h2>
                <span className='text-xl cursor-pointer' onClick={closeDialog}><IoMdClose /></span>
            </div>

            <div className='w-full h-[50px] my-6 flex items-center ml-6 gap-4'>
                <Button variant='default' className='w-[120px] py-3 rounded-full text-lg font-semibold text-gray-800 bg-white shadow-md hover:shadow-xl hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600'>
                    Lost
                </Button>
                <div className='w-[2px] h-[24px] bg-gray-300 rounded-full'></div>
                <Button variant='default' className='w-[120px] py-3 rounded-full text-lg font-semibold text-gray-800 bg-white shadow-md hover:shadow-xl hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600'>
                    Found
                </Button>
                </div>



            <div>   
                <div className='flex-center gap-2'>
                    <p className='text-gray-800 text-sm'>Name:</p>
                    <div className='w-full'>
                    <Input
                        type='text'
                        placeholder='Name of the thing'
                        value={name}
                        onChange={(e:any) => setName(e.target.value )}
                        className='w-full py-2 border-[1px] border-gray-400 rounded-xl placeholder:text-gray-700'
                        />

                    </div>
                </div>

                <div className='mt-5'>
                    <div className='flex-center gap-2 '>
                    <p className='text-gray-800 text-sm'>Place:</p>
                        <div className='w-full'>
                            <Input className='w-full py-2 border-[1px] border-gray-400 rounded-xl placeholder:text-gray-700' type='text' placeholder='Enter the place' value={place} onChange={(e:any) => setPlace(e.target.value)} /> 
                        </div>
                   </div>
                </div>

               <div className='mt-5'>
                    <div className='flex-center gap-2 '>
                        <p className='text-gray-800 text-sm'>Date:</p>
                        <div className='w-full'>
                            <Input className='w-full py-2 border-[1px] border-gray-400 rounded-xl placeholder:text-gray-700' type='date' placeholder='Enter the date' value={date} onChange={(e:any) => setDate(e.target.value)} /> 
                        </div>
                   </div>
                </div>

                <div className='w-full mt-5'>
                    <div className='gap-2  items-center'>
                        <p className='text-gray-800 text-sm'>Description:</p>
                        <div className='mt-2'>
                            <p className='text-[10px] ml-2 text-red-500'>(optional)</p>
                            <Textarea  
                                placeholder='Enter details' 
                                value={description} 
                                onChange={(e:any) => setDescription(e.target.value)}
                                className='w-[450px] h-[100px] py-2 border-[1px] border-gray-400 rounded-xl placeholder:text-gray-700'
                            /> 
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='flex-center gap-2'>
                        <p className='text-gray-800 text-sm w-[150px]'>Add an image:</p>
                            <div className='w-full'>
                            <div className="flex flex-col items-center">
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                <button
                                    onClick={openFilePicker}
                                    className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                                >
                                    Select Image
                                </button>
                                {selectedFile && (
                                    <div className="mt-4">
                                    <p>Selected file: {selectedFile?.name}</p>
                                    <img
                                        src={URL.createObjectURL(selectedFile)}
                                        alt="Selected"
                                        className="mt-2 w-[200px] h-[100px]"
                                    />
                                    </div>
                                )}
                                </div>
                        </div>
                   </div>
                </div>

                
            </div>
           <div className='flex justify-end mt-10'>
                <button onClick={Post} className="bg-red-500 rounded-xl text-white px-10 py-2 flex items-end">
                    Post
                </button>
           </div>
          </div>
        </div>
  )
}

export default Create