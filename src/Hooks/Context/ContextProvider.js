import React, { useReducer } from 'react'

export const context = React.createContext()


const initialCart = [];


let cartReducre = (state = initialCart, action) =>
{
    switch (action.type)
    {
        case 'ADDTOCART': {
            
            let index = state.findIndex?.(item => item.id === action.product.id)
      
            if (index !== -1)
            {
                state[index].quanlity += 1;
                return [...state]
            }
           
            return [...state, { ...action.product, quanlity : 1 }]
            
        }
        default: return state
    }
}


export default function ContextProvider(props)
{
    let [cart,dispatch] = useReducer(cartReducre,initialCart)
    //dùng để bao bọc tất cả component bên trong(cụ thể là app)

    //store giống như rootReducer
    const store = {
        cartReducre: [cart,dispatch],
    }
    return (
        
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}



