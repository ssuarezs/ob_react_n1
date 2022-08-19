import './App.css';
import TaskListComponent from './components/containers/taskListComponent';
import TaskStyled from './components/pure/taskStyled';
//import ClockFuncional from './hooks/lifeCycle/clockFuncional';

        //<ClockFuncional></ClockFuncional>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskListComponent></TaskListComponent>
        <TaskStyled name='San'></TaskStyled>
      </header>
    </div>
  );
}

export default App;
