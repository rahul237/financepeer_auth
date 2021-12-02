import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './screens/Login'
import Register from './screens/Register'



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" exact element={<Login/>} />
                    <Route path="/register" exact element={<Register/>} />
                </Routes>
                


            </BrowserRouter>
        </div>
    )
}

export default App