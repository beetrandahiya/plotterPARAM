j = -100;
var pivl = [];
var pivltr = [];
while (j < 100) {
  vl = j * (math.pi) / 2;
  pivl.push(vl); //making a array containing values of n*pi/2
  vltr = parseFloat(vl.toFixed(2));
  pivltr.push(vltr);
  j++;
}
clcktm=0;

function plotgraph() {
  funcinpx = document.getElementById("inputfuncx").value;
  funcinpx.trim();
    funcinpy = document.getElementById("inputfuncy").value;
  funcinpy.trim();

  var dmnstart = parseFloat(document.getElementById("dmnstart").value);
  var dmnend = parseFloat(document.getElementById("dmnend").value);

  const exprx = math.compile(funcinpx);
  const expry = math.compile(funcinpy);
  let valt = math.range(dmnstart, dmnend, 0.01).toArray();
  valt = valt.map(a => parseFloat(a.toFixed(2)));
  i = 0;
  while (i < valt.length) {
    if (pivltr.includes(valt[i])) {
      j = pivltr.indexOf(valt[i]);
      valt[i] = pivl[j];
    }
    i++;
  }
  
  const xValues = valt.map(function (t) {
    return exprx.evaluate({
      t: t
    })
  })
  const yValues = valt.map(function (t) {
    return expry.evaluate({
      t: t
    })
  })
while(j<xValues.length){
  if(xValues[j]<10**(-6)){
  xValues[j]=xValues[j].toFixed(4);
  }
  if(yValues[j]<10**(-6)){
  yValues[j]=yValues[j].toFixed(4);
  }
  j++;
  }


  var plotline = {
    x: xValues,
    y: yValues,
    type: 'scatter',
  line: {
    color: 'rgb(219, 64, 82)'
  }
  };
  var layout = {
  
  width: 600,
  height: 600,
  margin: {
    l: 20,
    r: 20,
    b: 20,
    t: 20,
    pad: 4
  },
  paper_bgcolor: '#fcfcfc',
  plot_bgcolor: '#fcfcfc'
};

  var data = [plotline];
if(clcktm==0){
  Plotly.newPlot('plotarea', data,layout, {displaylogo: false},{responsive: true});
  clcktm=1;
}
else if(clcktm==1){
    Plotly.animate('plotarea', {
    data: data
  }, {
    transition: {
      duration: 500,
      easing: 'cubic-in-out'
    },
    frame: {
      duration: 500
    }
  })
}

}