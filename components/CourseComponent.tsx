import {Card} from 'flowbite-react';
import {Courses} from "@/app/course/page";

type CourseProps = {
    courses: Courses[];
}
export default function CourseComponent({courses}: CourseProps) {
    return (
        <main className="container mx-auto">
            <h1 className="uppercase text-3xl font-extrabold pl-48 mb-4">Course</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {courses.map((course, index) => (
                    <Card key={index} className="max-w-sm" imgSrc={course.image} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                            {course.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                            {course.description}
                        </p>
                    </Card>))}
            </div>
        </main>
    )
}