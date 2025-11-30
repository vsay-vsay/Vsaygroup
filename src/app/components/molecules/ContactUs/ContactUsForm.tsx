import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../atom/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/components/atom/input";
import { Button } from "../../atom/button";
import { Textarea } from "@/app/components/atom/textarea";

export default function ContactUsMolecule() {
  return (
    <>
    {/* Contact Form & Info */}
      <section className="md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Get In Touch</CardTitle>
                    <CardDescription>We'd love to hear from you. Here's how you can reach us.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-grey-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-sm text-muted-foreground">
                          GT 22, Sector 117
                          <br />
                          Noida, Uttar Pradesh
                          <br />
                          India - 201301
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 flex dark:bg-gray-900 items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-grey-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:info@vsay.live"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@vsay.live
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-grey-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a
                          href="tel:+918787016919"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 8787016919
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 dark:bg-gray-50">
                  <CardContent className="pt-1">
                    <h4 className="font-semibold mb-2 text-gray-100 dark:text-gray-900">Business Hours</h4>
                    <div className="space-y-1 text-sm text-gray-100 dark:text-gray-700">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form  className="space-y-6"> {/* onSubmit={handleSubmit} */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            // value={formData.name}
                            // onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            // value={formData.email}
                            // onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 1234567890"
                            // value={formData.phone}
                            // onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            // value={formData.subject}
                            // onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us more about your project or inquiry..."
                          rows={6}
                        //   value={formData.message}
                        //   onChange={handleChange}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )};