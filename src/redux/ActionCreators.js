import * as  ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        dishId : dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//to fetch dishes

export const fetchDishes = () => (dispatch) => {

    dispatch(dishLoading(true));

setTimeout(() => {
    dispatch(addDishes(DISHES))
}, 2000);

} 

export const dishLoading=()=>({
    type:ActionTypes.DISHES_LOADING
})

export const dishesFailes = (errmess) => ({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
})

export const addDishes = (dishes) => ({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
})

