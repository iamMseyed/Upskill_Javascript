let myYTvid= {
    title:'Objects In JS',
    vidLenth:15,
    vidCreator:'Muzafar Seyed',
    vidDes:'Video about Objects in java script'
}

console.log(myYTvid)

console.log(`Hey new video on ${myYTvid.title} by ${myYTvid.vidCreator} has been published`)

let course={
    courseName: 'C Progamming',
    courseAuthor:'Muzafar Seyed',
    courseDuration:'5 hours',
    coursePrice:'10 Dollars',
    courseCertification:'Yes'
}

console.log(`New course is available:\n Tittle: ${course.courseName},
 Author: ${course.courseAuthor}, Course duration: ${course.courseDuration}, Certification avaliable: ${course.courseCertification}
 with Price Tag of: ${course.coursePrice}`)

 //look here carefully, we are simply accessing value via arrayName.arrayElement
 //but if elements where stores as objects then we cant simply, we have to use findIndex()