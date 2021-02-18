import React, { Component } from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import Page1 from './Page/Page1'

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Page1} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App
