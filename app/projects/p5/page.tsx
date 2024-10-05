import React, { useEffect, useState } from 'react';
import { ProjectsProps } from '@/app/projects/projectProps';
import ImageGrid from '@/app/components/layout/imageGrid';


const IntuitivePaper = ({ project }: { project: ProjectsProps }) => {
  const file_path = "/assets/projects/intuitive_paper/";
  const uiImages = [
    `${file_path}loginPage.jpg`,
    `${file_path}registerPage.jpg`,
    `${file_path}generalInfoPage.jpg`,  
    `${file_path}managementPage.jpg`,  
    `${file_path}historyPage.jpg`,  
    `${file_path}resultsPage.jpg`,  
    `${file_path}detailsPage.jpg`,  
  ];
  return (
    
    // <div className='flex justify-center '>
      
    
    //         <li>Authors</li>
    //         <li>Comment</li>
    //         <li>Paper index</li>
    //         <li>doi</li>
    //         <li>Journal</li>
    //         <li>PDF_URL</li>
    //         <li>Primary_Category</li>
    //         <li>Published_Date</li>
    //         <li>Abstract</li>
    //         <li>Title</li>
    //         <li>Updated</li>
    //         <li>References</li>
    //     </ul>
    //     <br/>
    //     <h2>Data Structure</h2> 
    //     <img src={`${file_path}database_flow.png`} alt="Databse Flow" className='w-2/3'/>
    //     </div>
    // </div>
    <div className='min-h-screen  flex bg-gradient-to-br from-white via-purple-50 to-blue-50 text-gray-800'>
      <div className=" w-screen md:w-2/3 mx-auto bg-gray-100/30">
        {/* Introduction Section */}
        <section className=" py-12 px-8 md:px-24">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Intuitive Paper: An Efficient and Affordable System for Understanding Technology
          </h1>
          <p className="text-md leading-relaxed text-center"> 
            Revolutionizing Research Efficiency for Scientists & Entrepreneurs 
            <a className="text-white' text-blue-500/75 hover-effect" href={"https://github.com/TheTRUTHis42/IntuitivePaper"}> Github Link</a>

          </p>
        </section>

        {/* Problem Statement Section */}
        <section className=" py-12 px-8 md:px-24">
          <h2 className="text-3xl font-semibold mb-4">Problem Statement</h2>
          <p className="text-md leading-relaxed">
          This project streamlines the process of finding relevant research papers, benefiting both scientists and entrepreneurs. By utilizing the arXiv API and local LLMs, the platform extracts key information, generates concise summaries, and rates papers based on citation count and impact factor. A clear graph of reference relationships helps trace ideas efficiently, while integrated code replication allows for easy testing of models. 
          This free resource saves time and offers a systematic approach to accessing cutting-edge technology and innovation.
          </p>
        </section>

        {/* Design Process Section */}
        <section className=" py-12 px-8 md:px-24">
          <h2 className="text-3xl font-semibold mb-6">Design Process</h2>

          {/* Wireframes */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">Wireframes</h3>
            <img
              src={`${file_path}site_map.png`}
              alt="Site Map"
              className="w-full h-auto border border-gray-300"
            />
            <img
              src={`${file_path}site_map_2.png`}
              alt="Site Map"
              className="w-full h-auto border border-gray-300"
            />
            <img
            src={`${file_path}site_map_3.png`}
            alt="Site Map"
            className="w-full h-auto border border-gray-300"
          />
          </div>

          {/* UI Design */}
          <div className='relative'>
            <h3 className="text-2xl font-semibold">UI Design</h3>
            <ImageGrid images={uiImages} />
          </div>
        </section>

        {/* Development Process Section */}
        <section className=" py-12 px-8 md:px-24">
          <h2 className="text-3xl font-semibold mb-6">Development Process</h2>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
            <p className="text-md leading-relaxed">
              The application was built using <span className="font-bold">PHP</span> for server-side scripting, <span className="font-bold">SQL</span> database querying, and <span className="font-bold">Tailwind CSS</span> for rapid, responsive design.
            </p>
          </div>

          {/* API Integrations */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">API Integrations</h3>
            <p className="text-md leading-relaxed">
              Google Analytics APIs were integrated to track user engagement. The arXiv API was used to fetch research papers and extract relevant data for analysis.
            </p>
          </div>
        </section>

        {/* Project Outcome */}
        <section className=" py-12 px-8 md:px-24">
          <h2 className="text-3xl font-semibold mb-6">Project Outcome</h2>
          {/* <p className="text-md leading-relaxed">
            The web application successfully...
          </p> */}
          <img
            src={`${file_path}main.png`}
            alt="Project Outcome"
            className="mt-6"
          />
          <video
            controls
            src={`${file_path}walkthrough.mp4`}
            className="w-full h-auto border mt-6"/>
        </section>
      </div>
    </div>
  )
}

export default IntuitivePaper

