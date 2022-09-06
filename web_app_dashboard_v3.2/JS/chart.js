// Traffic Chart
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    datasets: [{
    data: [24, 73, 62, 108, 234, 82, 79, 27, 65, 10, 52],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

function updateChartHourly() {

    trafficChart.data.labels= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    trafficChart.data.datasets[0].data = [24, 73, 62, 108, 234, 82, 79, 27, 65, 10, 52];
    trafficChart.update();
}

function updateChartDaily() {


    trafficChart.data.labels= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    trafficChart.data.datasets[0].data = [200, 110, 170, 190, 215, 187, 301];
    trafficChart.update();
}

function updateChartWeekly() {


    trafficChart.data.labels= ["1-7", "8-14", "15-21", "22-28", "29-31"]
    trafficChart.data.datasets[0].data = [1373, 1287, 1421, 1349, 512];
    trafficChart.update();
}

function updateChartMonthly() {


    trafficChart.data.labels= ["January", "February", "March", "April", "May", "June"]
    trafficChart.data.datasets[0].data = [5942, 5437, 5802, 6037, 6254, 6177];
    trafficChart.update();
}


// Bar Graph

const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
    };

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
    });

    // Doughnut Chart

    const mobileCanvas = document.getElementById("mobile-chart");

    const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ]
        }]
        };

        const mobileOptions = {
            aspectRatio: 1.9,
            plugins: {
            legend: {
            position: 'right',
            labels: {
            boxWidth: 20,
            fontStyle: 'bold'
            }
            }
            }
            };
            
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
     options: mobileOptions
});