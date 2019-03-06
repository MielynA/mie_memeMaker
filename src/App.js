import React, { Component } from 'react';
import HeaderPane from './Components/header';
import MainPane from './Containers/mainpane';
import Search from './Containers/search';


class App extends Component {
  render() {
    return (
      
       <React.Fragment>
         
       <HeaderPane />
       <Search />
       <MainPane />
     
       </React.Fragment>
    );
  }
}

export default App;
