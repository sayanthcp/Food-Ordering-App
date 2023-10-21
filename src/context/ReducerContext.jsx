import React, { createContext, useReducer } from 'react'
//global state
const DispatchContext = createContext()
const StateContext = createContext()


const ReducerContext = ({children}) => {

    const initialState = {
        cartItems:[],
    }

    const reducer = (state,action) => {
        switch(action.type) {
            case 'order_now' :
                return {
                    ...state,
                    cartItems:[...state.cartItems,action.payload]

                }

            default :
            return state ;   
        }

    }



    const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
      
    </div>
  )
}

export  {ReducerContext,DispatchContext,StateContext}
