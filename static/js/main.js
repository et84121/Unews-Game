let IsTimelineChart = true;
let CanTimeOut = true;
//浮現政策功能 改變透明度

function policy_ComeOut(id) {
  if (IsTimelineChart == false) {
    //reAni();
    //pathBegin();//讀不到
    kwsk2(false);
    //d3.timeout(policy_ComeOut,3000,id);
  } else {
    CanTimeOut = false;
    onlyTimeLineOut(true);
    onlyTimeLine(id, true);
    var area = d3
      .select(".policy_area")
      .style("display", "block")
      .transition()
      .duration(500)
      .style("opacity", "0.7");

    d3.selectAll(".policy_button").style("opacity", "1");
    d3.select("#news" + id).style("opacity", "0.7");

    d3.selectAll(".policy_text").style("display", "none");
    if (id == 1) {
      d3.select("#text" + id)
        .style("display", "block")
        .style("height", "200px");
    } else if (id == 2) {
      d3.select("#text" + id)
        .style("display", "block")
        .style("height", "180px");
    } else {
      d3.select("#text" + id).style("display", "flex");
    }
    /*
    d3.selectAll(".timeline")
        .style("opacity", "0")
        .style("display", "none");
    d3.select("#timeline" + id)
        .transition()
        .duration(500)
        .style("opacity", "1")
        .style("display", "block");*/
  }
}
function onlyTimeLine(id, CanTimeOut) {
  if (CanTimeOut) {
    onlyTimeLineOut(true);
    d3.select("#timeline" + id)
      .transition()
      .duration(300)
      .style("opacity", "1")
      .style("display", "");
  }
}
function onlyTimeLineOut(CanTimeOut) {
  if (CanTimeOut) {
    d3.selectAll(".timeline").style("opacity", "0").style("display", "none");
  }
}
function close_text() {
  CanTimeOut = true;
  onlyTimeLineOut(CanTimeOut);
  d3.select(".policy_area").style("opacity", "0").style("display", "none");
  d3.selectAll(".policy_button").style("opacity", "1");
  d3.selectAll(".timeline").style("opacity", "0").style("display", "none");
}

function kwsk(IsTimeLine) {
  /*原先圖表與1月~3月的圖表轉場*/

  var dur = 2000;

  if (IsTimeLine == true) {
    IsTimelineChart = false;
    close_text();
    close_PPchart();
    d3.timeout(pathAni2, 2000);
    //d3.select("#news6").html("看20年來的趨勢");
  }
}
function kwsk2(IsTimeLine) {
  /*原先圖表與1月~3月的圖表轉場*/

  var dur = 2000;

  if (IsTimeLine == false) {
    //IsTimelineChart = true;
    close_PPchart2();
    onlyTimeLineOut();
    d3.timeout(pathAni1, 1000);
    d3.timeout(function () {
      IsTimelineChart = true;
    }, 1);
  }
}

function pathAni1() {
  d3.select("#PPchart2").style("display", "none");
  d3.select("#PPchart").style("display", "");

  let line1 = d3.select("#pBLine").interrupt();
  let line2 = d3.select("#paperCLine").interrupt();
  let line3 = d3.select("#pCLine").interrupt();
  var waitpoint1 = [0];
  var waitpoint2 = [0];
  var waitpoint3 = [0];
  var pathLength1 = line1.node().getTotalLength();
  var pathLength2 = line2.node().getTotalLength();
  var pathLength3 = line3.node().getTotalLength();

  var dur = 2000;

  line1
    .attr("stroke-dashoffset", pathLength1)
    .attr("stroke-dasharray", pathLength1)
    .transition()
    .duration(dur)
    .attr("stroke-dashoffset", pathLength1 * waitpoint1[0]);
  line2
    .attr("stroke-dashoffset", pathLength2)
    .attr("stroke-dasharray", pathLength2)
    .transition()
    .duration(dur)
    .attr("stroke-dashoffset", pathLength2 * waitpoint2[0]);
  line3
    .attr("stroke-dashoffset", pathLength3)
    .attr("stroke-dasharray", pathLength3)
    .transition()
    .duration(dur)
    .attr("stroke-dashoffset", pathLength3 * waitpoint3[0]);
}

function pathAni2() {
  d3.select("#PPchart2").style("display", "");
  d3.select("#PPchart").style("display", "none");
  var data3 = [32641, 34824, 11739, 31283, 43069, 45246];

  var height = 320;

  var yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data3)])
    .range([0, height]);

  for (i = 1; i <= 6; i++) {
    d3.select("#New_rect" + i)
      .data(data3)
      .transition()
      .duration(1000)
      .attr("y", height - yScale(data3[i - 1]))
      .attr("height", yScale(data3[i - 1]));
  }
}

function close_PPchart() {
  let line1 = d3.select("#pBLine").interrupt();
  let line2 = d3.select("#paperCLine").interrupt();
  let line3 = d3.select("#pCLine").interrupt();

  var pathLength1 = line1.node().getTotalLength();
  var pathLength2 = line2.node().getTotalLength();
  var pathLength3 = line3.node().getTotalLength();

  var dur = 2000;

  line1.transition().duration(dur).attr("stroke-dashoffset", pathLength1);
  line2.transition().duration(dur).attr("stroke-dashoffset", pathLength2);
  line3.transition().duration(dur).attr("stroke-dashoffset", pathLength3);
}
function close_PPchart2() {
  d3.select("#PPchart2").style("display", "");
  d3.select("#PPchart").style("display", "none");

  var data3 = [32641, 34824, 11739, 31283, 43069, 45246];

  var height = 320;

  var yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data3)])
    .range([0, height]);

  for (i = 1; i <= 6; i++) {
    d3.select("#New_rect" + i)
      .data(data3)
      .transition()
      .duration(1000)
      .attr("y", height)
      .attr("height", 0);
  }
}

/*=====================宣告全域變數=========================================*/
// set the dimensions and margins of the graph
var margin = { top: 150, right: 40, bottom: 30, left: 80 }, //left50
  width = 700 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom; //500

// parse the date / time / Year
var parseTime = d3.timeParse("%Y");
// 第二張圖以月為單位
var parseTime2 = d3.timeParse("%m");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the 1st line
var valueline = d3
  .line()
  .x(function (d) {
    return x(d.date);
  })
  .y(function (d) {
    return y(d.pB);
  });

// define the 2nd line
var valueline2 = d3
  .line()
  .x(function (d) {
    return x(d.date);
  })
  .y(function (d) {
    return y(d.paperC);
  });

// define the 3rd line
var valueline3 = d3
  .line()
  .x(function (d) {
    return x(d.date);
  })
  .y(function (d) {
    return y(d.pC);
  });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
console.log("OKOK");

/*=========================================================================*/

/* Get the data */
d3.csv("static/data/GarbageData.csv").then(function (data) {
  var svg = d3
    .select("#d3")
    .append("svg")
    .attr("id", "PPchart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background", "rgb(245,245,255)")
    .on("click", close_text)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // format the data
  data.forEach(function (d) {
    d.date = parseTime(d.date);
    d.pB = +d.pB;
    d.paperC = +d.paperC;
    d.pC = +d.pC;
  });

  // Scale the range of the data
  //x.domain(d3.extent(data, function (d) { return d.date; }));
  x.domain(d3.extent([parseTime(2001), parseTime(2020)]));
  y.domain([
    0,
    d3.max(data, function (d) {
      return Math.max(d.pB, d.paperC, d.pC);
    }),
  ]);

  /*增加三條折線圖*/
  // Add the valueline path.
  svg
    .append("path")
    .data([data])
    .attr("id", "pBLine")
    .attr("class", "line")
    .style("stroke", "#29E7E3")
    .attr("d", valueline);

  // Add the valueline2 path.
  svg
    .append("path")
    .data([data])
    .attr("id", "paperCLine")
    .attr("class", "line")
    .style("stroke", "#24EB98")
    .attr("d", valueline2);

  // Add the valueline3 path.
  svg
    .append("path")
    .data([data])
    .attr("id", "pCLine")
    .attr("class", "line")
    .style("stroke", "#09AAE3")
    .attr("d", valueline3);

  // Add the X Axis
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .style("font-size", "18px")
    .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g").style("font-size", "18px").call(d3.axisLeft(y));

  svg
    .append("text")
    .style("font-size", "18px")

    //.style('font-weight', 'bold')
    .attr("x", -26)
    .attr("y", -10)
    .text("公噸");
  svg
    .append("text")
    .style("font-size", "28px")

    .style("font-weight", "bold")
    .attr("x", 60)
    .attr("y", -90)
    .text("紙容器與塑膠廢棄物近二十年變化");
  //滑鼠事件
  //d3.select("#PPchart")
  //.on("mouseover", ChartMouseOver)
  //.on("mouseout", ChartMouseOut)
  //.style("color", "#095DCE")
  svg
    .selectAll(".line")
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut);

  //icon
  svg
    .append("rect")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 20)
    .attr("y", -50)
    .style("fill", "#24EB98");
  svg
    .append("text")
    //.style('font-size', '24px')
    .style("font-weight", "bold")

    .attr("x", 40)
    .attr("y", -37)
    .text("紙容器回收量");

  svg
    .append("rect")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 190)
    .attr("y", -50)
    .style("fill", "#29E7E3");
  svg
    .append("text")
    //.style('font-size', '24px')
    .style("font-weight", "bold")

    .attr("x", 210)
    .attr("y", -37)
    .text("塑膠袋內銷量");

  svg
    .append("rect")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 360)
    .attr("y", -50)
    .style("fill", "#09AAE3");
  svg
    .append("text")
    //.style('font-size', '24px')
    .style("font-weight", "bold")

    .attr("x", 380)
    .attr("y", -37)
    .text("塑膠容器回收量");

  //為了呼叫線段動畫的宣告
  let lineCounter = 0;
  let updatedPath1 = d3.select("#pBLine").interrupt().attr("d", valueline);
  let updatedPath2 = d3.select("#paperCLine").interrupt().attr("d", valueline2);
  let updatedPath3 = d3.select("#pCLine").interrupt().attr("d", valueline3);

  //動畫的呼叫
  pathBegin();

  //updatePath1(valueline);
  //updatePath2(valueline2);
  //updatePath3(valueline3);

  timeline_ComeOut(14.8, "timeline1");
  timeline_ComeOut(141.2, "timeline2");
  timeline_ComeOut(172.7, "timeline3");
  timeline_ComeOut(520, "timeline4");
  timeline_ComeOut(551.5, "timeline5");

  let counter = 0;
  //policy();

  //連續呼叫動畫
  function policy() {
    var wait = [500, 1000, 500, 2600, 2500, 1800];
    var x = [0, 187.5, 235, 749.5, 773, 798];
    var y = [40, 40, 170, 0, 100, 185];
    var widthA = [45, 45, 90, 90, 90, 90];
    var widthB = [165, 180, 250, 280, 330, 250];
    var heightA = [13, 13, 13, 13, 13, 13];
    var heightB = [90, 90, 50, 65, 50, 70];
    var left = [-10, 0, 0, -60, -80, -30];
    var mes = [
      "<span class='h4'>2002　郝龍斌宣布限塑</span><p>行政院環保署署長郝龍斌宣布，2002年7月1日起分階段限用塑膠袋及免洗餐具，並禁用厚度低於0.06公釐的塑膠袋。",
      "<span class='h4'>2006　限塑政策精進方案</span><p>塑膠袋增厚之後，重複使用率並未跟著提高，導致塑膠用量不減反增。環保署頒布「限塑政策精進方案」，取消對有店面餐飲業購物用塑膠袋限制。",
      "<span class='h4'>2007　實施限用塑膠類托盤及包裝盒</span><p>政府實施限用塑膠類托盤及包裝盒，要求賣場的生鮮食品包裝減量。",
      "<span class='h4'>2018　全國擴大實施限塑</span><p>全國擴大實施限塑環保局喊出「2020內用禁用、2025以價制量限用、2030全面禁用吸管、飲料杯、購物袋、免洗餐具等四種一次性塑膠製品」口號。",
      "<span class='h4'>2018/7/1　環保署宣布擴大禁止提供免費塑膠袋管制範圍</span><p>環保署宣布，擴大禁止提供免費塑膠袋管制範圍，新增7大類管制對象不得再免費提供購物用塑膠袋。",
      "<span class='h4'>2019　一次性塑膠吸管限制使用</span><p>7月1日起實施〈一次性塑膠吸管限制使用對象、實施方式及實施日期〉，「內用」不得提供一次性塑膠吸管。",
    ];

    if (x[counter + 1]) {
      d3.timeout(policy, 2000);
    }
    news(
      x[counter] + 30,
      y[counter],
      mes[counter],
      widthA[counter],
      widthB[counter],
      heightA[counter],
      heightB[counter],
      left[counter],
      wait[counter]
    );

    counter++;
  }
  //滑鼠進入
  function handleMouseOver(d, i) {
    //其他線段

    d3.selectAll(".line")
      //.style("stroke-width","1px")
      .style("stroke-opacity", "0.3");

    d3.select(this).style("stroke-width", "7px").style("stroke-opacity", "1");
  }

  //滑鼠離開
  function handleMouseOut() {
    d3.selectAll(".line")
      .style("stroke-width", "4px")
      .style("stroke-opacity", "1");
  }

  /*animation 折線圖動畫*/
  function pathBegin() {
    let updatedPath1 = d3.select("#pBLine").interrupt().attr("d", valueline);
    let updatedPath2 = d3
      .select("#paperCLine")
      .interrupt()
      .attr("d", valueline2);
    let updatedPath3 = d3.select("#pCLine").interrupt().attr("d", valueline3);

    var pathLength1 = updatedPath1.node().getTotalLength();
    var pathLength2 = updatedPath2.node().getTotalLength();
    var pathLength3 = updatedPath3.node().getTotalLength();

    updatedPath1
      .attr("stroke-dashoffset", pathLength1)
      .attr("stroke-dasharray", pathLength1);
    updatedPath2
      .attr("stroke-dashoffset", pathLength2)
      .attr("stroke-dasharray", pathLength2);
    updatedPath3
      .attr("stroke-dashoffset", pathLength3)
      .attr("stroke-dasharray", pathLength3);

    pathAni();
  }
  function pathAni() {
    var waitpoint1 = [0];
    var waitpoint2 = [0];
    var waitpoint3 = [0];
    var dur = [3000];
    var pathLength1 = updatedPath1.node().getTotalLength();
    var pathLength2 = updatedPath2.node().getTotalLength();
    var pathLength3 = updatedPath3.node().getTotalLength();

    if (waitpoint1[lineCounter + 1]) {
      d3.timeout(pathAni, dur[lineCounter] + 500);
    }

    updatedPath1
      .transition()
      .duration(dur[lineCounter])
      .attr("stroke-dashoffset", waitpoint1[lineCounter] * pathLength1);

    updatedPath2
      .transition()
      .duration(dur[lineCounter])
      .attr("stroke-dashoffset", waitpoint2[lineCounter] * pathLength2);

    updatedPath3
      .transition()
      .duration(dur[lineCounter])
      .attr("stroke-dashoffset", waitpoint3[lineCounter] * pathLength3);

    lineCounter++;
  }

  function timeline_ComeOut(x, id) {
    /*點擊政策後出現直線*/ //x = 向右位移
    //y = 向下位移
    d3.select("#PPchart")
      .append("rect")
      .attr("id", id)
      .attr("class", "timeline")
      .attr("width", 3)
      .attr("x", 95.8 + x)
      .attr("height", 320)
      .attr("y", 150);
  }
});
Draw_Second_Graph();
function Draw_Second_Graph() {
  /*用以做出2020 第一季圖表 (第二章圖表)*/

  var margin = { top: 150, right: 20, bottom: 30, left: 80 }, //left50
    width = 700 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom; //500
  /* 修改看看 //目前最正確版*/
  var x = d3
    .scaleLinear()
    //.domain([new Date("2020-01-01"), new Date("2020-03-01")])
    .range([0, width]);
  //var x = d3.scaleLinear().range([0, width]);

  var y = d3.scaleLinear().range([height, 0]);

  d3.csv("static/data/2020_Garbage.csv").then(function (data2) {
    var svg = d3
      .select("#d3")
      .append("svg")
      .style("display", "none")
      .attr("id", "PPchart2")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("background", "rgb(245,245,255)")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // format the data
    data2.forEach(function (d) {
      d.date = parseTime2(d.date);
      d.pB = +d.pB;
      d.paperC = +d.paperC;
      d.pC = +d.pC;
      d.BpB = +d.BpB;
      d.BpaperC = +d.BpaperC;
      d.BpC = +d.BpC;
    });

    // Scale the range of the data

    //x.domain(d3.extent(data2, function (d) { return d.date; }));
    y.domain([
      0,
      d3.max(data2, function (d) {
        return Math.max(d.pB, d.paperC, d.pC, d.BpB, d.BpaperC, d.BpC);
      }),
    ]);

    /*長條圖*/
    var data3 = [32641, 34824, 11739, 31283, 43069, 45246];

    var Bar_Step = 40;
    var Bar_Padding = 25;
    var rectWidth = 50;

    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data3)])
      .range([0, height]);

    svg
      .selectAll("rect")
      .data(data3)
      .enter()
      .append("rect")
      .attr("id", function (d, i) {
        return "New_rect" + (i + 1);
      })
      .attr("fill", function (d, i) {
        if (i % 2 == 0) {
          return "hsl(191,87%,31%)";
        } else {
          return "hsl(196, 92%, 46%)";
        }
      })
      .attr("x", function (d, i) {
        if (i % 2 == 1) {
          return Bar_Step + i * (rectWidth + Bar_Step);
        } else {
          return Bar_Step + i * (rectWidth + Bar_Step) + Bar_Padding;
        }
      })
      .attr("width", rectWidth)
      .attr("y", function (d, i) {
        return height;
      })
      .attr("height", 0);

    /*
        // Add the X Axis  //old
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        */

    /*
        var xScale = d3.scaleLinear()
                    .domain([1,3])
                    .range([0,width]);
        */

    /*定義中文日期*/
    let locale = d3.timeFormatLocale({
      dateTime: "%a %b %e %X %Y",
      date: "%Y/%-m/%-d",
      time: "%H:%M:%S",
      periods: ["上午", "下午"],
      days: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
      shortDays: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
      months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      shortMonths: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
    });

    /*新定義的x軸---用以表示月份*/
    var xAxis = d3
      .axisBottom(x)
      //.tickFormat(locale.format("%b月"))
      //.tickFormat(d3.timeFormat("%B"))
      .ticks(0);

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("id", "newX")
      .call(xAxis);

    // Add the Y Axis
    svg.append("g").call(d3.axisLeft(y));

    svg
      .append("text")
      .style("font-size", "14px")
      //.style('font-weight', 'bold')
      .attr("x", -26)
      .attr("y", -10)
      .text("公噸");

    svg
      .append("rect")
      .attr("width", 15)
      .attr("height", 15)
      .attr("x", 100)
      .attr("y", -50)
      .style("fill", "hsl(191,87%,31%)");
    svg
      .append("text")
      //.style('font-size', '24px')
      .style("font-weight", "bold")
      .attr("x", 120)
      .attr("y", -37)
      .text("2019第一季數據");
    svg
      .append("rect")
      .attr("width", 15)
      .attr("height", 15)
      .attr("x", 360)
      .attr("y", -50)
      .style("fill", "#09AAE3");
    svg
      .append("text")
      //.style('font-size', '24px')
      .style("font-weight", "bold")
      .attr("x", 380)
      .attr("y", -37)
      .text("2020第一季數據");

    svg
      .append("text")
      .style("font-size", "14px")
      //.style('font-weight', 'bold')
      .attr("x", 80)
      .attr("y", 340)
      .text("塑膠袋內銷量");
    svg
      .append("text")
      .style("font-size", "14px")
      //.style('font-weight', 'bold')

      .attr("x", 260)
      .attr("y", 340)
      .text("紙容器回收量");
    svg
      .append("text")
      .style("font-size", "14px")
      //.style('font-weight', 'bold')

      .attr("x", 435)
      .attr("y", 340)
      .text("塑膠容器回收量");
    svg
      .append("text")
      .style("font-size", "28px")

      .style("font-weight", "bold")
      .attr("x", 90)
      .attr("y", -90)
      .text("疫情期間與去年同期數據比較");
  });
}
