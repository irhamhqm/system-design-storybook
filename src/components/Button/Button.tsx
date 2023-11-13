import React from "react";

interface ButtonProps {
  /**
   * button children, can be text or react element
   */
  children: React.ReactNode,
  /**
   * button size
   */
  size?: 'large' | 'medium' | 'small',
  /**
   * button variant
   */
  variant?: 'primary' | 'secondary' | 'text',
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

/**
 * Button
 */
export default function Button({variant = 'primary', size = 'large', children, ...props}: ButtonProps) {
  return (
    <button className={['rounded-md', getButtonSize[size as keyof typeof getButtonSize], getButtonVariant[variant as keyof typeof getButtonVariant]].join(' ')} {...props}>{children}</button>
  )
}