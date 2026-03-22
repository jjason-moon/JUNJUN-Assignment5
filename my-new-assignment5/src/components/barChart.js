import React from 'react';
import Bars from './bars';
import XAxis from './xAxis';
import YAxis from './yAxis';

function BarChart(props){
    // 1. 在这里接住老爸（Charts）传下来的两个状态包裹
    const {
        offsetX, offsetY, data, xScale, yScale, height, width, 
        selectedStation, setSelectedStation
    } = props;
    
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        {/* 2. 把包裹接着往下传给干活的 Bars */}
        <Bars 
            data={data} 
            xScale={xScale} 
            yScale={yScale} 
            height={height}
            selectedStation={selectedStation}
            setSelectedStation={setSelectedStation}
        />
        <YAxis yScale={yScale} height={height} axisLable={"Bikers star from"}/>
        <XAxis xScale={xScale} height={height} width={width} />
    </g>
}

export default BarChart;