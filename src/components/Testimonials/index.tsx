"use client";
import { Fade } from "react-awesome-reveal";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Saboor Masties",
    designation: "Founder @ Techware Inc.",
    content:
      "Since implementing Innoscribe's AI chatbots, our customer service response time has dropped by 50%! Their GPT technology allows the chatbots to handle most inquiries, freeing up our agents for more complex issues. - Saboor M, Customer Success Manager at Techware Inc.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Founder @ UI Hunter",
    content:
      "Innoscribe developed a custom AI assistant for our company, and it's been a game-changer! It automates so many daily tasks, saving us valuable time and boosting productivity. Our employees love its user-friendly interface. - Margin G., CEO of GreenTech Solutions",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "We partnered with Innoscribe to create a mobile app that streamlines our internal communication. Their development team was incredibly efficient and understood our vision perfectly. The app has significantly improved collaboration within our organization. -  William S., Director of Operations at Star Logistics",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <>
    <Fade duration={2000}>
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="Real Results with Innoscribe AI"
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
    </Fade>
    </>
  );
};

export default Testimonials;
