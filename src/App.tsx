import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from './pages/login';
import Profile from './pages/Profile';
import Setting from './pages/settings';
import React from "react";


function App() {

  React.useEffect(()=> {
    // (window as any).electron
  }, [])

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/setting'} element={<Setting />} />
      </Routes>
    </Router>
  )
}

export default App
