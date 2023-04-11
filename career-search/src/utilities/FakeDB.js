const getJObs = () => {
  let listJobs = {};
  const storeJObs = JSON.parse(localStorage.getItem("job-list"));
  if (storeJObs) {
    listJobs = storeJObs;
  }
  return listJobs;
};

const addJobs = (id, title) => {
  let storeJObs = getJObs();
  
  storeJObs[id] = title;
  localStorage.setItem("job-list", JSON.stringify(storeJObs));
};
export { getJObs, addJobs };
