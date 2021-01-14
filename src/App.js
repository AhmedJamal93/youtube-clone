import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Videos from './components/Videos/Videos';
import { fetchVideos } from './api/';

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
      title:'Home',
      homeData:[],
    }
  }
  
  async componentDidMount(){
    const data = await fetchVideos();
    this.setState({
      homeData:data
    }, () => console.log(this.state.homeData))
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
            title={this.state.title}
            data={this.state.homeData} />
        </div>
      </div>
    )
  }
}

export default App;
