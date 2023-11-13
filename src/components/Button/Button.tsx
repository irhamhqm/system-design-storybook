import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode,
  variant?: 'primary' | 'secondary' | 'text'
}

const getButtonStyle = {
  primary: 'bg-primary text-white',
  secondary: 'bg-white border-2 border-solid border-primary text-primary',
  text: 'bg-transparent text-primary'
}

export default function Button(props: ButtonProps) {
  const { variant, children, ...rest } = props;
  return (
    <button className={['rounded-md px-[52px] py-3', getButtonStyle[variant as keyof typeof getButtonStyle]].join(' ')} {...rest}>{children}</button>
  )
}