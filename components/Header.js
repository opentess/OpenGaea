import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import {
  ChevronDownIcon,
  BellIcon,
  ChatBubbleBottomCenterIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import SearchBox from './SearchBox'
import { useUser } from '@auth0/nextjs-auth0/client'

const Header = ({ query }) => {
  return (
    <>
      {/* divide-y divide-gray-500 */}
      <nav className=" flex h-16 w-full items-center justify-between bg-_will_black">
        {/* <div className="flex h-full w-60 flex-shrink-0 items-center border-r border-gray-200/75 bg-transparent text-xl text-red-300">
          <div className="ml-6 flex items-center ">
            <img
              className="ring-bg-_creamblue mr-3 h-10 w-10 cursor-pointer rounded-lg ring-1 ring-offset-0"
              src="https://images.alphacoders.com/129/1293084.jpg"
            />
            <div className="mr-3 flex flex-col items-start text-sm">
              <span className="text-left font-semibold leading-none tracking-tight text-gray-800">
                Raejae Sandy
              </span>
              <span className="text-left font-thin leading-none tracking-tight text-gray-600">
                @Rsandy
              </span>
            </div>
            <ChevronDownIcon className="h-4 w-4 cursor-pointer text-gray-500/50" />
          </div>
        </div> */}

        <div className="flex w-full flex-grow items-center lg:w-auto">
          <SearchBox />
        </div>

        <div className="flex h-full w-72 flex-shrink-0 items-center justify-end text-xl">
          <ChatBubbleBottomCenterIcon className="mr-2 h-10 w-10 cursor-pointer   border-gray-400/50 p-2 text-gray-500/60 " />
          <ShoppingCartIcon className="mr-6 h-10 w-10 cursor-pointer   border-gray-400/50 p-2  text-gray-500/60" />
        </div>
      </nav>
    </>
  )
}

export default Header
