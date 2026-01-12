import {
  Box,
  CardContent,
  CardHeader,
  Typography,
  FormHelperText,
  Button,
  TextField,
  Card,
} from "@mui/material"
import homepage from "../data/homepage.json"
import useHandleContact from "../hooks/useHandleContact"

export default function Contact() {
  const { handleSubmit, handleChange, success, error, data } = useHandleContact()
  return (
    <div id="Contact">
      <Box component="main" sx={{ p: 3 }}>
        <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
          <CardHeader
            slotProps={{
              title: {
                sx: { fontWeight: "bold", fontSize: 30 },
              },
            }}
            title={homepage.contact.title}
          />
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: 20, textAlign: "justify" }}>
              {homepage.contact.description}
            </Typography>
          </CardContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 512,
            }}
          >
            <TextField
              required
              label="Name"
              id="name"
              name="name"
              value={data && data.name}
              onChange={handleChange}
              sx={{ my: 2, ml: 2 }}
            />
            {
              error && error.name && (
                <FormHelperText sx={{ color: "red", ml: 2 }}>
                  {error.name}
                </FormHelperText>
              )
            }

            <TextField
              required
              label="Email"
              id="email"
              name="email"
              value={data && data.email}
              onChange={handleChange}
              sx={{ my: 2, ml: 2 }}
            />
            {
              error && error.email && (
                <FormHelperText sx={{ color: "red", ml: 2 }}>
                  {error.email}
                </FormHelperText>
              )
            }

            <TextField
              required
              label="Message"
              id="message"
              name="message"
              value={data && data.message}
              onChange={handleChange}
              multiline
              rows={4}
              sx={{ my: 2, ml: 2 }}
            />
            {
              error && error.message && (
                <FormHelperText sx={{ color: "red", ml: 2 }}>
                  {error.message}
                </FormHelperText>
              )
            }

            <Button variant="outlined" color="primary" type="submit" sx={{ ml: 2 }}>
              Send
            </Button>

            {
              success && (
                <Typography sx={{ mt: 2, ml: 2 }} color="success.main">
                  {success}
                </Typography>
              )
            }
          </form>
        </Card>
      </Box>
    </div>
  )
}