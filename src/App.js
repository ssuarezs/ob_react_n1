/**
import ContactListComponent from './components/containers/contactListComponent';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterForm from './components/pure/forms/registerForm';
 */

import TaskListComponent from './components/containers/taskListComponent';
import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**
        <LoginFormik></LoginFormik>
        <RegisterForm></RegisterForm>
         */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
