import React from "react";
import PropTypes from "prop-types";
import "./../../assets/styles/charts/_sessionsCharts.scss";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

/**
 * Composant interne a Recharts pour afficher une tooltips personnalisée
 */
const CustomTooltipSessions = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-sessions">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

/**
 * Affiche le graphique des sessions de l'utilisateur.
 *
 * @component
 * @param {object} props
 * @param {number} props.data
 */
function SessionsCharts(props) {
    return (
        <section className="sessionsCharts-container">
            <h3 className="sessionsCharts-title">
                Durée moyenne des
                <br /> sessions
            </h3>
            <ResponsiveContainer width="100%" aspect={258 / 263}>
                <LineChart
                    data={props.data}
                    margin={{ top: 80, right: 20, left: 20, bottom: 15 }}
                >
                    <defs>
                        <linearGradient
                            id="lineGradient"
                            x1="0%"
                            y1="0"
                            x2="100%"
                            y2="0"
                        >
                            <stop
                                offset="0%"
                                stopColor="#ffffff"
                                stopOpacity={0.4}
                            />
                            <stop
                                offset="40%"
                                stopColor="#ffffff"
                                stopOpacity={0.4}
                            />
                            <stop
                                offset="100%"
                                stopColor="#ffffff"
                                stopOpacity={1}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "rgba(255, 255, 255, 0.6)",
                            fontSize: 12,
                        }}
                        dy={10}
                        stroke="transparent"
                    />
                    <YAxis
                        dataKey="sessionLength"
                        hide={true}
                        domain={["dataMin - 15", "dataMax + 15"]}
                    />
                    <Tooltip
                        content={<CustomTooltipSessions />}
                        cursor={false}
                    />

                    <Line
                        type="basis"
                        dataKey="sessionLength"
                        stroke="url(#lineGradient)"
                        strokeLinecap="round"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            r: 4,
                            strokeWidth: 4,
                            // solution retenu pour creer un halo
                            stroke: "rgba(255, 255, 255, 0.2)",
                            fill: "#FFF",
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </section>
    );
}

SessionsCharts.propTypes = {
    data: PropTypes.array.isRequired,
};

export default SessionsCharts;
