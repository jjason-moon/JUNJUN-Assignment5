import React from 'react';

function Bars(props) {
    // 1. 从 props 里接收状态，【删掉原本的 useState】
    const { data, xScale, yScale, height, selectedStation, setSelectedStation } = props;

    // 2. 定义变色逻辑：如果当前柱子是选中的站点，返回红色，否则返回铁蓝色
    const getColor = (selectedStation, station) => {
        return station === selectedStation ? 'red' : 'steelblue';
    };

    if(data){
        return <g>
            {data.map((d, i) => (
                <rect 
                    key={i} 
                    x={xScale(d.station)} 
                    y={yScale(d.start)} 
                    width={xScale.bandwidth()} 
                    height={height - yScale(d.start)} 
                    // 3. 调用函数判断颜色
                    fill={getColor(selectedStation, d.station)} 
                    // 4. 触发从老爸传下来的函数
                    onMouseEnter={() => setSelectedStation(d.station)}
                    onMouseOut={() => setSelectedStation(null)}
                />
            ))}
        </g>
    } else {
        return <g></g>
    }
}

export default Bars;