import {
  BanknotesIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/research.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

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
  title: "Még több előny, amely melletted szól",
  desc: "Használhatod ezt a szekciót arra, hogy további Eco Connect előnyöket mutass be egy másik nézőpontból, képekkel és hasonló pontokkal, mint az előző részben.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobilbarát és reszponzív kialakítás",
      desc: "Az Eco Connect platformot mobilbarát és reszponzív kialakítás jellemzi.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Modern technológiákra építve",
      desc: "A legújabb technológiákra és eszközökre alapozva kínáljuk megoldásainkat.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Világos és sötét mód",
      desc: "Az Eco Connect automatikusan alkalmazkodik a világos és sötét módokhoz.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
