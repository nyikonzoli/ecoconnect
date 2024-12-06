import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { CheckCircleIcon, UserIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="For businesses and individuals"
        title="How it helps and who are we targeting?"
      >
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* Business Benefits Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-sm mx-auto bg-slate-50">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 text-white p-4 rounded-lg flex items-center justify-center shadow-md">
                <BriefcaseIcon className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary text-center">
              For Businesses
            </h3>
            <ul className="space-y-3">
              {[
                "Creates extra revenue",
                "Cuts the cost of getting rid of excess stock",
                "Builds connections with communities focused on sustainability",
                "Improves their image through social responsibility efforts (CSR)",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start text-left">
                  <CheckCircleIcon
                    className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold my-4 text-primary text-center">
              Target audience
            </h3>
            <ul className="space-y-3">
              {[
                "Retailers, manufacturers",
                "Any company with slightly damaged products",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start text-left">
                  <CheckCircleIcon
                    className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Individual Benefits Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-sm mx-auto bg-slate-50">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 text-white p-4 rounded-lg flex items-center justify-center shadow-md">
                <UserIcon className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary text-center">
              For Individuals
            </h3>
            <ul className="space-y-3">
              {[
                "Enables access to sustainable products at a lower cost",
                "Helps them live more sustainably and also reduce waste",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start text-left">
                  <CheckCircleIcon
                    className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold my-4 text-primary text-center">
              Target audience
            </h3>
            <ul className="space-y-3">
              {[
                "Eco-conscious people",
                "Who love saving money and buying smarter",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start text-left">
                  <CheckCircleIcon
                    className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionTitle>

      <SectionTitle preTitle="Pay as you go" title="Our business model">
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Through our app, our companies can generate additional revenue by
          selling excess inventory. Our business takes a 10% commission of these
          earnings which gradually decreases with the amount of sold goods.
        </p>
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
