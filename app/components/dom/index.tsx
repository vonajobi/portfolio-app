import dynamic from 'next/dynamic'
import { HomepageOverlay } from './home'
const SceneIndex = dynamic(() => import('../canvas/scene'), {
  ssr: false,
})

import React from 'react';

const Index = (props: any) => {
  return (
    <>
      <HomepageOverlay />
    </>
  )
}

Index.r3f = (props: any) => (
  <>
    <SceneIndex/>
  </>
)

export default Index


export async function getStaticProps() {
  return {
    props: {
      title: 'Victoria Onajobi | Designer & Developer',
    },
  }
}



