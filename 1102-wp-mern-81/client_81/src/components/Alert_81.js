import React from 'react'

import { useAppContext } from '../context/appContext_81'

const Alert_81 = () => {
  const { alertText, alertType } = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  )
}

export default Alert_81
