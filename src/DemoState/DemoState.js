import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    isLogin: false
  }
  logIn = ()=>{
    //Không được trực tiếp sửa state => phải thông qua setState
    // this.state.isLogin = true;
    this.setState({
      isLogin: true
    })
  }
  logOut = ()=>{
    this.setState({
      isLogin: false
    })
  }
  renderLogin() {
    if (this.isLogin) {
      return (
        <div>
          <button>Đăng ký</button>
          <button>Đăng nhập</button>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Xin chào, henry</h4>
          <button>Đăng xuất</button>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <div>
            <h4>Xin chào, henry</h4>
            <button onClick={this.logOut}>Đăng xuất</button>
          </div>
        ) : (
          <div>
            <button>Đăng ký</button>
            <button onClick={this.logIn}>Đăng nhập</button>
          </div>
        )}
      </div>
    );
  }
}
