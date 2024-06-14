import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";

const getData = async () => {
    // fetch must y an absolute path when retrieving data locally
    const res = await fetch('http://localhost:3000/data/projects.json');
    if(!res.ok) {
        throw Error(`Failed to reach data! status: ${res.status}`);
    }
    return res.json();
}

export const getProject = async (_id: number) => {
    console.log(_id);
    const project = await getData();
    const singleItem = await project.find((project: any) => project._id === _id);
    
    return singleItem;
}
