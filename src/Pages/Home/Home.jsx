import { useContext, useEffect } from "react";
import Charts from "../../Components/Chatrs/Charts";
import DoughnutComponent from "../../Components/Doughnut/DoughnutComponent";
import Loading from "../../Components/Loading/Loading";
import { UserDataContext } from "../../Context/userDataContext/userDataContext";
import ServerError from "../../Components/ServerError/ServerError";
import Table from "../../Components/Table/Table";
import TypingAnimation from "../../Components/TypingAnimation/TypingAnimation";

export default function Home() {
    const { getAllCustomersData, filteredData, error } =
        useContext(UserDataContext);

    useEffect(() => {
        getAllCustomersData();
    }, []);

    return (
        <>
            {filteredData ? (
                <main>
                    <div className="container max-md:px-4 flex flex-col justify-center min-h-screen pb-4">
                        {/* Title */}
                        <header>
                            <h1
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                className="max-xl:text-3xl  text-7xl font-bold pl-4 mb-8 text-center"
                            >
                                Welcome to{" "}
                                <span className="text-primary-color-2 animate-pulse">
                                    Route
                                </span>{" "}
                                Tech Titans
                                <span className="text-primary-color-2">,</span>
                            </h1>
                        </header>

                        {/* Chart section */}
                        <section>
                            <Charts />
                        </section>

                        {/* Table Section */}
                        <section className="wrapper mt-8 grid gap-2 md:gap-8 grid-cols-12">
                            {/* Table and Search */}
                            <Table />

                            {/* Doughnut chart */}
                            <div className="max-md:col-span-12 max-md:-order-1 relative col-span-4">
                                <DoughnutComponent />

                                {/* typing animation */}
                                <TypingAnimation />
                            </div>
                        </section>
                    </div>
                </main>
            ) : error ? (
                <ServerError />
            ) : (
                <Loading />
            )}
        </>
    );
}
