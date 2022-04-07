import React, { useState } from 'react'
import images from 'assets/image'
import {
  ConsultationItem,
  ScheduleItem,
  Button,
  Switch,
  Spinner,
} from 'components'
import { CONSULTATION_LIST } from 'utils/dumy'

export const Component: React.FC = () => {
  const [isActive, setActive] = useState(false)

  return (
    <div className='flex justify-evenly flex-col gap-px'>
      {CONSULTATION_LIST?.map((item, index) => (
        <ConsultationItem key={index} item={item} />
      ))}
      <ScheduleItem />
      <div className='flex my-1 flex-col'>
        <div className='flex items-center'>
          <Button
            className='btn-primary m-2'
            label='Primary'
            icon={images.ic_pencil}
            onClick={() => console.log('button Primary')}
          />
          <Button
            className='btn-primary w-[100px] m-2'
            label='Primary'
            isLoading
            onClick={() => console.log('button Primary')}
          />
          <Button
            className='btn-primary btn-sm m-2'
            label='Disabled'
            disabled
            onClick={() => console.log('button Primary')}
          />
        </div>

        <div className='flex items-center'>
          <Button
            className='btn-secondary m-2'
            label='Secondary'
            onClick={() => console.log('button Secondarry')}
          />
          <Button
            className='btn-secondary btn-sm w-[100px] m-2'
            label='Secondary'
            isLoading
            onClick={() => console.log('button Secondary')}
          />
        </div>

        <div className='flex items-center'>
          <Button
            className='btn-outline m-2'
            label='Outline'
            onClick={() => console.log('button Outline')}
          />
          <Button
            className='btn-outline btn-sm m-2'
            label='Outline'
            disabled
            onClick={() => console.log('button Outline')}
          />
        </div>
      </div>
      <Switch
        className='my-1'
        name='isActive'
        onChange={(e) => setActive(e.target.checked)}
        checked={isActive}
      />
    </div>
  )
}
