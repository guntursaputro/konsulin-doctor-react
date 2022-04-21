import images from 'assets/images'

export const Banner = () => {
  return (
    <div className='relative -mx-4'>
      <img src={images.bg_home} alt='' className='absolute -mt-4 w-full' />
      <img
        src={images.ic_notification}
        alt=''
        className='absolute h-4 w-[14px] right-0 mr-5'
      />
    </div>
  )
}
