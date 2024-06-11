import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { deepEqual } from 'assert';

export default async function (req: NextApiRequest, res: NextApiResponse) {
    let projectData;
  try {
    const filePath = path.join(process.cwd(), 'public/data/projects.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const projectData = JSON.parse(fileData);
    // Do stuff
    res.status(200).json(projectData);
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error reading data' })
  }
  return projectData;
}

