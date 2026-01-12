import { render, screen } from "@testing-library/react"
import About from "@/components/About"

describe("About component", () => {
  // Render the whole component
  it("should render the whole component", () => {
    render(<About />)
  })
  // Text contain specific title
  it("should contain title", () => {
    render(<About />)
    const spanElement = screen.getByText(
      "Tournier Maxime | Fullstack Developer"
    )
    expect(spanElement.tagName).toBe("SPAN")
  })
})
