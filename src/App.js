import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imgaelinkform/ImageLinkForm';
import ParticlesBg from 'particles-bg'


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg className='paticles' type="circle" bg={true} />
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        
        {/* <FaceRecognition /> */}
      </div>
    );
  }

}


// function App() {
// }

export default App;
