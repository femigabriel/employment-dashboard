import React from 'react'
import image1 from '../../../assets/images/image1.png'
import image2 from '../../../assets/images/image2.png'
import image3 from '../../../assets/images/image3.png'
import RoomIcon from '@mui/icons-material/Room'
import SchoolIcon from '@mui/icons-material/School'

type CandidateStatusProps = {
  name: string
  location: React.ReactNode
  degree: React.ReactNode
  image: React.ReactNode
}
// interface DataType {
//   key: React.Key
//   organizer: string
//   name: string
//   location: React.ReactNode
//   degree: React.ReactNode
//   image: React.ReactNode
// }
const user = [
  {
    id: 0,
    name: 'Aaliyah Samdi',
    location: (
      <span>
        <RoomIcon className="mr-2" />
        Riyadh, Saudi Arabia
      </span>
    ),
    degree: (
      <span>
        <SchoolIcon className="mr-2" />
        MSc Computer Science
      </span>
    ),
    image: (
      <img
        src={image1}
        className="rounded-full w-[75.55px] h-[76.04px]"
        alt=""
      />
    ),
  },
  {
    id: 1,
    name: 'Muhammed Al Hussain Imadh',
    location: (
      <span>
        <RoomIcon className="mr-2" />
        Riyadh, Saudi Arabia
      </span>
    ),
    degree: (
      <span>
        <SchoolIcon className="mr-2" />
        MSc Computer Science
      </span>
    ),
    image: (
      <img
        src={image2}
        className="rounded-full w-[75.55px] h-[76.04px]"
        alt=""
      />
    ),
  },
  {
    id: 2,
    name: 'Muhammed Khalid Alali',
    location: (
      <span>
        <RoomIcon className="mr-2" />
        Riyadh, Saudi Arabia
      </span>
    ),
    degree: (
      <span>
        <SchoolIcon className="mr-2" />
        MSc Computer Science
      </span>
    ),
    image: (
      <img
        src={image3}
        className="rounded-full w-[75.55px] h-[76.04px]"
        alt=""
      />
    ),
  },
]

export const CandidateStatus = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {user.map((list, key) => (
        <div className=" candidate_card  flex p-5 pt-8 pb-8">
          <div className="">{list.image}</div>
          <div className="ml-3">
            <h2 className="text-[16px] font-semibold pb-3 pl-1">{list.name}</h2>
            <div className="text-[10px] flex flex-col">
              <span>{list.location}</span>
              <span>{list.degree}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
