import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight">환영합니다!</h1>
            <p className="text-xl text-gray-700 mb-8 text-center max-w-lg">
                간단하고 효율적인 할 일 관리 앱으로 당신의 하루를 체계적으로 정리해보세요.
            </p>
            <Link
                to="/home"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold
                           rounded-full shadow-lg hover:shadow-xl transform hover:scale-105
                           transition-all duration-300 text-lg"
            >
                일정 생성하러 가기
            </Link>
        </div>
    )
}
