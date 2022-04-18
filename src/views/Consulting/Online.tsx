import { ConsultationItem } from 'components'
import React from 'react'
import { CONSULTATION_LIST } from 'utils/dumy'

export const Online: React.FC = () => {
  return (
    <div className='mt-4'>
      {CONSULTATION_LIST?.filter((check) => check.status === 'Online').map(
        (item) => (
          <ConsultationItem item={item} />
        )
      )}
    </div>
  )
}
