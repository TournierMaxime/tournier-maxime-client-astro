"use client"

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CssBaseline,
  Chip,
  Grid,
} from "@mui/material"
import projects from "../data/projects.json"
import Nav from "./Nav"
import { Task } from "@mui/icons-material"
import MenuLinks from "./MenuLinks"

export default function OneProject({ slug }: { slug: string | undefined }) {
  const getOneProject = projects.projects.find(
    (p) => p.slug === slug
  )

  if (!getOneProject) return null

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "768px",
        margin: "auto",
      }}
    >
      <CssBaseline />
      <Nav />
      <Box component="main" sx={{ p: 3, mt: 10 }}>
        <Card
          sx={{ borderRadius: 2, color: "#000", boxShadow: 3, maxWidth: 1230 }}
        >
          <CardHeader
            title={getOneProject.name}
            action={<MenuLinks links={getOneProject.links} />}
            sx={{ fontWeight: "bold", fontSize: 30 }}
          />
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "justify" }}>
              {getOneProject.description}
            </Typography>
          </CardContent>
          <Grid container spacing={2}>
            <Grid sx={{ p: 2 }} size={{ xs: 12 }}>
              {getOneProject.stacks.map((stack, index) => (
                <Chip
                  key={index}
                  label={stack.name}
                  sx={{
                    backgroundColor: stack.color,
                    color: stack.text,
                    m: 0.5,
                  }}
                />
              ))}
            </Grid>
            <Grid size={{ xs: 12 }}>
              {getOneProject.tasks.map((task, index) => (
                <Card
                  key={index}
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    color: "#000",
                    boxShadow: 2,
                    m: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <Task />
                    <Typography sx={{ ml: 1 }}>{task.task}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  )
}
