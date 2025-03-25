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
    // console.log(activity.data.sessions);

    return (
        <div className="activityCharts-container">
            <ResponsiveContainer aspect={835 / 320}>
                <BarChart
                    data={activity.data.sessions}
                    barGap={8}
                    barCategoryGap={8}
                    margin={{ top: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="kg" orientation="right" />
                    <YAxis yAxisId="kCal" orientation="left" hide />
                    <Tooltip />
                    <Legend
                        align="right"
                        verticalAlign="top"
                        iconType="circle"
                    />
                    <Bar
                        yAxisId="kg"
                        dataKey="kilogram"
                        fill="#000"
                        barSize={7}
                    />

                    <Bar
                        yAxisId="kCal"
                        dataKey="calories"
                        fill="#E60000"
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ActivityCharts;
