import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignInPage from "./pages/signIn.jsx"
import SignUpPage from "./pages/signUp.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SignInPage /> */}
    {/* Testing biar yang tampil halaman SignUp */}
    <SignUpPage />
  </StrictMode>,
)
