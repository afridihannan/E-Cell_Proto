import React from 'react'
import Ecell1 from '../../Assets/Ecell1.png'
import './Style.css'

export default function Home() {
    return (
        <div>
            <h1 className="head">Welcome to</h1>
            <img className="cenImg" src={Ecell1} height="400vh" width="400vw" alt="" />
            <h2 className="foot">Powering Entreprenuership</h2>
        </div>
    )
}
