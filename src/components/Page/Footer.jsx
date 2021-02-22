import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="bg-indigo-200 overflow-hidden">
                <div className='flex flex-row justify-between'>
                    <div className='w-40 h-40 rounded-full bg-indigo-300 relative -left-28 p-0 -bottom-10'/>
                    <div className='w-40 h-40 rounded-full bg-indigo-400 relative -top-20 -right-28'/>
                </div>
                <p className='text-white -mt-32 relative mx-5 text-center mb-10 text-xl font-extrabold'>
                    Get In Touch
                </p>
                <p className='text-white relative text-center -mt-8'>
                    For Bussiness Inquiry please contact me to 
                </p>
                <p className='text-white relative text-center'>
                    johanelsibarani@gmail.com 
                </p>
                <div className="flex flex-row relative justify-center my-8">
                    <i className="fab fa-instagram text-6xl text-gray-200 mx-2"></i>
                    <i className="fab fa-linkedin-in text-6xl text-gray-200 mx-2"></i>
                </div>
            </div>
        )
    }
}

export default Footer
