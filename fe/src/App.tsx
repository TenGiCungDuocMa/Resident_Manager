import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './features/auth/Login'
import RequireAuth from './features/auth/RequireAuth'
import Welcome from './features/users/Welcome'
import ResidentsList from './features/residents/List'
import ResidentCreate from './features/residents/Create'
import ResidentDetail from './features/residents/Detail'
import ResidentEdit from './features/residents/Edit'
import HouseHoldsList from './features/households/List'
import HouseholdDetail from './features/households/Detail'
import HouseholdEdit from './features/households/Edit'
import HouseholdChangeLog from './features/households/ChangeLog'
import Gift from './features/gift'
import EventList from './features/gift/EventList'
import Temporary from './features/temporary'
import AboutUs from './features/about'
import { ChildrenList } from './features/gift/ChildrenList'
import { StatisticList } from './features/gift/StatisticList'
import { GiftList } from './features/gift/GiftList'
import Create from './features/households/Create'
import Prefetch from './features/auth/Prefetch'
import SplitHousehold from './features/households/Split'
import ItemList from './features/gift/ItemList'
import EditDuocNhanThuong from './features/gift/EditDuocNhanThuong'
import CreateDuocNhanThuong from './features/gift/CreateDuocNhanThuong'
import { EditItemForm } from './features/gift/EditItemForm'
import EditEventForm from './features/gift/EditEventForm'
import CreateItemForm from './features/gift/CreateItemForm'
import TamTruCreate from './features/temporary/TamTruCreate'
import TamVangCreate from './features/temporary/TamVangCreate'
import Overview from './features/statistical/Overview'
import Profile from './features/profile/Profile'

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
          </Route>
      </Route>
    </Routes>
  )
}

export default App