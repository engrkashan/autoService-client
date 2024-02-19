import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AvailableTimeForm from "./AvailableTimeForm";
import BookingApp from "./BookingApp";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

class Parent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AvailableTimeForm />
          <BookingApp />
        </div>
      </Provider>
    );
  }
}

export default Parent;
