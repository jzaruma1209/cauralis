import Hero from "@/components/sections/Hero";
import Chatbots from "@/components/sections/Chatbots";
import Servicios from "@/components/sections/Servicios";
import Proceso from "@/components/sections/Proceso";
import Demos from "@/components/sections/Demos";
import ContactoCTA from "@/components/sections/ContactoCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Chatbots />
      <Servicios />
      <Proceso />
      <Demos />
      <ContactoCTA />
    </>
  );
}
