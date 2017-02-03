var apiParams = {
  "Normalized":false,
  "NumberOfDays":365,
  "DataPeriod":"Day",
  "Elements":[{
      "Symbol":"TSLA",
      "Type":"price",
      "Params":["c"]
  }]
};

var apiUrl= 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=' + apiParams;

var stockData = (function () {
    var stockData = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': apiUrl,
        'dataType': "json",
        'success': function (data) {
            stockData = data;
        }
    });
    return stockData;
})();

console.log(stockData);
