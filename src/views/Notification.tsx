import { Header, NotificationItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { renderToday } from 'utils'
import { NOTIFICATION_LIST } from 'utils/dumy'

export const Notification: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='-mx-4 outline-1'>
      <div className='ml-4 -mt-5'>
        <Header onBackClick={() => navigate(-1)} label='Notifikasi' />
      </div>

      <p className='text-[#998300] text-xs text-right mr-4 my-4'>
        Tandai Semua dibaca(1)
      </p>

      <div>
        {NOTIFICATION_LIST?.map((item) => (
          <div className='px-4 bg-white'>
            <p
              className={`font-semi-bold pl-3 py-2 -mx-4 ${
                renderToday(item.date)
                  ? 'text-sm text-black-lighter'
                  : 'text-xs'
              }`}
            >
              {renderToday(item.date) ? 'Hari Ini' : item.date}
            </p>
            {item?.body?.map((body, index) => (
              <NotificationItem item={body} key={index} className='' />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
