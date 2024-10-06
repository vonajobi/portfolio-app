import { HomepageOverlay } from './home'
import React from 'react';
import dynamic from 'next/dynamic'

const SceneIndex = dynamic(() => import('../canvas/scene'), {
  ssr: false,
})


const Index = (props: any) => {

  return (
    <>
      <HomepageOverlay />
    </>
  )
}

 Index.r3f = (props: any) => (
    <SceneIndex{...props}/>
)

export default Index


export async function getStaticProps() {
  return {
    props: {
      title: 'Victoria Onajobi | Designer & Developer',
    },
  }
}



