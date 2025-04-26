import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { useParams } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom

function Learn() {
  const {courseId} = useParams()
  console.log(courseId);
  const course = coursesData.find((course)=>(course.id === courseId ));
  console.log("Course Detail: ",course) 
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <h2 className={style.back}>{"<<"}</h2>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
          {course.chapters.map((chapter,id)=>{
            return <>
            <li key={id}>{chapter.title}</li>
            <p>{chapter.details}</p>
            </>
          })}
          </ul>
        </div>
      
      <div className={style.courses}>
      </div>
    </div>
</div>
  );
}

export default Learn;
