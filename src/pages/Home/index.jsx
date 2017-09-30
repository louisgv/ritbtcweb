import React, { Component } from 'react';
import './index.css';

//import Sections
import Jumbotron from 'sections/Jumbotron'
import Navbar from 'sections/Navbar'
import Hackathon from 'sections/Hackathon';
import Footer from 'sections/Footer';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar/>
				<Jumbotron/>
				<Hackathon />
				<Footer />
      </div>
    );
  }
}
