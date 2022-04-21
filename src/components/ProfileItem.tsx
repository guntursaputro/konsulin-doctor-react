import clsx from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ProfileItemProps {
  className?: string
  iconClassName?: string
  item: {
    label: string
    icon: string
    to?: string
  }
  onClick?: () => void
}

export const ProfileItem: React.FC<ProfileItemProps> = ({
  className,
  iconClassName,
  item,
  onClick,
}) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    if (onClick) {
      onClick()
    } else {
      if (item.to) navigate(item.to)
    }
  }

  return (
    <div
      className={clsx(
        'bg-white flex items-center px-3 py-1.5 rounded drop-shadow',
        className
      )}
      onClick={handleOnClick}
    >
      <div
        className={clsx(
          'flex items-center justify-center h-6 w-6 mr-3',
          iconClassName
        )}
      >
        <img src={item.icon} alt='' />
      </div>
      <div className='text-sm'>{item.label}</div>
    </div>
  )
}
