const initialState = {
    cartItems: null,
    totalPrice: 0,
    totalCount: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COURS_CART": {
            let newCartItems;
            if (state.cartItems) {
                const Item = state.cartItems.filter(
                    (item) => item.id === action.payload.id);
                if (Item.length !== 0) {
                    newCartItems = [...state.cartItems]
                } else {
                    newCartItems = [...state.cartItems, action.payload]
                }
            } else {
                newCartItems = [action.payload]
            }
            let totalPriceNew;
            let totalCountNew;

            if(state.cartItems) {
                const Item = state.cartItems.filter(
                    (item) => item.id === action.payload.id);
                if (Item.length !== 0) {
                    totalPriceNew = state.totalPrice
                    totalCountNew = state.totalCount
                } else {
                    totalPriceNew = state.totalPrice + action.payload.price;
                    totalCountNew = state.totalCount + 1;
                }
            } else {
                totalPriceNew = state.totalPrice + action.payload.price;
                totalCountNew = state.totalCount + 1;
            }

            return {
                ...state,
                cartItems: newCartItems,
                totalPrice: totalPriceNew,
                totalCount: totalCountNew,
            }
        }

        case "REMOVE_CART_ITEM": {
            const newCartItems = state.cartItems.filter((item) => item.id !== action.payload);
            const totalCountNew = state.totalCount - 1;
            const Item = state.cartItems.filter((item) => item.id === action.payload);
            const totalPriceNew = state.totalPrice - Item[0].price;

            return {
                ...state,
                cartItems: newCartItems,
                totalPrice: totalPriceNew,
                totalCount: totalCountNew,
            }
        }

        case "REMOVE_CART": {
            return {
                ...state,
                cartItems: null,
                totalPrice: 0,
                totalCount: 0,
            }
        }

        default:
            return state;
    }
}

export default reducer;