"use client";
import React, { Suspense, useState, useEffect } from 'react';
import { getProject } from '@/app/components/helpers/async';
import { ProjectsProps } from '@/app/types';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Project = ({ searchParams }: Props) => {
  const [project, setProject] = useState<ProjectsProps | null>(null);
  const [Component, setComponent] = useState<React.LazyExoticComponent<React.ComponentType<{ project: ProjectsProps }>> | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const _idstring = searchParams?._id as string;
        console.log(`Received _id from searchParams: ${_idstring}`);
        const _id = Number(_idstring);
        const projectData = await getProject(_id);
        console.log(`Fetched project data: `, projectData);
        setProject(projectData);

        switch (projectData._id) {
          case 1:
            setComponent(React.lazy(() => import('./p2/page')));
            break;
          case 2:
            setComponent(React.lazy(() => import('./p5/page')));
            break;
          default:
            setComponent(null);
        }
      } catch (error) {
        console.error('Error fetching project or loading component: ', error);
      }
    };

    fetchProject();
  }, [searchParams]);

  return (
    <div>
      {Component && project ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Component project={project} />
        </Suspense>
      ) : (
        <div>Project component not found or loading</div>
      )}
    </div>
  );
};

export default Project;
