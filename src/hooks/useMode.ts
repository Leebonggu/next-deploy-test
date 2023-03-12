import { useEffect, useState } from 'react'

function useMode() {
  const [mode, setMode] = useState('dev')
  
  useEffect(() => {
    const origin =
    typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';
    
    const mode = origin.split('.')[0].includes('dev') ? 'dev' : origin.includes('staging') ? 'staging' : 'prod'
    
    setMode(mode)
  }, [])
  return mode
}

export default useMode