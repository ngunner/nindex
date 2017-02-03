var stockSymbol = 'AAPL';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var startDate = '2016-05-01';
var endDate = mm+'/'+dd+'/'+yyyy;

var apiUrl= 'https://www.quandl.com/api/v3/datasets/WIKI/' + stockSymbol + '.json?start_date=' + startDate + '&end_date=' + endDate + '&order=asc&column_index=4&collapse=daily&transformation=rdiff';

var stockData = (function () {
    var stockData = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': apiUrl,
        'dataType': 'json',
        'success': function (data) {
            stockData = data;
        }
    });
    return stockData;
})();

var dates = [];
var prices = [];
for (var i = 0; i < stockData.dataset.data.length; i++) {
  dates.push(stockData.dataset.data[i][0]);
  prices.push(stockData.dataset.data[i][1]);
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'Price',
            data: prices,
            borderWidth: 1,
            backgroundColor: '#eee'
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            barThickness: 20,
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    min: 4
                }
            }]
        }
    }
});
