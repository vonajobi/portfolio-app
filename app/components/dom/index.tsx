import dynamic from 'next/dynamic'
import { IndexOverlay } from './home'
const SceneIndex = dynamic(() => import('../canvas/scene'), {
  ssr: false,
})

import React from 'react';

const Page = (props: any) => {
  return (
    <>
      <IndexOverlay />
    </>
  )
}

Page.r3f = (props: any) => (
  <>
    <SceneIndex/>
  </>
)

export default Page


export async function getStaticProps() {
  return {
    props: {
      title: 'Victoria Onajobi | Designer & Developer',
    },
  }
}



