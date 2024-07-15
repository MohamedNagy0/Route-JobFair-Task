import { Chart as ChartJS } from "chart.js/auto";
import { useContext } from "react";
import { Bar, Line } from "react-chartjs-2";
import { UserDataContext } from "../../Context/userDataContext/userDataContext";
export default function Charts() {
    const { userTraDates, userTraAmounts } = useContext(UserDataContext);

    return (
        <>
            <div className="wrapper grid grid-cols-12 gap-2 md:gap-12">
                {/*Bar Chart */}
                <div className="max-md:col-span-12 col-span-6 border p-2 rounded-3xl">
                    <div className="flex justify-center  mx-auto">
                        <Bar
                            height={300}
                            data={{
                                labels: userTraDates,
                                datasets: [
                                    {
                                        label: "Amount",
                                        data: userTraAmounts,
                                        borderRadius: 5,
                                        backgroundColor: ["#ff9d08", "#18a8e9"],
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>

                {/*Line Chart */}
                <div className="max-md:col-span-12 col-span-6 border p-2 rounded-3xl">
                    <div className="flex justify-center mx-auto">
                        <Line
                            height={300}
                            data={{
                                labels: userTraDates,
                                datasets: [
                                    {
                                        label: "Amount",
                                        data: userTraAmounts,
                                        borderColor: ["#591fb0"],
                                        backgroundColor: ["#ff9d08"],
                                    },
                                ],
                            }}
                            options={{
                                elements: {
                                    line: {
                                        tension: 0.5,
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
