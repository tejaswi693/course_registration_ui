export interface Student {
  student_id: number;
  name: string;
  email:string
}

export interface Course {
  course_id: number;
  title:string,
  description:string
}

export interface Registration {
  registration_id:number
  student_id: number| null,
  course_ids:[],
  registration_date:string
}