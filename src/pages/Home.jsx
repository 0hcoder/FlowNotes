import { useState } from "react";
import HomeComp from "../components/HomeComp";
import LoadingScreen from "../components/LoadingScreen";

const Home = ({ notes }) => {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("hasLoaded") !== "true";
  });

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem("hasLoaded", "true");
  };

  return (
    <div className="w-full relative overflow-x-hidden">
      {loading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <HomeComp />
      )}
    </div>
  );
};

export default Home;
