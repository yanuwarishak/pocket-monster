import React from "react"

import "./pokeball.css";

const Pokeball = () => (
    <div className="container">
        <svg className="ball" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259.52 259.52">
            <circle fill="#fff" cx="129.76" cy="129.76" r="120.76"/>
            <path fill="#f1574d" d="M250.52,129.76H9a120.76,120.76,0,1,1,241.52,0Z"/>
            <rect fill="#dd3f3c" x="14.65" y="104.75" width="229.33" height="18"/>
            <rect fill="#eaeaea" x="14.65" y="133.42" width="229.33" height="18"/>
            <path fill="#231f20" d="M129.76,259.52A129.76,129.76,0,1,1,259.52,129.76,129.91,129.91,0,0,1,129.76,259.52Zm0-241.52A111.76,111.76,0,1,0,241.52,129.76,111.89,111.89,0,0,0,129.76,18Z"/>
            <rect fill="#231f20" x="9" y="120.76" width="234.99" height="18"/>
            <circle fill="#fff" cx="129.76" cy="142.42" r="30.89"/>
            <path fill="#231f20" d="M129.76,182.31a39.89,39.89,0,1,1,39.89-39.89A39.93,39.93,0,0,1,129.76,182.31Zm0-61.78a21.89,21.89,0,1,0,21.89,21.89A21.91,21.91,0,0,0,129.76,120.53Z"/>
            <path fill="#dd3f3c" d="M196.76,77.12a82.74,82.74,0,0,0-45.65-30.63l-6.69-1.72,4.47-17.44,6.69,1.72A100.8,100.8,0,0,1,211.2,66.37Z"/>
            <path fill="#eaeaea" d="M99,228.39,92.5,226a100.8,100.8,0,0,1-51.71-42.56l15.42-9.29a82.74,82.74,0,0,0,42.45,34.93l6.49,2.36Z"/>
        </svg>
        <div className="catch-container">
            <h3 className="catch-text">Catch</h3>
        </div>
    </div>
)

export default Pokeball;