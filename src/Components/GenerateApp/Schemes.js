// import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Schemes() {
    const [palette, setPalette] = useState([]);

    const onClickColors = (a) =>{
        prompt('copy to clip board ctrl+c, Enter', `rgb(${palette[a]})`);
    }

    useEffect(() => {
        
        async function fetchdata(){
            const request = await fetch('http://colormind.io/api/', {
                method: 'POST',
                body: JSON.stringify({
                  model: 'default'
                })
              })
                .then(result => result.json())
                .catch(console.log)
                setPalette(request.result);
                return(request);
        }
        fetchdata();
    }, [])

    return (
        <div>
            <div className='link-div'>
                    <p className='p2'>Click to copy color code <i className="fas fa-hand-point-down"></i></p>
                    <div className='inline-flex'>
            {
                palette.map((pallete, i)=>(
                    <div key={i} onClick={() => onClickColors(i)} className="color-picker" style={{
                        backgroundColor: `rgb(${palette[i][0]},${palette[i][1]},${palette[i][2]})`,
                        width: '130px',
                        height: '75px'
                        }}>
                    </div>
                ))
            }
        </div>
                </div>       
        </div>
    )
}
