import React from "react";
import "./../../assets/styles/components/charts/_performanceCharts.scss";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";

function PerformanceCharts(props) {
    return (
        <div className="performanceCharts-container">
            <ResponsiveContainer width="100%" aspect={258 / 263}>
                <RadarChart
                    data={props.data}
                    // margin={{ right: 5, left: 5 }}
                    // margin={{ top: 10, right: 5, bottom: 10, left: 5 }}
                    // margin={{ top: 40, right: 50, bottom: 40, left: 50 }}
                    outerRadius="70%"
                >
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="#FFFFFF"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#FFFFFF", fontSize: 12 }}
                    />
                    <PolarRadiusAxis
                        axisLine={{ stroke: "transparent" }}
                        tick={{ fill: "transparent" }}
                    />
                    <Radar
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceCharts;
