// import { Router, useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';


// // type Props = {
// //     searchParams: { [key: string]: string | string[] | undefined };
// // }

// const Portfolio =  () => {
//   const router = useRouter();
//   const {_id }= router.query;
//   const [ProjectContent, setProjectContent] = useState<React.ElementType | null>(null);
// console.log(_id);

//   useEffect(() => {
//     if (_id) {
//       const loadProjectContent = async () => {
//         try {
//           // const projectId = Array.isArray(_id) ? _id[0] : _id; // Handling the case where id could be an array

//           const content = await import(`../[_${_id}]`);
//           setProjectContent(content.default);
//         } catch (error) {
//           console.error(`Failed to load the project: ${error}`);
//           setProjectContent(null);
//         }
//       };
//       loadProjectContent();
//     }
//   }, [_id]);
//   return (
//     <div>
//       {ProjectContent ? <ProjectContent /> : <div>Failed to load</div>}
//     </div>
//   );
// };

// export default Portfolio
