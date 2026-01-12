"use client"

import { IconButton, Menu, MenuItem } from "@mui/material"
import { Apple, Google, MoreVert, Web } from "@mui/icons-material"
import { useState } from "react"

export default function MenuLinks({
  links,
}: {
  links: { name: string; url: string; type: string }[]
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVert sx={{ fontSize: 30, color: "#000" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {links.map((link, index) => {
          let icon
          switch (link.type) {
            case "playStore":
              icon = <Google fontSize="small" sx={{ mr: 1 }} />
              break
            case "appStore":
              icon = <Apple fontSize="small" sx={{ mr: 1 }} />
              break
            default:
              icon = <Web fontSize="small" sx={{ mr: 1 }} />
          }

          return (
            <MenuItem
              key={index}
              onClick={handleClose}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {icon}
              {link.name}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}
