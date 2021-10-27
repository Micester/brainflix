import './App.css';
import Header from './components/Header/Header';
import logoSrc from './assets/Logo/BrainFlix-logo.svg';
import avatarSrc from './assets/Images/Mohan-muruge.jpg';

function App() {
  return (
    <>
      <Header logo={logoSrc} avatar={avatarSrc}/>


    </>
  );
}

export default App;
