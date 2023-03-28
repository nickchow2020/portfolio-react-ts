import React, { useState } from "react"
import { BottomNavigationAction, BottomNavigation, Box } from "@mui/material"
import { LocationOn, Favorite, Restore } from "@mui/icons-material"

export default function NavigateTab() {
  const [value, setValue] = useState(0)
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label="Home" icon={<Restore />} />
        <BottomNavigationAction label="Skills" icon={<Favorite />} />
        <BottomNavigationAction label="Projects" icon={<LocationOn />} />
        <BottomNavigationAction label="Experience" icon={<LocationOn />} />
        <BottomNavigationAction label="Contact" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  )
}
