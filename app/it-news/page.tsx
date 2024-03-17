import CardComponent from "@/components/CardComponent";

export type News = {
    readonly id: number;
    title: string;
    image: string;
};

export default function ITNews() {
    const news: News[] = [
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        }, {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
        }, {
            "id": 3,
            "title": "SQL & Data Modeling with PostgreSQL",
            "image": "https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png",
        }, {
            "id": 4,
            "title": "Web Design",
            "image": "https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png",
        },
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        }, {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
        }, {
            "id": 3,
            "title": "SQL & Data Modeling with PostgreSQL",
            "image": "https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png",
        }, {
            "id": 4,
            "title": "Web Design",
            "image": "https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png",
        },
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        }, {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
        }, {
            "id": 3,
            "title": "SQL & Data Modeling with PostgreSQL",
            "image": "https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png",
        }, {
            "id": 4,
            "title": "Web Design",
            "image": "https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png",
        },
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        }, {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
        }, {
            "id": 3,
            "title": "SQL & Data Modeling with PostgreSQL",
            "image": "https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png",
        }, {
            "id": 4,
            "title": "Web Design",
            "image": "https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png",
        }
    ];
    return (
        <div className="flex flex-col justify-center mt-4">
            <h1 className="uppercase text-3xl font-extrabold pl-80 mb-4">Useful Contents</h1>
            <div className="container mx-auto">
                <CardComponent news={news}/>
            </div>
        </div>
    )
}