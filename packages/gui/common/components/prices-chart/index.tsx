'use client'

import { type FC } from 'react'
import { BarChart } from '@mui/x-charts'

interface PricesChartProps {
  prices: Record<string, number>
}

export const PricesChart: FC<PricesChartProps> = ({ prices }) => {
  const dates = Object.keys(prices)
  const datePrices = Object.values(prices)

  return (

    <BarChart
      xAxis={[
        {
          id: 'dates',
          data: dates,
          scaleType: 'band'
        }
      ]}
      series={[
        {
          data: datePrices
        }
      ]}
      height={300}
    />
  )
}
