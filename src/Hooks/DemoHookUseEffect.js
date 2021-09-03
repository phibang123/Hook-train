import React, { useEffect, useState } from "react";

import ChildUseEffect from "./ChildUseEffect";

export default function DemoUseEffect(props) {
	let [number, setNumber] = useState(1);
    
    let [like,setLike] = useState(1) 
    console.log(like)
    // là hàm chạy sau khi giao diện render
    //thay cho didMount và didUpdate trông mọi trường hợp
    // useEffect(() =>
    // {
    //     console.log("useEffect")
    // })


    //cách viết thay thế cho componentDidMout  chạy 1 lần duy nhất
    // useEffect(() =>
    // {
    //     console.log("useEffect")
    // },[])

    //cách viết thhay thế cho componentDidUpdate
    useEffect(() =>
    {
        console.log("didUpdate khi number thay đổi")
    },[number,like]) //number là giá trị nếu bị thay đổi sao render thì useEffect sẻ thay đổi




	const handleIncrease = () => {
		let newNumber = number + 1;
		setNumber(newNumber);
	};
    console.log('render')
    return (
       
        <div className="m-5">
            <button onClick={() =>
            {
                setLike(like+1)
            }}>Like</button>
            <h3>{ like}</h3>
			<div className="card text-left"  style={{height: 200,width:250}}>
				<img style={{height: 200,width:200}} className="card-img-top" src="https://hentaipro.net/upload/thumbs/phang-co-chi-ho-xinh-dep-quyen-ru.jpg" alt />
				<div className="card-body">
					<h4 className="card-title">Title</h4>
					<p className="card-text">{number}Like</p>
				</div>
			</div>

			<button className="btn btn-success" onClick={handleIncrease}>
				+
            </button>
            { like === 1 ?
                <ChildUseEffect></ChildUseEffect> : ''
            }
		</div>
	);
}
