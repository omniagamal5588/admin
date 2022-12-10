var list = document.querySelectorAll(".navigation li");
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', activeLink));


//MenuToggle
var toggle = document.querySelector('.toggle');
var navigation = document.querySelector('.navigation');
var main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');

}
/*
var ctx = document.getElementById('myChart').getContext('2d');
var sales = document.getElementById('sales').getContext('2d');

var ctx = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['pharmacy1', 'pharmacy2', 'pharmacy3', 'pharmacy4', 'pharmacy5'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                //'rgba(255, 99, 132, 0.5)', 
               'rgba(178, 139, 116, 0.6)',
               'rgba(224, 173, 144, 0.6)',
               //'rgba(221, 160, 90, 0.6)',
                //'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(221, 160, 90, 0.6)',
               // 'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderRadius:3,
           
        }]
    },
    options: {
       responsive:true,
    }
});



/*
var sales = new Chart(sales, {
    type: 'bar',
    data: {
        labels: ['pharamacy1', 'pharamacy2', 'pharamacy3', 'pharamacy4', 'pharamacy5'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                /*
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                */
               /*
                'rgba(178, 139, 116, 0.6)',
                'rgba(224, 173, 144, 0.6)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(221, 160, 90, 0.6)',
                'rgba(153, 102, 255, 0.5)'
            ],
            
           
        }]
    },
    options: {
        responsive:true,
    }
});
*/


var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
    width:520,
    type: 'polarArea',
   
  },
  
  labels: ['pharmacy1', 'pharmacy2', 'pharmacy3', 'pharmacy4', 'pharmacy5'],
  
  
  fill: {
    opacity:1,
    colors:[
        /*
        'rgba(209, 185, 175, 0.674)',
        'rgba(196, 161, 150, 0.76)',
        'rgba(166, 159, 141, 0.772)',
        'rgba(202, 175, 160, 0.794)',
        'rgba(204, 179, 153, 0.717)'
        */
               'rgb(248, 237, 227)',
                ' rgb(223, 211, 195)',
                'rgb(208, 184, 168)',
                ' rgb(216, 204, 163)',
                ' rgb(135, 128, 94,.7)'
      ],
  },
  stroke: {
    width:1,
   colors:'#ffffff'
    
  },
 
  yaxis: {
    show: false,
    
   
  },
  
  legend: {
    position:'bottom',
    
    show:true,

  },
  
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth:0
      },
      style:{
        colors:
            [
               
                'rgb(248, 237, 227)',
                ' rgb(223, 211, 195)',
                'rgb(208, 184, 168)',
                ' rgb(216, 204, 163)',
                ' rgb(135, 128, 94)'


              ],
        
      },
    }
  },
  colors:
            [ 
                /*
                'rgba(209, 185, 175, 0.674)',
                'rgba(196, 161, 150, 0.76)',
                'rgba(166, 159, 141, 0.772)',
                'rgba(202, 175, 160, 0.794)',
                'rgba(204, 179, 153, 0.717)'
                 */
                'rgba(248, 237, 227)',
                ' rgb(223, 211, 195)',
                'rgb(208, 184, 168)',
                ' rgb(216, 204, 163)',
                ' rgb(135, 128, 94)'
              ],
  
  theme: {
    
    monochrome: {
      enabled: false,
      shadeTo: 'light',
      shadeIntensity: 0.6

    },

   
  }
  
  };
  

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();










// Bar Chart
var barChartOptions = {
    series:[{
        data:[10 ,8,6,4,2],
        name:"sales percentage",

    }],
    chart:{
        type:"bar",
        background:"transparent",
        height:350,
        toolbar:{
            show:false,
        },
    },
    colors:[
                'rgba(209, 185, 175, 0.974)',
                'rgba(196, 161, 150, 0.976)',
                'rgba(166, 159, 141, 0.972)',
                'rgba(202, 175, 160, 0.994)',
                'rgba(204, 179, 153, 0.917)'
    ],
    plotOptions:{
        bar: {
            distributed: true,
            borderRadius:4,
            horizontal:false,
            columnWidth:"30%",

        }
    },
    dataLabels:{
        enabled:false,
    },
    fill: {
        opacity:1,
    },
    grid:{
        borderColor:"#55596e",
        yaxis:{
            lines:{
                show:true,
            },
        },
   xaxis:{
    lines:{
        show:true,
    },
   },
},
    legend:{
        labels:{
            colors:"gray",
        },
        show:true,
        position:"top",
    },
    stroke:{
        colors:["transparent"],
        show:true,
        width:2
    },
    tooltip:{
        shared:true,
        intersect:false,
        theme:"dark",
    },
    xaxis:{
        categories:['pharmacy1', 'pharmacy2', 'pharmacy3', 'pharmacy4', 'pharmacy5'],
        title:{
            style:{
                color:"gray",
            },
        },
        axisBorder:{
            show:true,
            color:"gray"
        },
        axisTicks:{
            show:true,
            color:"gray",
        },
        labels:{
            style:{
                colors:"gray",
            },

        },
    },
    yaxis:{
        title:{
            text:"Count",
            style:{
                color:"gray",
            },
        },
        axisBorder:{
            color:"gray",
            show:true,
        },
        axisTicks:{
            color:"gray",
            show:true,
        },
        labels:{
            style:{
                colors:"gray",
            },
        },
    }
};
var barChart= new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();  


//////////////////////////////////////////////////////////
var toggleBtn = document.querySelector("#toggle-btn");
var bodyEl=document.querySelector("body");
var darkMode = false;
toggleBtn.addEventListener('change',(event)=>  {
    darkMode = event.target.checked;
    if(darkMode) {
      bodyEl.classList.add("dark-mode");
    } else {
      bodyEl.classList.remove("dark-mode");
    }
  } )

