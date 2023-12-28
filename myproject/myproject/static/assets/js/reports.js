
const  datatable= document.getElementById("myTable");
const url="api/"
fetch(url)
.then(response => response.json())
.then(data =>{
  const a=data.dict;
  const tableList=a.map(item =>[item.end_year,item.intensity,item.sector,item.topic,item.insight,item.start_year,item.impact,item.added,item.published,item.country,item.relevance,item.pestle,item.source,item.title,item.likelihood] );
  const dataTable=new simpleDatatables.DataTable("#myTable",{
    searchable:true,
    fixedHeight:true,
    data:{
      headings:['end_year', 'intensity', 'sector','topic','insight','start_year','impact','added','published','country','relevance','pestle','source','title','likelihood'],
    }
  })
  dataTable.insert({"data":tableList})

})
  

