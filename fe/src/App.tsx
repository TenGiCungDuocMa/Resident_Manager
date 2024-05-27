import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './features/auth/Login'
import RequireAuth from './features/auth/RequireAuth'
import Overview from './features/statistical/Overview'
import Profile from './features/profile/Profile'
import NotifyView from './features/notify/NotifyView'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="login" element={<Login />} />
          {/*<Route element={<RequireAuth />}>*/}
            <Route index element={<Overview />} />
            <Route path="ho-so">
              <Route index element={<Profile />} />
            </Route>
            <Route path="notifications">
              <Route index element={<NotifyView />} />
            </Route>
          {/*</Route>*/}
      </Route>
    </Routes>
  )
}

export default App
