import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  // todo change to value from sessionStorage
  let loggedIn = true

  return (
    <Router>
      {/** Route Switch */}
      <Routes>

        {/** Redirect to protect our routes */}
        <Route exact path='/'>
          {loggedIn ?
            <Route path='/' element={<Navigate replace to='/dashboard'/>}/>
            :
            <Route path='/' element={<Navigate replace to='/login'/>}/>
          }
        </Route>

        {/** Login Route */}
        <Route path='/login' element={<LoginPage/>}/>

        {/** Dashboard Route (protected) */}
        <Route exact path='/dashboard'>
          {loggedIn ?
            <Route path='/dashboard' element={<Dashboard/>}/>
            :
            <Route path='/dashboard' element={<Navigate replace to='/login'/>}/>
          }
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
