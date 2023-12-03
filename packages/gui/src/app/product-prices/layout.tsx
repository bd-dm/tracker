import { type ReactNode } from 'react'
import { Stack, Typography } from '@mui/material'

export default async function ProductPricesLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <Stack>
      <Typography variant="h3" gutterBottom>
        Product prices
      </Typography>

      {children}
    </Stack>
  )
}
