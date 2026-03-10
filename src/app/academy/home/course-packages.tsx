import Link from "next/link";
import Image from "next/image";

type Course = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  certificate: boolean;
  duration: string;
};

const courses: Course[] = [
  {
    href: "/academy/courses/computer-basics",
    imageSrc: "/images/tech-academy/computer-basics.jpg",
    imageAlt: "Person learning computer basics on a laptop.",
    title: "Computer Basics",
    description: "How to use a computer in a corporate environment.",
    certificate: true,
    duration: "8 - 12 weeks",
  },
  {
    href: "/academy/courses/responsive-web-design",
    imageSrc: "/images/tech-academy/responsive-web-dev.jpg",
    imageAlt: "Web design layout shown on multiple devices.",
    title: "Frontend Development: Part 1",
    description: "Build compelling web pages tailored for any device.",
    certificate: true,
    duration: "12 weeks",
  },
  {
    href: "/academy/courses/dynamic-web-development",
    imageSrc: "/images/tech-academy/responsive-web-dev.jpg",
    imageAlt: "Code on a screen representing dynamic web development.",
    title: "Frontend Development: Part 2",
    description: "Use powerful frontend frameworks to develop web applications.",
    certificate: true,
    duration: "16 weeks",
  },
  {
    href: "/academy/courses/backend-development",
    imageSrc: "/images/tech-academy/backend-web-development.jpg", // Using a different image for variety
    imageAlt: "Server-side code on a dark background.",
    title: "Backend Development",
    description: "Build and deploy scalable server-side applications.",
    certificate: true,
    duration: "12 weeks",
  },
  {
    href: "/academy/courses/mobile-app-development",
    imageSrc: "/images/tech-academy/mobile-app-dev.jpg", // Using a different image for variety
    imageAlt: "Mobile phone showing a newly developed application.",
    title: "Mobile App Development",
    description: "Create cross-platform mobile apps for iOS and Android.",
    certificate: true,
    duration: "24 weeks",
  },
];

const CourseCard = ({ course }: { course: Course }) => (
  <Link href={course.href} className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="relative aspect-video">
      <Image 
        src={course.imageSrc} 
        className="object-cover" 
        fill 
        alt={course.imageAlt}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{course.title}</h3>
      <p className="text-sm text-gray-600 mt-1 mb-4 flex-grow">{course.description}</p>
      
      {course.certificate && (
        <span className="flex items-center text-xs text-gray-500 mb-2 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5 text-primary">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          Includes Professional Certificate
        </span>
      )}
      
      <span className="text-xs font-semibold text-secondary">{course.duration}</span>
    </div>
  </Link>
);

const CoursePackages = () => {
  return (
    <section id="coursePackages" className="bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Popular Courses on Marlayer
        </h2>
        {/* <p className="max-w-3xl text-center text-gray-600 text-base md:text-lg mt-4 mb-12">
          Unlock your potential with our comprehensive courses! Whether you&apos;re pursuing a passion or advancing your career, our expertly designed programs offer valuable insights and skills.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {courses.map((course) => (
            <CourseCard key={course.href} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePackages;