import { getJObs } from "../utilities/FakeDB";

const getData = async () => {
  const res1 = await fetch("/category.json");
  const categories = await res1.json();
  
  const res2 = await fetch("/jobList.json");
  const jobLists =await res2.json();

  const showFirstFourJobs = jobLists.slice(0,4);

  const storeJObs=getJObs();
  let initialJObs=[];
  for(const id in storeJObs){
    const jobExist=jobLists.find(job=>parseInt(job.id)===parseInt(id))
    if(jobExist){
      initialJObs.push(jobExist)
    }
  }
 
  return { categories, jobLists, showFirstFourJobs,initialJObs }
};

export default getData;
