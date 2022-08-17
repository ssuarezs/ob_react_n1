import './App.css';
import ClockFuncional from './hooks/lifeCycle/clockFuncional';
//import TaskListComponent from './components/containers/taskListComponent';

        //<TaskListComponent></TaskListComponent>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClockFuncional></ClockFuncional>
      </header>
    </div>
  );
}

export default App;
