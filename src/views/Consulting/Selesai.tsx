import React from 'react'
import { CONSULTATION_LIST } from 'utils/dumy'
import { ConsultationItem } from 'components'
import { useNavigate } from 'react-router-dom'

export const Selesai: React.FC = () => {
  const navigate = useNavigate()

  const onConsultingDetail = (name: string) => {
    navigate(`/consulting/detail/${name}`)
  }

  return (
    <div className='mt-4'>
      {CONSULTATION_LIST?.filter((check) => check.status === 'Selesai').map(
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
