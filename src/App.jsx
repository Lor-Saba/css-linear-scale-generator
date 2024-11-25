import Header from './components/Header';
import Footer from './components/Footer';
import Controls from './components/Controls';
import ResultBox from './components/ResultBox';

import './App.css';

function App() {

  return (
    <>
      <Header/>
      <main>
        <Controls/>
        <ResultBox/>
      </main>
      <Footer/>
    </>
  )
}

export default App
