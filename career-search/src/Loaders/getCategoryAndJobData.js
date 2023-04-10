const getCategory=async ()=>{
  const res=await fetch('category.json');
  const category=await res.json();
  return category;
}
const getJobList=async ()=>{
  const res=await fetch('jobList.jason');
}
export default getCategory;