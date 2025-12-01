import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/atom/timeline";
import { 
  ai1, ai2, appdev, cyberSecurity1, cyberSecurity2, dataAnalysis1, dataAnalysis2, 
  designing1, designing2, digitalMarketing1, digitalMarketing2, drone1, drone2, 
  iot1, iot2, printing1, printing2, robotics1, robotics2, webdev 
} from "@/app/images/index";

const ServicesPage: React.FC = () => {
  const data = [
    {
      id: "robotics",
      title: "Robotics",
      content: (
        <div key="robotics-content">
          <div className="space-y-6 mb-8">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
              We specialize in developing cutting-edge robotics solutions that can be used in various industries, such as manufacturing, logistics, and transportation. Our robots are designed with safety, reliability, and ease of use in mind.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
              At our robotics service center, we offer comprehensive training programs, hands-on workshops, and expert-led sessions. Whether you're looking to learn, design new products, or refine robotics skills, we provide dedicated trainers and resources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
              <Image
                src={robotics2}
                alt="Robotics technology showcase"
                width={500}
                height={600}
                className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
              <Image
                src={robotics1}
                alt="Advanced robotics workshop"
                width={500}
                height={600}
                className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "iot",
      title: "IoT",
      content: (
        <div key="iot-content">
          <div className="space-y-6 mb-8">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
              IoT enables smart devices to communicate and interact seamlessly. At VSAY, we develop cutting-edge IoT solutions to improve efficiency, reduce costs, and enhance customer experiences.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
              We offer professional training, workshops, product design, and prototyping. Our expert trainers ensure hands-on experience in developing and managing connected devices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2">
              <Image src={iot2} alt="IoT smart devices" width={500} height={600} className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2">
              <Image src={iot1} alt="IoT network solutions" width={500} height={600} className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ai-ml",
      title: "AI/ML",
      content: (
        <div key="ai-ml-content">
          <div className="space-y-6 mb-8">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
              AI/ML combines computer science and statistics to create algorithms that learn from data. We develop solutions that optimize workflows and enhance customer experiences.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
              Our expert team tailors AI/ML solutions to specific business needs, ensuring maximum impact and ROI through advanced training and implementation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
              <Image src={ai2} alt="AI machine learning" width={500} height={600} className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
              <Image src={ai1} alt="AI data processing" width={500} height={600} className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      ),
    },
    // ... Continue pattern for remaining services with unique IDs
    {
      id: "data-analysis",
      title: "Data Analysis",
      content: (
        <div key="data-analysis-content">
          <div className="space-y-6 mb-8">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
              Data Analysis extracts insights from complex datasets to drive informed business decisions and strategies.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
              Our solutions transform raw data into actionable intelligence through expert analysis and visualization techniques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2">
              <Image src={dataAnalysis1} alt="Data analytics dashboard" width={500} height={600} className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2">
              <Image src={dataAnalysis2} alt="Data visualization charts" width={500} height={600} className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      ),
    },
    // Add remaining services following the same pattern...
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions for modern businesses
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default ServicesPage;
