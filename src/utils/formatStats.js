import numeral from 'numeral';

export const formatStats = (stats) => (
    stats ? `+${numeral(stats).format("0.0a")}` : "+0"
)