import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import List from './pages/List'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
