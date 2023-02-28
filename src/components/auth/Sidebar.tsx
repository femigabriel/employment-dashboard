import React from 'react'
import arrow from '../../assets/icons/arrow.svg'
import home from '../../assets/icons/home.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

export const Sidebar = () => {
  return (
    <div className="side_bar p-5 pt-0 pl-10 pr-10">
      <nav>
        <li>
          <img src={arrow} alt="" className="pb-2 mt-1" />
        </li>
        <li>
        <img src={home} alt="" className="pt-5" />
        </li>
      </nav>

      <div></div>
    </div>
  )
}
