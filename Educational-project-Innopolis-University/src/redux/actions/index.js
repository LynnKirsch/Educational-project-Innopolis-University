export const addCoursToCart = (coursObj) => ({
    type: "ADD_COURS_CART",
    payload: coursObj,
})

export const removeCartItem = (id) => ({
    type: "REMOVE_CART_ITEM",
    payload: id,
})

export const removeCart = () => ({
    type: "REMOVE_CART",
})
