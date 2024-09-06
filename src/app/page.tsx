
import PhotoCarousel from './components/PhotoCarousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-center">
      <PhotoCarousel />
      <div className="mt-8 flex items-start justify-center px-4">
        <Image
          src="/Founder.jpg"
          alt="Founder"
          width={150}
          height={150}
          className="rounded-full mr-6"
        />
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to Divine Will Public School</h1>
          <p className="text-lg mb-4">
            At Divine Will Public School we work towards exploring the innate potential of each child believing each child to be unique. Our goal is to stimulate their curiosity, guide them to explore, help them to acquire skills and instill the joy of learning which would set the tone for the rest of their lives.
          </p>
          <p className="text-lg">
            Our programs incorporate an integrated curriculum that promotes learning primarily through music, art, drama, dance, projects, discover centers, computer activities, field trips, outdoor play and adventure.
          </p>
        </div>
      </div>
    </div>
  )
}
