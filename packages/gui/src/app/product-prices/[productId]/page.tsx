import { api } from '../../../../common/api'
import { Stack, Typography } from '@mui/material'
import { PricesChart } from '../../../../common/components/prices-chart'
import { ProductsChips } from '../../../../common/components/products-chips'

export default async function ProductPrices ({ params: { productId } }: { params: { productId: string } }) {
  const products = await api.products.productsControllerFindAll()
  const product = await api.products.productsControllerFindOne(productId)
  const productPrices = await api.productPrices.productPricesControllerFindByProduct(productId)

  const getDateString = (date: Date): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = ('0' + date.getDate().toString()).slice(-2)

    return `${day}-${month}-${year}`
  }

  const datesPrices: Record<string, number> = {}
  productPrices.forEach(productPrice => {
    const dateString = getDateString(productPrice.createdAt)
    const price = productPrice.price

    if (datesPrices[dateString] === undefined || datesPrices[dateString] > price) {
      datesPrices[dateString] = price
    }
  })

  const hasPrices = Object.keys(datesPrices).length > 0

  return (
    <Stack spacing={2}>
      <ProductsChips
        products={products}
        getIsActive={(product) => productId === product.id}
      />

      <Stack spacing={3}>
        <Typography variant={'h4'}>{product.name}</Typography>

        {hasPrices
          ? (
            <PricesChart prices={datesPrices} />
            )
          : (
            <Typography variant={'caption'}>
              No prices yet
            </Typography>
            )
        }
      </Stack>
    </Stack>
  )
}
