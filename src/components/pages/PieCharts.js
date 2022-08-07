import React from 'react'
import { PieChart, Pie } from "recharts";

const data = [{ name: "Group A", value: 500 }];

const PieCharts = () => {
    return (
        <PieChart width={600} height={210}>
            <Pie
                cx={180}
                cy={100}
                data={data}
                innerRadius={60}
                outerRadius={100}
                fill="#EA7A9A"
            >
            </Pie>
        </PieChart>
    )
}

export default PieCharts