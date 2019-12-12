const commentsReducer =(state=[],action)=>{
    switch(action.type){

        case 'ADD_COMMENTS':return [...state,action.payload]
        
        case 'DELETE_COMMENTS': return state.filter(user=>{
            return user.id!=action.payload.id
        })
        case 'EDIT_COMMENTS': return state.map(post=>{
            if(post.id==action.payload.id){
                return Object.assign({},posts,action.payload)}
                else{
                    return Object.assign({},posts)
                }
        })

        default:return[...state]
    }


}


export default commentsReducer