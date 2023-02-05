import Header from '../Header.js'
import Sidebar from '../Sidebar'
import { SearchProvider } from '../../libs/context/search.js'
export default function StoreLayout({ children }) {
  return (
    // Todo
    <SearchProvider>
      {/* <div className="w-ful flex min-h-screen"> */}
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <Header />
        <main className="flex max-h-[calc(100vh-4rem)] w-full flex-1 overflow-y-scroll bg-black">
          {children}
        </main>
      </div>
      {/* </div> */}
    </SearchProvider>
    // </div>
  )
}
