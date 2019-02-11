
import React, { Component } from 'react';
import Chart from 'react-apexcharts'

var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
    
class Columnas extends Component {
    
    constructor(props) {
    super(props);

    this.state = {
        options: {
        chart: {
            events: {
            click: function (chart, w, e) {
                console.log(chart, w, e)
            }
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
            columnWidth: '45%',
            distributed: true,
            }
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
            labels: {
            style: {
                colors: colors,
                fontSize: '14px'
            }
            }
        }
        },
        series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
    }
    }

    render() {
        return(
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bar" height="350" />
            </div>
        );
    }
}

    export default Columnas;