function details(state={
    data:{
        replies:[],
        reply_count:0,
        create_at:"",
        good:true,
        author:{
            loginname:"",
            avatar_url:""
        }
    },
    loading:true
},action){
    switch(action.type){
        case 'DETAILS_UPDATA':
            return {
                data:state.data,
                loading:true
            }
        case 'DETAILS_UPDATE_SUCC':
        return{
            data:action.data.data,
            loading:false
        }
        case 'DETAILS_UPDATE_ERROR':
        return{
            data:{
                replies:[],
                reply_count:0,
                create_at:"",
                good:true,
                author:{
                    loginname:"",
                    avatar_url:""
                }
            },
            loading:true
        }
        default:
            return state;
    }
}
export default details;