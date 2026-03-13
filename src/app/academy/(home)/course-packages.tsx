import Link from "next/link";
import Image from "next/image";

// Updated type to include properties needed for the new design
type Course = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  duration: string;
  lectures: string;
  rating: number;
  price: string;
  isActive?: boolean; // Added to highlight the first card's button like in the design
};

const courses: Course[] = [
  {
    href: "/academy/courses/computer-basics",
    imageSrc: "/images/tech-academy/computer-basics.jpg",
    imageAlt: "Person learning computer basics on a laptop.",
    title: "Computer Basics",
    duration: "4 Weeks",
    lectures: "24 Lecture",
    rating: 4.8,
    price: "$150.00",
    isActive: true
  },
  {
    href: "/academy/courses/frontend-development-1",
    imageSrc: "/images/tech-academy/responsive-web-dev.jpg",
    imageAlt: "Web design layout shown on multiple devices.",
    title: "Frontend Development: 1",
    duration: "6 Weeks",
    lectures: "36 Lecture",
    rating: 4.9,
    price: "$250.00",
    isActive: true
  },
  {
    href: "/academy/courses/frontend-development-2",
    imageSrc: "/images/tech-academy/responsive-web-dev.jpg", // Replace with actual image path
    imageAlt: "Code on a screen representing frontend web development.",
    title: "Frontend Development: 2",
    duration: "3 Weeks",
    lectures: "18 Lecture",
    rating: 4.7,
    price: "$200.00",
    isActive: true
  },
  {
    href: "/academy/courses/backend-development",
    imageSrc: "/images/tech-academy/backend-web-development.jpg",
    imageAlt: "Server-side code on a dark background.",
    title: "Backend Development",
    duration: "12 Weeks",
    lectures: "48 Lecture",
    rating: 4.9,
    price: "$300.00",
    isActive: true
  },
  {
    href: "/academy/courses/mobile-app-development",
    imageSrc: "/images/tech-academy/mobile-app-dev.jpg",
    imageAlt: "Mobile phone showing a newly developed application.",
    title: "Mobile App Development",
    duration: "24 Weeks",
    lectures: "82 Lecture",
    rating: 4.8,
    price: "$450.00",
    isActive: true
  },
];

const CourseCard = ({ course }: { course: Course }) => (
  <div
    className="group flex flex-col bg-white/5 border border-white/5 rounded-[1.25rem] overflow-hidden transition-all duration-300 shadow-lg hover:-translate-y-1"
  >
    {/* Image Section */}
    <div className="relative aspect-[4/3] w-full bg-gray-800">
      <Image 
        src={course.imageSrc} 
        className="object-cover group-hover:scale-105 transition-transform duration-500" 
        fill 
        alt={course.imageAlt}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>

    {/* Content Section */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-primary-2 transition-colors">
        {course.title}
      </h3>
      
      {/* Meta Data Row */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-6 font-medium">
        {/* Duration */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {course.duration}
        </div>
        
        {/* Lectures */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {course.lectures}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 text-gray-300">
          <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {course.rating}
        </div>
      </div>
      
      {/* Price & Button Row */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-white tracking-wide">
          {course.price}
        </span>
        <Link
          href={course.href}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            course.isActive 
              ? 'bg-orange hover:bg-orange/85 text-white' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          View Syllabus
        </Link>
      </div>
    </div>
  </div>
);

const CoursePackages = () => {
  return (
    <section id="coursePackages" className="bg-primary py-20 lg:py-28 font-sans">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-[1.2]">
              Start Learning With <br className="hidden md:block" />
              Our Premium Courses
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Unlock your full potential with our premium courses designed to help you master new skills & boost your career
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="flex gap-6 overflow-x-auto -mx-6 px-6 scrollbar-hide bg-[#0E1F18]/10 py-14 rounded-xl">
          {courses.map((course) => (
            <div key={course.href} className="flex-none w-[80vw] sm:w-64">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursePackages;