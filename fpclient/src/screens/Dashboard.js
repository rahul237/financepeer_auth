import React from 'react'
import jwt from 'jsonwebtoken'
import {useNavigate} from 'react-router-dom'


const Dashboard = () =>{
    const history = useNavigate()

    useEffect(() => {

        const token = localStorage.getItem('token')

        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                history.replace('/login')
            }else{
                // populateDash()
            }

        }
    }, [input])
    return <h1>Hello World</h1>
}

export default Dashboard