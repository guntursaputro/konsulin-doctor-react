const renderMessageError = (messages: any, isSecondary: boolean = false) => {
  let tmpMessages = []
  if (typeof messages === 'object') {
    for (const i in messages) {
      if (typeof messages[i] === 'object') {
        for (const j in messages[i]) {
          tmpMessages.push(messages[i][j])
        }
      } else {
        tmpMessages.push(messages[i])
      }
    }
  } else {
    tmpMessages.push(messages)
  }

  if (tmpMessages.length === 1) {
    return <div className={isSecondary ? 'fs-8' : 'fs-9 text-danger'}>{tmpMessages[0]} </div>
  }

  return (
    <ul className='fs-9 text-danger'>
      {tmpMessages.map((message, index) => <li key={index}>{message}</li>)}
    </ul>
  )
}

export default renderMessageError
