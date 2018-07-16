import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,

    }
  }
  render() {
    return (
      <div>
        <div className="banner">
          <nav>
            <div className="brand small">
              <p>Start Bootstrap</p>
            </div>
            <div className="menubar small">
              <button onClick={() => this.setState({showMenu: !this.state.showMenu})} className="menu-button"> Menu <i class="fas fa-caret-down"></i></button>
            </div>
  {/* --------------------------------------------- */}
            <div className="brand large">
              <p>Start Bootstrap</p>
            </div>
            <div className="menubar large">
              <ul>
                <li>Contact</li>
                <li>Team</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Services</li>
              </ul>
            </div>
          </nav>
  {/* --------------------------------------------- */}

          <div>
          <ul className={this.state.showMenu ? 'drawer open' : 'drawer'}>
            <li>Contact</li>
            <li>Team</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Services</li>
              </ul>
          </div>

          <div className="banner-body">
            <h1>Welcome to Our Studio!</h1>
            <h1>NICE TO MEET YOU</h1>
            <button className="showMeButton">TELL ME MORE</button>
          </div>
        </div>
        <div className="services-body">
        <div className="services">
          <h1>Services </h1>
          <p>l;aksjd;flajlsdfkkl</p>
        </div>
        <div className="services-container">
        <div className="item">
          <img src="https://s18955.pcdn.co/wp-content/uploads/2017/05/Twitter.png" className="item-pic"/>
          <h3>E-Commerce</h3>
          <p>lakjsdf ;ljwe fjawoief jaofiaejfoa. wiefj waeofjaw foiaj w;efioawf</p>
        </div>
        <div className="item">
          <img src="https://s18955.pcdn.co/wp-content/uploads/2017/05/Twitter.png" className="item-pic"/>
          <h3>Responsive Design</h3>
          <p>lakjsdf ;ljwefj awoiefjaofi aejfoaw. iefjwaeo fjawfo iajw;ef ioawf</p>
        </div>
        <div className="item">
          <img src="https://s18955.pcdn.co/wp-content/uploads/2017/05/Twitter.png" className="item-pic"/>
          <h3>Web Security</h3>
          <p>lakjsdf;l jwe fjawoief jaofiaejfo awiefj. waeofjawfo iajw;ef ioawf</p>
        </div>
        </div>

        </div>
      </div>
    );
  }
}

export default App;
