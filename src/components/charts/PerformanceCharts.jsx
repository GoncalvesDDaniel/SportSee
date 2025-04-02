import React from "react";
import "./../../assets/styles/components/charts/_performanceCharts.scss";
import {
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
                    outerRadius=" 75%"
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="#FFFFFF"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#FFFFFF", fontSize: 12 }}
                    />
                    <PolarRadiusAxis tick={false} axisLine={false} />
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
