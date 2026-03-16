import Link from "next/link";
import Image from "next/image";

// --- 1. New Educational Background Icons Component ---
const BackgroundIcons = () => {
  const paths = {
    // New: Graduation Cap
    gradCap: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </>
    ),
    // New: Lightbulb (Ideas/Learning)
    bulb: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-1.936a4.5 4.5 0 00-1.325-8.86l-.105-.002M9.75 18v-.192c0-.983-.658-1.829-1.58-1.936a4.5 4.5 0 011.325-8.86l.105-.002" />
      </>
    ),
    // New: Magnifying Glass (Research)
    search: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    ),
    // New: Pencil (Writing/Design)
    pencil: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    ),
    // New: Pie Chart (Analytics/Business)
    chart: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </>
    ),
    // Retained from previous: Atom (Science)
    atom: (
      <>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(45 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-45 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </>
    ),
    // Retained from previous: Book
    book: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    )
  };

  // 35 scattered items configured for the CoursePackages section dimensions
  const scatterMap = [
    // Row 1 (Top)
    { type: 'gradCap', className: 'top-[3%] left-[10%] -rotate-12 w-12 h-12' },
    { type: 'pencil', className: 'top-[6%] left-[25%] rotate-45 w-10 h-10 hidden sm:block' },
    { type: 'book', className: 'top-[4%] left-[45%] rotate-12 w-10 h-10' },
    { type: 'bulb', className: 'top-[8%] left-[65%] -rotate-12 w-14 h-14' },
    { type: 'atom', className: 'top-[5%] left-[85%] rotate-90 w-12 h-12 hidden md:block' },
    
    // Row 2
    { type: 'chart', className: 'top-[15%] left-[5%] rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'search', className: 'top-[20%] left-[20%] -rotate-12 w-12 h-12' },
    { type: 'gradCap', className: 'top-[18%] left-[38%] rotate-6 w-10 h-10 hidden md:block' },
    { type: 'pencil', className: 'top-[22%] left-[55%] -rotate-45 w-12 h-12' },
    { type: 'book', className: 'top-[15%] left-[75%] rotate-12 w-14 h-14' },
    { type: 'chart', className: 'top-[22%] left-[92%] -rotate-12 w-10 h-10 hidden lg:block' },

    // Row 3
    { type: 'atom', className: 'top-[35%] left-[8%] -rotate-45 w-14 h-14' },
    { type: 'book', className: 'top-[38%] left-[28%] -rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'bulb', className: 'top-[30%] left-[48%] rotate-12 w-12 h-12' },
    { type: 'search', className: 'top-[35%] left-[68%] -rotate-12 w-10 h-10 hidden md:block' },
    { type: 'pencil', className: 'top-[32%] left-[88%] rotate-45 w-12 h-12' },

    // Row 4
    { type: 'search', className: 'top-[50%] left-[15%] rotate-12 w-12 h-12 hidden md:block' },
    { type: 'chart', className: 'top-[55%] left-[35%] -rotate-12 w-10 h-10' },
    { type: 'gradCap', className: 'top-[48%] left-[55%] rotate-6 w-14 h-14 hidden lg:block' },
    { type: 'book', className: 'top-[52%] left-[75%] -rotate-12 w-10 h-10' },
    { type: 'atom', className: 'top-[58%] left-[90%] rotate-45 w-12 h-12 hidden sm:block' },

    // Row 5 
    { type: 'bulb', className: 'top-[70%] left-[5%] -rotate-12 w-10 h-10' },
    { type: 'gradCap', className: 'top-[75%] left-[25%] rotate-12 w-12 h-12 hidden sm:block' },
    { type: 'pencil', className: 'top-[68%] left-[45%] -rotate-45 w-10 h-10' },
    { type: 'chart', className: 'top-[72%] left-[65%] rotate-12 w-12 h-12 hidden md:block' },
    { type: 'search', className: 'top-[65%] left-[85%] -rotate-12 w-14 h-14' },

    // Row 6 (Bottom)
    { type: 'book', className: 'top-[90%] left-[12%] rotate-12 w-12 h-12' },
    { type: 'atom', className: 'top-[85%] left-[32%] -rotate-45 w-10 h-10 hidden lg:block' },
    { type: 'bulb', className: 'top-[92%] left-[52%] rotate-6 w-14 h-14 hidden sm:block' },
    { type: 'pencil', className: 'top-[88%] left-[72%] -rotate-12 w-10 h-10' },
    { type: 'gradCap', className: 'top-[95%] left-[90%] rotate-12 w-12 h-12 hidden md:block' },

    // Extra scattered fillers for dense areas
    { type: 'chart', className: 'top-[45%] left-[10%] rotate-45 w-8 h-8 opacity-50 hidden xl:block' },
    { type: 'book', className: 'top-[80%] left-[50%] -rotate-12 w-8 h-8 opacity-50 hidden xl:block' },
    { type: 'search', className: 'top-[10%] left-[85%] rotate-12 w-8 h-8 opacity-50 hidden lg:block' },
    { type: 'pencil', className: 'top-[60%] left-[25%] -rotate-45 w-8 h-8 opacity-50 hidden lg:block' },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
      {scatterMap.map((item, index) => (
        <svg
          key={index}
          className={`absolute text-white ${item.className}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          {paths[item.type as keyof typeof paths]}
        </svg>
      ))}
    </div>
  );
};


// --- 2. Types & Data ---
type Course = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  duration: string;
  lectures: string;
  rating: number;
  price: string;
  isActive?: boolean;
};

const courses: Course[] = [
  {
    href: "/academy/courses/computer-basics",
    imageSrc: "/images/tech-academy/computer-basics.jpg",
    imageAlt: "Person learning computer basics on a laptop.",
    title: "Computer Basics",
    duration: "4 Weeks",
    lectures: "24 Lectures",
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
    lectures: "36 Lectures",
    rating: 4.9,
    price: "$250.00",
    isActive: true
  },
  {
    href: "/academy/courses/frontend-development-2",
    imageSrc: "/images/tech-academy/responsive-web-dev.jpg", 
    imageAlt: "Code on a screen representing frontend web development.",
    title: "Frontend Development: 2",
    duration: "3 Weeks",
    lectures: "18 Lectures",
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
    lectures: "48 Lectures",
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
    lectures: "82 Lectures",
    rating: 4.8,
    price: "$450.00",
    isActive: true
  },
];

// --- 3. Course Card Component ---
const CourseCard = ({ course }: { course: Course }) => (
  <div
    className="group flex flex-col bg-white/5 border border-white/5 rounded-[1.25rem] overflow-hidden transition-all duration-300 shadow-lg hover:-translate-y-1 h-full"
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
      <div className="flex items-center justify-between text-xs text-gray-400 mb-6 font-medium mt-auto">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {course.duration}
        </div>
        
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {course.lectures}
        </div>

        <div className="flex items-center gap-1.5 text-gray-300">
          <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {course.rating}
        </div>
      </div>
      
      {/* Price & Button Row */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
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

// --- 4. Main Course Packages Component ---
const CoursePackages = () => {
  return (
    <section id="coursePackages" className="bg-primary relative py-20 lg:py-28 font-sans overflow-hidden">
      
      {/* Highly Concentrated Scattered Education Icons */}
      <BackgroundIcons />
      
      {/* Subtle Dot Pattern Overlay (Retained from your code) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '32px 32px' }}></div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-[1.2]">
              Explore Our Hands-On, <br className="hidden md:block" />
              Career-Ready Curriculum
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Learn by doing. Our premium courses are meticulously crafted to help you ship real applications, connect with a thriving community, and fast-track your journey into the tech industry.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Grid Layout */}
        <div className="flex gap-6 overflow-x-auto -mx-6 px-6 scrollbar-hide py-14 items-stretch">
          {courses.map((course) => (
            <div key={course.href} className="flex-none w-[80vw] sm:w-72 md:w-80">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursePackages;