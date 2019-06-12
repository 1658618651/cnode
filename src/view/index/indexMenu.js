import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import {Menu} from 'antd';
let data=
[
   { 
       tab:"all",
      txt:"全部",
      isIndex:true
    },
    {
    tab:'good',
    color:'magenta',
    txt:'置顶',
    isIndex:false
    },
    { 
        tab:"good",
       txt:"精华",
       isIndex:true,
       color:'geekblue'
     },
     { 
        tab:"ask",
       txt:"问题",
       isIndex:true
     },
     { 
        tab:"share",
       txt:"分享",
       isIndex:true,
       color:'purple'
     },
     { 
        tab:"jdb",
       txt:"招聘",
       isIndex:true,
       color:'cyan'
     },
     { 
        tab:"test",
       txt:"测试",
       isIndex:true,
       color:'lime'
     },

]

class IndexMenu extends React.Component{
    constructor(props){
    super(props);
    let now=this.getNow(this.props.location);
    this.state={
        now
    }
    }
    getNow(location){
        let now=location.pathname.split("/");
        console.log(now);
        return now[2];
    }
    render(){
        return(
            <Menu id={this.props.id} mode={this.props.mode} selectedKeys={[this.state.now]}>
                {data.map((item,index)=>                        
                 (
                 <Menu.Item key={index}>
                 <Link to={"/index/"+item.tab}>{item.txt}</Link>
             </Menu.Item>
             )
                )}
        </Menu>
        )
    }
}
export default withRouter((props)=>{
    let {mode,id,location}=props;
    return <IndexMenu
    mode={mode}
    id={id}
    location={location}
    />
})