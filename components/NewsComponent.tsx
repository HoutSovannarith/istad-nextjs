import {Card} from 'flowbite-react';
import Image from 'next/image';
import {News} from "@/app/it-news/page";
import {BiTag} from "react-icons/bi";
import {FaTag} from "react-icons/fa6";
import {Jobs} from "@/app/job/page";

type JobsProps = {
    jobs: Jobs[];
};

export default function NewsComponent({jobs}: JobsProps) {
    return (
        <div className="flex flex-wrap grid-flow-row gap-4 justify-center">
            {jobs.map((jobs, index) => (
                <Card key={index}
                      className="max-w-xs"
                      renderImage={() => <img width={300} height={300} src={jobs.image} alt="image1"/>}
                >
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1 text-gray-600">
                            <FaTag/>
                            <span>blog</span>
                        </div>
                        <div className="text-gray-600">16-Mar-2024</div>
                    </div>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                        {jobs.title}
                    </h5>
                </Card>))}
        </div>
    );
}
