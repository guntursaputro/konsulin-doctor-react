import images from 'assets/images'
import { Modal, ProfileItem } from 'components'
import { MENU_PROFILE } from 'config/menu'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Profile: React.FC = () => {
  const [showSetting, setShowSetting] = useState(false)
  const navigate = useNavigate()

  const onSetting = () => {
    setShowSetting(true)
    console.log('click')
  }

  const doLogout = () => {
    navigate('/login')
  }
  return (
    <div className='-mt-[4rem]'>
      <div className='relative -mx-4'>
        <img className='absolute -mt-4 w-full' src={images.bg_profile} alt='' />
      </div>
      <div className='relative'>
        <div className='flex justify-end'>
          <img
            className='w-6 h-6'
            src={images.ic_setting}
            alt=''
            onClick={onSetting}
          />
        </div>
        <div className='flex flex-col mt-8'>
          <div className='mx-auto'>
            <img
              src={images.ic_profile_dummy}
              alt=''
              className='w-20 h-20 rounded-full'
            />
          </div>
          <div className='text-center w-40 mx-auto'>
            <p className='text-sm text-white font-bold mt-3 mb-1'>
              Dr. Fenny, S.E
            </p>
            <p className='text-xxs text-white'>
              Dokter spesialis perawatan dan penyakit kulit
            </p>
          </div>
        </div>
      </div>
      <div className='my-16'>
        {MENU_PROFILE?.map((item) => (
          <ProfileItem item={item} className='my-3 h-12' />
        ))}
      </div>
      <div className='!-mx-4 px-4 bg-white py-10'>
        <ProfileItem
          className='text-primary-dark text-sm !shadow-[0_0_8px_5px_rgba(18,0,0,0.1)]'
          iconClassName='h-9 w-9'
          item={{
            label: 'Log Out',
            icon: images.ic_logout,
          }}
          onClick={doLogout}
        />
      </div>
      <Modal
        show={showSetting}
        onHide={() => setShowSetting(false)}
        dialogClassName='!items-start !justify-start'
      >
        <div className='bg-white rounded-lg'>
          <div
            className='flex items-center px-8 py-4'
            onClick={() => navigate('/schedule/set-schedule')}
          >
            <img
              src={images.ic_notification_profile}
              alt=''
              className='w-6 h-6 mr-4'
            />
            <div className='text-sm'>{'Matikan Notifikasi'}</div>
          </div>
          <div className='w-full h-px bg-neutral-10' />
          <div
            className='flex items-center px-8 py-4'
            onClick={() => navigate('/password-update')}
          >
            <img
              src={images.ic_shield_profile}
              alt=''
              className='w-6 h-6 mr-4'
            />
            <div className='text-sm'>{'Ganti Password'}</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
