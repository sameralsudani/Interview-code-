import TrafficLight from "./TrafficLight";

import "./styles.css";

const trafficStates = {
  red: {
    backgroundColor: "red",
    duration: 4000,
    next: "green"
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 500,
    next: "red"
  },
  green: {
    backgroundColor: "green",
    duration: 3000,
    next: "yellow"
  }
};

export default function App() {
  return (
    <div className="wrapper">
      <TrafficLight trafficStates={trafficStates} />
    </div>
  );
}
