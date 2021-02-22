import React, { Component } from 'react'

export class Page1 extends Component {
    render() {
        return (
            <div className="bg-indigo-200 lg:py-10 md:min-h-screen xl:py-32">
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='col-span-1 text-white'>
                        <div className='mt-20 mx-6 lg:mt-40 lg:ml-20'>
                            <p>Hai I'm Elwin Johan Sibarani</p>
                            <p className='text-5xl mt-10'>Design and Development</p>
                            <p className='my-5 text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, obcaecati consequuntur animi eaque illum et odio. Placeat corporis odio eveniet nisi harum reiciendis quisquam id, sit fugit sapie</p>
                            <div className='flex flex-row justify-center md:justify-start'>
                                <button
                                    className='bg-indigo-400 p-3 mt-4'
                                >
                                    Contact Me
                                </button>
                                <button
                                    className=' p-3 mt-4 ml-6'
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='bg-indigo-300 w-60 h-60 mx-auto my-20 md:my-52'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page1
