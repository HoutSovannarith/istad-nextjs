'use client'
import {useState} from "react";
import CourseComponent from "@/components/CourseComponent";

export type Courses= {
    id: number;
    title: string;
    image: string;
};
export default function Course(){
  const courses: Courses[] = [{
        "id": 1,
        "title": "WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software Developer",
        "image": "https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png"
    },
        {
            "id": 2,
            "title": "Senior Spring Web Developer",
            "image": "https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png"
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png"
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png"
        }]
    return(
        <CourseComponent courses={courses}/>

    )
}