interface InputProps {
  type: "text" | "number" | "password"
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  onChange
}) => {
  return <input type={type} placeholder={placeholder} onChange={onChange} />
}
