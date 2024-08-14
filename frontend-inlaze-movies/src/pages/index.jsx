import React from 'react'
import HomePage from './home/HomePage'

export { HomePage }

export const Guest = React.lazy(() => import('./guest/GuestPage'))
export const LoginPage = React.lazy(() => import('./login/LoginPage'))
