import { Spacer32 } from "@/components";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
import TranslatorSection from "./sections/TranslatorSection";
import TipsSection from "./sections/TipsSection";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-between pt-36 min-[1280px]:px-[70px]">
        <TranslatorSection />
        <Spacer32 />
        <TipsSection />
        <Spacer32 />
      </main>
      <Footer />
    </>
  );
};

export default Home;
