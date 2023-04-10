const getCategory=async ()=>{
  const res=await fetch('category.json');
  const category=await res.json();
  return category;
}
export default getCategory;