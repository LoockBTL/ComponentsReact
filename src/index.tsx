import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import './global.css'

// \\\ Todo list | Deop and down | Editor | Time picker
// \\\ Timer | Start | lap | and so on
// \\\ Change wallet
// \\\ Validation register | регулярные выражения
// \\\ Generate random text
// \\\ Color generator
// \\\ Change language texts
// \\\ Weather picker | for weak with city and country
// \\\ Password generater
// \\\ QR code generator | bar code generator
// \\\ Drop down with files
// \\\ Card memory game

// Lnding and style

// *Girland
// 3 Landigs | adaptive verst | animations

// Future
// Chess
// Turnament generator table
// Online chat
// Game "Live"
// Calendar with todos https://www.youtube.com/watch?v=KUKyTRYGrnU&ab_channel=EstebanCodes
// Landing https://www.figma.com/file/S12GkwZbODKoqwAjmGVq2T/Spectrum?node-id=1907%3A14922&t=xhkjPiuWdiyAsHNJ-0

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
