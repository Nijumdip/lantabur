import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Processing from "./Processing";
import Searchbar from "./Searchbar";

const Home = () => {
    return (
        <div>
        <Navbar />
        <Banner /> 
        <Searchbar />
        <Processing />
            
        </div>
    );
};

export default Home;
