import {useState} from "react";
import CourseComponent from "@/components/CourseComponent";

export type Courses= {
    readonly id: number;
    title: string;
    image: string;
    description:string;
    level?: string;
};
export default function CoursePage(){
    const courses: Courses[] = [
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
            "level": "Medium",
        },
        {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
            "description": "iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.",
            "level": "Medium",
        },
        {
            "id": 3,
            "title": "SQL & Data Modeling with PostgreSQL",
            "image": "https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png",
            "description": "SQL & Data Modeling with PostgreSQL is designed to help you understand in project analyze, database design and normalized data follow requirements from clients and Modeling the business flows. Please see the details course offers  below,",
            "level": "Medium",
        },
        {
            "id": 4,
            "title": "Web Design",
            "image": "https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png",
            "description": "Web Design course is designed for students to get started with Design Website Concepts. This course will focus on basic and advanced layout of website plus responsive design including UI/UX Design Concept. Moreover, CMS & Dynamic content with hosting application to access in public.",
            "level": "Medium",
        },
        {
            "id": 5,
            "title": "Web Design",
            "image": "https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png",
            "description": "Web Design course is designed for students to get started with Design Website Concepts. This course will focus on basic and advanced layout of website plus responsive design including UI/UX Design Concept. Moreover, CMS & Dynamic content with hosting application to access in public.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        }]
    return(
        <CourseComponent courses={courses}/>

    )
}