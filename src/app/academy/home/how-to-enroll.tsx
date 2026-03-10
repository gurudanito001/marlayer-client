import { MagnifyingGlassIcon, UserPlusIcon, CreditCardIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

const HowToEnroll = () => {
  const steps = [
    {
      title: "Browse Courses",
      description: "Explore our comprehensive curriculum in software development, design, and data.",
      icon: <MagnifyingGlassIcon className="w-7 h-7 text-white" />,
    },
    {
      title: "Create Account",
      description: "Sign up to join our community of learners and access the student portal.",
      icon: <UserPlusIcon className="w-7 h-7 text-white" />,
    },
    {
      title: "Choose Plan",
      description: "Select a flexible learning plan that fits your career goals and budget.",
      icon: <CreditCardIcon className="w-7 h-7 text-white" />,
    },
    {
      title: "Start Learning",
      description: "Log in to your dashboard, join live classes, and build your portfolio.",
      icon: <RocketLaunchIcon className="w-7 h-7 text-white" />,
    },
  ];

  return (
    <section id="howToEnroll" className="bg-white py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-28">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Begin Your Learning Journey</h2>
          <p className="text-gray-600 text-lg">
            Joining Marlayer Academy is simple. Follow these steps to transform your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center shadow-sm group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300 z-10">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                {/* Step Number Badge */}
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center border-2 border-white shadow-sm z-20">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToEnroll;