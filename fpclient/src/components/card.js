import React from 'react'
import './styles/card.css'

export default function Card(props){
    return(
    <div id="border">
    <h1 id="title">{props.data.title}</h1>
    <h5 id = "body">{props.data.body}</h5>

    
    <b id = "id">#{props.data.id}</b>
    <b id = "userid">User Id - {props.data.userId}</b>
    </div>

    )



}