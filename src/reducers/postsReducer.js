const postsReducer =(state=[],action)=>{
    switch(action.type){

        case 'ADD_POSTS':return [...state,action.payload]
        
        case 'DELETE_POSTS': return state.filter(user=>{
            return user.id!=action.payload.id
        })
        case 'EDIT_POSTS': return state.map(post=>{
            if(post.id==action.payload.id){
                return Object.assign({},posts,action.payload)}
                else{
                    return Object.assign({},posts)
                }
        })

        default:return[...state]
    }

}


export default postsReducer