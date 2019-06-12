import React from 'react';
import {Card} from 'antd';
class Public_Card extends React.Component{
    render(){
            let {data} = this.props;
return(
    <div className="wrap">
    {data.map((item,index)=>
        (
        <Card  
        type="inner" 
        title={item.title} 
        loading={false}
        key={index}
        >
        <div dangerouslySetInnerHTML={{__html:item.content}}>
            
        </div>
    </Card>
    )
    )}
</div>
)
        
    }
}
export default Public_Card;