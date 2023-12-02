'use client'

import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { api } from '../../../common/api'
import { Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { type EntityStore } from '@tracker/api-client'

export default function Stores () {
  const [stores, setStores] = useState<EntityStore[]>([])

  useEffect(() => {
    (async () => {
      const stores = await api.stores.storesControllerFindAll()

      setStores(stores)
    })()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'scrapper', headerName: 'Scrapper', flex: 1 },
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
        Stores
      </Typography>
      <DataGrid
        rows={stores}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        rowSelection={false}
        disableColumnFilter={true}
        disableColumnMenu={true}
        disableColumnSelector={true}
        hideFooter={true}
      />
    </Stack>
  )
}
