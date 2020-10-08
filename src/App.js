import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/layout/Search';
import Hint from './components/layout/Hint';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);

class App extends Component {
  state = {
    users: [],
    isLoading: false,
    requestDone: false,
    hint: null
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  }

  // async componentDidMount() {

  //   this.setState({
  //     isLoading: true
  //   });

  //   const res = await fetch(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_KEY}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   const response = await res.json();

  //   this.setState({ users: response, isLoading: false });
    
  // }

  

  searchUsers = async text => {
    if (text === '') {
      this.setState({ users: [], isLoading: false, requestDone: false })

    } else {
      this.setState({
        isLoading: true
      });
  
      const res = await fetch(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_KEY}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const response = await res.json();
  
      this.setState({ users: response.items, isLoading: false, requestDone:true });
    }
    
}

  setHint = msg => {
    this.setState({ hint: msg })
    
    setTimeout(()=> this.setState({ hint: null}), 1500)
  }

  render() {
    const { users, isLoading, requestDone, hint } = this.state;

    return (
      <div className="container">
        <Navbar title={'Github Finder'} />
        <Hint hint={hint}/>
        <Search searchUsers={this.searchUsers} requestDone={requestDone} setHint={this.setHint}/>
        <Users isLoading={isLoading} users={users} />
        
      </div>
    );
  }
}

export default App;
