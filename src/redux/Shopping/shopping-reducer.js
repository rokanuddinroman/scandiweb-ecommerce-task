import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
    activeTab: "all",
    products: [],
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionTypes.ACTIVE_CATEGORY:
            return {
                activeTab: payload
            }
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state
    }

}

export default shopReducer;