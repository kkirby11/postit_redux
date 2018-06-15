import React, { Fragment } from 'react';
import PostitForm from './components/PostitForm';
import PostitList from './components/PostitList';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <div>
          <h2>Add Post-it</h2>
          <PostitForm />
          <PostitList />
          <Footer /> 
        </div>
      </Fragment>
    );
  }
}

export default App;
