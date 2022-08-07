
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "4",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "5",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "6",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "7",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "8",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "9",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "10",
        uv: 390,
        pv: 4300,
        amt: 2100
    },
    {
        name: "11",
        uv: 3660,
        pv: 4900,
        amt: 2100
    },
    {
        name: "12",
        uv: 5990,
        pv: 4900,
        amt: 2200
    },
    {
        name: "13",
        uv: 5990,
        pv: 7300,
        amt: 2500
    },
    {
        name: "14",
        uv: 390,
        pv: 4300,
        amt: 2100
    },
    {
        name: "15",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "16",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "17",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "18",
        uv: 3660,
        pv: 4900,
        amt: 2100
    },
    {
        name: "19",
        uv: 5990,
        pv: 4900,
        amt: 2200
    },
    {
        name: "20",
        uv: 5990,
        pv: 7300,
        amt: 2500
    },
    {
        name: "21",
        uv: 390,
        pv: 4300,
        amt: 2100
    },
    {
        name: "22",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "23",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "24",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "25",
        uv: 3660,
        pv: 4900,
        amt: 2100
    },
    {
        name: "26",
        uv: 5990,
        pv: 4900,
        amt: 2200
    },
    {
        name: "27",
        uv: 5990,
        pv: 7300,
        amt: 2500
    },
    {
        name: "28",
        uv: 390,
        pv: 4300,
        amt: 2100
    },
    {
        name: "29",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "30",
        uv: 2780,
        pv: 3908,
        amt: 2000
    }
];

export default function CustomerMap() {
    return (
        <BarChart
            width={717}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#FAC7B6" />
            <Bar dataKey="uv" stackId="a" fill="#EA7A9A" />
        </BarChart>
    );
}
