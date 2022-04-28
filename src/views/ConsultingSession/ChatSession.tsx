import images from 'assets/images'
import { Button, Input } from 'components'
import React, { useState } from 'react'

export const ChatSession: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
  })

  const handleChangeForm = (e: any) => {
    setForm({
      ...form,
      [e.name]: e.value,
    })
  }
  return (
    <div className='bg-white -mx-4'>
      <div>
        <div className='flex justify-between text-xs bg-yellow px-6 py-2 text-white mb-3'>
          <p>Sisa waktu</p>
          <p>{`36:06`}</p>
        </div>
        <div>
          <p className='text-sm font-bold text-center mb-4'>
            Jumat 14 Januari 2022
          </p>
        </div>
      </div>

      <div className='scroll-y !space-y-4 snap-y snap-mandatory max-h-[80vh]'>
        <div className='bg-[#eeeeee] w-3/4 mx-4 p-2 rounded-lg text-xxs flex flex-col float-left'>
          <p className='mb-1 self-end'>19:01</p>
          <p>
            Hai Selamat datang, silahkan konsultasikan permasalahan kamu, baik
            mulai soal kulit maupun permasalahan kesehatan lainnya.
          </p>
        </div>

        <div className='bg-[#ebd2df] w-3/4 mx-4 p-2 rounded-lg text-xxs flex flex-col float-right'>
          <p className='mb-1 self-end'>19:01</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            explicabo, repellendus tenetur dolor enim consectetur debitis
            quaerat commodi voluptatem rem!
          </p>
        </div>

        <div
          className={`bg-[#ebd2df] max-h-fit w-3/4 mx-4 my-2 p-2 rounded-lg text-xxs flex flex-col float-right relative after:content-['_'] 
          after:absolute after:block after:w-0 after:z-[1]  after:border-solid after:border-t-[21px] after:border-l-[24px] after:border-r-0  after:text-transparent after:border-b-0 after:border-l-[#ebd2df]
          after:bottom-0 after:-right-[12px] after:-mt-[10px]`}
        >
          <p className='mb-1 self-end'>19:01</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div
          className={`bg-[#eee] max-h-fit w-3/4 mx-4 my-2 p-2 rounded-lg text-xxs flex flex-col float-left relative after:content-['_'] 
          before:absolute before:block before:w-0 before:z-[1]  before:border-solid before:border-r-[21px] before:border-b-[24px] before:border-t-0  before:text-transparent before:border-l-0 before:border-r-[#eee]
          before:top-0 before:-left-[12px]`}
        >
          <p className='mb-1 self-end'>19:01</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem
            architecto praesentium? Sit ex sed placeat alias molestiae, delectus
            accusantium.
          </p>
        </div>
      </div>

      <div className='mt-20 border-2 mx-4 rounded flex items-center justify-between'>
        <Button
          onClick={() => console.log('attach file')}
          icon={images.ic_attach_black}
        />
        <Input
          name='name'
          onChange={handleChangeForm}
          placeholder='Ketik pesan kamu'
          value={form?.name}
          className='p-2 text-xxs flex-grow'
          inputClass='!p-0 text-xs !border-hidden bg-transparent'
        />
        <Button
          onClick={() => console.log('send chat')}
          icon={images.ic_send_black}
        />
      </div>
    </div>
  )
}
