
import { Carousel } from 'flowbite-react';

export default function CarouselComponent() {
    return (
        <div className="h-[80vh] mb-4">
            <Carousel className="rounded-none">
                <img src="https://istad.co/resources/img/slide/slide-1.jpg" alt="..."  className="rounded-none"/>
                <img src="https://istad.co/resources/img/slide/slide-2.jpg" alt="..."  className="rounded-none"/>
                <img src="https://istad.co/resources/img/slide/slide-3.jpg" alt="..."  className="rounded-none"/>
            </Carousel>
        </div>
    );
}
