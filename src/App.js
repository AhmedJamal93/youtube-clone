import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Videos from './components/Videos/Videos';
import { fetchVideos } from './api/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
    })
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
        <Router>
          <Header/>
          <Switch>
            <Route path="/search">
              <h1>Search</h1>
            </Route>
            <Route path="/">
              <div className="app__page">
                <Sidebar 
                  handleSidebarChange={this.handleSidebarChange}
                  activetab={this.state.active}
                />
                <Videos
                  title={this.state.title}
                  data={this.state.homeData} 
                />
              </div>
            </Route>
          </Switch>
        </Router>
        
        
      </div>
    )
  }
}

export default App;
