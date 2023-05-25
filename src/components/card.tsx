import React from 'react';

export default function Card(props : any) {
    return (
        <div className="card">
            <h2>{props.content}</h2>
        </div>
    )
}