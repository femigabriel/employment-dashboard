import React from 'react'

export const DasboardHeader = () => {
  return (
    <div className="dashboard_header">
      <nav className=" flex justify-between">
        <li className="active w-[305.91px]">
          3<span className="text-[#ffff] text-[11px] pt-3">Recommended</span>
        </li>
        <li>
          2 <span className="text-[#00635B] text-[11px] pt-3">Shortlisted</span>
        </li>
        <li>
          1<span className="text-[#00635B] text-[11px] pt-3">Offer</span>
        </li>
        <li className="border-0">
          0<span className="text-[#00635B] text-[11px] pt-3">Hired</span>
        </li>
      </nav>
    </div>
  )
}
