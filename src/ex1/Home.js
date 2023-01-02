import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Sidebar from './Sidebar';
class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Sidebar></Sidebar>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;