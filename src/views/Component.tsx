import React, { useState } from 'react'
import images from 'assets/images'
import {
  ConsultationItem,
  ScheduleItem,
  ProductItem,
  Button,
  Switch,
  MedicineItem,
} from 'components'
import { CONSULTATION_LIST, SCHEDULE_LIST, PRODUCT_LIST } from 'utils/dumy'

export const Component: React.FC = () => {
  const [isActive, setActive] = useState(false)

  return (
    <div className='flex justify-evenly flex-col gap-px'>
      {/* Consultation list */}
      {CONSULTATION_LIST?.map((item, index) => (
        <ConsultationItem key={index} item={item} />
      ))}

      {/* Schedule list */}
      {SCHEDULE_LIST?.map((item, index) => (
        <ScheduleItem key={index} item={item} />
      ))}

      {/* button */}
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

      {/* switch */}
      <Switch
        className='my-1'
        name='isActive'
        onChange={(e) => setActive(e.target.checked)}
        checked={isActive}
      />

      {/* Product list */}
      {PRODUCT_LIST.map((item, index) => (
        <ProductItem item={item} key={index} />
      ))}
      <MedicineItem />
    </div>
  )
}
