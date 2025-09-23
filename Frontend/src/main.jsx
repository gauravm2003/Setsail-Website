import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const router = createBrowserRouter{ [
//     {
//         path: '/',
//         element: <Layout />
//     },
//     {
//         path: '/',
//         element: <Layout />
//     }
// ]}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            {/* <RouterProvider router={router} /> */}
        </GoogleOAuthProvider>
    </StrictMode>,
)