import {
  BanknotesIcon,
  AdjustmentsHorizontalIcon,
  FaceSmileIcon,
  ChartPieIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/research1.svg";
import benefitTwoImg from "../../public/img/research2.svg";

const benefitOne = {
  title: "Research Findings",
  desc: "We made a research on the international market regarding this topic and our finding were the following:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Sustainability Matters",
      desc: "60% of shoppers care about buying sustainably, and 34% would even pay more for it.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Younger Generations Care",
      desc: "Millennials and Gen Z are especially interested in discounted, sustainable products.",
      icon: <BanknotesIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Summary of User Research",
  desc: "Insights gathered from our user research to guide our strategy.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Positive Experiences",
      desc: "More than two-thirds of people already buy discounted or slightly defective products and are happy with them, which aligns with international data.",
      icon: <ChartPieIcon />,
    },
    {
      title: "Popular Categories",
      desc: "Popular categories are electronics, appliances, and furniture.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Willingness to Save",
      desc: "80% would buy damaged items if they still work and are cheaper.",
      icon: <CreditCardIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
