import React, { useEffect } from 'react'
import Prism from 'prismjs'

interface Props {
  children: string
  language?: string
}

function Code({ language = 'jsx', children }: Props) {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}
export default Code
