import { Announcements } from "../components/Announcements";
import { Slider } from "../components/Slider";
import { Navbarr } from "../components/Navbarr";

export const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbarr />
      <Slider />
    </div>
  );
};
