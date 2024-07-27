import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Username: Story = {
  args: {
    placeholder: "Username",
    type: "text",
    onChange: () => {}
  }
}

export const Password: Story = {
  args: {
    placeholder: "Password",
    type: "password",
    onChange: () => {}
  }
}
