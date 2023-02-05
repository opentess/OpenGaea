import type { ReactNode, ReactElement } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import '../styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)
  return <>{getLayout(<Component {...pageProps} />)}</>
}
