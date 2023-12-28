
const totalViewChart = document.getElementById("total-view-chart");
const revenueViewChart = document.getElementById("revenue-views-chart");
const  growthViewChart= document.getElementById("growthrate-views-chart");
const  subscriberViewChart= document.getElementById("subscriber");
const  subscriberViewChart1= document.getElementById("subscriber1");
const  topicsViewChart= document.getElementById("topics");
const  topicsViewChart1= document.getElementById("topics1");
const  topicsViewChart2= document.getElementById("topics2");
const  radarChart= document.getElementById("radar");
const  datatable= document.getElementById("myTable");
url="api/"
fetch(url)
.then(response => response.json())
.then(data =>{
  a=data.dict;
  const end_year =a.map(item => item.end_year);
  const intensity = a.map(item => item.intensity);
  const sector = a.map(item => item.sector);
  const topic = a.map(item => item.topic);
  const insight = a.map(item => item.insight);
  const url = a.map(item => item.url);
  const region = a.map(item => item.region);
  const start_year = a.map(item => item.start_year);
  const impact = a.map(item => item.impact);
  const added = a.map(item => item.added);
  const published = a.map(item => item.published);
  const country = a.map(item => item.country);
  const relevance = a.map(item => item.relevance);
  const pestle = a.map(item => item.pestle);
  const source = a.map(item => item.source);
  const title = a.map(item => item.title);
  const likelihood = a.map(item => item.likelihood);

  const tableList=a.map(item =>[item.end_year,item.intensity,item.sector,item.topic,item.insight,item.url,item.region,item.start_year,item.impact,item.added,item.published,item.country,item.relevance,item.pestle,item.source,item.title,item.likelihood] );
  
  new Chart(totalViewChart,{

    type: 'bar',
    data: {
      labels: end_year,
      datasets: [{
        label: 'intensity',
        data: intensity,
        borderColor: 'black',
        borderRadius:'10px',
        backgroundColor:'rgb(107, 56, 250)',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(subscriberViewChart,{

    type: 'line',
    data: {
      labels: country,
      datasets: [{
        label: 'relevance',
        data:relevance,
        borderColor: 'black',
        borderRadius:'10px',
        backgroundColor:'rgb(107, 56, 250)',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(revenueViewChart,{

    type: 'bubble',
    data: {
      labels: country,
      datasets: [{
        label: 'likeihood',
        data: likelihood,
  
        borderColor: 'black',
        borderRadius:'10px',
        backgroundColor:'rgb(107, 56, 250)',
        borderWidth: 2
        
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
//  live charts
  const config = {
    type: 'line',
    data:{
          labels: source,
          datasets: [{
            label: 'intensity',
            data: intensity,
            borderColor: 'black',
            borderRadius:'10px',
            backgroundColor:'rgb(107, 56, 250)',
            borderWidth: 2
          }]
        },
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      }
    }
  };
  new Chart(subscriberViewChart1,config);

  
  //   type: 'bar',
  //   data: {
  //     labels: source,
  //     datasets: [{
  //       label: 'intensity',
  //       data: intensity,
  //       borderColor: 'black',
  //       borderRadius:'10px',
  //       backgroundColor:'rgb(107, 56, 250)',
  //       borderWidth: 2
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });
  new Chart(topicsViewChart,{
  
    type: 'pie',
    data: {
      labels: pestle,
      datasets: [{
        label: 'relevance',
        data: relevance,
        borderWidth: 1
      }]
    },
   
    options: {
      
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
    
  });
  new Chart(topicsViewChart1,{
  
    type: 'pie',
    data: {
      labels: topic,
      datasets: [{
        label: 'intensity',
        data: intensity,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(topicsViewChart2,{
  
    type: 'doughnut',
    data: {
      labels: source,
      datasets: [{
        label: "likelihood",
        data: likelihood,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(radarChart,{
  
    type: 'radar',
    data: {
      labels: source,
      datasets: [{
        label: "likelihood",
        data: likelihood,
        borderColor: 'black',
        borderRadius:'10px',
        backgroundColor:'rgb(107, 56, 250)',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  
  // const dataTable=new simpleDatatables.DataTable("#myTable",{
  //   searchable:true,
  //   fixedHeight:true,
  //   data:{
  //     headings:['end_year', 'intensity', 'sector','topic','insight','url','region','start_year','impact','added','published','country','relevance','pestle','source','title','likelihood'],
  //   }
  // })
  // dataTable.insert({"data":tableList})
  
  

})
// new Chart(totalViewChart,{

//   type: 'line',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
// new Chart(revenueViewChart,{

//   type: 'bar',
//   data: {
//     labels: ["red","green","blue","white","pink","black"],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
// new Chart(subscriberViewChart1,{

//   type: 'line',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
// new Chart(topicsViewChart,{

//   type: 'pie',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
// new Chart(topicsViewChart1,{

//   type: 'pie',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
// new Chart(topicsViewChart2,{

//   type: 'pie',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// // const dataTable=new simpleDatatables.DataTable("#myTable",{
// //   searchable:true,
// //   fixedHeight:true,
// //   data:{
// //     headings:["heading1","heaging2","heading3"],
// //   }
// // })



      
       