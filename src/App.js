
import './App.css';
// import Home from './BaiTapLayoutComponent/Home';
import DemoDataBinding from './databinding/DemoDataBinding';
import Loop from './databinding/Loop';
import DemoState from './DemoState/DemoState';
import Car from './ex2/Car';
function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <DemoDataBinding></DemoDataBinding>
      <DemoState></DemoState>
      <Car></Car>
      <Loop></Loop>
    </div>
  );
}

export default App;
