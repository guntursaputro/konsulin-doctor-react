import React from 'react'
import { ConsultationItem } from 'components'
import { CONSULTATION_LIST } from 'utils/dumy'

export const Component: React.FC = () => {
  return (
    <div className='flex justify-evenly flex-col gap-px'>
      {CONSULTATION_LIST?.map((item, index) => (
        <ConsultationItem
          key={index}
          image={item.image}
          name={item.name}
          date={item.date}
          hour={item.hour}
          status={item.status}
        />
      ))}
    </div>
  )
}
