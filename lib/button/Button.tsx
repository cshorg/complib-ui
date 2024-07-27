import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="bg-zinc-900 text-white">{children}</button>
}
