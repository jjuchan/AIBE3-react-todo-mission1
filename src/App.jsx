// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage' // 새로 만든 WelcomePage 임포트
import Home from './pages/Home' // 기존의 할 일 관리 Home 컴포넌트 임포트
import Post from './pages/Post'
import List from './pages/List'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 앱 시작 시 보여줄 WelcomePage */}
                <Route path="/" element={<WelcomePage />} />

                {/* 일정 생성 및 관리 페이지 (기존 Home 컴포넌트) */}
                <Route path="/home" element={<Home />} />

                {/* 기존의 Post와 List 페이지 */}
                <Route path="/post" element={<Post />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
