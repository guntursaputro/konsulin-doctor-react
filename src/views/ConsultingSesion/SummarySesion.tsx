import images from 'assets/images'
import { Button, Input, SummaryItem } from 'components'
import React, { useState } from 'react'

export const SummarySesion: React.FC = () => {
  const [complaint, setComplaint] = useState<Array<string>>([
    'Gatal-Gatal pada permukaan kulit',
    'Ruam merah dan perih',
  ])
  const [diagnose, setDiagnose] = useState<Array<string>>(['Alergi'])
  const [description, setDescription] = useState('')

  return (
    <div className='-mx-4'>
      <div className='bg-neutral-10 py-2 px-4'>
        <p className='font-semi-bold text-neutral-30 text-xs'>KELUHAN</p>
      </div>
      <div className='bg-white px-4 pb-3'>
        <SummaryItem data={complaint} onUpdate={(e) => setComplaint([...e])} />
      </div>
      <div className='bg-neutral-10 py-2 px-4'>
        <p className='font-semi-bold text-neutral-30 text-xs'>DIAGNOSA</p>
      </div>
      <div className='bg-white px-4 pb-3'>
        <SummaryItem data={diagnose} onUpdate={(e) => setDiagnose([...e])} />
      </div>
      <div className='bg-neutral-10 py-2 px-4'>
        <p className='font-semi-bold text-neutral-30 text-xs'>
          ANJURAN PENANGANAN
        </p>
      </div>
      <Input
        placeholder='Tulis anjuran penanganan'
        type='text-area'
        className='mt-3 mx-4 text-xs'
        name='description'
        value={description}
        onChange={(e) => setDescription(e.value)}
      />
      <div className='px-4 mt-40'>
        <Button
          onClick={() => console.log('Saved')}
          className='btn-primary !w-full'
          label='Simpan Summary'
          icon={images.ic_disket}
        />
      </div>
    </div>
  )
}
