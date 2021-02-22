import React, { Component } from 'react'
import gradSvg from '../../assets/svg/graduation.svg';
import programerSvg from '../../assets/svg/programmer.svg';
import aiSvg from '../../assets/svg/AI.svg';
import tourSvg from '../../assets/svg/Tourism.svg';
import founderSvg from '../../assets/svg/Development.svg';

const funFact = [
    {
        title: "Switch Career",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat.",
        ava: gradSvg
    },
    {
        title: "Front First, Backend Later",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat.",
        ava: programerSvg
    },
    {
        title: "Tech Junkie",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat.",
        ava: aiSvg
    },
    {
        title: "Part-time Traveler",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat.",
        ava: tourSvg
    },
    {
        title: "Founder Of Gaskuy.ID",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat.",
        ava: founderSvg
    },
]
export class PageFunFact extends Component {

    renderFunFact = () => {
        let dataRender = funFact.map((data, index)=>{
            return(
                <div 
                className={`flex flex-col mx-5 mt-4 mb-10 ${index === (funFact.length - 1) ? "lg:col-span-2" : ''}`}
                key={index}
                >
                    <div className='w-40 h-40 mx-auto rounded-full p-3 bg-indigo-100'>
                        <img src={data.ava} alt=""/>
                    </div>
                    <p className='text-center font-semibold mt-3'>
                        {data.title}
                    </p>
                    <p className='text-justify mt-2 text-gray-500 md:text-center md:w-96 lg:mx-auto'>
                        {data.desc}
                    </p>
                </div>
            )
        })
        return dataRender
    };

    render() {
        return (
            <div className="bg-gray-100 md:pt-20 pt-10 md:min-h-screen">
                <div className='flex flex-row justify-center'>
                    <div className='flex flex-col'>
                        <p className='text-indigo-400 font-semibold text-center'>
                            Extra
                        </p>
                        <p className='text-5xl mt-4 leading-tight text-center'>
                            5 Fun Fact <br/>
                            About Me
                        </p>
                        <div className='lg:grid lg:grid-cols-2 xl:grid-cols-3'>
                            {this.renderFunFact()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageFunFact
