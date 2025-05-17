import HomeComp from "../components/HomeComp";
import LoadingScreen from "../components/LoadingScreen";


const Home = ({notes}) => {
  
  return (
    <div className="">
      <HomeComp notes={notes} />
    </div>
  );
};

export default Home;