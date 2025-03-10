import React from "react";
import mockedActivityData from "./../../services/mocks/mockedActivityData.json";
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

function ActivityCharts() {
    return (
        <div className="activityCharts-container">
            <ResponsiveContainer aspect={835 / 320}>
                <BarChart width="100%" height="100%" data={mockedActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ActivityCharts;
