import React from "react";
const DateTimeInput = ({ name, date, time }) =>
  <p className="datetime">
    Date:
    <input
      type="text"
      name={`${name}_0`}
      value={date}
      className="vDateField"
      size="10"
      id={`id_${name}_0`}
    />
    <span className="datetimeshortcuts">
      &nbsp;<a href="#">Today</a>&nbsp;|&nbsp;<a href="#" id="calendarlink0">
        <span className="date-icon" title="Choose a Date" />
      </a>
    </span>
    <br />
    Time:{" "}
    <input
      type="text"
      name={`${name}_1`}
      value={time}
      className="vTimeField"
      size="8"
      id={`id_${name}_1`}
    />
    <span className="datetimeshortcuts">
      &nbsp;<a href="#">Now</a>&nbsp;|&nbsp;<a href="#" id="clocklink0">
        <span className="clock-icon" title="Choose a Time" />
      </a>
    </span>
    <br />
    <span className="timezonewarning">
      Note: You are 1 hour ahead of server time.
    </span>
  </p>;

export default DateTimeInput;
