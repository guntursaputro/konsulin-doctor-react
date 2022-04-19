import { ConsultationItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CONSULTATION_LIST } from 'utils/dumy'

export const Online: React.FC = () => {
  const navigate = useNavigate()

  const onConsultingDetail = (name: string) => {
    navigate(`/consulting/detail/${name}`)
  }
  return (
    <div className='mt-4'>
      {CONSULTATION_LIST?.filter((check) => check.status === 'Online').map(
        (item) => (
          <ConsultationItem
            item={item}
            onClick={() => onConsultingDetail(item.name)}
          />
        )
      )}
    </div>
  )
}
