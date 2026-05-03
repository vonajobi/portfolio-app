import React, { Suspense } from 'react';
import Projects from "./projects";
export const metadata = { title: 'Victoria Onajobi | Projects'}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Projects category="web dev" />
    </Suspense>
  );
}
