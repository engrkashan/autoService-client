import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

class BookingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedTimes: [],
      selectedTime: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      unbookedSlots: [], 
    };
  }

  componentDidMount() {
    this.fetchUnbookedSlots();
  }

  fetchUnbookedSlots = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL; // Retrieve API URL from environment file
      const response = await axios.get(`${apiUrl}/booking/get-unbooked-slots`);
      const unbookedSlots = response.data;
      this.setState({ unbookedSlots });
    } catch (error) {
      console.error("Error fetching unbooked slots:", error);
    }
  };

  handleTimeSelection = (e) => {
    this.setState({ selectedTime: e.target.value });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  bookTime = async () => {
    try {
      const { selectedTime, name, email, phone, message } = this.state;
      if (!selectedTime || !name || !email || !phone) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all required fields.",
        });
        return;
      }

      const apiUrl = process.env.REACT_APP_API_URL ; // Retrieve API URL from environment file
      const response = await axios.post(`${apiUrl}/booking/book-slots`, {
        slotId: selectedTime,
        name,
        email,
        phone,
        message,
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: response.data.message,
      });
      this.setState((prevState) => ({
        bookedTimes: [...prevState.bookedTimes, selectedTime],
        selectedTime: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      }));
    } catch (error) {
      console.error("Error booking slot:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error booking slot. Please try again.",
      });
    }
  };

  render() {
    const { unbookedSlots, bookedTimes } = this.state;

    return (
      <div className="page-container">
        <div className="formContainer">
          <h1>Reserve time for your visit</h1>
          <form>
            <label className="bookingLabel">Choose time</label> <br />
            <select
              className="bookingInput"
              value={this.state.selectedTime}
              onChange={this.handleTimeSelection}
            >
              <option value="">Choose time</option>
              {unbookedSlots &&
                unbookedSlots.map((slot) => (
                  <option key={slot.id} value={slot.id}>
                    {slot.hour}:{slot.minute}
                  </option>
                ))}
            </select>
            <ul>
              {bookedTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
            <label className="bookingLabel" htmlFor="name">
              Name and Surename
            </label>
            <br />
            <input
              className="bookingInput"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <br />
            <label className="bookingLabel" htmlFor="email">
              E-mail address
            </label>
            <br />
            <input
              className="bookingInput"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <br />
            <label className="bookingLabel" htmlFor="phone">
              Phone number
            </label>
            <br />
            <input
              className="bookingInput"
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            <br />
            <label className="bookingLabel" htmlFor="message">
              Write a comment <br /> (example: car, problem)
            </label>
            <br />
            <input
              className="bookingInputSpecial"
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
            <br />
            <button
              className="loginButton"
              type="button"
              onClick={this.bookTime}
            >
              Reserve time
            </button>
          </form>
        </div>
        <footer>
          <h4>
            AUTO<span className="red-text">SERVISAS 222E</span>
          </h4>
          <p className="p-footer">
            Mus rasite adresu: Staniūnų g. 67a, Panevėžys
          </p>
          <p className="p-footer">Susisiekite su mumis: +37063222439</p>
        </footer>
      </div>
    );
  }
}

export default BookingApp;
