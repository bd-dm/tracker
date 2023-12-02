'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { type EntityProduct } from '@tracker/api-client'
import { api } from '../../../common/api'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { Stack, Typography } from '@mui/material'

export default function Products (): ReactNode {
  const [products, setProducts] = useState<EntityProduct[]>([])

  useEffect(() => {
    (async () => {
      const products = await api.products.productsControllerFindAll()

      setProducts(products)
    })()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'url', headerName: 'Url', flex: 1 },
    { field: 'storeId', headerName: 'Store ID' },
    {
      field: 'createdAt',
      headerName: 'Created',
      type: 'date'
    },
    {
      field: 'updatedAt',
      headerName: 'Updated',
      type: 'date'
    }
  ]

  return (
    <Stack spacing={3}>
      <Typography variant="h3" gutterBottom>
        Products
      </Typography>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 }
          }
        }}
        pageSizeOptions={[15, 30, 50]}
        rowSelection={false}
        disableColumnFilter={true}
        disableColumnMenu={true}
        disableColumnSelector={true}
        hideFooter={true}
      />
    </Stack>
  )
}
