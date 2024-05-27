import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './features/auth/Login'
import RequireAuth from './features/auth/RequireAuth'
import Profile from './features/profile/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="ho-so">
              <Route index element={<Profile />} />
            </Route>
          </Route>
      </Route>
    </Routes>
  )
}

export default App
