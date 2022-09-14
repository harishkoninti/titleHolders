import './App.css';
// import { Card, Button } from 'react-bootstrap';

let style = {
  backgroundColor:"#072F54",
  height:"100vh",
  display:"flex",
  alignItems:"center"
}

let card = {
  backgroundColor:"#356592",
  color:"#fff",
  paddingBottom:"5%",
}

let cardHeader = {
  fontSize:"26px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  padding:"5% 0%"
}

function App() {
  return (
    <div className="App container-fluid" style={style}>
      <div className="card" style={card}>
      <div class="card-header" style={cardHeader}>TOWNHALL AWARD NOMINEE</div>
      <div class="card-body">
       <div> Which of the following according to you is "The Dream Team"?</div>
       <div  className="d-grid gap-3 mt-4">
       <button className="btn btn-light" type="button">Sales</button>
       <button className="btn btn-light" type="button">Customer Success</button>
       <button className="btn btn-light" type="button">Product</button>
       <button className="btn btn-light" type="button">Customer Support</button>
       <button className="btn btn-light" type="button">Marketing</button>
       <button className="btn btn-light" type="button">HR</button>
       </div>
      </div>
        </div>
    </div>
  );
}

export default App;
