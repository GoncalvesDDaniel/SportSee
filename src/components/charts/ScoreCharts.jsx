import React from "react";
import id1 from "./../../services/mocks/user/id1.json";
import activity from "./../../services/mocks/user/1/activity.json";
import averageSessions from "./../../services/mocks/user/1/average-sessions.json";
import performance from "./../../services/mocks/user/1/performance.json";
import "./../../assets/styles/components/charts/_scoreCharts.scss";
import {
    PieChart,
    Pie,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Cell,
} from "recharts";
import { useParams } from "react-router";

const data = [
    { name: "score", value: 0.45 },
    { name: "noAchive", value: 0.55 },
];
const COLORS = ["#FF0000", "#FFF"];

function ScoreCharts() {
    // let params = useParams();
    // console.log(params.id);
    // console.log(activity.data.sessions);

    return (
        <div className="scoreCharts-container">
            <ResponsiveContainer aspect={835 / 320}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        innerRadius={20}
                        outerRadius={30}
                        fill="#8884d8"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ScoreCharts;
