import React from "react";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Processing from "./Processing";
import Searchbar from "./Searchbar";

const Home = () => {
    return (
        <div>
        <Navbar />
        <Banner /> 
        <HeroSection />
        <Searchbar />
        <Processing />
            
        </div>
    );
};

export default Home;
