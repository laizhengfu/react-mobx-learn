import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { observer } from 'mobx-react';
import { observable } from "mobx";

@observer
class App extends Component {
  @observable headText = 'default head text';

  render() {
    setTimeout(() => this.headText = 'xxxxx', 2000);
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.aaaaa/{this.headText}
        </p>
        <p>{this.headText}</p>
        <Footer props />
      </div>
    );
  }
}

export default App;
