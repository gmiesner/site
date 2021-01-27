import React from 'react'
import App from 'next/app'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'theme-ui'

import Meta from '../components/meta'
import theme from '../components/theme'
import '../public/fonts.css'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <PlausibleProvider domain="lachlanjc.com">
        <ThemeProvider theme={theme}>
          <Meta />
          <Component {...pageProps} />
        </ThemeProvider>
      </PlausibleProvider>
    )
  }
}
