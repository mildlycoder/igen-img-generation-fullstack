import React, {useState} from 'react'
import { getRandomPrompts } from '../utils'
import { FormField, Loader } from '../components/page components'

const CreatePost = () => {
    const [prompt, setPrompt] = useState('')

    const generateRandomPrompt = () => {
        const randomPrompt = getRandomPrompts()
        setPrompt(randomPrompt)
    }
  return (
    <main className='w-[80%] md:w-[75%] mx-auto my-[2rem]'>
        <section className=''>
        <h1 className='text-5xl md:text-6xl my-3'>Generate an image with A.I.</h1>
        <h2 className='text-2xl md:text-3xl text-neutral-400'>Enter a prompt to generate cool graphics</h2>
        </section>

        <section className='my-[2rem]'>
            <FormField />
        </section>

        <section>
            <button className='bg-gradient-to-r from-blue-700 to-indigo-700 p-2 rounded-md hover:scale-110 hover:bg-clip-border transition' onClick={generateRandomPrompt}>Random Prompt</button>

            {
                prompt &&
                <h1 className='text-xl md:text-2xl text-neutral-300 my-3'>{prompt}</h1>
            }
        </section>
    </main>
  )
}

export default CreatePost