import React,{useState} from 'react'

export default function DemoHookUseState(props)
{
    //this,state{}

    //tuple là 1 mảng hổn hợp
    let [like, setLike] = useState({ like: 0 })
    

    const handleLike = () =>
    {
        //lấy like tăng lên 1 và setState
        setLike({
            like: like.like + 1
        })
    }
    return (
        <div className='container m-5'>
            <div className='card text-left' style={{height:250,width:250}} >
                <img  style={{width:"100%"}} className='card-img-top' src='https://picsum.photos/200/200' ></img>
                <div className='card-body'>
                    <h4 className="card-title">Picture</h4>
                    <p style={{ color: 'red' }}>{like.like} Like</p>
                    <button className='btn btn-danger' onClick={handleLike}>like</button>
                </div>
            </div>
           
        </div>
    )
}
