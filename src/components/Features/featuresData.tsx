import { Feature } from "@/types/feature";
import { RiVoiceprintFill } from "react-icons/ri";
import { SiChatbot } from "react-icons/si";
import { SiBmcsoftware } from "react-icons/si";
import { IoIosChatboxes } from "react-icons/io";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <SiChatbot className="h-12 w-12" />
    ),
    title: "GPT-Powered AI Chatbots",
    paragraph: "  Elevate your customer service with Innoscribe's GPT-powered AI chatbots.  These intelligent chatbots engage with your customers 24/7, answer their questions, and provide real-time support.  Powered by GPT technology, our chatbots learn and adapt to user interactions, offering a personalized and efficient customer experience.",
    btn: "Get Started",
    btnLink: "https://calendly.com/kashankhalid429/30min",
  },
  {
    id: 2,
    icon: (
      <RiVoiceprintFill className="h-12 w-12" />
    ),
    title: "AI Voice Calling Assistants",
    paragraph: "Imagine a world where technology seamlessly integrates into your daily life.  Innoscribe's AI voice assistants bring this vision to reality.  Our custom-built assistants understand natural language, respond to your queries and requests, and automate tasks, making your life easier and more productive.",
    btn: "Get Started",
    btnLink: "https://calendly.com/kashankhalid429/30min",
  },
  {
    id: 3,
    icon: (
      <SiBmcsoftware className="h-12 w-12" />
    ),
    title: "Software Development",
    paragraph: "Innoscribe's software development team is comprised of passionate and skilled engineers who craft innovative software solutions tailored to your specific needs.Whether you require custom applications, enterprise software integration, or mobile app development, we have the expertise to bring your vision to life.",
    btn: "Get Started",
    btnLink: "https://calendly.com/kashankhalid429/30min",
  },
  {
    id: 3,
    icon: (
      <IoIosChatboxes  className="h-12 w-12" />
    ),
    title: "AI Agent Development",
    paragraph: "Innoscribe's software development team is comprised of passionate and skilled engineers who craft innovative software solutions tailored to your specific needs.Whether you require custom applications, enterprise software integration, or mobile app development, we have the expertise to bring your vision to life.",
    btn: "Get Started",
    btnLink: "https://calendly.com/kashankhalid429/30min",
  },
];
export default featuresData;
