import React from 'react'

export default function Sponsers() {
    return (
        <div>

            <section id="client-section">
                <h1 className="h-primary center">Our Clients</h1>
                <div id="clients">
                    {/* <div className="client-item" id ="transZ">
                        <img src={require("./Images/eandj.jpg")} alt="Our Client" />
                    </div>
                    <div className="client-item" id ="transZ">
                        <img src={require("./Images/castle.png")} alt="Our Client" />
                    </div>

                    <div className="client-item" id ="transZ">
                        <img src={require("./Images/castle.png")} alt="Our Client" />
                    </div>
                    <div className="client-item" id ="transZ">
                        <img src={require("./Images/treasurywines.png")} alt="Our Client" />
                    </div> */}


                    <div className="box">
                    <div id="shadowbox">
                    <img src={require("./Images/eandj.jpg")}alt="Logo" />
                    </div>
                    <div id="shadowbox">
                    <img src={require("./Images/logo.jpg")}alt="Logo" />
                    </div>
                    <div id="shadowbox">
                    <img src={require("./Images/castle.png")}alt="Logo" />
                    </div>
                    <div id="shadowbox">
                    <img src={require("./Images/treasurywines.png")}alt="Logo" />
                    </div>
                </div>
                </div>
            </section>
    {/* <div classname="#"> */}
            <section id="wines-container ">
                <h1 className="h-primary center">World's Best WHISKY</h1>
                <div id="wines">
                    <div className="box " id ="transZ">
                        <img src={require("./Images/Eradour_Distillery.jpg")} alt="" />
                        <h2 className="h-secondary center">Edradour Distillery</h2>
                        <p className="center">As one of Scotland/’s smallest Scotch whisky distilleries, Edradour offers visitors a very different experience to some of the larger producers. First established in 1825, the distillery is described as the “last stronghold of traditional handmade single malt from a farm distillery”. Edradour does not use any computer technology in its whisky creation process, offering a unique insight into the traditional Scotch distillation process.</p>
                    </div>
                    <div className="box" id ="transZ">
                        <img src={require("./Images/Strathisla.gif")} alt="" />
                        {/* <img src={require("./Images/logo.jpg")} alt="logo"/> */}
                        <h2 className="h-secondary center">Strathisla Distillery</h2>
                        <p className="center">Owned by Chivas Brothers, Strathisla claims to be the oldest continuously operating distillery in the Scottish Highlands, having first been established in 1786 on the banks of the River Isla. The Highland distillery was bought by the French drinks giant at auction in 1950 and has since produced liquid principally htmlFor the Chivas Regal and Royal Salute blends. With its beautiful cobbled courtyard and double pagodas, the distillery is also considered one of the most picturesque in Scotland. The guided tour of Strathisla Distillery takes visitors through the bonded warehouses and includes a tutored tasting session.</p>
                    </div>
                    <div className="box" id ="transZ">
                        <img src={require("./Images/Glenmorangie_Distillery.jpg")} alt="" />
                        <h2 className="h-secondary center">Glenmorangie Distillery</h2>
                        <p className="center">Located by the idyllic coast of Dornoch Firth, the legendary Men of Tain have been producing single malts at the Glenmorangie Distillery since 1843. With access to both the distilleries and warehouses, expert tour guides give guests the opportunity to experience all stages of the whisky making process from mashing and fermenting to distilling and maturing, topped off with a dram or two of the finished product. A range of tours are offered to visitors from The Original – which leads guests around the distillery depicting the story of the flagship expression, Glenmorangie Original – to The Heritage Tour. </p>
                    </div>
                    <div className="box" id ="transZ">
                        <img src={require("./Images/Strathisla.gif")} alt="" />
                        {/* <img src={require("./Images/logo.jpg")} alt="logo"/> */}
                        <h2 className="h-secondary center">Strathisla Distillery</h2>
                        <p className="center">Owned by Chivas Brothers, Strathisla claims to be the oldest continuously operating distillery in the Scottish Highlands, having first been established in 1786 on the banks of the River Isla. The Highland distillery was bought by the French drinks giant at auction in 1950 and has since produced liquid principally htmlFor the Chivas Regal and Royal Salute blends. With its beautiful cobbled courtyard and double pagodas, the distillery is also considered one of the most picturesque in Scotland. The guided tour of Strathisla Distillery takes visitors through the bonded warehouses and includes a tutored tasting session.</p>
                    </div>
                    <div className="box" id ="transZ">
                        <img src={require("./Images/Glenmorangie_Distillery.jpg")} alt="" />
                        <h2 className="h-secondary center">Glenmorangie Distillery</h2>
                        <p className="center">Located by the idyllic coast of Dornoch Firth, the legendary Men of Tain have been producing single malts at the Glenmorangie Distillery since 1843. With access to both the distilleries and warehouses, expert tour guides give guests the opportunity to experience all stages of the whisky making process from mashing and fermenting to distilling and maturing, topped off with a dram or two of the finished product. A range of tours are offered to visitors from The Original – which leads guests around the distillery depicting the story of the flagship expression, Glenmorangie Original – to The Heritage Tour. </p>
                    </div>
                </div>
            </section>
        {/* </div> */}
    </div>
    )
}
