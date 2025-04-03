import React from "react";
// import "./../../assets/styles/charts/scoreCharts";
import "./../../assets/styles/charts/_scoreCharts.scss";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

function ScoreCharts(props) {
    //creation d'un tableau car l'astuce consiste a utiliser un pie charts avec 2 valeurs
    const userScore = props.data;
    const data = [
        { name: "score", value: userScore },
        { name: "remainder", value: 1 - userScore }, // Le reste pour faire 100%
    ];
    const COLORS = ["#FF0000", "transparent"];
    // Creer un cercle plein de fond blanc pour faire correspondre avec la maquette
    const backgroundCircleData = [{ name: "background", value: 1 }];

    return (
        <section className="scoreCharts-container">
            <h3 className="scoreCharts-title">Score</h3>
            <div className="scoreCharts-info">
                {/* affiche un entier du score en pourcentage */}
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
                        // fill="#8884d8"
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

export default ScoreCharts;
