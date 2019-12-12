const userReducer =(state=[],action)=>{
    switch(action.type){

        case 'ADD_USER':return [...state,action.payload]
        
        case 'DELETE_USER': return state.filter(user=>{
            return user.id!=action.payload.id
        })
        case 'SHOW_A_USER': return {...state,...action.payload} // action.payload here is user id

        default:return state
    }

}


export default userReducer