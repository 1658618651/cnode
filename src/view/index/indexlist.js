import React from 'react';
import {List,Avatar} from 'antd';
import data from './data';
import {Link} from 'react-router-dom';
import TxtTag from './txtTag';
import {connect} from 'react-redux';
import axios from 'axios';
class IndexList extends React.Component{
    constructor(props){
        super(props);
        this.isStart=true;
        this.state={
            page:1
        }
        this.getData(this.props.tab,this.state.page);
    }
    shouldComponentUpdate(nextProps,nextState){
        this.isStart=false;
        if(this.state.page!==nextState.page){
            this.getData(nextProps.tab,nextState.page)
            return false;
        }
    if(this.props.tab!==nextProps.tab){
        this.state.page=1;
        this.getData(nextProps.tab,1);
        return false
    }
    return true;
    
    }
    getData(tab,page){
         this.props.dispatch(async (dispatch)=>{
         try{
            dispatch({
                type:'LIST_UPDATA'
            });
            let res=await axios.get(`/app/?tab=${tab}&page=${page}$limit=15`);
            console.log(res.data);
            dispatch({
                type:'LIST_UPDATA_SUCC',
                data:res.data
            })
         }catch(err){
            dispatch({
                type:'LIST_UPDATA_ERROR',
                data:err
            })
         }
        })
    }
    render(){
        console.log(this.props);
        //loading,data,tab,page
        let {loading,data}=this.props;
        let pagination={
            current:this.state.page,
            pageSize:10,
            total:1000,
            onChange:((current)=>{
              this.setState({
                  page:current
              })
            })
        }
        return(
    <div>
    <List 
         loading={loading}
         dataSource={data}
         pagination={this.isStart?false:pagination}
         renderItem={item=>(<List.Item actions={["回复"+item.reply_count,"访问"+item.visit_count]} key={item.id}>
             <List.Item.Meta avatar={<Avatar src={item.author.avatar_url}/>}
             title={<div><TxtTag data={item}/><Link to={"/details/"+item.id}>{item.title}</Link></div>}
             description={<p><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
             发表于：{item.create_at.split("T")[0]}</p>}
             
             />
         </List.Item>)}
         >

           
         </List>
</div>
        )
    }
}
export default connect(state=>state.list)(IndexList);