import React, { Component } from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import Footer from './Page/Footer'
import Headers from './Page/Headers'
import Page1 from './Page/Page1'
import Page2 from './Page/Page2'
import PageFunFact from './Page/PageFunFact'
import PagePortofolio from './Page/PagePortofolio'
import PageSkill from './Page/PageSkill'
import PageTestimoni from './Page/PageTestimoni'

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='mx-auto'>
                    <Headers/>
                    <Route path="/" component={Page1} />
                    <Route path="/" component={Page2} />
                    <Route path="/" component={PageSkill} />
                    <Route path="/" component={PagePortofolio} />
                    <Route path="/" component={PageTestimoni} />
                    <Route path="/" component={PageFunFact} />
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
