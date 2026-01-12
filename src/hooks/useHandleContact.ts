/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

interface Data {
  name: string
  email: string
  message: string
}

interface Error {
  name?: string
  email?: string
  message?: string
}

const useHandleContact = () => {
  const [data, setData] = useState<Data>({ name: "", email: "", message: "" })
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<Error>()
  const regexName = /^[a-zA-Z\s-]{3,35}$/
  const regexEmail = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setError({
      name: "",
      email: "",
      message: "",
    })

    if (name === "name" && !regexName.test(value)) {
      setError({
        name: "The name must be between 3 and 35 characters and must contain only letters, spaces, or hyphens.",
      })
    }

    if (name === "email" && !regexEmail.test(value)) {
      setError({ email: "The email format is invalid." })
    }

    if (!data.message) {
      setError({ message: "The message is empty." })
    }

    setData({
      ...data,
      [name]: value,
    })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const body = {
        name: data && data.name,
        email: data && data.email,
        message: data && data.message,
      }

      const response = await fetch(`/api/sendEmail`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
        }),
      })
      const responseData = await response.json() // Renamed from 'data' to 'responseData'

      if (responseData.errors) {
        throw new Error(
          responseData.errors.map((e: any) => e.message).join("\n")
        )
      }

      setSuccess("Your message has been sent.")
    } catch (error: any) {
      console.error(error)
      setError(error.message)
    }

    // Reset the form fields
    setData({
      name: "",
      email: "",
      message: "",
    })
    setTimeout(() => {
      setSuccess(null)
    }, 3000)
    setError({
      name: "",
      email: "",
      message: "",
    })
  }

  return {
    data,
    success,
    error,
    handleChange,
    handleSubmit,
  }
}

export default useHandleContact
