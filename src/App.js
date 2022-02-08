import React from "react";
import "./style.css";

export default function App() {
  var [course,setCourse]=React.useState(['HTML','CSS','Bootstrap','JavaScript','React.Js'])
  var[selectedcourse,setselectedCourse]=React.useState([])
  const handlecheckbox=(e)=>{
   e.target.checked ?
    setselectedCourse([...selectedcourse,e.target.value]): setselectedCourse([...selectedcourse.filter((x)=>{
      return x !=e.target.value
    })])
  }
 
  return (
    <div>
      <h1>Form Handling(Checkbox)!</h1>
      {
        course.map((course,index)=>{
          return(
            <><input type="checkbox" name='course' value={course} onClick={handlecheckbox}/>{course} 
            </>
          )
        })
      }
      <hr/>
      {selectedcourse.map((course,index)=>{
         return(
           <>
           <li key={index}>{course}</li><br/>
           </>
         )
      })}
    </div>
  );
}
