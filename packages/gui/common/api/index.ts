import {
  type AuthMethodsConfiguration,
  createConfiguration,
  type Middleware,
  ProductPricesApi,
  ProductsApi,
  type RequestContext,
  type ResponseContext,
  ScrapperApi, ServerConfiguration,
  StoresApi
} from '@tracker/api-client'
import process from 'process'

const authConfig: AuthMethodsConfiguration = {}

class RequestMiddleware implements Middleware {
  async pre (context: RequestContext): Promise<RequestContext> {
    // Modify context here and return
    return await Promise.resolve(context)
  }

  async post (context: ResponseContext): Promise<ResponseContext> {
    return await Promise.resolve(context)
  }
}

export const server = new ServerConfiguration(process.env.NEXT_PUBLIC_API_BASE_URL ?? '', { })

const configurationParameters = {
  baseServer: server,
  authMethods: authConfig,
  promiseMiddleware: [new RequestMiddleware()]
}

const config = createConfiguration(configurationParameters)

interface Api {
  stores: StoresApi
  products: ProductsApi
  productPrices: ProductPricesApi
  scrapper: ScrapperApi
}

export const api: Api = {
  stores: new StoresApi(config),
  products: new ProductsApi(config),
  productPrices: new ProductPricesApi(config),
  scrapper: new ScrapperApi(config)
}
