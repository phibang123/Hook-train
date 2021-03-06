import React, { useReducer } from "react";

const initialCart = [];

const cartReducre = (state, action) =>
{
    switch (action.type)
    {
        case 'ADDTOCART': {
            console.log(action.item)
             let cartUpdate = [ ...state ]
              
            let index = cartUpdate.findIndex(itemCart => itemCart.id === action.item.id);
            
            if (index !== -1)
            {
                cartUpdate[index].quanlity += 1;
                console.log(cartUpdate[index])
            }
            else
            {
                const itemCart = { ...action.item, quanlity: 1 };
                cartUpdate.push(itemCart)
            }
            
             return cartUpdate
        }
        default : return [...state];
    }
    
    
};





let arrProduct = [
	{ id: 1, name: "Ihpne", price: 1000 },
	{ id: 2, name: "Note 10", price: 2000 },
	{ id: 3, name: "Huawai P20", price: 1500},
];

export default function DemoHookUseReducer() {
	let [cart, dispatch] = useReducer(cartReducre, initialCart);
    
    const addToCart = (itemClick) =>
    {
       // console.log('poduct',itemClick)
        let action = {
            type: 'ADDTOCART',
            item: itemClick
        }
        dispatch(action)
    }

	return (
		<div className="container">
			<div className="row">
				{arrProduct.map((item, index) => {
					return (
						<div className="col-4" key={index}>
							<div className="card text-left">
								<img className="card-img-top" src={'https://picsum.photos/200/200'} alt />
								<div className="card-body">
									<h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.price}</p>
                                    <button className='btn btn-success' onClick={() =>
                                    {
                                        addToCart(item)
                                    }}>Thêm</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h3>Giỏ Hàng</h3>
			<table class="table">
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>price</th>
						<th>quanlity</th>
						<th>total</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.map((product, index) => {
						return (
							<tr key="index">
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.quanlity}</td>
								<td>{product.quanlity * product.price}</td>
								<td>
									<button className="btn btn-danger">X</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
