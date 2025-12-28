import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/atom/timeline";
// import { HoverBorderGradientButton } from "@/app/components/molecules/Services/HoverButton";
// import logo from '@/app/images/vsay-logo.png'
import {ai1, ai2, appdev, cyberSecurity1, cyberSecurity2, dataAnalysis1, dataAnalysis2, designing1, designing2, digitalMarketing1, digitalMarketing2, drone1, drone2, iot1, iot2, printing1, printing2, robotics1, robotics2, webdev } from "@/app/images/index";
// import {NavbarButton} from "@/app/components/atom/navbutton"

const ServicesPage: React.FC = () => {
  const data = [
    {
  title: "KTS-Cab",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
        KTS-Cab is a modern ride-hailing mobile application for which we are developing the complete frontend using React Native. The application is being designed for both Android and iOS platforms with a strong focus on performance and usability.
      </p>

      <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
        The app is inspired by popular platforms like Uber and Rapido and includes a clean, intuitive user interface with smooth navigation and real-time interactions. Our goal is to deliver a scalable, reliable, and visually engaging user experience that meets real-world cab booking requirements.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <Image
          src={robotics2}
          alt="KTS Cab Application"
          width={500}
          height={600}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05)]"
        />
        <Image
          src={robotics1}
          alt="KTS Cab App UI"
          width={500}
          height={600}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05)]"
        />
      </div>
    </div>
  ),
},

    {
  title: "Badminton Score",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
        Badminton Score is a sports-focused mobile application developed using React Native for both Android and iOS platforms. The app is designed to provide live badminton match scores and real-time updates to users.
      </p>

      <p className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-sm md:text-base font-normal mb-8">
        Inspired by applications like Cricbuzz, the platform focuses on fast performance, clean user interface, and accurate live scoring. The goal is to deliver an engaging and reliable experience for badminton enthusiasts through real-time match data and statistics.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <Image
          src={iot2}
          alt="Badminton Score App"
          width={500}
          height={600}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05)]"
        />
        <Image
          src={iot1}
          alt="Badminton Live Score UI"
          width={500}
          height={600}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05)]"
        />
      </div>
    </div>
  ),
},
    // {
    //   title: "AI/ML",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
    //         AI/ML (Artificial Intelligence and Machine Learning) is a field that combines computer science and statistics to develop algorithms that can learn from data and improve their performance over time. At VSAY, we specialize in developing cutting-edge AI/ML solutions that can help businesses and organizations improve their efficiency, reduce costs, and enhance customer experiences.
    //       </p>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
    //         We help businesses and organizations develop cutting-edge AI/ML solutions that can help them optimize their workflows, improve customer experiences, and reduce costs. Our expert trainers and team members ensure that our solutions are tailored to their specific needs and goals.
    //       </p>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src={ai2}
    //           alt="startup template"
    //           width={500}
    //           height={600}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src={ai1}
    //           alt="startup template"
    //           width={500}
    //           height={600}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //       {/* <HoverBorderGradientButton text="Explore More !" url="/services/aiml" logo={logo.src} /> */}
    //     </div>
    //   ),
    // },
    // {
    //   title: "Data Analysis",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
    //         Data Analysis (DA) is a critical part of any business strategy. It involves the extraction, analysis, interpretation, and presentation of data to help businesses make informed decisions. At VSAY, we help businesses and organizations develop cutting-edge AI/ML solutions that can help them optimize their workflows, improve customer experiences, and reduce costs.
    //       </p>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
    //         Our expert trainers and team members ensure that our solutions are tailored to their specific needs and goals. We help businesses and organizations develop cutting-edge AI/ML solutions that can help them optimize their workflows, improve customer experiences, and reduce costs.
    //       </p>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src={dataAnalysis1}
    //           alt="startup template"
    //           width={500}
    //           height={600}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src={dataAnalysis2}
    //           alt="startup template"
    //           width={500}
    //           height={600}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //       {/* <HoverBorderGradientButton text="Explore More !" url="/services/dataanalysis" logo={logo.src} /> */}
    //     </div>
    //   ),
    // },

    // {
    //   title: "Cyber Security",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
    //         Cybersecurity is a crucial aspect of any business strategy. It involves protecting sensitive data, networks, and systems from unauthorized access, breaches, and cyber threats. At VSAY, we help businesses and organizations develop cutting-edge AI/ML solutions that can help them optimize their workflows, improve customer experiences, and reduce costs.
    //       </p>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
    //       Protect your digital assets with our comprehensive cybersecurity services. We offer advanced training, workshops, and expert consulting to safeguard your organization against threats. Our team ensures you stay ahead with up-to-date knowledge on risk management, data protection, and secure practices. Elevate your defenses and maintain peace of mind with our tailored cybersecurity solutions.
    //       </p>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src={cyberSecurity1}
    //           alt="startup template"
    //           width={500}
    //           height={600}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src={cyberSecurity2}
    //           alt="startup template"
    //           width={500}
    //           height={600}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //       {/* <HoverBorderGradientButton text="Explore More !" url="/services/cybersecurity" logo={logo.src} /> */}
    //     </div>
    //   ),
    // },
    // {
    //   title: "Web/App Development",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-4">
    //       Our web development services focus on creating dynamic, responsive, and user-friendly websites. With expertise across technologies, we deliver tailored solutions to meet your business needs and enhance user experiences.
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Custom website design and development.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Responsive and mobile-friendly layouts.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Integration of the latest web technologies.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ SEO-optimized for better visibility.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Ongoing maintenance and support.
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src={webdev}
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src={appdev}
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //       {/* <HoverBorderGradientButton text="Explore More !" url="/services/webappdev" logo={logo.src} /> */}
    //     </div>
    //   ),
    // },
    // {
    //   title: "Digital Marketing",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-4">
    //         Our digital marketing services help you reach your target audience effectively and boost your online presence. We create tailored strategies that drive engagement, conversions, and measurable growth.
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Comprehensive SEO and content marketing.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Social media strategy and management.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Targeted PPC and ad campaigns.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Email marketing for customer retention.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ In-depth analytics and performance tracking.
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src={digitalMarketing1}
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src={digitalMarketing2}
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //       {/* <HoverBorderGradientButton text="Explore More !" url="/services/digitalmarketing" logo={logo.src} /> */}
    //     </div>
    //   ),
    // },
    // {
    //   title: "Designing",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-4">
    //        Our designing and image editing services offer creative, high-quality solutions for banners, promotional materials, and branding. We ensure visually appealing, impactful designs that capture attention and reflect your brand’s identity.
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Custom image and banner design.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Professional photo editing and retouching.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Creative layouts for marketing materials.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ High-resolution, print-ready and web-optimized files.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Fast turnaround with attention to detail.
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src={designing1}
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src={designing2}
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //       {/* <HoverBorderGradientButton text="Explore More !" url="/services/designing" logo={logo.src} /> */}
    //     </div>
    //   ),
    // },
    // {
    //   title: "Drones Technology",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-4">
    //       Providing expert drone technology services, including training, product design, and workshops. We offer innovative solutions for all aspects of drone technology to enhance performance, safety, and efficiency in various industries.
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Comprehensive Drone Training & Certification
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Custom Drone Product Design & Development
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Specialized Drone Workshops & Seminars
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Industry-Specific Drone Solutions (Agriculture, Surveillance, etc.)
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Ongoing Support & Maintenance Services
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src={drone1}
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src={drone2}
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //       {/* <HoverBorderGradientButton text="Explore More !" url="/services/drone" logo={logo.src} /> */}
    //     </div>
    //   ),
    // },
    // {
    //   title: "3D Printing & Designing",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-4">
    //       Offering top-notch 3D printing and design services for rapid prototyping, product development, and custom designs. Our solutions deliver precision, innovation, and efficiency for industries seeking cutting-edge manufacturing technology.
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Custom 3D Design & Modeling
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Rapid Prototyping for Product Development
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ High-Precision 3D Printing Services
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Material Options for Various Applications
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
    //           ✅ Post-Printing Finishing & Assembly Services
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src={printing1}
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src={printing2}
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //       {/* <HoverBorderGradientButton text="Explore More !" url="/services/printing" logo={logo.src} /> */}
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="w-full">
      {/* <NavbarButton /> */}
      <Timeline data={data} />
    </div>
  );
}

export default ServicesPage;
