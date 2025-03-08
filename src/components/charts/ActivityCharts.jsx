import React from "react";
import mockedActivityData from "./../../services/mocks/mockedActivityData.json";
import "./../../assets/styles/components/charts/_activityCharts.scss";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function ActivityCharts() {
    return (
        <div className="activityCharts-container">
            <BarChart width={730} height={250} data={mockedActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default ActivityCharts;
