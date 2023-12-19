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
        {/* 
        <ParticlesBg className='paticles' type="color" bg={true} />
        <ParticlesBg className='paticles' type="ball" bg={true} />
        <ParticlesBg className='paticles' type="lines" bg={true} />
        <ParticlesBg className='paticles' type="thick" bg={true} />
        <ParticlesBg className='paticles' type="cobweb" bg={true} />
        <ParticlesBg className='paticles' type="polygon" bg={true} />
        <ParticlesBg className='paticles' type="square" bg={true} />
        <ParticlesBg className='paticles' type="tadpole" bg={true} />
        <ParticlesBg className='paticles' type="fountain" bg={true} />
        <ParticlesBg className='paticles' type="random" bg={true} />
        <ParticlesBg className='paticles' type="custom" bg={true} /> 
        */}
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
