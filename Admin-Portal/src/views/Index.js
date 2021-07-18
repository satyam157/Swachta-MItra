/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import Tables from "components/Tables/Tables.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  const [dropdownOpen1, setOpen1] = useState(false);

  const toggle1 = () => setOpen1(!dropdownOpen1);

  const [dropdownOpen2, setOpen] = useState(false);

  const toggle2 = () => setOpen(!dropdownOpen2);

// usage: 2D array, first element = column name, second element: property of object in data array
// order added = order of columns presented in the table
const columns = [['Title','Title'],['Description','Description'],['Status','Status'],['User','User'],['Location','Location'],['Coordinates','Coordinates'],['Tag','Tag']];
const sample = [
  {
    'Title': 'Complaint1',
    'Description':'Lorem Ipsum',
    'Status': 'Pending',
    'User': 'Kartikeya',
    'Location': 'IIT Kanpur',
    'Coordinates': '(x,y)',
    'Tag': 'Plastic Waste',
  }
]
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <div>
                    <h3 className="mb-0">Complaint Record</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                    <ButtonDropdown
                      isOpen={dropdownOpen2}
                      toggle={toggle2}
                      size="sm"
                    >
                      <DropdownToggle caret color="primary">
                        {" "}
                        Filter
                      </DropdownToggle>
                      <DropdownMenu color="primary">
                        <DropdownItem>Pending</DropdownItem>
                        <DropdownItem>Completed</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <ButtonDropdown
                      isOpen={dropdownOpen1}
                      toggle={toggle1}
                      size="sm"
                    >
                      <DropdownToggle caret color="primary">
                        {" "}
                        Sort
                      </DropdownToggle>
                      <DropdownMenu color="primary">
                        <DropdownItem>Pending</DropdownItem>
                        <DropdownItem>Completed</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </Row>
              </CardHeader>
            </Card>
            <Tables columns={columns} data={sample} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
