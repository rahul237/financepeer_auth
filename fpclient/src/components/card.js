import React from 'react'

export default function Card(props){
    return(
    <div>
    <h1>Title - {props.data.title}</h1>
    <h5>Body - {props.data.body}</h5>

    
    <b>Id - {props.data.id}</b>
    <b>User Id - {props.data.userId}</b>
    </div>

    )



}