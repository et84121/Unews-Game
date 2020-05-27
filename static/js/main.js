let IsTimelineChart = true;
//浮現政策功能 改變透明度

function policy_ComeOut(id) {
    if (IsTimelineChart == false) {
        IsTimelineChart = true;
        //reAni();
        //pathBegin();//讀不到
        kwsk(true);
        //d3.timeout(policy_ComeOut,3000,id);
    }
    else {
        
        var area = d3.select(".policy_area")
            .style("display", "block")
            .transition()
            .duration(500)
            .style("opacity", "0.7");

        d3.selectAll(".policy_button")
            .style("opacity", "1");
        d3.select("#news" + id)
            .style("opacity", "0.7");

        d3.selectAll(".policy_text")
            .style("display", "none");
        d3.select("#text" + id)
            .style("display", "block");
        d3.selectAll(".timeline")
            .style("opacity", "0")
            .style("display", "none");
        d3.select("#timeline" + id)
            .transition()
            .duration(500)
            .style("opacity", "1")
            .style("display", "block");
    }

}
function close_text() {
    d3.select(".policy_area")
        .style("opacity", "0")
        .style("display", "none");
    d3.selectAll(".policy_button")
        .style("opacity", "1");
    d3.selectAll(".timeline")
        .style("opacity", "0")
        .style("display", "none");

}

function kwsk(IskwskChart) { /*原先圖表與1月~3月的圖表轉場*/
    
    let line1 = d3.select("#pBLine").interrupt();
    let line2 = d3.select("#paperCLine").interrupt();
    let line3 = d3.select("#pCLine").interrupt();

    var pathLength1 = line1.node().getTotalLength()
    var pathLength2 = line2.node().getTotalLength()
    var pathLength3 = line3.node().getTotalLength()
    var waitpoint1 = [1, 0.22]; //左邊表示消失，右邊表示長出來
    var waitpoint2 = [1, 0.115];
    var waitpoint3 = [1, 0.20];
    var counter = 0;
    var dur = 3000;

    if (IskwskChart == false) {
        IsTimelineChart = false;
        close_text();
        counter = 0;
        close_PPchart();
        d3.timeout(pathAni2, 3000);
        d3.select("#news6").html("看20年來的趨勢");
    }
    else {
        IsTimelineChart = true;
        counter = 1;
        close_PPchart2();
        d3.timeout(pathAni1, 3000);
        d3.select("#news6").html("2020詳細數據比較");

    }



}

function pathAni1() {
    d3.select("#PPchart2").style("display", "none");
    d3.select("#PPchart").style("opacity", "1");


    let line1 = d3.select("#pBLine").interrupt();
    let line2 = d3.select("#paperCLine").interrupt();
    let line3 = d3.select("#pCLine").interrupt();
    var waitpoint1 = [0.22];
    var waitpoint2 = [0.115];
    var waitpoint3 = [0.20];
    var pathLength1 = line1.node().getTotalLength();
    var pathLength2 = line2.node().getTotalLength();
    var pathLength3 = line3.node().getTotalLength();

    var dur = 3000;

    line1.attr("stroke-dashoffset", pathLength1)
        .attr("stroke-dasharray", pathLength1)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength1 * waitpoint1[0]);
    line2.attr("stroke-dashoffset", pathLength2)
        .attr("stroke-dasharray", pathLength2)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength2 * waitpoint2[0]);
    line3.attr("stroke-dashoffset", pathLength3)
        .attr("stroke-dasharray", pathLength3)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength3 * waitpoint3[0]);
}

function pathAni2() {
    d3.select("#PPchart2").style("display", "");
    d3.select("#PPchart").style("opacity", "0");


    let line1 = d3.select("#pBLine2").interrupt();
    let line2 = d3.select("#paperCLine2").interrupt();
    let line3 = d3.select("#pCLine2").interrupt();
    let line4 = d3.select("#BpBLine2").interrupt();
    let line5 = d3.select("#BpaperCLine2").interrupt();
    let line6 = d3.select("#BpCLine2").interrupt();

    var pathLength1 = line1.node().getTotalLength();
    var pathLength2 = line2.node().getTotalLength();
    var pathLength3 = line3.node().getTotalLength();
    var pathLength4 = line4.node().getTotalLength();
    var pathLength5 = line5.node().getTotalLength();
    var pathLength6 = line6.node().getTotalLength();

    var dur = 3000;

    line1.attr("stroke-dashoffset", pathLength1)
        .attr("stroke-dasharray", pathLength1)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", 0);
    line2.attr("stroke-dashoffset", pathLength2)
        .attr("stroke-dasharray", pathLength2)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", 0);
    line3.attr("stroke-dashoffset", pathLength3)
        .attr("stroke-dasharray", pathLength3)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", 0);
    line4.attr("stroke-dashoffset", pathLength4)
        .attr("stroke-dasharray", pathLength4)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", 0);
    line5.attr("stroke-dashoffset", pathLength5)
        .attr("stroke-dasharray", pathLength5)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", 0);
    line6.attr("stroke-dashoffset", pathLength6)
        .attr("stroke-dasharray", pathLength6)
        .transition()
        .duration(dur)
        .attr("stroke-dashoffset", 0);
}

function close_PPchart() {
    let line1 = d3.select("#pBLine").interrupt();
    let line2 = d3.select("#paperCLine").interrupt();
    let line3 = d3.select("#pCLine").interrupt();

    var pathLength1 = line1.node().getTotalLength();
    var pathLength2 = line2.node().getTotalLength();
    var pathLength3 = line3.node().getTotalLength();

    var dur = 3000;

    line1.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength1);
    line2.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength2);
    line3.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength3);
}
function close_PPchart2() {
    let line1 = d3.select("#pBLine2").interrupt();
    let line2 = d3.select("#paperCLine2").interrupt();
    let line3 = d3.select("#pCLine2").interrupt();
    let line4 = d3.select("#BpBLine2").interrupt();
    let line5 = d3.select("#BpaperCLine2").interrupt();
    let line6 = d3.select("#BpCLine2").interrupt();

    var pathLength1 = line1.node().getTotalLength();
    var pathLength2 = line2.node().getTotalLength();
    var pathLength3 = line3.node().getTotalLength();
    var pathLength4 = line4.node().getTotalLength();
    var pathLength5 = line5.node().getTotalLength();
    var pathLength6 = line6.node().getTotalLength();

    var dur = 3000;

    line1.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength1);
    line2.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength2);
    line3.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength3);
    line4.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength4);
    line5.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength5);
    line6.transition()
        .duration(dur)
        .attr("stroke-dashoffset", pathLength6);
    //d3.timeout(function C(){d3.select("#PPchart2").style("display","none");d3.select("#PPchart").style("opacity","1");},3000);

}

/*=====================宣告全域變數=========================================*/
// set the dimensions and margins of the graph
var margin = { top: 200, right: 20, bottom: 30, left: 80 },//left50
    width = 990 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;//500

// parse the date / time / Year 
var parseTime = d3.timeParse("%Y");
// 第二張圖以月為單位
var parseTime2 = d3.timeParse("%m");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the 1st line
var valueline = d3.line()
    .x(function (d) { return x(d.date); })
    .y(function (d) { return y(d.pB); });

// define the 2nd line
var valueline2 = d3.line()
    .x(function (d) { return x(d.date); })
    .y(function (d) { return y(d.paperC); });

// define the 3rd line
var valueline3 = d3.line()
    .x(function (d) { return x(d.date); })
    .y(function (d) { return y(d.pC); });


// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
console.log("OKOK");

/*=========================================================================*/

/* Get the data */
d3.csv("static/data/GarbageData.csv").then(function (data) {
    var svg = d3.select("#d3").append("svg")
        .attr("id", "PPchart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("background", "rgb(245,245,255)")
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
    x.domain(d3.extent(data, function (d) { return d.date; }));
    y.domain([0, d3.max(data, function (d) {
        return Math.max(d.pB, d.paperC, d.pC);
    })]);

    /*增加三條折線圖*/
    // Add the valueline path.
    svg.append("path")
        .data([data])
        .attr("id", "pBLine")
        .attr("class", "line")
        .style("stroke", "#29E7E3")
        .attr("d", valueline);

    // Add the valueline2 path.
    svg.append("path")
        .data([data])
        .attr("id", "paperCLine")
        .attr("class", "line")
        .style("stroke", "#24EB98")
        .attr("d", valueline2);

    // Add the valueline3 path.
    svg.append("path")
        .data([data])
        .attr("id", "pCLine")
        .attr("class", "line")
        .style("stroke", "#09AAE3")
        .attr("d", valueline3)

    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    svg.append("text")
        .style('font-size', '14px')
        //.style('font-weight', 'bold')
        .attr("x", -26)
        .attr("y", -10)
        .text("公噸");
    //滑鼠事件
    //d3.select("#PPchart")
    //.on("mouseover", ChartMouseOver)
    //.on("mouseout", ChartMouseOut)
    //.style("color", "#095DCE")
    svg.selectAll(".line")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    //icon
    svg.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("x", 20)
        .attr("y", -50)
        .style("fill", "#29E7E3")
    svg.append("text")
        //.style('font-size', '24px')
        .style('font-weight', 'bold')
        .attr("x", 40)
        .attr("y", -37)
        .text("塑膠袋生產量");

    svg.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("x", 170)
        .attr("y", -50)
        .style("fill", "#24EB98")
    svg.append("text")
        //.style('font-size', '24px')
        .style('font-weight', 'bold')
        .attr("x", 190)
        .attr("y", -37)
        .text("紙容器回收量");

    svg.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("x", 320)
        .attr("y", -50)
        .style("fill", "#09AAE3")
    svg.append("text")
        //.style('font-size', '24px')
        .style('font-weight', 'bold')
        .attr("x", 340)
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


    timeline_ComeOut(30, "timeline1");
    timeline_ComeOut(217.2, "timeline2");
    timeline_ComeOut(263.7, "timeline3");
    timeline_ComeOut(779.5, "timeline4");
    timeline_ComeOut(826, "timeline5");

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
        var mes = ["<span class='h4'>2002　郝龍斌宣布限塑</span><p>行政院環保署署長郝龍斌宣布，2002年7月1日起分階段限用塑膠袋及免洗餐具，並禁用厚度低於0.06公釐的塑膠袋。",
            "<span class='h4'>2006　限塑政策精進方案</span><p>塑膠袋增厚之後，重複使用率並未跟著提高，導致塑膠用量不減反增。環保署頒布「限塑政策精進方案」，取消對有店面餐飲業購物用塑膠袋限制。",
            "<span class='h4'>2007　實施限用塑膠類托盤及包裝盒</span><p>政府實施限用塑膠類托盤及包裝盒，要求賣場的生鮮食品包裝減量。",
            "<span class='h4'>2018　全國擴大實施限塑</span><p>全國擴大實施限塑環保局喊出「2020內用禁用、2025以價制量限用、2030全面禁用吸管、飲料杯、購物袋、免洗餐具等四種一次性塑膠製品」口號。",
            "<span class='h4'>2018/7/1　環保署宣布擴大禁止提供免費塑膠袋管制範圍</span><p>環保署宣布，擴大禁止提供免費塑膠袋管制範圍，新增7大類管制對象不得再免費提供購物用塑膠袋。",
            "<span class='h4'>2019　一次性塑膠吸管限制使用</span><p>7月1日起實施〈一次性塑膠吸管限制使用對象、實施方式及實施日期〉，「內用」不得提供一次性塑膠吸管。"];

        if (x[counter + 1]) {
            d3.timeout(policy, 2000);
        }
        news(x[counter] + 30, y[counter], mes[counter], widthA[counter], widthB[counter], heightA[counter], heightB[counter], left[counter], wait[counter]);

        counter++;
    }
    //滑鼠進入
    function handleMouseOver(d, i) {
        //其他線段

        d3.selectAll(".line")
            //.style("stroke-width","1px")
            .style("stroke-opacity", "0.3")

        d3.select(this)
            .style("stroke-width", "4px")
            .style("stroke-opacity", "1")
    }

    //滑鼠離開
    function handleMouseOut() {
        d3.selectAll(".line")
            .style("stroke-width", "2px")
            .style("stroke-opacity", "1")
    }

    /*animation 折線圖動畫*/
    function pathBegin() {

        let updatedPath1 = d3.select("#pBLine").interrupt().attr("d", valueline);
        let updatedPath2 = d3.select("#paperCLine").interrupt().attr("d", valueline2);
        let updatedPath3 = d3.select("#pCLine").interrupt().attr("d", valueline3);


        var pathLength1 = updatedPath1.node().getTotalLength();
        var pathLength2 = updatedPath2.node().getTotalLength();
        var pathLength3 = updatedPath3.node().getTotalLength();

        updatedPath1.attr("stroke-dashoffset", pathLength1)
            .attr("stroke-dasharray", pathLength1);
        updatedPath2.attr("stroke-dashoffset", pathLength2)
            .attr("stroke-dasharray", pathLength2);
        updatedPath3.attr("stroke-dashoffset", pathLength3)
            .attr("stroke-dasharray", pathLength3);

        pathAni();
    }
    function pathAni() {
        var waitpoint1 = [0.22];
        var waitpoint2 = [0.115];
        var waitpoint3 = [0.20];
        var dur = [5000];
        var pathLength1 = updatedPath1.node().getTotalLength();
        var pathLength2 = updatedPath2.node().getTotalLength();
        var pathLength3 = updatedPath3.node().getTotalLength();

        if (waitpoint1[lineCounter + 1]) {
            d3.timeout(pathAni, dur[lineCounter] + 500);
        }

        updatedPath1.transition().duration(dur[lineCounter])
            .attr("stroke-dashoffset", waitpoint1[lineCounter] * pathLength1)

        updatedPath2.transition().duration(dur[lineCounter])
            .attr("stroke-dashoffset", waitpoint2[lineCounter] * pathLength2)

        updatedPath3.transition().duration(dur[lineCounter])
            .attr("stroke-dashoffset", waitpoint3[lineCounter] * pathLength3)

        lineCounter++;
    }




    function timeline_ComeOut(x, id) { /*點擊政策後出現直線*/
        //x = 向右位移
        //y = 向下位移
        d3.select("#PPchart")
            .append('rect')
            .attr("id", id)
            .attr("class", "timeline")
            .attr("width", 3)
            .attr("x", 95.8 + x)
            .attr("height", 270)
            .attr("y", 200);

    }


});
Draw_Second_Graph();
function Draw_Second_Graph() { /*用以做出2020 第一季圖表 (第二章圖表)*/

    var margin = { top: 100, right: 20, bottom: 30, left: 80 },//left50
        width = 790 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;//500
    /* 修改看看 //目前最正確版*/
    var x = d3.scaleTime()
        .domain([new Date("2020-01-01"), new Date("2020-03-01")])
        .range([0, width]);
    //var x = d3.scaleLinear().range([0, width]);

    var y = d3.scaleLinear().range([height, 0]);


    d3.csv("static/data/2020_Garbage.csv").then(function (data2) {
        var svg = d3.select('#d3').append('svg')
            .style('display', "none")
            .attr("transform", "translate(0,-504)")
            .attr('id', "PPchart2")
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
        x.domain(d3.extent(data2, function (d) { return d.date; }));
        y.domain([0, d3.max(data2, function (d) {
            return Math.max(d.pB, d.paperC, d.pC, d.BpB, d.BpaperC, d.BpC);
        })]);

        // define the 1st line
        var valueline = d3.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.pB); });

        // define the 2nd line
        var valueline2 = d3.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.paperC); });

        // define the 3rd line
        var valueline3 = d3.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.pC); });

        // define the 1st line // 108
        var valueline4 = d3.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.BpB); });

        // define the 2nd line //108
        var valueline5 = d3.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.BpaperC); });

        // define the 3rd line //108
        var valueline6 = d3.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.BpC); });


        /*增加三條折線圖*/
        //避免id重複 後面多加2 
        // Add the valueline path.
        svg.append("path")
            .data([data2])
            .attr("id", "pBLine2")
            .attr("class", "line")
            .style("stroke", "hsl(354,83%,63%)")
            .attr("d", valueline);

        // Add the valueline2 path.
        svg.append("path")
            .data([data2])
            .attr("id", "paperCLine2")
            .attr("class", "line")
            .style("stroke", "hsl(155, 83%, 53%)")
            .attr("d", valueline2);

        // Add the valueline3 path.
        svg.append("path")
            .data([data2])
            .attr("id", "pCLine2")
            .attr("class", "line")
            .style("stroke", "hsl(196, 92%, 46%)")
            .attr("d", valueline3)

        //Add 108 三條折線
        svg.append("path")
            .data([data2])
            .attr("id", "BpBLine2")
            .attr("class", "line")
            .style("stroke", "hsl(344,73%,43%)")//-10-10-20
            //.style("opacity",0.7)
            .attr("d", valueline4);

        // Add the valueline2 path.
        svg.append("path")
            .data([data2])
            .attr("id", "BpaperCLine2")
            .attr("class", "line")
            .style("stroke", "hsl(145,73%,33%)") //hsl(155, 83%, 53%)
            //.style("opacity",0.7)
            .attr("d", valueline5);

        // Add the valueline3 path.
        svg.append("path")
            .data([data2])
            .attr("id", "BpCLine2")
            .attr("class", "line")
            .style("stroke", "hsl(191,87%,31%)") //hsl(196, 92%, 46%)
            //.style("opacity",0.7)
            .attr("d", valueline6)

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
            days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortMonths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        });

        /*新定義的x軸---用以表示月份*/
        var xAxis = d3.axisBottom(x)
            .tickFormat(locale.format("%b月"))
            //.tickFormat(d3.timeFormat("%B"))        
            .ticks(2);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("id", "newX")
            .call(xAxis);

        // Add the Y Axis
        svg.append("g")
            .call(d3.axisLeft(y));

        svg.append("text")
            .style('font-size', '14px')
            //.style('font-weight', 'bold')
            .attr("x", -26)
            .attr("y", -10)
            .text("公噸");

        /*三種垃圾代表色圖標*/
        svg.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 20)
            .attr("y", -60)
            .style("fill", "hsl(354,83%,63%)")
        svg.append("text")
            //.style('font-size', '24px')
            .style('font-weight', 'bold')
            .attr("x", 40)
            .attr("y", -47)
            .text("109年塑膠袋生產量");

        svg.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 220)
            .attr("y", -60)
            .style("fill", "hsl(155, 83%, 53%)")
        svg.append("text")
            //.style('font-size', '24px')
            .style('font-weight', 'bold')
            .attr("x", 240)
            .attr("y", -47)
            .text("109年紙容器回收量");

        svg.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 420)
            .attr("y", -60)
            .style("fill", "hsl(196, 92%, 46%)")
        svg.append("text")
            //.style('font-size', '24px')
            .style('font-weight', 'bold')
            .attr("x", 440)
            .attr("y", -47)
            .text("109年塑膠容器回收量");



        svg.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 20)
            .attr("y", -40)
            .style("fill", "hsl(344,73%,43%)")
        svg.append("text")
            //.style('font-size', '24px')
            .style('font-weight', 'bold')
            .attr("x", 40)
            .attr("y", -27)
            .text("108年塑膠袋生產量");

        svg.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 220)
            .attr("y", -40)
            .style("fill", "hsl(145, 73%, 33%)")
        svg.append("text")
            //.style('font-size', '24px')
            .style('font-weight', 'bold')
            .attr("x", 240)
            .attr("y", -27)
            .text("108年紙容器回收量");

        svg.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 420)
            .attr("y", -40)
            .style("fill", "hsl(191,87%,31%)")
        svg.append("text")
            //.style('font-size', '24px')
            .style('font-weight', 'bold')
            .attr("x", 440)
            .attr("y", -27)
            .text("108年塑膠容器回收量");

        svg.selectAll("#pBLine2").on("mouseover", pBMouseOver).on("mouseout", MouseOut);
        svg.selectAll("#BpBLine2").on("mouseover", pBMouseOver).on("mouseout", MouseOut);

        svg.selectAll("#paperCLine2").on("mouseover", paperCMouseOver).on("mouseout", MouseOut);
        svg.selectAll("#BpaperCLine2").on("mouseover", paperCMouseOver).on("mouseout", MouseOut);

        svg.selectAll("#pCLine2").on("mouseover", pCMouseOver).on("mouseout", MouseOut);
        svg.selectAll("#BpCLine2").on("mouseover", pCMouseOver).on("mouseout", MouseOut);

        //應該讓同種類不同年的一起醒目
        //滑鼠進入
        function pBMouseOver() {
            //其他線段
            d3.selectAll(".line")
                //.style("stroke-width","1px")
                .style("stroke-opacity", "0.3")
            d3.select("#pBLine2")
                .style("stroke-width", "4px")
                .style("stroke-opacity", "1")
            d3.select("#BpBLine2")
                .style("stroke-width", "4px")
                .style("stroke-opacity", "1")
        }
        function paperCMouseOver() {
            //其他線段
            d3.selectAll(".line")
                //.style("stroke-width","1px")
                .style("stroke-opacity", "0.3")
            d3.select("#paperCLine2")
                .style("stroke-width", "4px")
                .style("stroke-opacity", "1")
            d3.select("#BpaperCLine2")
                .style("stroke-width", "4px")
                .style("stroke-opacity", "1")
        }
        function pCMouseOver() {
            //其他線段
            d3.selectAll(".line")
                //.style("stroke-width","1px")
                .style("stroke-opacity", "0.3")
            d3.select("#pCLine2")
                .style("stroke-width", "4px")
                .style("stroke-opacity", "1")
            d3.select("#BpCLine2")
                .style("stroke-width", "4px")
                .style("stroke-opacity", "1")
        }
        //滑鼠離開
        function MouseOut() {
            d3.selectAll(".line")
                .style("stroke-width", "2px")
                .style("stroke-opacity", "1")
        }



    });



}