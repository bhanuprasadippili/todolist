import './App.css';
import ToDoList from './components/useStateExample3';
import Eaxmple2 from './components/usestateExample2';
import UseStateExample from './components/useStateExamples1';
import USESTATE from './components/usestateAdvanced';
import UseState from './components/usestateBasic';
import UseEffect from './components/useEffect';

function App() {
  return (
    <div className='todolist'>

      <UseState />

      <USESTATE />

      <UseStateExample />

      <Eaxmple2 />

      <ToDoList />

      <UseEffect />

    </div>

  );
}

export default App;
