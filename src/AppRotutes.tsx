import { Route, Routes } from "react-router-dom"
import HomePage from "./views/landing"
import MainLayout from "./layouts/MainLayout"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
