import React,{useEffect, useState} from 'react'

export default function ChildUseEffect(props)
{
    let [number, setNumber] = useState(1);
    useEffect(() => {
        //viết cho didUpdate
        console.log('didUpdate')
        return () => {
            console.log('WillUnMount')
        }
    }, [number])

    console.log('render childEffect')
    return (
        <div>
            <textarea></textarea><br></br>
            <button className='btn btn-success'>Gửi</button>
        </div>
    )
}
