import React from "react";
import Banner from "./Banner";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";
import FooterPage from "./FooterPage";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Processing from "./Processing";
import Searchbar from "./Searchbar";
import Subscription from "./Subscription";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <HeroSection />
            <Searchbar />
            <Processing />
            <Subscription />

            {/*customer review */}
            <DownloadApp />
            <Footer />
            <FooterPage />
        </div>
    );
};

export default Home;
