import { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { UserDataContext } from "../../Context/userDataContext/userDataContext";

export default function DoughnutComponent() {
    const { userTraDates, userTraAmounts } = useContext(UserDataContext);

    //Doughnut chart colors
    const colors = [
        "#36a2eb",
        "#ff6384",
        "#ff9f40",
        "#c9cbcf",
        "#4bc0c0",
        "#ffcd56",
        "#9966ff",
    ];
    return (
        <>
            <Doughnut
                data={{
                    labels: userTraDates,
                    datasets: [
                        {
                            label: "Amount",
                            data: userTraAmounts,
                            backgroundColor: colors,
                        },
                    ],
                }}
                options={{
                    plugins: {
                        title: {
                            text: "Amount Chart Per Day",
                        },
                    },
                }}
            />
        </>
    );
}
