import './App.css';
import twoBodiesImg from './assets/twoBodiesImg.png'

function App() {
  return (
    <div id="App">
      <img id="twoBodiesImg" src={twoBodiesImg} alt="two overlapping human silhouettes" />
      <div id="head"/>
      <div id="torso"/>
      <div id="legs"/>
    </div>
  );
}

export default App;
