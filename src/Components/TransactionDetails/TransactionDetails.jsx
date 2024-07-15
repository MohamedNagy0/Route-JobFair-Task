import { useContext } from "react";
import formatMoney, { dateFormat } from "../../Helper/Helper";
import { UserDataContext } from "../../Context/userDataContext/userDataContext";

export default function TransactionDetails() {
    const {
        cusId,
        setCusId,
        setSearchInputValue,
        transactionsData,
        filteredData,
    } = useContext(UserDataContext);

    return (
        <>
            {filteredData.map((cus, index) => (
                <tr
                    onClick={() => {
                        setSearchInputValue(cus.name);
                        setCusId(cus.id);
                    }}
                    key={cus.id}
                    className={`${
                        index == filteredData.length - 1 ? "" : "border-b"
                    } ${
                        index % 2 == 1 ? "bg-slate-50" : ""
                    } hover:bg-green-500 duration-200 cursor-pointer  hover:text-white group ${
                        cus.id == cusId ? "bg-green-500 text-white" : ""
                    }`}
                >
                    {/* User name & Profile photo*/}
                    <td className="px-4">
                        <figure className="flex items-center text-center gap-3">
                            <div className="size-[30px] group-hover:scale-150 duration-300  overflow-hidden rounded-full">
                                <img
                                    src={cus.img}
                                    className="w-full"
                                    alt={`My name is ${cus.name} and this is my profile photo`}
                                />
                            </div>
                            <figcaption>{cus.name}</figcaption>
                        </figure>
                    </td>

                    {/* UserId */}
                    <td>
                        <span>#</span>
                        {cus.id}
                    </td>

                    {/* Transaction Id*/}
                    <td className="px-4">
                        <div className="flex flex-col gap-1">
                            {transactionsData.map((tra) =>
                                tra.customer_id == cus.id ? (
                                    <span key={tra.id}>#{tra.id}</span>
                                ) : (
                                    ""
                                )
                            )}
                        </div>
                    </td>

                    {/* Date */}
                    <td className="space-x-1 py-3">
                        <div className="flex flex-col gap-1">
                            {transactionsData.map((tra) =>
                                tra.customer_id == cus.id ? (
                                    <span key={tra.id}>
                                        {dateFormat(tra.date)}
                                    </span>
                                ) : (
                                    ""
                                )
                            )}
                        </div>
                    </td>

                    {/* Amount */}
                    <td className="px-4">
                        <div className="flex flex-col gap-1">
                            {transactionsData.map((tra) =>
                                tra.customer_id == cus.id ? (
                                    <span key={tra.id}>
                                        {formatMoney(tra.amount)}
                                    </span>
                                ) : (
                                    ""
                                )
                            )}
                        </div>
                    </td>
                </tr>
            ))}
        </>
    );
}
