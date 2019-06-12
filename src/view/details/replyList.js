import React from 'react';
import {Card, Avatar,List} from 'antd';
import {Link} from 'react-router-dom';
import { list } from 'postcss';
export default class ReplyList extends React.Component{
    render(){
        let {replyCount,replies,loading}=this.props;
        return(
        <Card loading={loading} title={replyCount+'条回复'} type='inner'>
        <List 
        dataSource={replies}
        itemLayout='vertical'
        renderItem={
            (item)=>(
                <List.Item
                key={item.id}
                extra={item.ups.length>0?<span>有{item.ups.length}人点赞</span>:''}
                >
                <List.Item.Meta
                avatar={<Avatar src={item.author.avatar_url}/>}
                description={
                <Link to={'/user/'+item.author.loginname} style={{marginLeft:'5px'}}>{item.author.loginname}发表于:{item.create_at.split('T')[0]}
                </Link>}
                />
             <div dangerouslySetInnerHTML={{__html:item.content}}>

             </div>
                
                </List.Item>
            )
        }
        >

        </List>
        </Card>
        )
    }
}