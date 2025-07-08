import AboveFold from "../components/AboveFold/AboveFold";
import Container from "../components/container/Container";

const Home = () => {
  return (
    <div>
        <AboveFold />
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to Sybotstack</h1>
        </div>
      </Container>
    </div>
  );
}

export default Home;  