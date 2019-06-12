import React from 'react';
import TxtDetails from './txtDetails';
import ReplyList from './replyList';
import {connect} from 'react-redux';
import axios from 'axios';
import data from './data';
console.log(data);
class Details extends React.Component{
    constructor(props){
        super(props);
        let id=this.props.match.params.id;
        this.getData(id);
    }
    // shouldComponentUpdate(nextProps,nextState){


    //     }
        getData(id){
            
            this.props.dispatch(async (dispatch)=>{
            try{
                dispatch({
                    type:'DETAILS_UPDATA'
                });
                let res=await axios.get(`/apc/${id}`);
                console.log(`/apc/${id}`);
                dispatch({
                    type:'DETAILS_UPDATE_SUCC',
                    data:res.data
                })
            }catch(err){
                dispatch({
                    type:'DETAILS_UPDATE_ERROR',
                    data:err
                })
            }
            });
        }
    render(){
        console.log(this.props);
        let {loading,data}=this.props;
        return(
            <div className="wrap">
            <TxtDetails loading={loading}
            data={data}
            />
            <ReplyList loading={loading} replies={data.replies} replyCount={data.reply_count}/>
            </div>
        )
    }
}
export default connect(state=>(state.details))(Details);