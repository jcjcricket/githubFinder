import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
  state = {
    text: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.props.requestDone && this.state.text === '') {
      this.props.setHint('Please enter something');
    }
      this.props.searchUsers(this.state.text);
  
  };

  render() {
    return (
      <div className='row' id='firstDiv'>
        <form className='col s12' onSubmit={this.onSubmit}>
          <div className='row'>
            <div className='col s12'>
              <input
                placeholder='Enter your request'
                name='text'
                type='text'
                onChange={this.onChange}
              />
            </div>
            <div className='col s12'>
              <button
                type='submit'
                name='button'
                className='btn waves-effect waves-light col s12'>
                {this.props.requestDone && !this.state.text ? 'Clear' : 'Search'}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
