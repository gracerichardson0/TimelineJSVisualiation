$(function(){

    //Gets Line Chart Canvas
    var ctx = $("#line-chartcanvas");

    //Line Chart Data
    var data = {
        labels: ["1960", "1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015"],
        datasets: [
            {
                label: "Japan Birth Rate",
                data: [17.3, 18.7, 18.7, 17, 13.5, 11.9, 10, 9.54, 9.54, 8.41, 8.5, 7.9],
                backgroundColor: "#4d4dff",
                borderColor: "#4d4dff",
                fill: false,
                lineTension: 0,
                radius: 5
            },

            {

                label: "Japan Death Rate",
                data: [7.6, 7.1, 6.9, 6.2, 6.1, 6.2, 6.7, 7.41, 7.7, 8.53, 9.5, 10.1],
                backgroundColor: "#ffc14d",
                borderColor: "#ffc14d",
                fill: false,
                lineTension: 0,
                radius: 5

            },

            {
                label: "United States Birth Rate",
                data: [23.7, 19.4, 18.4, 14.6, 15.9, 15.8, 16.7, 14.6, 14.4, 14, 13, 12.4],
                backgroundColor: "#00e600",
                borderColor: "#00e600",
                fill: false,
                lineTension: 0,
                radius: 5
            },

            {
                label: "United States Death Rate",
                data: [9.5, 9.4, 9.5, 8.8, 8.8, 8.7, 8.6, 8.8, 8.5, 8.3, 8, 8.2],
                backgroundColor: "#e60000",
                borderColor: "#e60000",
                fill: false,
                lineTension: 0,
                radius: 5
            },

            {
                label: "China Birth Rate",
                data: [20.9, 37.9, 33.4, 23, 18.2, 21.0, 21.1, 17.1, 14.0, 12.4, 11.9, 12.1],
                backgroundColor: "#000000",
                borderColor: "#000000",
                fill: false,
                lineTension: 0,
                radius: 5
            },

            {
                label: "China Death Rate",
                data: [25.4, 9.5, 7.6, 7.3, 6.3, 6.8, 6.7, 6.6, 6.5, 6.5, 7.1, 7.1],
                backgroundColor: "#ee82ee",
                borderColor: "#ee82ee",
                fill: false,
                lineTension: 0,
                radius: 5
            },
        ]
    };

    //Options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Birth and Death Rate of Japan Per 1,000 People, 1960-2015",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
            fontColor: "#333",
            fontSize: 16
            }
        }
    };

    //Creates Line Chart Object
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options

    });
});