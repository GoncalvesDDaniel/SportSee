import React from "react";
import id1 from "./../../services/mocks/user/id1.json";
import activity from "./../../services/mocks/user/1/activity.json";
import averageSessions from "./../../services/mocks/user/1/average-sessions.json";
import performance from "./../../services/mocks/user/1/performance.json";
import "./../../assets/styles/components/charts/_activityCharts.scss";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useParams } from "react-router";

function ActivityCharts() {
    // let params = useParams();
    // console.log(params.id);
    console.log(activity.data.sessions);

    return (
        <div className="activityCharts-container">
            <ResponsiveContainer aspect={835 / 320}>
                <BarChart
                    width="100%"
                    height="100%"
                    data={activity.data.sessions}
                    barCategoryGap={8}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis dataKey="kilogram" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram" fill="#000" />
                    <Bar dataKey="calories" fill="#E60000" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ActivityCharts;
