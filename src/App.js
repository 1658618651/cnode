import React from 'react';
import MinHeader from './view/user/main-header';
import MinFooter from './view/user/main-footer';
import './index.css';
import RouterIndex from './router/index';
class App extends React.Component{
  render(){
    return(
      <div className="pageWrap">
        <MinHeader></MinHeader>
        <main className="main">
          <RouterIndex/>
        </main>
        <MinFooter></MinFooter>
      </div>
    )
  }
}

export default App;
