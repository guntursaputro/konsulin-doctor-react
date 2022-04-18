import React from 'react'
import { CONSULTATION_LIST } from 'utils/dumy'
import { ConsultationItem } from 'components'

export const Terjadwal: React.FC = () => {
  return (
    <div className='mt-4'>
      {CONSULTATION_LIST?.filter(
        (check) => check.status !== 'Online' && check.status !== 'Selesai'
      ).map((item) => (
        <ConsultationItem item={item} />
      ))}
    </div>
  )
}
