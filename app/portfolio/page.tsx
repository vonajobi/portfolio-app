"use client";
import React, { Suspense, useState, useEffect } from 'react';
import { getProject } from '@/app/components/helpers/async';

type ProjectData = {
//   _id: number;
//   title: string;
//   description: string;
//   image_1: string;
//   image_2?: string;
//   image_3?: string;
//   image_4?: string;
//   image_5?: string;
//   image_6?: string;
//   image_7?: string;
// };

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Project = ({ searchParams }: Props) => {
  const [project, setProject] = useState<ProjectData | null>(null);
  const [Component, setComponent] = useState<React.LazyExoticComponent<React.ComponentType<{ project: ProjectData }>> | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const _idstring = searchParams?._id as string;
      const _id = Number(_idstring);
      const projectData = await getProject(_id);
      setProject(projectData);

      switch (projectData._id) {
        case 1:
          setComponent(React.lazy(() => import('./p2/page')));
          break;
        case 2:
          setComponent(React.lazy(() => import('./p5/page')));
          break;
        // case 3:
          // setComponent(React.lazy(() => import('./_3')));
          // break;
        default:
          setComponent(null);
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
