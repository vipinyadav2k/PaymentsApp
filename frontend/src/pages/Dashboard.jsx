import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export const Dashboard = () => {
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const fetchAmount = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        const formattedBalance = parseFloat(response.data.balance).toFixed(2);
        setAmount(formattedBalance); // Adjust based on API response
      } catch (error) {
        console.error("Error fetching amount:", error);
      }
    };

    fetchAmount();
  }, []);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={amount} />
        <Users />
      </div>
    </div>
  );
};
