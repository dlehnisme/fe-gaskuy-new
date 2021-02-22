import React, { Component } from 'react'
import page2Svg from '../../assets/svg/page2.svg'
export class Page2 extends Component {
    render() {
        return (
            <div className='bg-gray-100 lg:py-10 md:min-h-screen xl:py-32'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='col-span-1'>
                        <div className='mx-auto mt-20 md:mx-40 lg:mx-20 lg:my-40'>
                            <img  src={page2Svg} alt=""/>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='md:my-52 md:mx-20 md:mt-20 mx-6 mt-10'>
                            <p className='text-indigo-400 font-semibold text-center md:text-left'>a Brief Introduction</p>
                            <p className='text-5xl mt-4 leading-tight text-center md:text-left'>
                                Incipit
                                <span>
                                    <br/> 
                                    Vita Nova
                                </span>
                            </p>
                            <p className='italic font-semibold -mt-1 mb-7 text-center md:text-left'>
                                - From now on my life will be better
                            </p>
                            <p className='my-10 text-justify md:text-left'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repudiandae provident quos, impedit expedita blanditiis omnis deleniti dolore culpa inventore, alias consequuntur, quam beatae! Similique dicta error ratione aliquam tempore recusandae non voluptatem suscipit labore quo, beatae perferendis, iusto commodi voluptatum magni placeat quidem quae delectus? Molestias illo voluptate eveniet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page2
