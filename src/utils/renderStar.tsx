import images from 'assets/images'

export const renderStar = (rate: number) => {
  let tmp = []
  for (let x = 0; x < 5; x++) {
    if (x < rate) {
      tmp.push(<img src={images.ic_star_fill} alt='' className='w-3 h-3' />)
    } else {
      tmp.push(<img src={images.ic_star} alt='' className='w-3 h-3' />)
    }
  }
  return tmp
}
