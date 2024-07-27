import { render } from "@testing-library/react"
import { Button } from "./Button"

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>button</Button>)

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="bg-zinc-900 text-white"
        >
          button
        </button>
      </div>
    `)
  })
})
