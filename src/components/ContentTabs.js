import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function ContentTabs() {
    return (
        <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
            <Tab eventKey="one" title="Lorem">
                Tab 1
            </Tab>
            <Tab eventKey="two" title="Ipsem">
                Tab 2
            </Tab>
            <Tab eventKey="three" title="Dolor">
                Tab 3
            </Tab>
        </Tabs>
    );
}

export default ContentTabs;
