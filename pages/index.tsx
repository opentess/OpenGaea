import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Kroger from '../public/images/kroger.png'
const Home: NextPage = () => {
  const data = [
    { id: 1, title: 'Command One' },
    { id: 2, title: 'Command Two' },
    { id: 3, title: 'Command Three' },
    { id: 4, title: 'Command Four' },
    { id: 5, title: 'Command Five' },
    { id: 6, title: 'Command Six' },
    { id: 7, title: 'Command Seven' },
    { id: 8, title: 'Command Eight' },
    { id: 9, title: 'Command Nine' },
    { id: 10, title: 'Command Ten' }
  ]

  console.log(process.env.KROGER_CLIENT_ID)

  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-center">
        <h1 className="mb-2 text-xl font-extralight leading-[.8] text-gray-700">
          Welcome to OpenGaea
        </h1>
        <h1 className="text-md font-light">
          This is the All Time app for your recipe needs
        </h1>

        <Link href="/kroger">
          <div className="group my-4 flex h-40 w-40 cursor-pointer flex-col items-center justify-center divide-y divide-solid  rounded-md bg-_depth_white p-8 shadow-md hover:divide-gray-800 hover:bg-blue-400/40">
            <div className="flex-center mb-4 h-14 w-14 ">
              <Image
                src={Kroger}
                alt="Picture of Two Cats in Love {PlaceHolder}"
                // layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-center h-10 w-10">
              <p className=" text-md mt-2 font-light leading-4 text-gray-600 group-hover:text-gray-800">
                Kroger
              </p>
            </div>
          </div>
        </Link>
      </main>
    </>
  )
}

export default Home
