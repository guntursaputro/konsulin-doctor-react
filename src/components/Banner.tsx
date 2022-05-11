import images from 'assets/images'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

interface BannerItemProps {
  url: string
  className?: string
}

export const Banner: React.FC<BannerItemProps> = ({ url, className }) => {
  const navigate = useNavigate()

  return (
    <div className={clsx('relative -mx-4', className)}>
      <img src={images.bg_home} alt='' className='absolute -mt-4 w-full' />
      <img
        src={images.ic_notification}
        alt=''
        className='absolute h-4 w-[14px] right-0 mr-5'
        onClick={() => navigate(url)}
      />
    </div>
  )
}
