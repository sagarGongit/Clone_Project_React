import './App.css';
import React from 'react';
import HomePage from './Pages/Homepage';
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react';

function App() {
  const [active,setactive] = useState(true);
 
  const onChange = () => {
       setactive();
  }
  return active ? (
    
       <div id='captcha'>
       <h1> confirm that you are<br/> human not automated bots</h1>
      <ReCAPTCHA
    sitekey="6Ldz0IkpAAAAAHs-VinJSCLN9E67mWkrZrybCM09"
    onChange={onChange} id='recap'
       />
    </div>
  ) : <HomePage/>
}

export default App;
