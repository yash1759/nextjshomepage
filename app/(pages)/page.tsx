import AboveFold from "../components/AboveFold/AboveFold";
import Container from "../components/container/Container";
import Howtowork from "../components/Howtowork/Howtowork";
import Growth from "../components/Growth/Growth";
import Faq from "../components/Faq/Faq";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div className="">
      <AboveFold />
      <div className="bg-[#0C182A]">
        <Container>
          <Howtowork />

        </Container>
      </div>
      <Growth />
      <Faq />
      <Contact />
    </div>
  );
}

export default Home;  