import React from 'react'
import { Button } from '../../atom/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const GetStarted = () => {
  return (
    <section className="py-16 md:py-24 dark:bg-gray-800 bg-gray-200 text-primary-foreground relative">
        <div className="container mx-auto px-4">
          {/* <ScrollReveal> */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to Transform Your Business?</h2>
              <p className="text-lg text-primary-foreground/90 text-pretty">
                Join our digital learning ecosystem powered by Microsoft & AWS. Let&apos;s unlock new horizons together and
                nurture profound educational, professional, and social growth.
              </p>
              <Button asChild size="lg" variant="default" className="text-base hover-scale">
                <Link href="/contact#contact-form">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          {/* </ScrollReveal> */}
        </div>
      </section>
  )
}

export default GetStarted