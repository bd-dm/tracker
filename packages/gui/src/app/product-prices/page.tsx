import { api } from '../../../common/api'
import { Stack } from '@mui/material'
import { ProductsChips } from '../../../common/components/products-chips'
export default async function ProductPrices () {
  const products = await api.products.productsControllerFindAll()

  return (
    <Stack direction={'row'} spacing={1}>
      <ProductsChips products={products}/>
    </Stack>
  )
}
