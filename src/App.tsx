import { useState } from 'react'
import './App.css'
import { DasboardHeader } from './components/auth/DasboardHeader'
import { Sidebar } from './components/auth/Sidebar'
import { Dashboard } from './components/dashboard/main-dasboard/Dashboard'
import { Status } from './components/dashboard/status/Status'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet"></link>
      <link
        href="https://fonts.cdnfonts.com/css/poppins"
        rel="stylesheet"
      ></link>
      <DasboardHeader />
      <div className="flex">
        <Sidebar />
        <div className="pt-10 flex">
          <Status />
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App
