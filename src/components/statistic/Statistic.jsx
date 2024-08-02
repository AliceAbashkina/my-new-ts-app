import React from "react";
import { Chart } from "react-google-charts";

const Statistic = () => {

    let data = [
        ["Year", "Проведенные", "Отмененные"],
        ["Янв", 100, 8],
        ["Фев", 110, 4],
        ["Мар", 66, 2],
        ["Апр", 100, 2],
        ["Май", 100, 0],
        ["Июл", 100, 0],
        ["Июн", 100, 1],
        ["Авг", 100, 1],
        ["Сен", 100, 1],
        ["Окт", 100, 1],
        ["Ноя", 103, 1],
        ["Дек", 103, 1],

    ];

    let options = {
        title: "",
        curveType: "function",
        legend: { position: "top" },
    };


    return (
        <div className="background-white card-paddings full-width mb-20 mr-20">
            <div className="flex-container mb-20">
                <h4>Сессии</h4>
                <div className="flex-row self-end content-end">
                    <form className="mr-10 form-with-border-shadow">
                        <select id="fruits" name="fruits" className="mr-10 no-outline">
                            <option value="apple">Всего сессий</option>
                            <option value="banana">Личная терапия</option>
                            <option value="orange">Парная терапия</option>
                            <option value="orange">Групповая терапия</option>
                        </select>
                    </form>
                    <input type="date" className="mr-10 form-with-border-shadow" /><input type="date" className="form-with-border-shadow" />
                </div>
            </div>
            <div className="chart__class">
                <Chart
                    chartType="Line"
                    width="100%"
                    height="200px"
                    data={data}
                    options={options}
                />
            </div></div>
    );

}
export default Statistic;