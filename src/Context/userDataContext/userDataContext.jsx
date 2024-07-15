import React, { createContext, useState } from "react";
import axios from "axios";

/* I would love to using "Redux" for state management
 but i used "Context" because the project is small */

export const UserDataContext = createContext("");

export default function UserDataProvider({ children }) {
    const [customersData, setCustomersData] = useState(null);
    const [transactionsData, setTransactionsData] = useState(null);
    const [error, setError] = useState(false);
    const [cusId, setCusId] = useState(3);
    const [searchInputValue, setSearchInputValue] = useState("");
    const userTraDates = [];
    const userTraAmounts = [];
    let recurringIndex;

    //fetching Data from api to  get All Customers Data
    async function getAllCustomersData() {
        try {
            const { data } = await axios.get(
                "https://mohamednagy0.github.io/Route-JobFair-api/db.json"
            );
            setTransactionsData(data.transactions);
            setCustomersData(data.customers);
            setError(false);
        } catch (error) {
            setError(true);
        }
    }

    // Filter data
    const filteredData = customersData?.filter((cus) =>
        cus.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    //Handel Charts data for total amount per day
    for (let i = 0; i < transactionsData?.length; i++) {
        if (transactionsData[i].customer_id == cusId) {
            if (userTraDates.length == 0) {
                userTraDates.push(transactionsData[i].date);
                userTraAmounts.push(transactionsData[i].amount);
            } else {
                recurringIndex = userTraDates.findIndex(
                    (date) => date == transactionsData[i].date
                );
                if (recurringIndex === -1) {
                    userTraDates.push(transactionsData[i].date);
                    userTraAmounts.push(transactionsData[i].amount);
                } else {
                    userTraAmounts[recurringIndex] +=
                        transactionsData[i].amount;
                }
            }
        }
    }

    return (
        <UserDataContext.Provider
            value={{
                getAllCustomersData,
                transactionsData,
                error,
                cusId,
                setCusId,
                searchInputValue,
                setSearchInputValue,
                filteredData,
                userTraDates,
                userTraAmounts,
            }}
        >
            {children}
        </UserDataContext.Provider>
    );
}
