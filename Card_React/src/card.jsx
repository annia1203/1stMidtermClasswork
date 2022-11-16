import React from 'react';

export default function Card(props){
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Image:</h2>
            <img src={props.img}></img>
            <h2>Phone: {props.phone}</h2>
        </div>
    )
}