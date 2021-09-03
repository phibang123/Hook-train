import React, { useCallback, useState } from 'react'

import ChildUseCallBack from './ChildUseCallBack';

export default function DemoHookUseCallBack(props)
{
    let [like, setLike] = useState(1);



    const renderNotify = () =>
    {
        return `bạn đã thả ${like} like!`
    }

    let callBackRenderNotify = useCallback(renderNotify,[])
    return (
        <div className='m-5'>
            Like: {like}
            <br></br>
            <span style={{
                cursor: 'pointer', color: 'red',
                fontSize: '35'
            }} onClick={() =>
            {
                setLike(like+1)
                }}>Like</span>
            <h3>{renderNotify()}</h3>
            <br></br>
            <br></br>
            <br></br>
            <ChildUseCallBack renderNotify={callBackRenderNotify}></ChildUseCallBack>
        </div>
    )
}
