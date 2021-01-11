import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Videos from './components/Videos/Videos';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <div className="app__page">
//         <Sidebar />
//         <Videos />
//       </div>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      active:0,
      title:''
    }
  }
  

  handleSidebarChange = (index, title) => {
    this.setState({
      active:index,
      title:title
    })
  }

  render(){
    return(
      <div className="App">
        <Header/>
        <div className="app__page">
          <Sidebar 
            handleSidebarChange={this.handleSidebarChange}
            activetab={this.state.active}
          />
          <Videos
            title={this.state.title} />
        </div>
      </div>
    )
  }
}

export default App;
