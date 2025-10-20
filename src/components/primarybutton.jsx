import React from 'react'

const styles = {
  primary: 'bg-gradient-to-r from-gray-900 to-black text-white shadow-lg',
  secondary: 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md',
  outline: 'bg-transparent border border-white/30 text-white',
}

export default function PrimaryButton({
  label,
  children,
  onClick,
  click,
  type = 'primary',
  className = '',
  disabled = false,
  htmlType = 'button',
  ariaLabel,
  id,
}) {
  const base = 'px-6 py-2.5 rounded-xl transform transition-all duration-300 font-semibold flex items-center justify-center gap-2'
  const typeCls = styles[type] || styles.primary
  const disabledCls = disabled ? 'opacity-60 cursor-not-allowed filter grayscale' : 'hover:shadow-2xl hover:-translate-y-0.5'
  const handle = click ?? onClick
  const content = children ?? label

  return (
    <button
      id={id}
      aria-label={ariaLabel}
      type={htmlType}
      onClick={disabled ? undefined : handle}
      className={`${base} ${typeCls} ${disabledCls} ${className}`}
      disabled={disabled}
    >
      {content}
    </button>
  )
}
