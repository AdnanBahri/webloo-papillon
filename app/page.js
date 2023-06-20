import { Navbar } from "@/components";
import { About, Footer, Hero, Schedule, Slider, Staggred } from "@/sections";
import {
  academyData,
  advisoryData,
  agencyData,
  allianceData,
} from "@/utils/dummy";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto sm:px-16 px-6">
        <Hero />
        <About />
        <Slider
          label={"ADVISORY"}
          data={advisoryData}
          description={
            "Our Strategic Consultants bring a voice of experience and expertise to your organization."
          }
        />
        <Slider
          label={"ACADEMY"}
          data={academyData}
          gradient={"gradient-03"}
          description={
            "Educate and Inspire your people by giving them the knowledge ecel in the latest technology, tactics and training."
          }
        />
        <Slider
          label={"AGENCY"}
          data={agencyData}
          gradient={"slider-gradient"}
          description={
            "Execute flawlessly with strategic talent and expert artistry. Our Agency will become a trusted extension of your marketing department."
          }
        />
        <Slider
          label={"ALLIANCE"}
          data={allianceData}
          gradient={"gradient-05"}
          description={
            "Execute flawlessly with strategic talent and expert artistry. Our Agency will become a trusted extension of your marketing department."
          }
        />
      </div>
      <Staggred />
      <Schedule />
      <Footer />
    </main>
  );
}
