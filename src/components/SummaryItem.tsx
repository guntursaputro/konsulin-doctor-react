import images from 'assets/images'
import clsx from 'clsx'
import React, { useState } from 'react'
import { Button } from './Button/Button'
import { Input } from './Input'

interface SummaryItemProps {
  className?: string
  data: Array<string>
  onUpdate: (e: Array<string>) => void
}

interface SummaryLabelProps {
  label: string
  onChange: (e: string) => void
  onDelete: () => void
}

export const SummaryItem: React.FC<SummaryItemProps> = ({
  className,
  data,
  onUpdate,
}) => {
  const [summary, setSummary] = useState('')

  const handleAdd = () => {
    if (!summary) return
    onUpdate([...data, summary])
    setSummary('')
  }

  const handleEdit = (value: string, index: number) => {
    data[index] = value
    onUpdate([...data])
  }

  const handleDelete = (index: number) => {
    data.splice(index, 1)
    onUpdate([...data])
  }

  return (
    <div className={clsx('flex flex-col', className)}>
      {data.map((item, index) => (
        <SummaryLabel
          label={item}
          onChange={(e) => handleEdit(e, index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
      <div className='flex items-center mt-2'>
        <Button
          className='!p-0 !h-fit mr-2'
          icon={images.ic_plus_yellow}
          onClick={handleAdd}
        />
        <Input
          className='w-4/5'
          placeholder='Tambah Keluhan'
          inputClass='!p-0 text-xs !border-hidden bg-transparent'
          name='input'
          value={summary}
          onChange={(e) => setSummary(e.value)}
        />
      </div>
    </div>
  )
}

const SummaryLabel: React.FC<SummaryLabelProps> = ({
  label,
  onChange,
  onDelete,
}) => {
  const [isEdit, setEdit] = useState(false)

  const handleSubmit = () => {
    if (!label) {
      onDelete()
    }
    setEdit(false)
  }
  return (
    <div className='flex mt-3 items-center justify-between'>
      {isEdit ? (
        <input
          type='input'
          className='text-xs w-full'
          name='sum'
          onSubmit={handleSubmit}
          onBlur={handleSubmit}
          value={label}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      ) : (
        <p className='text-xs w-full'>{label}</p>
      )}
      {!isEdit && (
        <Button
          className='!p-0 !h-fit ml-2'
          icon={images.ic_pencil}
          onClick={() => setEdit(!isEdit)}
        />
      )}
    </div>
  )
}
