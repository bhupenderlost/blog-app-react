import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//Pages
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import Search from './Pages/Search'
import Blogs from './Pages/Blogs'
import SingleBlog from './Pages/SingleBlog'

export default function App() {

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home />} />
        {/* Search Page */}
        <Route path='/search/:query' element={<Search />} />
        {/* Blogs Page */}
        <Route path='/blogs' element={<Blogs />} />
        {/* Single Post Page */}
        <Route path='/blog/:id' element={<SingleBlog />} />
        {/* 404 Page */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
