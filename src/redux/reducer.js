import { ADDTOCART } from "./actionType"

const initialState = {
    cart:[]
}

export const cartreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDTOCART:
   
    const newcart=JSON.parse(localStorage.getItem("newcart"))
    const x=newcart.find(e=>e.product.id===payload.product.id)
    if (x){
      localStorage.setItem("newcart", JSON.stringify(newcart.map(e=> e.product.id===payload.product.id ?{...e,quantity:e.quantity+payload.quantity } : e)))
        return { ...state, cart:state.cart.map(e=> e.product.id===payload.product.id ?{...e,quantity:e.quantity+payload.quantity } : e) }
    }
    else {
      localStorage.setItem("newcart", JSON.stringify([...newcart,payload] ))
        return { ...state, cart:[...state.cart,payload] }
    }
    

  default:
    return state
  }
}


