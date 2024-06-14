import React, { useEffect, useState } from 'react';
import {getProject} from '../components/helpers/async';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
}




const Portfolio = async ({searchParams}: Props) => {
  // converting _id to number
  // originally it was a string
  const _id = Number(searchParams._id);
  const project = await getProject(_id); 
  console.log(project);
  
  // const height = window.innerHeight - 25;
  return (
    <div>
      put work here.
    </div>
    
  )
}

export default Portfolio

