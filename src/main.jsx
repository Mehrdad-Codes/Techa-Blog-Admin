import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import axios from 'axios'
import { getCookie } from './helpers/index.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = import.meta.env.VITE_BLOG_API_URL;
axios.defaults.headers.common["authorization"] = "Bearer " + getCookie("jwt");
axios.defaults.headers.common["Content-Type"] = "application/json";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  </StrictMode>,
)
