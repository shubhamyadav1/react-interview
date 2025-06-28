import { useState, useEffect } from "react";

const UseStateHook = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    console.log("Updated userData:", userData);
  }, [userData]);

  return (
    <div>
      <h3>
        Q.1 Build a form containing First name, last name and email. Use only
        one state to manage all fields
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Enter Email "
          name="email"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
      <p>First Name: {userData.firstname}</p>
      <p>Last Name: {userData.lastname}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};
export default UseStateHook;
