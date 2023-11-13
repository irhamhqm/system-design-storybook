import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode,
  size?: 'large' | 'medium' | 'small',
  variant?: 'primary' | 'secondary' | 'text'
}

const getButtonVariant = {
  primary: 'bg-primary text-white',
  secondary: 'bg-white border-2 border-solid border-primary text-primary',
  text: 'bg-transparent text-primary'
};

const getButtonSize = {
  large: 'px-[52px] py-3 text-lg',
  medium: 'px-7 py-2 text-base',
  small: 'px-3 py-1 text-sm'
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'large', children, ...rest } = props;
  return (
    <button className={['rounded-md', getButtonSize[size as keyof typeof getButtonSize], getButtonVariant[variant as keyof typeof getButtonVariant]].join(' ')} {...rest}>{children}</button>
  )
}