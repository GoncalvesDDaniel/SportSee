import React from "react";
import PropTypes from "prop-types";
import "./../../assets/styles/charts/_activityCharts.scss";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

/**
 * Composant interne a Recharts pour afficher une tooltips personnalisée
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-activity">
                {/* payload[0] = (kg) */}
                <p>{`${payload[0].value}kg`}</p>
                {/* payload[1] = (kCal) */}
                <p>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }
    return null;
};

/**
 * Affiche le graphique de l'activité quotidienne de l'utilisateur.
 * @component
 * @param {object} props
 * @param {Array<object>} props.data - Données formatées
 */
function ActivityCharts(props) {
    return (
        <section className="activityCharts-container">
            <div className="activityCharts-header">
                <h3 className="activityCharts-header_title">
                    Activité quotidienne
                </h3>
                <div className="activityCharts-header_legend">
                    <ul>
                        <li className="list-bullet black">Poids (kg)</li>
                        <li className="list-bullet red">
                            Calories brûlées (kCal)
                        </li>
                    </ul>
                </div>
            </div>
            <ResponsiveContainer aspect={835 / 320}>
                <BarChart
                    data={props.data}
                    barGap={8}
                    barCategoryGap={8}
                    margin={{ top: 50, right: 30, left: 30, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        // axisLine={false}
                        tick={{ fontSize: 14, fill: "#9B9EAC" }}
                        dy={15}
                        stroke="#DEDEDE"
                    />
                    <YAxis
                        yAxisId="kg"
                        dataKey="kilogram"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 14, fill: "#9B9EAC" }}
                        dx={15}
                        // Domaine dynamique
                        domain={["dataMin - 1", "dataMax + 1"]}
                        allowDecimals={false}
                    />
                    <YAxis
                        yAxisId="kCal"
                        dataKey="calories"
                        orientation="left"
                        hide
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
                    />
                    <Bar
                        yAxisId="kg"
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={7}
                        radius={[10, 10, 0, 0]}
                    />

                    <Bar
                        yAxisId="kCal"
                        dataKey="calories"
                        fill="#E60000"
                        barSize={7}
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
}
ActivityCharts.PropTypes = {
    data: PropTypes.array.isRequired,
};

export default ActivityCharts;
