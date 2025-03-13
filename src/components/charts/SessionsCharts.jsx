import React from "react";
import id1 from "./../../services/mocks/user/id1.json";
import activity from "./../../services/mocks/user/1/activity.json";
import averageSessions from "./../../services/mocks/user/1/average-sessions.json";
import performance from "./../../services/mocks/user/1/performance.json";
import "./../../assets/styles/components/charts/_sessionsCharts.scss";
import {
    LineChart,
    Line,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useParams } from "react-router";

function SessionsCharts() {
    // let params = useParams();
    // console.log(params.id);
    // console.log(averageSessions.data.sessions);

    return (
        <div className="sessionsCharts-container">
            <ResponsiveContainer aspect={258 / 263}>
                <LineChart
                    width="100%"
                    height="100%"
                    data={averageSessions.data.sessions}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis dataKey="sessionLength" />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#8884d8"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SessionsCharts;
