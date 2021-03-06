import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import {Welcome,TimeStamp,Greeting} from './TimeStyles';

const Time = () => {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning, Helin.";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon, Helin.";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "Good Evening, Helin.";
    } else {
      return "Please just go to bed.";
    }
  };

  return (
    <Welcome>
      <TimeStamp>
        <Moment format="LT"></Moment>
      </TimeStamp>
      <Greeting>{greeting()}</Greeting>
    </Welcome>
  );
};

export default Time;
