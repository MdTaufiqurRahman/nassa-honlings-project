import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Slide from './components/Slide/Slide';
import {GlobalStyles} from './components/styles/Global'
import UpperBody from './components/UpperBody/UpperBody';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Header></Header>
    <UpperBody></UpperBody>
    <Main></Main>
    <Slide></Slide>
    <Footer></Footer>
    </>
  );
}

export default App;
