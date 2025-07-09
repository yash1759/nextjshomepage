import AboveFold from "../components/AboveFold/AboveFold";
import Container from "../components/container/Container";
import Howtowork from "../components/Howtowork/Howtowork";
import Growth from "../components/Growth/Growth";
import Faq from "../components/Faq/Faq";
import Contact from "../components/Contact/Contact";
import Team from "../components/Team/Team";

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
      <Team />
      <Faq />
      <Contact />
    </div>
  );
}

export default Home;  