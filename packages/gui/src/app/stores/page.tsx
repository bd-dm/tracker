'use client'

import { api } from '../../../common/api'
import { useEffect } from 'react'

export default function Stores () {
  useEffect(() => {
    (async () => {
      const stores = await api.stores.storesControllerFindAll()
      console.log('stores', stores)
    })()
  }, [])

  return (
    <p>stores</p>
    // <DataGrid
    //   rows={rows}
    //   columns={columns}
    //   initialState={{
    //     pagination: {
    //       paginationModel: { page: 0, pageSize: 5 }
    //     }
    //   }}
    //   pageSizeOptions={[5, 10]}
    //   checkboxSelection
    // />
  )
}
