import './App.css';
import { BrowserRouter  } from "react-router-dom";

// Components
import ScrollHandler from './Components/ScrollHandler';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Content from './Components/Content';
import BookDemo from './Components/BookDemo';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter >
      <ScrollHandler />
      <Header />
      <Banner />
      <Content />
      <BookDemo />
      <Navigation />
      <Footer />
    </BrowserRouter >
  );
}

export default App;
