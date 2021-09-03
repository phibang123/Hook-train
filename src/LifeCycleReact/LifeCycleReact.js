import React, { Component } from 'react'

import ChildComponent from './ChildComponent'

export default class LifeCycleReact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            number: 1,
            product: {
                id: 1,
                name: 'Iphone X'
            }
        }
        console.log("contructor")
    }
    //được gọi khi setState  hoặc props
    shouldComponentUpdate(newProps, newState)
    {
        //return true thì chạy tiếp các life cycle còn lại, ngược lại return fails thì sẻ dừng lại không chạy tiếp các life cycle khác
        return true
    }

    render()
    {
        console.log('renderParent')
        return (
            <div>
                <h3>Parent Component</h3>
                <span>Number: {this.state.number}</span>
                <button className='btn btn-primary' onClick={() =>
                {
                    this.setState({
                        number: this.state.number +1
                    })
                }}>+</button>
                <hr></hr>
                <button className='btn btn-primary' onClick={() =>
                {
                    let newProduct = {...this.state.product};
                    newProduct.name = 'Iphone X'
                    this.setState({
                        product: newProduct
                    })
                }}>Change Name Product</button>
                <h3>New Product Parent : { this.state.product.name}</h3>
                <ChildComponent product={this.state.product}></ChildComponent>
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log("componentDidUpdate")
    }
}
