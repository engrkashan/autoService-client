import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AvailableTimeForm = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [deletedIndices, setDeletedIndices] = useState([]);
  const [unbookedSlots, setUnbookedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUnbookedSlots();
  }, []);

  const fetchUnbookedSlots = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/booking/get-unbooked-slots`
      );
      setUnbookedSlots(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching unbooked slots:", error);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleAddTime = async () => {
    if (selectedTime !== "") {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/booking/create-slots`,
          {
            hour: selectedTime.split(":")[0],
            minute: selectedTime.split(":")[1],
          }
        );
        setSelectedTime("");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Time slot added successfully!",
        }).then(() => {
          window.location.reload();
        });
        fetchUnbookedSlots();
      } catch (error) {
        console.error("Error adding time:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add time slot",
        });
      }
    }
  };

  const removeTime = async (slotId, index) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/booking/delete-slots/${slotId}`
      );
      setDeletedIndices([...deletedIndices, index]);
      fetchUnbookedSlots();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Time slot removed successfully!",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error removing time:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to remove time slot",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="formContainer">
        <h1 className="special-margin">Choose available time</h1>
        <Clock onTimeSelect={handleTimeSelect} onAddTime={handleAddTime} />
        <div>
          <h3 className="special-margin">You've added these times:</h3>
          <div className="small-font">
            (to remove wrong time just click on it)
          </div>
          <ul>
            {unbookedSlots.map((slot, index) =>
              !deletedIndices.includes(index) ? (
                <button
                  className="addedTimeButton"
                  onClick={() => removeTime(slot.id, index)}
                  key={index}
                >
                  <li>{`${slot.hour}:${slot.minute}`}</li>
                </button>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Clock = ({ onTimeSelect, onAddTime }) => {
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");

  const handleTimeSelect = () => {
    if (selectedHour !== "" && selectedMinute !== "") {
      const time = selectedHour + ":" + selectedMinute;
      onTimeSelect(time);
      setSelectedHour("");
      setSelectedMinute("");
    }
  };

  const handleButtonClick = () => {
    handleTimeSelect();
    onAddTime();
  };

  return (
    <div className="clock">
      <label htmlFor="hour" className="label-text">
        Hour:{" "}
      </label>
      <br />
      <select
        id="hour"
        className="timeInput"
        value={selectedHour}
        onChange={(e) => setSelectedHour(e.target.value)}
      >
        <option value="">Choose hour</option>
        {Array.from({ length: 24 }, (_, i) => (
          <option value={i < 10 ? `0${i}` : i} key={i}>
            {i < 10 ? `0${i}` : i}
          </option>
        ))}
      </select>
      <br />

      <label htmlFor="minute" className="label-text">
        Minute:{" "}
      </label>
      <br />
      <select
        id="minute"
        className="timeInput"
        value={selectedMinute}
        onChange={(e) => setSelectedMinute(e.target.value)}
      >
        <option value="">Choose minutes</option>
        {Array.from({ length: 60 }, (_, i) => (
          <option value={i < 10 ? `0${i}` : i} key={i}>
            {i < 10 ? `0${i}` : i}
          </option>
        ))}
      </select>
      <br />
      <button
        className="clockButton pasirinktiButton"
        onClick={handleButtonClick}
      >
        Add time
      </button>
    </div>
  );
};

export default AvailableTimeForm;
