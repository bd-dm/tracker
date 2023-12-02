import { api } from '../../../common/api'

export default async function Stores () {
  const stores = await api.stores.storesControllerFindAll()
  console.log('stores', stores)

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
