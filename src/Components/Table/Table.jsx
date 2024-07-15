import React, { useContext } from "react";
import TransactionDetails from "../TransactionDetails/TransactionDetails";
import { UserDataContext } from "../../Context/userDataContext/userDataContext";
import Search from "../Search/Search";

export default function Table() {
    const { filteredData } = useContext(UserDataContext);
    return (
        <>
            <div className="max-md:col-span-12 col-span-8">
                {/* Search */}
                <Search />

                {/* Table */}
                <div className="border rounded-xl overflow-auto max-h-[400px]   mx-auto">
                    <table className="table-auto overflow-hidden text-sm w-full min-w-[760px]">
                        <thead className="bg-primary-bg-2 text-white">
                            <tr>
                                <th className="py-3 text-start px-5">
                                    Profile Photo & Name
                                </th>
                                <th className="py-3 px-5">Customer ID</th>
                                <th className="py-3 px-5">
                                    Transaction Number
                                </th>
                                <th className="py-3 px-5">Transaction Date</th>
                                <th className="py-3 px-5">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <TransactionDetails />
                        </tbody>
                    </table>
                    {filteredData.length == 0 ? (
                        <p className="w-full text-center py-4 text-white bg-slate-400">
                            Not Found customer name or amount
                        </p>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}
