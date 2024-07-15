import { useContext } from "react";
import { UserDataContext } from "../../Context/userDataContext/userDataContext";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
    const { setCusId, setSearchInputValue, searchInputValue, filteredData } =
        useContext(UserDataContext);
    return (
        <>
            <div className="px-2 mb-2 flex items-center gap-2">
                <div className="relative w-full">
                    <input
                        autoComplete="off"
                        id="search"
                        className="rounded-3xl focus:outline-none w-full border-2 placeholder:text-xs px-3 py-1 focus:border-primary-color-2"
                        type="text"
                        value={searchInputValue}
                        placeholder="Search by Customer Name..."
                        onChange={(e) => {
                            setSearchInputValue(e.target.value);
                            filteredData.map((cus) =>
                                cus.name
                                    .toLowerCase()
                                    .includes(e.target.value.toLowerCase())
                                    ? setCusId(cus.id)
                                    : setCusId(3)
                            );
                        }}
                    />
                    <label
                        htmlFor="search"
                        className="absolute top-1/2 -translate-y-1/2 right-[20px]"
                    >
                        <IoSearchOutline className=" text-slate-300 text-lg" />
                    </label>
                </div>
                <button
                    onClick={() => {
                        setSearchInputValue("");
                        setCusId(3);
                    }}
                    className="px-4 hover:border-primary-color-2 hover:bg-primary-bg-3 hover:text-white font-medium duration-200  py-2 uppercase  text-sm rounded-3xl border-2"
                >
                    Reset
                </button>
            </div>
        </>
    );
}
