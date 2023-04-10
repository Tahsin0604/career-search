const getData = async () => {
  const res1 = await fetch("category.json");
  const categories = await res1.json();
  
  const res2 = await fetch("jobList.json");
  const jobLists =await res2.json();
  console.log(jobLists);
  const showFirstFourJobs = jobLists.slice(0,4);
  console.log(showFirstFourJobs);
  return { categories, jobLists, showFirstFourJobs }
};

export default getData;
