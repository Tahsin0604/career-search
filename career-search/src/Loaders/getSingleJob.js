
const getJobDetails=async ({params})=>{
  const res = await fetch("/jobList.json");
  const jobLists =await res.json();
  const job=jobLists.find(jobFind=>parseInt(jobFind.id)===parseInt(params.id));
  return job;
}
export default getJobDetails;