import React from "react";
import id1 from "./../../services/mocks/user/id1.json";
import activity from "./../../services/mocks/user/1/activity.json";
import averageSessions from "./../../services/mocks/user/1/average-sessions.json";
import performance from "./../../services/mocks/user/1/performance.json";
import "./../../assets/styles/components/charts/_performanceCharts.scss";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { useParams } from "react-router";

function PerformanceCharts() {
    // let params = useParams();
    // console.log(params.id);
    // console.log(performance.data);
    // console.log(performance.data.data);
    // console.log(performance.data.kind);

    function formatingActivityData(obj) {
        const result = [];
        const perfDataArray = obj.data.data;
        const perfKindDictionnary = obj.data.kind;

        for (let index = 0; index < perfDataArray.length; index++) {
            const currentKind = Object.getOwnPropertyDescriptor(
                perfDataArray[index],
                "kind"
            ).value;
            const currentresult = {};
            currentresult.kind = perfKindDictionnary[currentKind];
            currentresult.value = perfDataArray[index].value;
            result.push(currentresult);
        }
        console.log(result);
        return result;
    }
    const formatedData = formatingActivityData(performance);
    return (
        <div className="performanceCharts-container">
            <ResponsiveContainer aspect={258 / 263}>
                <RadarChart
                    outerRadius={90}
                    width="100%"
                    height="100%"
                    data={formatedData}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                    startAngle={-150}
                    endAngle={210}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
                    <PolarRadiusAxis angle={30} />
                    <Radar
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceCharts;
