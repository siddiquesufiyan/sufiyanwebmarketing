

import SeoServices from "@/app/components/SeoServices";
import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import ServiceCTA from "@/app/components/ServiceCTA";
export default function SeoPage() {
  return (
    <>
    <div className="mt-14 md:mt-16">
      <SeoServices/>
   <Testimonials/>
<Faq/>
<ServiceCTA/>
   </div>
  

    </>
  );
}


