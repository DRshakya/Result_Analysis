
$(document).ready(function () {
  $.ajax({
    url: "http://localhost/result/data.php",
    method: "GET",
    success: function (data) 
    {
      console.log(JSON.parse(data));
      let dataset = JSON.parse(data);
      let classes = dataset.map((dat) => dat.class)
      let mids = dataset.map((dat) => dat.mid)
      let pres = dataset.map((dat) => dat.pre)
      let boards = dataset.map((dat) => dat.board)
      let midval = mids[0];
      let presval = pres[0];
      let boardsval = boards[0];
      var ctx = $("#mycanvas");
      classes.push(midval,presval,boardsval,"0")
      console.log(classes)
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Class Test', 'Mid Term', 'Pre Board', 'Board'],
          datasets: [{
            label: 'Order Received',
            data: classes,
            backgroundColor: 'rgb(78, 115, 223)'
          }]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {},
          scales: {
            xAxes: [{
              gridLines: {
                color: 'rgb(234, 236, 244)',
                zeroLineColor: 'rgb(234, 236, 244)',
                drawBorder: false,
                drawTicks: false,
                borderDash: ['2'],
                zeroLineBorderDash: ['2'],
                drawOnChartArea: false
              },
              ticks: {
                fontColor: '#858796',
                padding: 20
              }
            }],
            yAxes: [{
              gridLines: {
                color: 'rgb(234, 236, 244)',
                zeroLineColor: 'rgb(234, 236, 244)',
                drawBorder: false,
                drawTicks: false,
                borderDash: ['2'],
                zeroLineBorderDash: ['2'],
                drawOnChartArea: false
              },
              ticks: {
                fontColor: '#858796',
                padding: 20
              }
            }]
          }
        }
      });
   } });
});