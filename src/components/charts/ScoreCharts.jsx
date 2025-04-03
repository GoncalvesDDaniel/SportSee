import React from "react";
import PropTypes from "prop-types";
import "./../../assets/styles/charts/_scoreCharts.scss";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

/**
 * Affiche le graphique du score de l'utilisateur
 * Affiche également le pourcentage arrondi au centre du graphique.
 *
 * @component
 * @param {object} props
 * @param {number} props.data
 */
function ScoreCharts(props) {
    //creation d'un tableau, le score en rouge et le reste en transparent
    const userScore = props.data;
    const data = [
        { name: "score", value: userScore },
        { name: "remainder", value: 1 - userScore },
    ];
    const COLORS = ["#FF0000", "transparent"];

    // Creer un cercle de fond blanc pour faire correspondre avec la maquette
    const backgroundCircleData = [{ name: "background", value: 1 }];

    return (
        <section className="scoreCharts-container">
            <h3 className="scoreCharts-title">Score</h3>
            <div className="scoreCharts-info">
                <div className="scoreCharts-info_score">{`${Math.round(
                    userScore * 100
                )}%`}</div>
                <div className="scoreCharts-info_text">
                    {" "}
                    de votre
                    <br />
                    objectif
                </div>
            </div>
            <ResponsiveContainer width="100%" aspect={258 / 263}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        innerRadius="70%"
                        outerRadius="80%"
                        cornerRadius={10}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                                stroke="none"
                            />
                        ))}
                    </Pie>
                    <Pie
                        data={backgroundCircleData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius="70%"
                        fill="#FFFFFF"
                        stroke="none"
                    />
                </PieChart>
            </ResponsiveContainer>
        </section>
    );
}

ScoreCharts.propTypes = {
    data: PropTypes.number.isRequired,
};
export default ScoreCharts;
