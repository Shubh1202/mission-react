import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = document.getElementById('root')
const container = ReactDOM.createRoot(root)
container.render(<App />)

serviceWorkerRegistration.register();