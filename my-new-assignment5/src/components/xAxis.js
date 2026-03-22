import React from 'react';

function XAxis(props) {
    const { xScale, height, width, axisLable } = props;

    if (xScale) {
        // 判断是线性比例尺（散点图）还是离散比例尺（柱状图）
        const isLinear = typeof (xScale.domain()[0]) === 'number';
        const ticks = isLinear ? xScale.ticks() : xScale.domain();

        return (
            <g transform={`translate(0, ${height})`}>
                {/* 画底部的轴线 */}
                <line x1={0} y1={0} x2={width} y2={0} stroke="black" />

                {ticks.map((tickValue, index) => {
                    // 散点图直接取值，柱状图取带宽的中心点
                    const xOffset = isLinear ? xScale(tickValue) : xScale(tickValue) + xScale.bandwidth() / 2;
                    
                    return (
                        <g key={index} transform={`translate(${xOffset}, 0)`}>
                            {/* 刻度短线 */}
                            <line x1={0} y1={0} x2={0} y2={5} stroke="black" />
                            {/* 刻度文字 */}
                            <text 
                                // 根据是否旋转微调文字的x, y位置，防止其紧贴刻度线或跑偏
                                x={isLinear ? 0 : 5} 
                                y={isLinear ? 15 : 10} 
                                style={{ 
                                    // 1. 旋转的关键：改变对齐点。旋转时改为从左侧对齐
                                    textAnchor: isLinear ? 'middle' : 'start', 
                                    fontSize: isLinear ? '12px' : '9px' // 柱状图字多，字号调小点
                                }}
                                // 2. 只有在柱状图时才斜着，让字diagonal，防止重叠
                                transform={isLinear ? '' : 'rotate(70)'} 
                            >
                                {tickValue}
                            </text>
                        </g>
                    );
                })}

                {/* 轴标签：为了防止被 20px 的 margin 裁掉，我们把它放在轴线末端的上方 (y={-6}) */}
                <text 
                    x={width} 
                    y={-6} 
                    style={{ 
                        textAnchor: 'end', 
                        fontSize: '15px', 
                        fill: 'black'
                    }}
                >
                    {axisLable}
                </text>
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default XAxis;