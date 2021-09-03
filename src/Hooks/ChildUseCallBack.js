import React,{memo} from 'react'

function ChildUseCallBack(props)
{
    let title = 'cyberLearn';
    let object = { id: 1, name: 'Khải' };

    console.log("title",title)
    console.log("object", object)
    console.log('re-render')

    return (
        <div>
            
            <textarea></textarea>
            <h3>{ props.renderNotify()}</h3>
            <br></br>
            <button className='btn btn-success'>Gửi bình luận</button>
        </div>
    )
}
export default memo(ChildUseCallBack)   