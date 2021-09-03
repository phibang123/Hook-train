import React, {
    useMemo,
    useState
} from 'react'

import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {
    let [like, setLike] = useState(1);
    // let cart = [{
    //         id: 1,
    //         name: 'iphone',
    //         price: 10000
    //     },
    //     {
    //         id: 2,
    //         name: 'SumSung',
    //         price: 20000
    //     },
    //     {
    //         id: 3,
    //         name: 'Huawai',
    //         price: 30000
    //     },
    // ]
    const renderCart = () => {
		let cart = [
			{
				id: 1,
				name: "iphone",
				price: 10000,
			},
			{
				id: 2,
				name: "SumSung",
				price: 20000,
			},
			{
				id: 3,
				name: "Huawai",
				price: 30000,
			},
		];
		return cart;
	};
    const cartMemo = useMemo(() =>
    
        renderCart(),[]
    )
    return ( 
        <div className='mt-5'>
            Like:{like} Like
            <br></br>
            <br></br>
            <span style={{
                cursor: 'pointer', color: 'red',
                fontSize: '35'
            }} onClick={() =>
            {
                setLike(like+1)
                }}>Like</span>
            
            <br></br>
            <br></br>
            <br></br>
            <ChildUseMemo cart={cartMemo}></ChildUseMemo>
        </div>
    )
}