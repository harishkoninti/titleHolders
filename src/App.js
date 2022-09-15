import './App.css';
import {useState, useRef} from 'react';
import safetyConnectLogo from "./images/safetyConnectLogo.png";
import useSound from 'use-sound';
import error from './sounds/error.mp3';
import errorGif from './images/errorGif.gif';
import woman from './images/woman.png';
import congratulations from './images/congratulations.png';
// import { Card, Button } from 'react-bootstrap';

let style = {
  backgroundColor:"#072F54",
  height:"100vh",
  display:"flex",
  alignItems:"center",
  overflow:'hidden'
}

let card = {
  backgroundColor:"#356592",
  color:"#fff",
  paddingBottom:"5%",
  width:"100%"
}

let cardHeader = {
  fontSize:"26px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  padding:"5% 0%",
  fontFamily: 'Poppins'
}

let buttonClass = {
  fontFamily: 'Montserrat',
  fontWeight:"600"
}

let question = {
  fontFamily: 'Roboto',
  fontSize:"22px"
}

let logo = {
  height:"25px",
  width:"170px"
}

function App() {

  const [data,setData] = useState();
  const [count, setCount] = useState(0);
  const [sales, setSales] = useState('Sales');
  const [customerSuccess, setCustomerSuccess] = useState('Customer Success');
  const [customerSupport, setCustomerSupport] = useState('Customer Support');
  const [marketing, setMarketing] = useState('Marketing');
  const [hr, setHr] = useState('HR');
  const buttonRef = useRef(null);
  const spamButtonRef = useRef(null);
  const spamClose = useRef(null);
  const [play, { stop }] = useSound(error);
  const [currentTop, setCurrentTop] = useState(false);
  const [currentLeft, setCurrentLeft] = useState(false);
  const topArray = ['-20%','37%','3%', '23%', '-17%', '3%', '22%', '-22%', '-25%', '10%'];
  const leftArray = ['-13%', '9%', '9%' ,'-11%', '-11%', '11%', '0%', '0%' ,'13%', '13%'];

  const productTeam = () =>{
   let body1 = document.querySelector(".body1");
   let body2 = document.querySelector(".body2");
   body1.classList.add('hidden');
   body2.classList.remove('hidden');
  }

  const loop = (team) =>{
    console.log(count)
    if(count == 0){
      buttonRef.current.click()
      if(team == 'sales') setData('Really? What are you gonna sell without a product? Think again.')
      if(team == 'customer_success') setData('You should think about what you are selling. Requesting features is not a job profile. Try again.')
      if(team == 'cSupport') setData('Your job is irrelevant without a product. Try again.')
      if(team == 'marketing') setData('Ah yes! Marketing without a product. A real super power…..Go back and vote for the product!')
      if(team == 'hr') setData('You did your job and hired the product team, Now you should recognise it and vote for them. Try again.')
    }else if(team == 'hr' && count == 1){
      buttonRef.current.click()
      setData("You don't seem to have learned your lesson, we will give you another chance to correct your ways. Do not fail this time!")
    }else if(team !== 'hr' && count == 1){
      productTeam()
    }else if(count == 2){
     if(team == 'product') productTeam()
     else {
      spamButtonRef.current.click()
      play()
      setInterval(()=>{
        spamContinue()
      },1000)
    }
    }
    setCount(count+1);
  }

  const nameChange = () => {
    let q1 = document.querySelector(".q1");
    let q2 = document.querySelector(".q2");
    q1.classList.add('hidden')
    q2.classList.remove('hidden')    
    if(count == 1){
      setSales('Product')
      setCustomerSuccess('Product')
      setCustomerSupport('Product')
      setHr('Others')
      setMarketing('Product')
    }else if(count == 2){
      setSales('Sales')
      setCustomerSuccess('Customer Success')
      setCustomerSupport('Customer Support')
      setHr('HR')
      setMarketing('Marketing')
      let q2 = document.querySelector(".q2");
      let q3 = document.querySelector(".q3");
      q2.classList.add('hidden')   
      q3.classList.remove('hidden')   
    }
  }

 const spamContinue = () => {
 spamClose.current.click();
  stop()
 setTimeout(()=>{
  let index =  Math.floor(Math.random()*topArray.length)
  let top = topArray[index];
  let left = leftArray[index];
  setCurrentTop(top);
  setCurrentLeft(left);
  spamButtonRef.current.click();
  play()
 },500)  
  }

  const multipleModals = () => {
    return(
      <>
        <div className="modal fade" id="spamModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={spamObj}>
          <div className="modal-content" style={{position:"relative", padding:"5% 0%"}}>
            <button type="button" className="btn-close" ref={spamClose} style={{display:"hidden", visibility:"hidden"}} data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <img src={errorGif} alt="errorGif" className="errorGif" />
              <br />
             <span style={{fontWeight:"600"}}> <span style={{color:"red"}}> Error 404</span> <br /> <span style={{fontWeight:"600"}}> Contact Tech Support </span></span> 
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

  let spamObj = {
    top : currentTop,
    left : currentLeft
  }
  return (
    <div className="App container-fluid" style={style}>
      <button className="btn btn-light" ref={buttonRef} type="button" style={{display:"none"}} data-bs-toggle="modal" data-bs-target="#exampleModal">Button</button>
      <button className="btn btn-light" ref={spamButtonRef} type="button" style={{display:"none"}} data-bs-toggle="modal" data-bs-target="#spamModal">Button</button>
     <div className="logo" style={{  position:"fixed", top:"4%", left:"5%"}}><img src={safetyConnectLogo}  style={logo} alt="logo" height={100} width={100} /></div>
     <div className="col-lg-6" style={{margin:"0px auto"}}>
     <div className="card"  style={card}>
      <div className="card-header" style={cardHeader}>TOWNHALL AWARD NOMINEES</div>
        <div className="card-body">
          <div className="body1">
          <div className="question q1" style={question}> Which of the following according to you is <span style={{fontWeight:"600"}}>The Dream Team </span>?</div>
          <div className="question q2 hidden" style={question}>We have made it easier for you since you clearly don’t have the ability to make good decisions. Choose wisely.</div> 
          <div className="question q3 hidden" style={question}>This is the last Warning. Choose Wisely</div> 
            <div  className="d-grid gap-3 mt-4">
            <button className="btn btn-light" type="button" style={buttonClass} onClick={()=>loop('sales')}>{sales}</button>
            <button className="btn btn-light" type="button" style={buttonClass} onClick={()=>loop('customer_success')}>{customerSuccess}</button>
            <button className="btn btn-light" type="button" style={buttonClass} onClick={()=>productTeam()}>Product</button>
            <button className="btn btn-light" type="button" style={buttonClass} onClick={()=>loop('cSupport')}>{customerSupport}</button>
            <button className="btn btn-light" type="button" style={buttonClass} onClick={()=>loop('marketing')}>{marketing}</button>
            <button className="btn btn-light" type="button" style={buttonClass} onClick={()=>loop('hr')}>{hr}</button>
            </div>
          </div>
          <div className="body2 hidden">
            <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={congratulations} height={250} width={300} alt="congratulations" />
            <span style={{fontWeight:"600", fontSize:'26px'}}>Congratulations!</span> 
            <div style={{fontSize:"20px"}}>You have chosen the Best Team</div>
            </div>
          </div>
        </div>
      </div>
     </div>
      <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{position:"relative"}}>
            {/* <button type="button" className="btn-close" onClick={()=>nameChange()} data-bs-dismiss="modal" aria-label="Close"></button> */}
            <div className="modal-body">
              <div className="d-flex justify-content-center align-items-center">
                <img src={woman} height={150} width={150} alt="Think" />
                <div style={{fontWeight:"600",opacity:"0.8"}}>{data}</div>
              </div>
             <button className="btn btn-primary" type="button" onClick={()=>nameChange()}  data-bs-dismiss="modal" aria-label="Close">Try Again</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="spamModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={spamObj}>
          <div className="modal-content" style={{position:"relative"}}>
            <button type="button" className="btn-close" ref={spamClose} style={{display:"hidden", visibility:"hidden"}} data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <img src={errorGif} alt="errorGif" className="errorGif" />
              <br />
             <span style={{fontWeight:"600"}}> <span style={{color:"red"}}> Error 404</span> <br /> <span style={{fontWeight:"600"}}> Contact Tech Support </span></span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
