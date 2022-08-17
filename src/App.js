import './App.css';
import ContactListComponent from './components/containers/contactListComponent';
//import TaskListComponent from './components/containers/taskListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<TaskListComponent></TaskListComponent>*/}
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
