import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { CandidateStatus } from './CandidateStatus'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

export const Status = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <div className="status_page">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              className=""
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="QUALIFIED" value="1" />
              <Tab label="DISQUALIFIED" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SearchBar />
            <div className="pb-5 ">
              <p className="text-[#898A8D] text-[12px] text-left pb-2">
                Select all
              </p>
              <Divider />
            </div>
            <CandidateStatus />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </Box>
      {/* <Divider /> */}
    </div>
  )
}

export const SearchBar = () => {
  const [filter, setFilter] = useState('')
  return (
    <div className="pt-3 pb-3">
      <form className="form-inline ">
        <i className="fas fa-search" />
        <input
          className="w-full p-3 rounded text-[12px]"
          // aria-label="Search"
          type="text"
          id="myInput"
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
          placeholder="Filter by name email, edu and exp"
        />
      </form>
    </div>
  )
}
