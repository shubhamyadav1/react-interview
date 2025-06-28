import { useState, useEffect } from "react";
const UseEffectHook = () => {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    const api = await fetch("https://dummyjson.com/users");
    const res = await api.json();
    const data = res.users;
    console.log(res);
    setUsers(data);
  };

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSecond) => prevSecond + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Interval Cleared");
    };
  }, []);

  const [names, setNames] = useState("Hella");
  let name = "raj";

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.firstName}</div>;
      })}
      {seconds}
    </div>
  );
};
export default UseEffectHook;
