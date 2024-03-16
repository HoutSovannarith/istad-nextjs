import { Card } from 'flowbite-react';
import {Courses} from "@/app/course/page";

type CourseProps = {
    courses: Courses[];
}
export default function CourseComponent({courses}: CourseProps){
    return(
        <div>
            {courses.map((course,index)=>(<Card key={index} className="max-w-sm" imgSrc={course.image} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {course.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>))}

        </div>
    )
}