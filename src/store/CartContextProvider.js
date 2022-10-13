import { useReducer } from "react"
import CartContext from "./cart-context"

const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"
const DEFAULT_ITEMS = localStorage.getItem('item') != null ? JSON.parse(localStorage.getItem('item')) : []
const DEFAULT_AMOUNT = localStorage.getItem('totalAmount') != null ? localStorage.getItem('totalAmount') : 0

 
const defaultCartState = {
    items: DEFAULT_ITEMS,
    totalAmount: DEFAULT_AMOUNT
}
const cartReducer = (state, action) => {
    if(action.type === ADD_ITEM){
        const updatedTotalAmount = +state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex(item=>{
            return item.id === action.item.id
        })

        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItem;
        let updatedItems
        if(existingCartItem){
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
   
        }else updatedItems = state.items.concat(action.item)         
        localStorage.setItem('item', JSON.stringify(updatedItems))
        localStorage.setItem('totalAmount', updatedTotalAmount.toFixed(2))

        return {
            items: JSON.parse(localStorage.getItem('item')),
            totalAmount: localStorage.getItem('totalAmount')
        }
    }
    else if(action.type === REMOVE_ITEM){
        const existingCartItemIndex = state.items.findIndex(item=>{
            return item.id === action.id
        })
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price

        let updatedItems
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter(item=> item.id != action.id)
            if(updatedItems.length === 0) {
                localStorage.removeItem('item')
                localStorage.removeItem('totalAmount')
            }
            else {
                localStorage.setItem('item', JSON.stringify(updatedItems))
                localStorage.setItem('totalAmount', updatedTotalAmount.toFixed(2))
        
            }
        }else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
            localStorage.setItem('item', JSON.stringify(updatedItems))
            localStorage.setItem('totalAmount', updatedTotalAmount.toFixed(2))
        }
        const currentItems = localStorage.getItem('item') != null ? JSON.parse(localStorage.getItem('item')) : []
        const currentAmount = localStorage.getItem('totalAmount') != null ? JSON.parse(localStorage.getItem('totalAmount')) : 0

        return {
            items: currentItems,
            totalAmount: currentAmount
        }

    }
    return defaultCartState
}
const CartContextProvider = (props)=>{
    const[cartState, dispachCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) =>{
        dispachCartAction({
            type: 'ADD_ITEM',
            item: item,
        })
    }
    const removeItemHandler = (id) =>{
        dispachCartAction({
            type: 'REMOVE_ITEM',
            id: id,
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider