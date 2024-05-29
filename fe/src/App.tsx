import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './features/auth/Login'
import RequireAuth from './features/auth/RequireAuth'
import Temporary from './features/temporary'
import Overview from './features/statistical/Overview'
import Profile from './features/profile/Profile'
import NotifyView from './features/notify/NotifyView'
import NotifyDetail from "~/features/notify/NotifyDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="login" element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route path="trang-chu">
              <Route index element={<Overview />} />
            </Route>

            <Route path="ho-so">
              <Route index element={<Profile />} />
            </Route>
            <Route path="notifications">
              <Route index element={<NotifyView />} />
                <Route path=":id" element={<NotifyDetail />} />
            </Route>
            <Route path="tam-tru">
              <Route index element={<Temporary />} />
            </Route>
          </Route>
      </Route>
    </Routes>
  )
}

export default App
