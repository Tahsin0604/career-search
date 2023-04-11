const getAssignmentMarks=async()=>{
  const res=await fetch('/assignmentMarks.json');
  const assignmentMarks=await res.json();
  return assignmentMarks;
}
export default getAssignmentMarks;