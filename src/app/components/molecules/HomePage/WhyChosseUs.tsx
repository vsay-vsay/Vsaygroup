import React from 'react'
import { Button } from '../../atom/button'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import WhyChooseUsImage from '@/app/images/HomePage/whychooseus.jpg'
import { ScrollReveal } from '../../atom/scroll-reveal'


  const features = [
    "Expert Training Programs",
    "24/7 Technical Support",
    "Scalable Solutions",
    "Industry Best Practices",
  ]

const WhyChosseUs = () => {
  return (
    <>
    <div className="py-16 md:py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative h-[400px]">
                <Image
                  src={WhyChooseUsImage}
                  alt="VSAY Team"
                  fill
                  className="object-cover rounded-lg shadow-xl hover-scale"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose VSAY Solutions?</h2>
                <p className="text-lg text-muted-foreground">
                  Transform your business with our innovative approach and comprehensive technology solutions.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="mt-4 hover-scale">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
</>
  )
}

export default WhyChosseUs


// import React from 'react'
// import { Button } from '../../atom/button'
// import Link from 'next/link'
// import { CheckCircle } from 'lucide-react'
// import Image from 'next/image'
// import WhyChooseUsImage from '@/app/images/HomePage/whychooseus.jpg'

// const features = [
//   "Expert Training Programs",
//   "24/7 Technical Support",
//   "Scalable Solutions",
//   "Industry Best Practices",
// ]

// const WhyChooseUs = () => {
//   return (
//     <div className="py-16 md:py-24 bg-muted/30 relative">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Image section - will appear second on mobile */}
//           <div className="order-2 lg:order-1 relative h-[400px]">
//             <Image
//               src={WhyChooseUsImage}
//               alt="VSAY Team"
//               fill
//               className="object-cover rounded-lg shadow-xl hover-scale"
//               priority
//               sizes="(max-width: 1024px) 100vw, 50vw"
//             />
//           </div>
          
//           {/* Content section - will appear first on mobile */}
//           <div className="order-1 lg:order-2 space-y-6">
//             <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose VSAY Solutions?</h2>
//             <p className="text-lg text-muted-foreground">
//               Transform your business with our innovative approach and comprehensive technology solutions.
//             </p>
//             <div className="space-y-4">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
//                   <span className="text-lg">{feature}</span>
//                 </div>
//               ))}
//             </div>
//             {/* <Button asChild size="lg" className="mt-4 hover-scale cursor-pointer">
//               <Link href="/about" className="cursor-pointer">
//                 Learn More About Us
//               </Link>
//             </Button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default WhyChooseUs
