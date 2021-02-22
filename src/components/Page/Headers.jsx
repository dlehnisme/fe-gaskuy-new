import React, { Component } from 'react'

export class Headers extends Component {
    render() {
        return (
            <div className='fixed w-full p-3 text-white'>
                <div className='flex flex-row justify-between md:mx-32'>
                    <p>EJS</p>
                    <div className='flex flex-row justify-around gap-5'>
                        <p> Menu  </p>
                        <p> About  </p>
                        <p> Contact  </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headers
