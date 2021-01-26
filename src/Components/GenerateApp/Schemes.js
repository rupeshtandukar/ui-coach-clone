// import axios from 'axios';
import React from 'react'

export default function Schemes({palette}) {
    // const [palette, setPalette] = useState([]);

    const onClickColors = (a) =>{
        prompt('copy to clip board ctrl+c, Enter', `rgb(${palette[a]})`);
    }

    // useEffect(() => {
        
    //     async function fetchdata(){
    //         const request = await fetch(fetchurl, {
    //             method: 'POST',
    //             body: JSON.stringify({
    //               model: 'default'
    //             })
    //           })
    //             .then(result => result.json())
    //             .catch(console.log)
    //             setPalette(request.result);
    //             return(request);
    //     }
    //     fetchdata();
    // }, [fetchurl])
    // const onClickColor = () =>{
    //     async function fetchdata(){
    //         const request = await fetch(fetchurl, {
    //             method: 'POST',
    //             body: JSON.stringify({
    //               model: 'default'
    //             })
    //           })
    //             .then(result => result.json())
    //             .catch(console.log)
    //             setPalette(request.result);
    //             return(request);
    //     }
    //     fetchdata();

    // }

    return (
        <div className='link-div'>
                    <p className='p2'>Click to copy color code <i className="fas fa-hand-point-down"></i></p>
                    <div className='inline-flex'>
            {
                palette.map((pallete, i)=>(
                    <div key={i} onClick={() => onClickColors(i)} className="color-picker" style={{
                        backgroundColor: `rgb(${palette[i]})`,
                        width: '130px',
                        height: '75px'
                        }}>
                    </div>
                ))
            }
        </div>
                </div>          
    )
}
