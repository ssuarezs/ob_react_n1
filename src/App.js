/**
import ContactListComponent from './components/containers/contactListComponent';
 */

import TaskListComponent from './components/containers/taskListComponent';
import ColorBlock from './components/pure/ColorBlock';
import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskListComponent></TaskListComponent>
        {/**
          <ContactListComponent></ContactListComponent>
        */}
        <ColorBlock></ColorBlock>
      </header>
    </div>
  );
}

export default App;
