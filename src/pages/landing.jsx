import React from 'react'
import logo from '../assets/logo.png'
import banner from '../assets/banner.jpeg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import companies from "../data/companies.json"
import faqs from "../data/faq.json"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


function LandingPage() {


  console.log(companies)
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 px-4 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold lg:text-8xl tracking-tighter py-4'>Find Your Dream Job
          <span className='flex items-center gap-2 sm:gap-6'>& Get
            <img src={logo}
              alt='Hired Logo'
              className='h-14 sm:h-24 lg:h-32' />
          </span></h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
          Explore thousand of job listing or find the perfect candidate
        </p>
      </section>
      <div className='flex justify-center gap-6'>
        <Link to="/jobs">
          <Button variant="blue" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">Post a Job</Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Banner */}

      <img src={banner} className='w-full' />

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>For Job Seeker</CardTitle>
          </CardHeader>
          <CardContent>
            Search and appy for jobs, track applictions and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Emplpyers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidate.
          </CardContent>
        </Card>
      </section>
      {/* Accordian */}

      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
        return (
        <AccordionItem key={index} value={`item-${index+1}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
           {faq.answer}
          </AccordionContent>
        </AccordionItem>
        );
        })}

      </Accordion>
    </main>
  )
}

export default LandingPage