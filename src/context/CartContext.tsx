import React, { createContext, useContext, useReducer, ReactNode } from 'react'

export interface CartItem {
  productId: string
  variantId?: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
}

type Action =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; variantId?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; variantId?: string; quantity: number } }
  | { type: 'CLEAR' }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<Action>
  total: number
}>({ state: { items: [] }, dispatch: () => {}, total: 0 })

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.variantId === action.payload.variantId,
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item === existing ? { ...item, quantity: item.quantity + action.payload.quantity } : item,
          ),
        }
      }
      return { ...state, items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.productId === action.payload.productId && i.variantId === action.payload.variantId),
        ),
      }
    }
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.productId === action.payload.productId && item.variantId === action.payload.variantId) {
            return { ...item, quantity: action.payload.quantity }
          }
          return item
        }),
      }
    }
    case 'CLEAR': {
      return { items: [] }
    }
    default:
      return state
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  const total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return <CartContext.Provider value={{ state, dispatch, total }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)