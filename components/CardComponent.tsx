import {Card} from 'flowbite-react';
import Image from 'next/image';
import {News} from "@/app/it-news/page";

type NewsProps = {
    news: News[];
};

export default function CardComponent({news}: NewsProps) {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {news.map((news, index) => (
                <Card key={index}
                      className="max-w-xs"
                      renderImage={() => <img width={400} height={400} src={news.image} alt="image1"/>}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {news.title}
                    </h5>
                </Card>))}
        </div>
    );
}
