import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinForm from './Components/ImageLinForm/ImageLinForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apikey: 'b972ad9fca14485cad288fde8e9e5287'
});

class App extends Component {
  constructor(){
    super();
    this.state= {
      input:'',
      imageUrl:''
    }
  }

  onInputChange =(event) => {
    this.setState({input: event.target.value});
  }
   onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
    function (response) {
      console.log(response)

    },
    function(err){

    }
   );
  }

   render(){
    return (
    <div className="App">
     <Navigation />
     <Logo/>
     <Rank />
     <ImageLinForm 
     onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit}/> 
     <FaceRecognition imageUrl={this.state.imageUrl}/> 
    </div>
    );
    
  }
}

export default App;
