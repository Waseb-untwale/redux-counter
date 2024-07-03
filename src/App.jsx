import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import PrivacyMessage from './components/PrivacyMessage';
import DisplayCounter from './components/DisplayCounter';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
function App() {

const privacy=useSelector((store)=>store.privacy)
  return (
    <center>
      <div>
        <Header></Header>
        {privacy?<PrivacyMessage></PrivacyMessage>: <DisplayCounter></DisplayCounter>}
        <div className="col-lg-6 mx-auto">
        <Controls></Controls>
        </div>

      </div>
    </center>
  )
}

export default App
