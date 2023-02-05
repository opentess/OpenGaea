import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState(null)

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      <main className='w-full" flex min-h-screen'>{children}</main>
    </SearchContext.Provider>
  )
}
