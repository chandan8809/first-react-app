
import "./App.css";

function App() {
  const arr=["android","balckberry","iphone","windows phone"]
  const manu=["sansung","HTC","mcromax","apple"]
  return (
    // class has diffrent meaning js (class is not selector here, it is constructor )
    
    <div className="App">
      <h1>Mobile Operating System</h1>
      <div>{arr.map((el)=><li>{el}</li>)}</div>
      <h1>Mobile Manufacturers</h1>
      <div>{manu.map((el)=><li>{el}</li>)}</div>
    </div>
    

  );
}

export default App;
