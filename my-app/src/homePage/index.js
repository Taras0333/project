import React, { Component } from "react";
import "./homePage.css";
import Header from "./header";
import Menu from "./menu";
import "./menu.css";
import Table from "./table";
import Smile from "./images/smile.svg";
import Pet from "./images/pet.svg";
import Food from "./images/food.svg";
import Clothes from "./images/clothes.svg";
import Health from "./images/health.svg";
import Restoraunts from "./images/restor.svg";
import Transport from "./images/transport.svg";
import Utility from "./images/utility.svg";
import Other from "./images/other.svg";
import AddPage from "../add page/addPage";
import LandingPage from "../landingPage/index";
class HomePage extends Component {
  state = {
    char: [
      {
        fun: 30,
        pets: 65,
        food: 200.9,
        clothes: 154,
        health: 85,
        restoraunts: 86.57,
        transport: 51,
        bills: 134.5,
        other: 90,
      },
    ],

    sum: 0,
    titles: 4,
    icons: [],
    isActive: true,
    landingPage: false,
    charge: 0,
    ch: 0,
  };

  componentDidMount() {
    this.sum();
    this.getIcons();
    this.eachTitle();
  }
  getIcons = () => {
    this.setState({
      icons: [
        Smile,
        Pet,
        Food,
        Clothes,
        Health,
        Restoraunts,
        Transport,
        Utility,
        Other,
      ],
    });
  };
  sum = () => {
    let sum = 0;
    this.state.char.forEach((el) => {
      Object.values(el).map((e) => {
        sum += e;
      });
    });
    this.setState({
      sum: sum,
    });
  };
  eachCharge = () => {
    let arr = [];
    this.state.char.map((el) => {
      arr = Object.values(el);
    });
    return arr;
  };
  eachTitle = () => {
    let arr = [];
    this.state.char.map((el) => {
      arr = Object.keys(el);
    });
    this.setState({
      titles: arr,
    });
  };

  homePageToggle = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  selectCategory = (e) => {
    const category = e.target.value;
    this.setState((prevState) => ({
      char: prevState.char.map((obj, i) => {
        if (category === "fun") {
          return Object.assign(obj, {
            fun: prevState.char[i].fun + this.state.ch,
          });
        } else if (category === "pets") {
          return Object.assign(obj, {
            pets: prevState.char[i].pets + this.state.ch,
          });
        } else if (category === "food") {
          return Object.assign(obj, {
            food: prevState.char[i].food + this.state.ch,
          });
        } else if (category === "clothes") {
          return Object.assign(obj, {
            clothes: prevState.char[i].clothes + this.state.ch,
          });
        } else if (category === "health") {
          return Object.assign(obj, {
            health: prevState.char[i].health + this.state.ch,
          });
        } else if (category === "restoraunts") {
          return Object.assign(obj, {
            restoraunts: prevState.char[i].restoraunts + this.state.ch,
          });
        } else if (category === "transport") {
          return Object.assign(obj, {
            transport: prevState.char[i].transport + this.state.ch,
          });
        } else if (category === "bills") {
          return Object.assign(obj, {
            bills: prevState.char[i].bills + this.state.ch,
          });
        } else if (category === "other") {
          return Object.assign(obj, {
            other: prevState.char[i].other + this.state.ch,
          });
        }
      }),
    }));
  };

  chargesState = (e) => {
    let newCharge = +e.target.value;
    this.setState({
      ch: newCharge,
    });
  };
  startToggle = () => {
    this.setState({
      landingPage: !this.state.landingPage,
    });
    this.showSideBar();
  };
  showSideBar = () => {
    let bar = document.querySelector(".side-manu");
    console.log(bar);
    bar.style = "display: flex";
  };
  render() {
    return (
      <div className="home-page">
        {this.state.landingPage && (
          <>
            {this.state.isActive && (
              <>
                <Header sum={this.state.sum} />
                <Menu btn={this.homePageToggle} />
                <div className="table-cont">
                  {this.eachCharge().map((el, i) => (
                    <Table
                      charges={el}
                      title={this.state.titles[i]}
                      img={this.state.icons[i]}
                    />
                  ))}
                </div>
              </>
            )}
            {!this.state.isActive && (
              <AddPage
                sum={this.state.sum}
                btn={this.homePageToggle}
                value={this.chargesState}
                select={this.selectCategory}
              />
            )}
          </>
        )}
        {!this.state.landingPage && <LandingPage btn={this.startToggle} />}
      </div>
    );
  }
}
export default HomePage;
