import React, { useState } from "react";

const withLogin = (WrappedComponent) => {
  return (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
      console.log("Login successful");
      setIsLoggedIn(true);
    }

    function logout() {
      console.log("Logout successful");
      setIsLoggedIn(false);
    }

    return (
      <WrappedComponent
        login={login}
        logout={logout}
        isLoggedIn={isLoggedIn}
        {...props}
      />
    );
  };
};

export default withLogin;
