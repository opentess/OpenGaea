import { createContext, ReactElement, useContext, useCallback } from 'react'
import StoreLayout from '../components/layouts/StoreLayout'
// import type { NextPageWithLayout } from './_app'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { RadioGroup } from '@headlessui/react'
import { SearchContext } from '../libs/context/search'
import debounce from 'lodash/debounce'
import axios from 'axios'
const Kroger = props => {
  const [isLoading, setLoading] = useState(false)
  const plans = [
    {
      name: 'Startup',
      ram: '12GB',
      cpus: '6 CPUs',
      disk: '160 GB SSD disk'
    },
    {
      name: 'Business',
      ram: '16GB',
      cpus: '8 CPUs',
      disk: '512 GB SSD disk'
    },
    {
      name: 'Enterprise',
      ram: '32GB',
      cpus: '12 CPUs',
      disk: '1024 GB SSD disk'
    }
  ]
  const { query } = useContext(SearchContext)
  const [data, setData] = useState({})

  const [selected, setSelected] = useState(plans[0])
  const queryData = async query => {
    const access_token = await axios.get('api/get-token')
    // console.log(access_token.data['access_token'], 'sd')
    const queryDataFunc = await fetch(
      `https://api-ce.kroger.com/v1/products?filter.term=${query}`,
      {
        headers: {
          Authorization: `Bearer ${access_token.data['access_token']}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const queryDataRes = await queryDataFunc.json()
    setData(queryDataRes['data'])
    console.log(data)
    console.log(queryDataRes['data'])
  }
  console.log(props)
  useEffect(() => {
    if (query?.length > 2) {
      queryData(query)
    }
  }, [query])

  //   if (isLoading) return <p>Loading...</p>
  //   if (!data) return <p>No profile data</p>
  return (
    <>
      <main className="w-full flex-col text-gray-300">
        <div className="py-7 pl-6">
          <h1 className="text-2xl font-semibold leading-8 text-gray-300">
            Kroger
          </h1>
        </div>
        <div className="flex-center flex h-full w-3/4 grow ">
          <div className="h-full w-full space-y-2 p-4 shadow-md shadow-white">
            {data?.length > 0
              ? data?.map(item => (
                  <div className="relative h-20 cursor-pointer flex-col items-center rounded-md bg-sky-900 bg-opacity-75 py-4 px-5 text-sm text-white shadow-md">
                    <p className="font-medium">{item['brand']}</p>
                    <p className="">{item['description']}</p>
                  </div>
                ))
              : ''}
          </div>
        </div>
        <div className="flex-center h-full w-1/4 grow-0">More Content</div>
      </main>
    </>
  )
}

Kroger.getLayout = function getLayout(children) {
  return <StoreLayout>{children}</StoreLayout>
}

export async function getStaticProps() {
  const _getAccessToken = async () =>
    await fetch('https://api-ce.kroger.com/v1/connect/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic b3BlbmdhZWEtMWEzMzI1OWIzMmVmNzQ5MjUxOWYwNzExYThkMTk5OWMzMzEwNzAzMDI2MzU0Njc4NjQ0OlRHNVVEZ3dQTlNxTDRKTWxhaTZaSGNoTHZwRkxoSmFzVk5PZlV6amM='
      }
    })
      .then(res => res.json()) // expecting a json response
      .then(json => {
        return json['access_token']
      })

  const access_token = await _getAccessToken()

  return {
    props: { access_token }
  }
}

export default Kroger
