import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Fedezd fel az előnyeinket",
  desc: "Ezen a helyen kiemelheted az Eco Connect platform legfontosabb előnyeit vagy funkcióit. Az alábbi példában képet vagy illusztrációt is használhatsz, valamint néhány pontban bemutathatod a részleteket.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Jobban megértheted ügyfeleidet",
      desc: "Tisztán és egyszerűen mutasd be ezt az előnyt egy-két mondatban.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Könnyítsd meg a zöld megoldásokhoz való hozzáférést",
      desc: "Mutasd be, hogyan támogatja az Eco Connect az új ügyfelek megszerzését.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Növeld a fenntartható ügyfélkapcsolatokat",
      desc: "Ez lehet a záró pont, amely a hosszú távú előnyöket hangsúlyozza.",
      icon: <CursorArrowRaysIcon />,
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
