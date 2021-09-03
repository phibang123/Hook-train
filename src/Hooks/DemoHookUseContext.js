import React, { useContext } from "react";

import { context } from "./Context/ContextProvider";

let arrProduct = [
	{ id: 1, name: "Ihpne", price: 1000 },
	{ id: 2, name: "Note 10", price: 2000 },
	{ id: 3, name: "Huawai P20", price: 1500 },
];

export default function DemoHookUseContext(props) {
	// let store = useContext(context)
	// let cartReducer = store.cartReducer

	let { cartReducre } = useContext(context);

	let [cart, dispatch] = cartReducre;

	// console.log('cartReducer',cartReducre)
	// console.log('store', cart)
	// console.log('dispatch', dispatch)

	const addToCart = (itemClick) => {
		console.log("poduct", itemClick);
		const action = {
			type: "ADDTOCART",
			product: itemClick,
		};
		dispatch(action);
	};

	return (
		<div className="container">
			<div className="row">
				{arrProduct.map((item, index) => {
					return (
						<div className="col-4" key={index}>
							<div className="card text-left">
								<img
									className="card-img-top"
									src={"https://picsum.photos/200/200"}
									alt
								/>
								<div className="card-body">
									<h4 className="card-title">{item.name}</h4>
									<p className="card-text">{item.price}</p>
									<button
										className="btn btn-success"
										onClick={() => {
											addToCart(item);
										}}
									>
										Thêm
									</button>
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
							<tr key={index}>
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
                    {console.log(cart)}
				</tbody>
			</table>
		</div>
	);
}
