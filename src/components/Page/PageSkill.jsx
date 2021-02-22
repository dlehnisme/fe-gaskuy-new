import React, { Component } from 'react'
import { feIcon, beIcon, uiIcon } from '../../assets/svg/CodeLogo'
import JavascriptSVG from '../../assets/svg/logo/javascript.svg'
import nodeSVG from '../../assets/svg/logo/nodejs.svg'
import reactSVG from '../../assets/svg/logo/react.svg'
import reduxSVG from '../../assets/svg/logo/redux.svg'
import pwaSVG from '../../assets/svg/logo/pwa.svg'
import expressSVG from '../../assets/svg/logo/express.svg'
import sequelizeSVG from '../../assets/svg/logo/sequelize.svg'
import npmSVG from '../../assets/svg/logo/npm.svg'

let skill = [
    {
        name: "Frontend Development",
        icon: feIcon(),
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci provident eos earum tempora accusamus vel, alias illum eius odit veniam!",
        classname: 'bg-indigo-50'
    },
    {
        name: "Backend Development",
        icon: beIcon(),
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci provident eos earum tempora accusamus vel, alias illum eius odit veniam!",
        classname: 'bg-indigo-400'
    },
    {
        name: "UI Design",
        icon: uiIcon(),
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci provident eos earum tempora accusamus vel, alias illum eius odit veniam!",
        classname: 'bg-indigo-300'
    },
]

const softskill = [
    {
        name: 'Javascript',
        logo: JavascriptSVG
    },
    {
        name: 'Node JS',
        logo: nodeSVG
    },
    {
        name: 'React + React Native',
        logo: reactSVG
    },
    {
        name: 'Redux',
        logo: reduxSVG
    },
    {
        name: 'PWA',
        logo: pwaSVG
    },
    {
        name: 'express JS',
        logo: expressSVG
    },
    {
        name: 'Sequelize ORM',
        logo: sequelizeSVG
    },
    {
        name: 'NPM',
        logo: npmSVG
    },
]

export class PageSkill extends Component {

    // RENDER SECTION
    renderSkill = () => {
        let renderS = skill.map((data, idx)=>{
            return(
            <div 
                className="md:w-1/4 mx-4 my-5"
                key={idx}
            >
                <div className={`h-10 w-10 rounded-full p-2 ${data.classname} mx-auto`}>
                    {data.icon}
                </div>
                <p className='mx-auto mt-4 text-center md:h-12'>
                    {data.name}
                </p>
                <p className='text-gray-300 mt-2 text-sm text-center md:text-left'>
                    {data.desc}
                </p>
            </div>
            )
        })
        return renderS
    };

    renderSoftSkill = () => {
        let softSkill = softskill.map((data, index)=>{
            return(
                <div 
                className='col-span-1 my-auto'
                key={index}
                >
                    <img src={data.logo} alt=""/>
                </div>
            )
        })
        return softSkill
    };

    render() {
        return (
            <div className="lg:py-10 md:min-h-screen xl:py-24">
                <div className='md:pt-20 pt-10'>
                    <div className='flex flex-row justify-center'>
                        <div className='flex flex-col'>
                            <p className='text-indigo-400 font-semibold text-center'>
                                What Can I do For You
                            </p>
                            <p className='text-5xl mt-4 leading-tight text-center'>
                                Fullstack
                                Developer
                            </p>
                            <p className="md:mx-20 my-5 md:text-center mx-5 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque cumque ducimus amet minima et qui perspiciatis quo quas voluptas consectetur. Ullam mollitia ipsa sequi dignissimos magnam, repudiandae officia quibusdam cupiditate?
                            </p>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col justify-center'>
                        { this.renderSkill() }
                    </div>
                </div>
                <div>
                    <p className='text-indigo-400 font-semibold text-center'>
                        Skill
                    </p>
                    <div className='grid grid-cols-4 gap-5 mx-6 my-8 md:grid-cols-8 md:mx-20 lg:grid-cols-8 lg:mx-40 xl:mx-52'>
                        {this.renderSoftSkill()}
                    </div>
                </div>
            </div>
        )
    }
}

export default PageSkill
