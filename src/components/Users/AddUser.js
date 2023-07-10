import React, { useState } from "react";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    // Check if the inputs are empty or invalid
    if (formData.name.trim().length === 0 || formData.age.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+formData.age < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(formData);
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", age: "" });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
        <div>{/* <ErrorModal errorMessage={error}></ErrorModal> */}</div>
      </Card>
    </div>
  );
};

export default AddUser;
