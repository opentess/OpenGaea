import {
  Squares2X2Icon,
  ClipboardDocumentListIcon,
  FolderIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from '@apollo/client'

import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <div className="flex w-[72px] items-center justify-center bg-_will_black p-3 shadow-md">
        <div className="flex flex-col px-3">
          <div className="flex h-12 cursor-pointer items-center justify-center">
            <Link href="/">
              <Squares2X2Icon className="h-6 w-6  text-gray-400" />
            </Link>
          </div>

          <div className="flex h-12 cursor-pointer items-center justify-center">
            <Link href="/blog">
              <BookOpenIcon className="h-6 w-6  text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
