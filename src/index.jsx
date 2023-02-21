import App from "./App"

import React from "react"
import Modal from "react-modal"
import { createRoot } from 'react-dom/client'

Modal.setAppElement("#root")

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)







