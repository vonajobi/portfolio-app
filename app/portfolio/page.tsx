import React, { useEffect } from 'react';
import {getProject} from '../components/helpers/async';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
}


// const Portfolio = async ({searchParams}: Props) => {
//   // converting _id to number
//   // originally it was a string
//   const _id = Number(searchParams?._id);
//   console.log(_id);
//   const project = await getProject(_id);
//   console.log(project);
  
//   return (
//     <div>Portfolio</div>
//   )
// }
const Portfolio = async ({searchParams}: Props) => {
  // converting _id to number
  // originally it was a string
  const _id = Number(searchParams?._id);
  console.log(_id);
  const project = await getProject(_id);
  console.log(project);
  
  return (
    <div>
        <img src={project.image_3} alt={project.title} />
        Hello!
    </div>
  )
}

export default Portfolio

