import React from 'react';

function YAxis(props){
    const { yScale, height, axisLable } = props;
    
    if(yScale){
        const isLinear = typeof (yScale.domain()[0]) === 'number';
        const ticks = isLinear ? yScale.ticks() : yScale.domain();

        return <g>
            <line x1={0} y1={0} x2={0} y2={height} stroke="black" />

            {ticks.map((tickValue, index) => {
                const yOffset = isLinear ? yScale(tickValue) : yScale(tickValue) + yScale.bandwidth() / 2;
                
                return (
                    <g key={index} transform={`translate(0, ${yOffset})`}>
                        <line x1={0} y1={0} x2={-5} y2={0} stroke="black" />
                        <text x={-5} y={0} style={{ textAnchor: 'end', alignmentBaseline: 'middle', fontSize: '12px' }}>
                            {tickValue}
                        </text>
                    </g>
                );
            })}

            {/* //the if(yScale){...} means when xScale is not null, the component will return the y-axis; otherwise, it returns <g></g>
            //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
            //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
       
            <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(20, 0)rotate(-90)`}>
                {axisLable}
            </text>
        </g>
    } else {
        return <g></g>
    }
}

export default YAxis;