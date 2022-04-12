import React, { useState, useEffect, useRef } from 'react'
import images from 'assets/images'
import { Button } from './Button/Button'
import { Input } from './Input'

interface SumProps {
  id: number
  summary: string
}

export const Sum: React.FC<{
  sum: SumProps
  data: Array<SumProps>
  setData: React.Dispatch<React.SetStateAction<Array<SumProps>>>
}> = ({ sum, data, setData }) => {
  const [edit, setEdit] = useState(false)
  const [editSum, setEditSum] = useState<string>(sum.summary)

  console.log(edit)

  const handleEdit = (e: any, id: number) => {
    e.preventDefault()
    setData(
      data.map((summary) =>
        summary.id === id ? { ...summary, summary: editSum } : summary
      )
    )
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <div className='flex mt-3 items-center justify-between' key={sum.id}>
      {edit ? (
        <form
          onBlur={(e) => handleEdit(e, sum.id)}
          onSubmit={(e) => handleEdit(e, sum.id)}
          className='w-full'
        >
          <Input
            type='input'
            className='text-xs'
            inputClass='p-0.5 w-11/12'
            name='sum'
            value={editSum}
            onChange={(e) => setEditSum(e.value)}
            edit={edit}
          />
        </form>
      ) : (
        <p className='text-xs w-full'>{sum.summary}</p>
      )}
      <Button
        className='!p-0 !h-fit ml-2'
        icon={images.ic_pencil}
        onClick={() => {
          if (!edit) setEdit(!edit)
        }}
      />
    </div>
  )
}
