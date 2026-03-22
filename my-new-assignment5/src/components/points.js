import React from 'react';

function Points(props) {
    const { data, xScale, yScale, selectedStation, setSelectedStation, setTooltipX, setTooltipY } = props;

    const getColor = (selectedStation, station) => {
        return station === selectedStation ? 'red' : 'steelblue';
    };

    const getRadius = (selectedStation, station) => {
        return station === selectedStation ? 10 : 5;
    };

    if (data) {
        const chartWidth = xScale.range()[1]; 
        const chartHeight = yScale.range()[0];

        return (
            <g>
                {/* 散点 */}
                {data.map((d, i) => (
                    <circle
                        key={i}
                        cx={xScale(d.tripdurationS)}
                        cy={yScale(d.tripdurationE)}
                        r={getRadius(selectedStation, d.station)}
                        fill={getColor(selectedStation, d.station)}
                        onMouseEnter={(event) => {
                            setSelectedStation(d.station);
                            setTooltipX(event.pageX);
                            setTooltipY(event.pageY);
                        }}
                        onMouseOut={() => {
                            setSelectedStation(null);
                            setTooltipX(null);
                            setTooltipY(null);
                        }}
                    />
                ))}

                {/* 遮罩 */}
                {selectedStation !== null && (
                    <rect 
                        x={0} y={0} width={chartWidth} height={chartHeight} 
                        fill="yellow" opacity={0.5} style={{ pointerEvents: 'none' }} 
                    />
                )}

                {/* 高亮的点 */}
                {selectedStation !== null && data.filter(d => d.station === selectedStation).map((d, i) => (
                    <circle
                        key={'selected' + i}
                        cx={xScale(d.tripdurationS)}
                        cy={yScale(d.tripdurationE)}
                        r={getRadius(selectedStation, d.station)}
                        fill={getColor(selectedStation, d.station)}
                        onMouseEnter={(event) => {
                            setSelectedStation(d.station);
                            setTooltipX(event.pageX);
                            setTooltipY(event.pageY);
                        }}
                        onMouseOut={() => {
                            setSelectedStation(null);
                            setTooltipX(null);
                            setTooltipY(null);
                        }}
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default Points;