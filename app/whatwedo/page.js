import Breadcrumb from "@/components/Breadcrumb";
import { CoreFeatures } from "@/components/CoreFeatures";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import MainService from "@/components/MainService";
import ServiceIntro from "@/components/ServiceIntro";
import Services, { Service2 } from "@/components/Services";
import Whatwedocta from "@/components/Whatwedocta";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Services" pageTitle="What We Do" />
      <ServiceIntro paddingTop={9} />
      <MainService />
      <CoreFeatures paddingTop={9} title="Core Features" />
      <Whatwedocta />
      <Faq />
    </NextLayout>
  );
};
export default page;
