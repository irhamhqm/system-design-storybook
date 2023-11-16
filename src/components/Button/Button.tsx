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
  /**
   * disabled state
   */
  disabled?: boolean
}

const getButtonVariant = {
  primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-cliked focus:bg-primary-clicked disabled:bg-grayscale-disabled',
  secondary: 'bg-white border-2 border-solid border-primary text-primary hover:border-primary-hover hover:text-primary-hover focus:border-primary-clicked focus:text-primary-clicked active:border-primary-clicked active:text-primary-clicked disabled:border-grayscale-disabled disabled:text-grayscale-disabled',
  text: 'bg-transparent text-primary hover:text-primary-hover focus:text-primary-clicked active:text-primary-clicked disabled:text-grayscale-disabled',
};

const getButtonSize = {
  large: 'px-[52px] py-3 text-lg',
  medium: 'px-7 py-2 text-base',
  small: 'px-3 py-1 text-sm'
}

/**
 * Button
 */
export default function Button({variant = 'primary', size = 'large', disabled = false, children, ...props}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={['rounded-md', getButtonSize[size as keyof typeof getButtonSize], getButtonVariant[variant as keyof typeof getButtonVariant]].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}