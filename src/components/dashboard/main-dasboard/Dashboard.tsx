import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Resume } from '../resume/Resume'

export const Dashboard = () => {
  return (
    <div className="w-full pl-5 pt-32">
      <CandidateTab />
    </div>
  )
}
export const CandidateTab = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" />
            <Tab label="Video" value="2" />
            <Tab label="Evaluation" value="3" />
            <Tab label="Notes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="grid grid-cols-2 gap-5 pb-3 w-full">
            <CandidateInfo />
            <PersonalInfoCard
              gender="Gender"
              genderResult="Female"
              country="Saudi Arabia"
              nationalId="National Id"
              nationalIdResult={123456}
              nationanality="Nationanality"
            />
            <EducationCard
              date="MM/YYYY"
              honours="MA History"
              university="HBS- Harvard University, United State"
              degree="MA History and Political Science,"
              college="King’s College London, United Kingdom"
            />
            <ExperienceCard
              date="09/2022 "
              honours="Job Title,"
              university="Saudi Corp, UAE "
              degree="Business Development,"
              college=" Company name, Country"
              current="current"
            />
          </div>
          <Resume />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item four</TabPanel>
      </TabContext>
    </Box>
  )
}
export const CandidateInfo = () => {
  return (
    <div className="candidate-info w-full">
      <div className="p-5">
        <h3 className="w-3 text-[24px] font-bold pb-5">Aaliyah Samdi</h3>
        <div className="flex justify-between pb-3">
          <span className="text-[#A5A5A5] font-semibold text-[14px]  w-full">
            Current Location
          </span>
          <p className="text-[14px] font-normal">Riyadh</p>
        </div>
        <div className="flex justify-between pb-3">
          <span className="text-[#A5A5A5] font-semibold text-[14px]  w-full">
            Phone
          </span>
          <p className="text-[14px] font-normal">Riyadh</p>
        </div>
        <div className="flex justify-between pb-3">
          <span className="text-[#A5A5A5] font-semibold text-[14px]  w-full">
            Current Location
          </span>
          <p className="text-[14px] font-normal">Riyadh</p>
        </div>
      </div>
    </div>
  )
}
type FormHeaderProps = {
  title: string
}
export const PersonalInfoHead = (props: FormHeaderProps) => {
  return (
    <div className="PersonalInfoHead ">
      <h2 className="text-[15px]  font-semibold p-5">{props.title}</h2>
    </div>
  )
}
type PersonalInfoCardProps = {
  nationanality: string
  country: string
  nationalId: string
  nationalIdResult: number
  gender: string
  genderResult: string
}

export const PersonalInfoCard = (props: PersonalInfoCardProps) => {
  return (
    <div className="PersonalInfoCard">
      <PersonalInfoHead title="Personal Information" />
      <div className="p-5">
        <div className="grid grid-cols-2 gap-[8.5rem] pb-3 w-full">
          <span className="text-[#A5A5A5] font-semibold text-[14px]  w-full">
            {props.nationanality}
          </span>
          <p className="text-[14px] font-normal">{props.country}</p>
        </div>
        <div className="grid grid-cols-2 gap-[8.5rem] pb-3 w-full">
          <span className="text-[#A5A5A5] font-semibold text-[14px]  w-full">
            {props.nationalId}
          </span>
          <p className="text-[14px] font-normal">{props.nationalIdResult}</p>
        </div>
        <div className="grid grid-cols-2 gap-[8.5rem] pb-3 w-full">
          <span className="text-[#A5A5A5] font-semibold text-[14px]  w-full">
            {props.gender}
          </span>
          <p className="text-[14px] font-normal">{props.genderResult}</p>
        </div>
      </div>
    </div>
  )
}
type EducationCardProps = {
  date: string
  degree: string
  university: string
  college: string
  honours: string
}
export const EducationCard = (props: EducationCardProps) => {
  return (
    <div className="PersonalInfoCard">
      <PersonalInfoHead title="Education" />
      <div className="p-5">
        <div className="flex  pb-3 w-full">
          <span className="font-normal text-[14px] w-full flex flex-col">
            <span> {props.date} -</span>
            <span>{props.date}</span>
          </span>
          <p className="text-[12px] font-normal flex flex-col w-full">
            <span className="font-semibold w-[18em]"> {props.degree}</span>
            <span className="font-normal"> {props.university}</span>
          </p>
        </div>
        <div className="flex  pb-3 w-full">
          <span className="font-normal text-[14px] w-full flex flex-col">
            <span> {props.date} -</span>
            <span>{props.date}</span>
          </span>
          <p className="text-[12px] flex flex-col font-normal">
            <span className="font-semibold"> {props.honours}</span>
            <span className="font-normal w-[18em]"> {props.college}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
type ExperienceCardProps = {
  date: string
  degree: string
  university: string
  college: string
  honours: string
  current: string
}
export const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <div className="PersonalInfoCard">
      <PersonalInfoHead title="Experience" />
      <div className="p-5">
        <div className="flex  pb-3 w-full">
          <span className="font-normal text-[14px] w-full flex flex-col">
            <span> {props.date} -</span>
            <span>{props.current}</span>
          </span>
          <p className="text-[12px] font-normal flex flex-col w-full">
            <span className="font-semibold w-[18em]"> {props.degree}</span>
            <span className="font-normal"> {props.university}</span>
          </p>
        </div>
        <div className="flex  pb-3 w-full">
          <span className="font-normal text-[14px] w-full flex flex-col">
            <span> {props.date} -</span>
            <span>{props.current}</span>
          </span>
          <p className="text-[12px] flex flex-col font-normal">
            <span className="font-semibold"> {props.honours}</span>
            <span className="font-normal w-[18em]"> {props.college}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
