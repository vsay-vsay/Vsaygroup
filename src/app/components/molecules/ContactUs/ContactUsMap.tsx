import React from 'react'
import { Card, CardContent } from '../../atom/card'

const ContactUsMap = () => {
  return (
    <>
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Visit Our Office</h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Located in the heart of Noida's tech hub
        </p>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Google Map Embed */}
          <div className="w-full h-96">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0406940472945!2d77.39719657550256!3d28.585594675683286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9c58a8e4a45%3A0x2d4c7e52346af5a7!2sSector%20117%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1696608470000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
</>

  )
}

export default ContactUsMap