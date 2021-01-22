import React from 'react';
import Challenge from '../Data/Challenge.json';
import './Generate.css'
const Color = ({num2}) => {
    const onClickColors = (a) =>{
        prompt('copy to clip board ctrl+c, Enter', `${Challenge[num2].pallete[a]}`);
    }
    return (
                <div className='link-div'>
                    <p className='p2'>Click to copy color code <i className="fas fa-hand-point-down"></i></p>
                    <div className='inline-flex'>
            {
                Challenge[num2].pallete.map((pallete, i)=>(
                    <div onClick={() => onClickColors(i)} className="color-picker" style={{
                        backgroundColor: Challenge[num2].pallete[i],
                        width: '150px',
                        height: '75px'
                        }}>
                    </div>
                ))
            }
        </div>
                </div>
        
    )
    }
export default Color;
