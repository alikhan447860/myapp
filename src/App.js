import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import About from './Components/About'
function App() {
  return (
    <>
 <Navbar title="TextUtils" about="About Us"/>
 <div className="container my-3">
  <Textarea heading="Enter The Text here"/></div>
  {/* <About/> */}

    </>
  );
}

export default App;
