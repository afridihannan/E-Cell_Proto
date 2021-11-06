import React from 'react'
import './Style.css'
import nit1 from '../../Assets/nit logo.png'

export default function E_Summit() {
    return (
        <>
            <div className="sum_main">
                <div className="sum_cont">
                    <div className="sum_img">
                        <img src={nit1} width="175px" height="175px"  alt="" />
                    </div>
                    <div className="sum_head">
                        <p className="head_1">E-Summit</p>
                        <p className="head_2">Sustain to attain</p>
                    </div>
                    <div className="sum_about">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores incidunt recusandae eligendi laboriosam accusantium ipsa magnam, maiores optio quia velit, porro reprehenderit. Quia eligendi laborum, libero distinctio consequatur officiis?</p>
                    </div>
                    <div className="sum_butt">
                        <button className="btn btn-info">E_Summit 2021</button>
                    </div>
                </div>
            </div>
        </>
    )
}
