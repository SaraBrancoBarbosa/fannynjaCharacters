import { HashRouter  as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import Characters from "./pages/characters/Characters"
import Profile from "./pages/profile/Profile"
import Error from "./pages/error/Error"

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="characters">
            <Route index element={<Characters />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
