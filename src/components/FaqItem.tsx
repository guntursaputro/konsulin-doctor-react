import images from 'assets/images'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'

interface FaqItemProps {
  className?: string
  item: {
    question: string
    answer: string
  }
}

export const FaqItem: React.FC<FaqItemProps> = ({ className, item }) => {
  const questionRef = useRef<HTMLDivElement>(null)
  const answerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState({
    question: 0,
    answer: 0,
  })
  const [isExpand, setExpand] = useState(false)

  useEffect(() => {
    if (!answerRef.current) return
    if (!questionRef.current) return
    setHeight({
      question: questionRef.current.offsetHeight,
      answer: answerRef.current.offsetHeight,
    })
  }, [])
  return (
    <div
      className={clsx(
        'relative flex flex-col bg-white text-sm border-b border-b-neutral-20 py-3 transition-[height] ease-in-out duration-300',
        className
      )}
      style={{
        height: isExpand
          ? height.question + height.answer + 24
          : height.question + 24,
      }}
    >
      <div
        ref={questionRef}
        className='flex justify-between'
        onClick={() => setExpand(!isExpand)}
      >
        <div className='flex-1 pr-3'>{item.question}</div>
        <div className='relativeflex items-center justify-center rounded-full h-6 w-6'>
          <img
            src={images.ic_plus_yellow}
            alt=''
            className={`absolute w-5 h-5 transition duration-300 ${
              isExpand ? 'rotate-90 opacity-0' : 'opacity-1'
            }`}
          />
          <img
            src={images.ic_minus_white}
            alt=''
            className={`absolute w-5 h-5 transition duration-300 ${
              isExpand ? 'opacity-1' : 'rotate-180 opacity-0'
            }`}
          />
        </div>
      </div>
      <div
        ref={answerRef}
        className={`text-xxs pr-9 pt-4 transition ease-in-out duration-300 ${
          isExpand ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-[-12px]'
        }`}
      >
        {item.answer}
      </div>
    </div>
  )
}
