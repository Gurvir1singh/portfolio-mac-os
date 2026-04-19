import React, { useEffect, useState } from 'react'

function DateTime() {
  const [value, setValue] = useState(getMacDateTime())

  useEffect(() => {
    const tick = () => setValue(getMacDateTime())
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return <div>{value}</div>
}

function getMacDateTime() {
  const date = new Date()
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  const day = date.getDate()
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return `${weekday}  ${month}   ${day}   ${time}`
}

export default DateTime