import React from 'react';
import {Avatar,Row,Col} from 'antd';
import data from './data';
import {connect} from 'react-redux';
import UserList from './userlLst';
import axios from 'axios';
class User extends React.Component{
    constructor(props){
        super(props);
        let id=this.props.match.params.id;
        this.getData(id);
    }
        getData(id){
            
            this.props.dispatch(async (dispatch)=>{
            try{
                dispatch({
                    type:'USER_UPDATA'
                });
                let res=await axios.get(`/user/${id}`);
                dispatch({
                    type:'USER_UPDATE_SUCC',
                    data:res.data
                })
            }catch(err){
                dispatch({
                    type:'USER_UPDATE_ERROR',
                    data:err
                })
            }
            });
        }
        shouldComponentUpdate(nextProps,nextState){
            let id=this.props.match.params.id;//当前id
            let nextid=nextProps.match.params.id;
            if(id!==nextid){
                this.getData(id);
                return false;//组件不要重新渲染
            }
               return true;
        }
    render(){
        // let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} =data.data;
        let {loading,data}=this.props;
        let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} =data;
        return(
            <div className='wrap'>
                <Avatar src={avatar_url} id='userAvatar'/>
                <Row className='user-info'>
                    <Col md={8}>
                        用户名:<a>{loginname}</a>
                    </Col>
                    <Col md={8}>
                        积分:<a>{score}</a>
                    </Col>
                    <Col md={8}>
                        <a>注册时间:{create_at.split("T")[0]}</a>
                    </Col>
                </Row>
                <UserList loading={loading} title="最近创建的话题" data={recent_topics}/>
                <UserList loading={loading} title="最近回复的话题" data={recent_replies}/>
            </div>
        )
    }
}
export default connect(state=>(state.user))(User);