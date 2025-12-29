// import { cn } from "@/app/lib/utils";
// import {
//   IconRobot,
//   IconCloud,
//   IconBrain,
//   IconDatabase,
//   IconShield,
//   IconCode,
//   IconChartBar,
//   IconBrush,
//   IconDrone,
//   IconPrinter,
// } from "@tabler/icons-react";

// export function ServicesSectionHomePage() {
//   const features = [
//     {
//       title: "Robotics",
//       description:
//         "Cutting-edge robotics solutions for manufacturing, logistics, and transportation industries.",
//       icon: <IconRobot />,
//     },
//     {
//       title: "IoT",
//       description:
//         "Smart device solutions that communicate, share, and interact for better efficiency.",
//       icon: <IconCloud />,
//     },
//     {
//       title: "AI/ML",
//       description:
//         "Algorithms that learn from data to improve performance and optimize workflows.",
//       icon: <IconBrain />,
//     },
//     {
//       title: "Data Analysis",
//       description: "Extract, analyze, interpret data for informed business decisions and intelligence.",
//       icon: <IconDatabase />,
//     },
//     {
//       title: "Cyber Security",
//       description: "Protect data, networks, systems from unauthorized access and cyber threats.",
//       icon: <IconShield />,
//     },
//     {
//       title: "Web/App Development",
//       description:
//         "Create dynamic, responsive, user-friendly websites and applications.",
//       icon: <IconCode />,
//     },
//     {
//       title: "Digital Marketing",
//       description:
//         "Reach target audience, boost online presence with tailored growth strategies.",
//       icon: <IconChartBar />,
//     },
//     {
//       title: "Drone Technology",
//       description: "Expert drone services including training, design, workshops for industries.",
//       icon: <IconDrone />,
//     },
//     {
//       title: "Designing & Editing",
//       description: "Creative, high-quality solutions for banners, promotional materials, branding.",
//       icon: <IconBrush />,
//     },
//     {
//       title: "3D Printing",
//       description: "Rapid prototyping, product development, custom designs with precision.",
//       icon: <IconPrinter />,
//     },
//   ];
//   return (
//     <>
//     <div className="px-8" id="services">
//         <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
//           Empowering Possibilities: VSAY Tech Services
//         </h4>

//         <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
//           From Robotics to AI and Cloud, we offer a complete suite of services tailored to your business vision.
//         </p>
//       </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
//       {features.map((feature, index) => (
//         <Feature key={feature.title} {...feature} index={index} />
//       ))}
//     </div>
//     </>
//   );
// }

// const Feature = ({
//   title,
//   description,
//   icon,
//   index,
// }: {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   index: number;
// }) => {
//   return (
//     <div
//       className={cn(
//         "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
//         (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
//         index < 4 && "lg:border-b dark:border-neutral-800"
//       )}
//     >
//       {index < 4 && (
//         <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//       )}
//       {index >= 4 && (
//         <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//       )}
//       <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
//         {icon}
//       </div>
//       <div className="text-lg font-bold mb-2 relative z-10 px-10">
//         <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
//         <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
//           {title}
//         </span>
//       </div>
//       <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
//         {description}
//       </p>
//     </div>
//   );
// };


import { cn } from "@/app/lib/utils";
import {
  IconRobot,
  IconCloud,
  IconBrain,
  IconDatabase,
  IconShield,
  IconCode,
  IconChartBar,
  IconBrush,
  IconDrone,
  IconPrinter,
} from "@tabler/icons-react";

export function ServicesSectionHomePage() {
  const features = [
    {
      title: "Robotics",
      description:
        "Cutting-edge robotics solutions for manufacturing, logistics, and transportation industries.",
      icon: <IconRobot />,
    },
    {
      title: "IoT",
      description:
        "Smart device solutions that communicate, share, and interact for better efficiency.",
      icon: <IconCloud />,
    },
    {
      title: "AI/ML",
      description:
        "Algorithms that learn from data to improve performance and optimize workflows.",
      icon: <IconBrain />,
    },
    {
      title: "Data Analysis",
      description: "Extract, analyze, interpret data for informed business decisions and intelligence.",
      icon: <IconDatabase />,
    },
    {
      title: "Cyber Security",
      description: "Protect data, networks, systems from unauthorized access and cyber threats.",
      icon: <IconShield />,
    },
    {
      title: "Web/App Development",
      description:
        "Create dynamic, responsive, user-friendly websites and applications.",
      icon: <IconCode />,
    },
    {
      title: "Digital Marketing",
      description:
        "Reach target audience, boost online presence with tailored growth strategies.",
      icon: <IconChartBar />,
    },
    {
      title: "Designing & Editing",
      description: "Creative, high-quality solutions for banners, promotional materials, branding.",
      icon: <IconBrush />,
    },
    {
      title: "Drone Technology",
      description: "Expert drone services including training, design, workshops for industries.",
      icon: <IconDrone />,
    },
    {
      title: "3D Printing",
      description: "Rapid prototyping, product development, custom designs with precision.",
      icon: <IconPrinter />,
    },
  ];
  
  return (
    <>
      <div className="px-8" id="services">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Empowering Possibilities: VSAY Tech Services
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Robotics to AI and Cloud, we offer a complete suite of services tailored to your business vision.
        </p>
      </div>
      
      {/* Main grid container with outer borders */}
      <div className="relative z-10 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} totalItems={features.length} />
          ))}
        </div>
      </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  totalItems,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  totalItems: number;
}) => {
  const itemsPerRow = 4;
  const rowNumber = Math.floor(index / itemsPerRow);
  const columnNumber = index % itemsPerRow;
  const totalRows = Math.ceil(totalItems / itemsPerRow);
  
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature",
        // Darker border colors
        "border-gray-300 dark:border-gray-700",
        
        // Left border for ALL items in first column
        columnNumber === 0 && "lg:border-l",
        
        // Right border for ALL columns
        "lg:border-r",
        
        // Bottom border for ALL items except last row
        rowNumber < totalRows - 1 && "border-b",
        
        // For last row items, check if they're the last item in grid
        rowNumber === totalRows - 1 && 
          index === totalItems - 1 && 
          "lg:border-b"
      )}
    >
      {/* Hover gradients */}
      {rowNumber === 0 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {rowNumber >= 1 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-400 dark:bg-gray-600 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};