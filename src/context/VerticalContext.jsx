import { createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom'

/* Which business vertical the current route belongs to.
   Derived from the URL so deep links (/it/services) resolve correctly
   without needing the chooser overlay to have been dismissed. */
const VerticalContext = createContext('advisory')

export const VerticalProvider = ({ children }) => {
  const { pathname } = useLocation()
  const vertical = pathname.startsWith('/it') ? 'it' : 'advisory'

  return <VerticalContext.Provider value={vertical}>{children}</VerticalContext.Provider>
}

export const useVertical = () => useContext(VerticalContext)

export const useIsIT = () => useContext(VerticalContext) === 'it'

/* Prefixes a hash-route to the active vertical's home ("/#about" vs "/it#about"). */
export const useHomePath = () => (useIsIT() ? '/it' : '/')
