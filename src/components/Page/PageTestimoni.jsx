import React, { Component } from 'react'
import svgTestimoni from '../../assets/svg/pageTestimoni.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/bundle';
import 'swiper/components/effect-fade/effect-fade.min.css';

const testimoniOther = [
    {
        name: 'Fair Sudirman',
        position: 'Lead Developer',
        company: 'Movara',
        testi: "he is a young man who has extraordinary work effort, unyielding and full of joy. he's the type of person who is good at bringing atmosphere and good at diplomacy.",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEx-dS_vSTe0Q/profile-displayphoto-shrink_800_800/0/1602287423575?e=1619654400&v=beta&t=M9A5v4-8YuzllSIv6rjcnIQ-Jg-kHLdb6wtx81EU9jU"
    },
    {
        name: 'Jamaludin Fikri',
        position: 'Frontend Developer',
        company: 'Bukalapak',
        testi: "I have taught for many years, and meet lots of students with various characters.But what makes him unforgettable is he has great softskill like critical thinking, easy to collaborate and hard worker. in web development industry, Elwin capable to do both front end or backend. so he would be an asset to any company.",
        img:"https://media-exp1.licdn.com/dms/image/C5103AQHPPi5dbdw26g/profile-displayphoto-shrink_200_200/0/1586969282417?e=1619654400&v=beta&t=sYFyce7uxGwmapBrkMOej_cwO_DWPgJdDh_l1H-Ip5g"
    },
    {
        name: 'Muhammad Said Arrafi',
        position: 'Frontend Developer',
        company: 'Gadjian',
        testi: "he is a very good person as a friend. people who really want to try hard as a seeker of knowledge. and someone who is very comfortable to work with as colleagues",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGdIOlzb-h-kg/profile-displayphoto-shrink_200_200/0/1601628816051?e=1619654400&v=beta&t=cOOwHC1JZfZWqRO8qGpgbWkM0b0Vg4JoGOLb5BX4ZfI"
    },
]

export class PageTestimoni extends Component {


    renderTestimoni = () => {
        let testimoni = testimoniOther.map((data, index)=>{
            return (
                <SwiperSlide
                key={index}
                >
                    <div className='grid grid-cols-7 md:grid-cols-3 md:w-80 md:mx-auto'>
                        <div className='col-span-2 md:col-span-1'>
                            <img className='w-20 h-20 rounded-full bg-gray-500' src={data.img} alt=""/>
                        </div>
                        <div className='col-span-5 my-auto md:col-span-2'>
                            <p className='font-bold'>
                                {data.name}
                            </p>
                            <p className='italic'>
                                - {data.position} at {data.company}
                            </p>
                        </div>
                    </div>
                    <p className='italic text-justify mt-6 mb-8'>
                        " {data.testi} "
                    </p>
                </SwiperSlide>
            )
        })
        return testimoni
    }
    render() {
        return (
            <div className="lg:py-40 md:min-h-screen">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='col-span-1'>
                        <div className='mx-5 mt-10 md:mx-48 md:mt-28 lg:mx-20'>
                            <img src={svgTestimoni} alt=""/>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='md:mx-32 mt-20 mx-6 lg:mx-10'>
                        <p className='text-indigo-400 font-semibold text-center'>Testimonies</p>
                        <p className='text-5xl mt-4 leading-tight text-center'>
                            What's People <br/> Say About Me
                        </p>
                        <div className='mt-5 p-2'>
                            
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                autoplay
                                effect="fade"
                                loop={true}
                                fadeEffect={{
                                    crossFade: true
                                }}
                                pagination={true}
                            >
                                {this.renderTestimoni()}
                            </Swiper>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <div className='p-5 mx-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
                    <p className='text-center text-white'>
                        Interested Collaborate with Me ?
                    </p>
                    <button className="bg-indigo-200 p-3 rounded-md my-6 mx-auto">
                        <p className='text-white'>
                            Contact Me
                        </p>
                    </button>
                </div> */}
            </div>
        )
    }
}

export default PageTestimoni
