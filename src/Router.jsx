import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import Characters from "./pages/characters/Characters"
import Profile from "./pages/profile/Profile"
import Error from "./pages/error/Error"

const AppRouter = () => {
  const basename = import.meta.env.BASE_URL || '/'

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/profile/:id" element={<Profile />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
