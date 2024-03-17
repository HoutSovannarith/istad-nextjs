import CarouselComponent from "@/components/ui/Carousel";
import CoursePage from "@/components/CoursePage";
import MultiCarousel from "@/components/ui/MultiCarousel";

export default function Home() {
  return (
    <div>
        <CarouselComponent/>
        <div>
            <CoursePage/>
        </div>
        <MultiCarousel/>
    </div>
  );
}
