import React, { useState } from 'react'
import images from 'assets/images'
import { Button } from './Button/Button'
import { Input } from './Input'

interface SumProps {
  data: {
    id: number
    summary: string
  }
}

export const Sum: React.FC<SumProps> = ({ data }) => {
  const [edit, setEdit] = useState(false)
  const [editSum, setEditSum] = useState<string>(data.summary)

  console.log(edit)

  return (
    <div>
      <div className='flex justify-between mt-3 items-center' key={data.id}>
        {edit ? (
          <Input
            name='sum'
            value={editSum}
            onChange={(e) => setEditSum(e.value)}
          />
        ) : (
          <span className='text-xs'>{data.summary}</span>
        )}
        <Button
          className='!p-0 !h-fit mr-2'
          icon={images.ic_pencil}
          onClick={() => {
            if (!edit) setEdit(!edit)
          }}
        />
      </div>
    </div>
  )
}
