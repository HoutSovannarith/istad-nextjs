
import { Carousel } from 'flowbite-react';

export default function CarouselComponent() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-screen">
            <Carousel className="rounded-[0]">
                <img src="https://www.americanrivers.org/wp-content/uploads/2022/08/Untitled-design-43-2-1024x576.png" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
        </div>
    );
}