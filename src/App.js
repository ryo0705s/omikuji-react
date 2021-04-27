// import logo from './logo.svg';
import './App.css';

const lucky = ['大吉', '中吉', '小吉', '凶']
const n = Math.floor(Math.random * lucky.length)

function App() {
  const handleClick = () => {
    console.log(handleClick)
  }
  return (
    <div className="App">
      <div id="btn" >{lucky[n]}</div>

      {/* <script src="js/main.js"></script> */}
    </div>
  );
}

export default App;
