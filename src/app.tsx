import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import CardMemoryGame from './components/card-memory-game'
// import DragAndDrop from './components/drag-drop'
// import ChangeWallet from './components/change-wallet'
// import ChangeLanguage from './components/change-language'
// import QrBarCodeGenerator from './components/qr-bar-code-generator'
// import ColorGenerator from './components/color-generator'
// import PasswordGenerator from './components/password-generator'
// import TextGenerator from './components/text-generator'
// import Todo from './components/todo'
// import Timer from './components/timer'
// import Validation from './components/validation'
// import Weather from './components/weather'

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CardMemoryGame />} />
    </Routes>
  )
}

export default App
