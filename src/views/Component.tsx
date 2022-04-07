import React from 'react'
import { ConsultationItem, ProductItem } from 'components'
import { CONSULTATION_LIST, PRODUCT_LIST } from 'utils/dumy'

export const Component: React.FC = () => {
  return (
    <div className='flex justify-evenly flex-col gap-px'>
      {CONSULTATION_LIST?.map((item, index) => (
        <ConsultationItem key={index} item={item} />
      ))}
      {PRODUCT_LIST.map((item, index) => (
        <ProductItem item={item} key={index} />
      ))}
    </div>
  )
}
