import restaurantData from './resData.json'
import categoryData from './catData.json'

const initialState = {
    food : [],
    restaurants : restaurantData,
    categories : categoryData
}

export default function menuReducer( state = initialState , { type , payload } ){

    console.log("State of menuReducer is ",state)
    console.log(type, " is action type while payload is ",payload)
    switch(type){
        
        default : return state 
    }
}