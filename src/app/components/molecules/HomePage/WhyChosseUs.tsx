import React from 'react'
import { Button } from '../../atom/button'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

  const features = [
    "Expert Training Programs",
    "24/7 Technical Support",
    "Scalable Solutions",
    "Industry Best Practices",
  ]

const WhyChosseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* <ScrollReveal> */}
              <div className="relative h-[400px]">
                <Image
                  src="/professional-team-working-on-technology-projects.jpg"
                  alt="VSAY Team"
                  fill
                  className="object-cover rounded-lg shadow-xl hover-scale"
                />
              </div>
            {/* </ScrollReveal> */}
            {/* <ScrollReveal delay={200}> */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose VSAY Solutions?</h2>
                <p className="text-lg text-muted-foreground">
                  Transform your business with our innovative approach and comprehensive technology solutions.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 animate-slide-left"
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
            {/* </ScrollReveal> */}
          </div>
        </div>
      </section>

  )
}

export default WhyChosseUs

      