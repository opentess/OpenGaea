import { useState, useContext, useCallback, useEffect } from 'react'
import { Combobox } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
// import { SearchContext } from '../libs/context/search'
import { SearchContext } from '../libs/context/search'
import debounce from 'lodash/debounce'
const SearchBox = () => {
  // const [selectedItem, setSelectedItem] = useState(data[0])
  const [data, setData] = useState('')
  const { setQuery } = useContext(SearchContext)

  const onChange = e => {
    const val = e.target.value.toLowerCase()
    setData(val)
    validateSearch(val)
  }

  const validateSearch = useCallback(
    debounce(async query => {
      if (query?.length >= 2) {
        console.log('Debounce Active')
        setQuery(query)
        // queryData(username)
        // fetch('/api/product-search', { body: query })
        //   .then(res => res.json())
        //   .then(data => {
        //     console.log(data)
        //     // setLoading(false)
        //   })
      }
    }, 100),
    []
  )

  return (
    <>
      <div className="flex h-full w-full ">
        <Combobox
          className="shadow-2x1 relative mx-7  w-4/5 ring-0 ring-gray-400/50" //border
          value=""
          // onChange={setSelectedItem}
          as="div"
        >
          <div className="flex items-center px-4">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-200/70" />
            <Combobox.Input
              placeholder="Find running Task, Orginizations, Team Members.."
              onChange={onChange}
              className="h-12 w-full border-0 bg-transparent text-sm text-gray-400 placeholder-gray-400 focus:ring-0"
            />
          </div>
        </Combobox>
      </div>
    </>
  )
}

export default SearchBox
