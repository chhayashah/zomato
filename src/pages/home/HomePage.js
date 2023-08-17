import React, { useState } from 'react'
import Header from '../../components/common/header/Header';
import TabOption from '../../components/common/tabOptions/TabOption';
import Footer from '../../components/common/footer/Footer';
import Delivery from '../../components/common/delivery/Delivery';
import DiningOut from '../../components/common/diningOut/DiningOut';
import Nightlight from '../../components/nightLife/Nightlight';

const HomePage = () => {

    const [activeTab,setActivetab] = useState("Delivery");


  return (
    <div>
        <Header/>
        <TabOption activeTab={activeTab} setActivetab={setActivetab}/>
        
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  );
};

const getCorrectScreen = (tab) =>{
    switch (tab) {
        case "Delivery":
            return <Delivery/>;
            case "Dining Out":
            return <DiningOut/>;
            case "Nightlife":
            return <Nightlight/>;
            default:
            return <Delivery/>;
    }
};

export default HomePage;