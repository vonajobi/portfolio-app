import React, { useEffect, useState } from 'react';
// import { GetServerSideProps } from 'next';
import {getProject} from '../components/helpers/async';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Project1 = async ({searchParams}: Props) => {
  const _idstring = searchParams?._id;

  console.log(_idstring);
  const _id = Number(_idstring);
  const project = await getProject(_id);
  console.log(project); 

  return (
    
    <div className='flex justify-center '>
      
      <div className='w-2/3 h-full'>
        <h1 className='my-2'>Intuitive Paper</h1>

        <h2 className='my-2'>Summary</h2>
        <p>Efficient, Intuitive, Affordable and Systematic understanding of what is going on in the frontline of technology.</p>
        <a className="text-white' text-white/75 hover-effect" href={"https://github.com/TheTRUTHis42/IntuitivePaper"}>Github Link</a>
        <h2 className='my-2'>Audience</h2>
        <p>Both scientists and entrepreneurs can benefit from this project.</p>
        <br/>
        <p>For scientists, they usually have to read dozens of papers online everyday during research to find the few paper that actually help with what they are trying to investigate. Imagine you have to read the abstract & summary of hundreds of paper just to find most of them unuseful. When they are trying to find the source of some idea, the references of paper sometimes does not help, as citation can be traced layers back and you don't have time to read every single one of them.</p>
        <br/>
        <p>For entrepreneurs who are looking for innovative technology that can solve their current dilemma, since they often have few background in research, the novel terms and numerous paper are not helpful at all! How can we know at first sight what we need to read, and what are the best preforming models?</p>
        <br/>
        <p>How can we change this?</p>
        <br/>
        <ul>
            <li>Use arXiv API & local LLM to extract information from paper</li>
            <li>Generate a short sentence summary</li>
            <li>Rate paper priority based on citation count & IF index</li>
            <li>Clear Graph reference relationship</li>
            <li>Integrate code replication</li>
            <li>Free Resource</li>
        </ul>
        <br/>
        <h2>Data</h2>
        <ul>
            <li>Authors</li>
            <li>Comment</li>
            <li>Paper index</li>
            <li>doi</li>
            <li>Journal</li>
            <li>PDF_URL</li>
            <li>Primary_Category</li>
            <li>Published_Date</li>
            <li>Abstract</li>
            <li>Title</li>
            <li>Updated</li>
            <li>References</li>
        </ul>
        <br/>
        <h2>Data Structure</h2> 
        <img src={project?.image_2} alt="Databse Flow" className='w-2/3'/>
        </div>
    </div>
    
  )
}

export default Project1

