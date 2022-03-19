
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
//import { Alert } from 'bootstrap';
import Alert from './components/Alert';



function App(){
    return(
        <>


          <Navbar title="TextUtils"  />
          <Alert alert="This is alert"/>
          <div className='container'>
          <TextForm heading="Enter the text to analyze below"/>

          </div>
          <About/>
        
        
        </>

    );
}
export default App;