import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Processing from "./Processing";
import Searchbar from "./Searchbar";
import SearchCarousel from "./SearchCarousel";

const Home = () => {
    return (
        <div>
        <Navbar />
        <Banner /> 
        <Searchbar />
        <SearchCarousel />
        <Processing />
            
        </div>
    );
};

export default Home;
