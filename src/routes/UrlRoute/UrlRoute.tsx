/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect } from 'react'

function containsTwoHashes(str: string) {
  const matches = str.match(/#/g)
  return matches && matches.length === 2
}

const UrlRoute: React.FC = () => {
  useEffect(() => {
    // hack: if url end with /https://www.crankbit.com/#/account, redirect to /my-users
    const currentURL = new URL(window.location.href)
    // if currentURL.toString() has 2 #
    if (containsTwoHashes(currentURL.toString())) {
      currentURL.pathname = ''
      currentURL.search = ''
      currentURL.hash = `/my-users`
      window.location.href = currentURL.toString()
    }
  }, [])
  return null
}

export default UrlRoute
