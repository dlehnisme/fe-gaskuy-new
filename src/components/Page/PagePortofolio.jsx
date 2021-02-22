import React, { Component } from 'react'
import imgYutaka from '../../assets/image/porto-yutaka.png';
import imgGaskuy from '../../assets/image/porto-gaskuy.png';
import imgEvent from '../../assets/image/porto-event.png';

const dataPortofolio = [
    {
        name: 'Yutaka Delta Indoraya',
        type: 'Profile Company Website',
        pic: imgYutaka,
        status: 'Online',
        link: 'http://yutakadeltaindoraya.com'
    },
    {
        name: 'Gaskuy.ID',
        type: 'Website',
        pic: imgGaskuy,
        status: 'Online',
        link: 'https://gaskuy.id/'
    },
    {
        name: 'Gaskuy Event',
        type: 'Website Apps',
        pic: imgEvent,
        status: 'Offline',
        link: null
    },
] 

export class PagePortofolio extends Component {

    // RENDER SECTION
    renderPortofolio = () => {
        let renderPorto = dataPortofolio.map((data, index)=>{
            return(
            <a 
            href={data.link ? data.link : "javascript:alert('Under Maintainance Website');"}
            key={index}
            >
                <div 
                className={`p-3 my-3 col-span-1 ${index === (dataPortofolio.length - 1)? "mb-10" : ''}`}
                >
                    <img className='h-60 rounded-lg bg-gray-400 p-10' src={data.pic} alt=""/>
                    <p className='text-lg font-bold mt-3'>
                        {data.name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {data.type}
                    </p>
                    <p className={`${data.status === 'Online' ? "text-green-600" : "text-gray-700"} font-extrabold text-sm`}>
                        {data.status}
                    </p>
                </div>
            </a>
            )
        })
        return renderPorto
    };

    render() {
        return (
            <div className=' bg-gray-100 lg:py-10 md:min-h-screen'>
                <div className='pt-10 md:pt-48 lg:pt-20'>
                    <p className='text-indigo-400 font-semibold text-center md:text-left md:ml-20'>Portofolio</p>
                    <p className='text-5xl mt-4 leading-tight text-center md:text-left md:ml-20'>
                        Some Of My Work
                    </p>
                    <p className="md:w-96 text-justify mx-5 my-5 md:ml-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam et nostrum reprehenderit, ex officiis explicabo culpa.
                    </p>
                    <div className='grid md:grid-cols-2 md:gap-1 grid-cols-1 md:mx-10 lg:grid-cols-3'>
                        {this.renderPortofolio()}
                    </div>
                </div>
            </div>
        )
    }
}

export default PagePortofolio
