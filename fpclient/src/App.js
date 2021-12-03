import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './screens/Login'
import Register from './screens/Register'
import Upload from './screens/Upload'
import ViewData from './screens/ViewData'
import Dashboard from './screens/Dashboard'





const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    <Route path="/login" exact element={<Login/>} />
                    <Route path="/register" exact element={<Register/>} />
                    <Route path="/upload" exact element={<Upload/>} />
                    <Route path="/view" exact element={<ViewData/>} />
                    <Route path="/dashboard" exact element={<Dashboard/>} />


                </Routes>
                


            </BrowserRouter>
        </div>
    )
}

export default App