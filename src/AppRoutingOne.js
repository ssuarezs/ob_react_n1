import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRouting() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/any404'>| Not existing Route |</Link>
        </aside>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/faqs' element={<AboutPage/>}/>
            <Route path='/tasks' element={<TasksPage/>}/>
            <Route path='/task/:id' element={<TaskDetailPage/>}/>

            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouting;
