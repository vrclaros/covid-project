// const route_api="http://127.0.0.1:5000/csv";

// d3.json('http://127.0.0.1:5000/csv/').then(function(data) {
function buildCharts(sample) {
    d3.json('/csv/').then(function (data) {
        console.log(data);

        var transposedata = [];
        var i;
        var rowdata = [];
        for (i = 0; i < 502; i++) {
            for (element in data) {

                let columnvalue = data[element]
                rowdata.push(columnvalue[i]);
            }
            transposedata.push(rowdata);
            rowdata = [];
        }

        console.log(transposedata[0]);
        var filtereddata = transposedata.filter(x => x[1] == sample);

        // Grab values to build the plots
        var country = data.country;
        console.log(filtereddata);
        var date = [];
        for (var i = 0; i < filtereddata.length; i++) {
            date.push(filtereddata[i][7]);
        }
        var people_fully_vaccinated = [];
        for (var i = 0; i < filtereddata.length; i++) {
            people_fully_vaccinated.push(filtereddata[i][8]);
        }
        var cumulative_total_cases = [];
        for (var i = 0; i < filtereddata.length; i++) {
            cumulative_total_cases.push(filtereddata[i][3]);
        }

        var cumulative_total_deaths = [];
        for (var i = 0; i < filtereddata.length; i++) {
            cumulative_total_deaths.push(filtereddata[i][4]);
        }

        var trace1 = [{
            type: "scatter",

            x: date,
            y: people_fully_vaccinated,
            mode: 'marker',
            marker: {
                size: 20,
                color: 'red',
            }

        }];
        var trace2 = [{
            type: "scatter",

            x: date,
            y: cumulative_total_cases,
            mode: 'marker',
            marker: {
                size: 20,
                color: 'red',
            }
        }];

        var trace3 = [{
            type: "scatter",

            x: date,
            y: cumulative_total_deaths,
            mode: 'marker',
            marker: {
                size: 20,
                color: 'red',
            }
        }];

        var layout = {
            title: '<b> <i>Covid -- People Fully Vaccinated by Date</b></i>',
            xaxis: {
                autorange: true,
                type: "date",

            },
            yaxis: {
                autorange: true,
                type: "linear"

            }

        };
        var layout2 = {
            title: '<b> <i>Covid Total Cases</b></i>',
            xaxis: {
                autorange: true,
                type: "date",

            },
            yaxis: {
                autorange: true,
                type: "linear"

            }
        };


        var layout3 = {
            title: '<b> <i>Covid Daily Deaths</b></i>',
            xaxis: {
                autorange: true,
                type: "date",

            },
            yaxis: {
                autorange: true,
                type: "linear"

            }
        };
        console.log(people_fully_vaccinated);

            // Plotly.newPlot("plot_data", trace1, layout);
            Plotly.newPlot("plot_data2", trace2, layout2);
            Plotly.newPlot("plot_data3", trace3, layout3);
        });


}



function optionChanged(newSample) {
    //Fetch new data each time a new sample is selected
    buildCharts(newSample);
}
