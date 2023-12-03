import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateProductDto } from '../models/CreateProductDto';
import { CreateStoreDto } from '../models/CreateStoreDto';
import { EntityProduct } from '../models/EntityProduct';
import { EntityProductPrice } from '../models/EntityProductPrice';
import { EntityStore } from '../models/EntityStore';

import { ObservableProductPricesApi } from "./ObservableAPI";
import { ProductPricesApiRequestFactory, ProductPricesApiResponseProcessor} from "../apis/ProductPricesApi";

export interface ProductPricesApiProductPricesControllerFindAllRequest {
}

export interface ProductPricesApiProductPricesControllerFindByProductRequest {
    /**
     * 
     * @type string
     * @memberof ProductPricesApiproductPricesControllerFindByProduct
     */
    productId: string
}

export class ObjectProductPricesApi {
    private api: ObservableProductPricesApi

    public constructor(configuration: Configuration, requestFactory?: ProductPricesApiRequestFactory, responseProcessor?: ProductPricesApiResponseProcessor) {
        this.api = new ObservableProductPricesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public productPricesControllerFindAllWithHttpInfo(param: ProductPricesApiProductPricesControllerFindAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EntityProductPrice>>> {
        return this.api.productPricesControllerFindAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productPricesControllerFindAll(param: ProductPricesApiProductPricesControllerFindAllRequest = {}, options?: Configuration): Promise<Array<EntityProductPrice>> {
        return this.api.productPricesControllerFindAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productPricesControllerFindByProductWithHttpInfo(param: ProductPricesApiProductPricesControllerFindByProductRequest, options?: Configuration): Promise<HttpInfo<Array<EntityProductPrice>>> {
        return this.api.productPricesControllerFindByProductWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productPricesControllerFindByProduct(param: ProductPricesApiProductPricesControllerFindByProductRequest, options?: Configuration): Promise<Array<EntityProductPrice>> {
        return this.api.productPricesControllerFindByProduct(param.productId,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiProductsControllerCreateRequest {
    /**
     * 
     * @type CreateProductDto
     * @memberof ProductsApiproductsControllerCreate
     */
    createProductDto: CreateProductDto
}

export interface ProductsApiProductsControllerFindAllRequest {
}

export interface ProductsApiProductsControllerFindOneRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiproductsControllerFindOne
     */
    id: string
}

export interface ProductsApiProductsControllerRemoveRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiproductsControllerRemove
     */
    id: string
}

export interface ProductsApiProductsControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiproductsControllerUpdate
     */
    id: string
    /**
     * 
     * @type any
     * @memberof ProductsApiproductsControllerUpdate
     */
    body: any
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public productsControllerCreateWithHttpInfo(param: ProductsApiProductsControllerCreateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.productsControllerCreateWithHttpInfo(param.createProductDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerCreate(param: ProductsApiProductsControllerCreateRequest, options?: Configuration): Promise<void> {
        return this.api.productsControllerCreate(param.createProductDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerFindAllWithHttpInfo(param: ProductsApiProductsControllerFindAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EntityProduct>>> {
        return this.api.productsControllerFindAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerFindAll(param: ProductsApiProductsControllerFindAllRequest = {}, options?: Configuration): Promise<Array<EntityProduct>> {
        return this.api.productsControllerFindAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerFindOneWithHttpInfo(param: ProductsApiProductsControllerFindOneRequest, options?: Configuration): Promise<HttpInfo<EntityProduct>> {
        return this.api.productsControllerFindOneWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerFindOne(param: ProductsApiProductsControllerFindOneRequest, options?: Configuration): Promise<EntityProduct> {
        return this.api.productsControllerFindOne(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerRemoveWithHttpInfo(param: ProductsApiProductsControllerRemoveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.productsControllerRemoveWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerRemove(param: ProductsApiProductsControllerRemoveRequest, options?: Configuration): Promise<void> {
        return this.api.productsControllerRemove(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerUpdateWithHttpInfo(param: ProductsApiProductsControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.productsControllerUpdateWithHttpInfo(param.id, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productsControllerUpdate(param: ProductsApiProductsControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.productsControllerUpdate(param.id, param.body,  options).toPromise();
    }

}

import { ObservableScrapperApi } from "./ObservableAPI";
import { ScrapperApiRequestFactory, ScrapperApiResponseProcessor} from "../apis/ScrapperApi";

export interface ScrapperApiScrapperControllerRunRequest {
}

export class ObjectScrapperApi {
    private api: ObservableScrapperApi

    public constructor(configuration: Configuration, requestFactory?: ScrapperApiRequestFactory, responseProcessor?: ScrapperApiResponseProcessor) {
        this.api = new ObservableScrapperApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public scrapperControllerRunWithHttpInfo(param: ScrapperApiScrapperControllerRunRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.scrapperControllerRunWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public scrapperControllerRun(param: ScrapperApiScrapperControllerRunRequest = {}, options?: Configuration): Promise<void> {
        return this.api.scrapperControllerRun( options).toPromise();
    }

}

import { ObservableStoresApi } from "./ObservableAPI";
import { StoresApiRequestFactory, StoresApiResponseProcessor} from "../apis/StoresApi";

export interface StoresApiStoresControllerCreateRequest {
    /**
     * 
     * @type CreateStoreDto
     * @memberof StoresApistoresControllerCreate
     */
    createStoreDto: CreateStoreDto
}

export interface StoresApiStoresControllerFindAllRequest {
}

export interface StoresApiStoresControllerFindOneRequest {
    /**
     * 
     * @type string
     * @memberof StoresApistoresControllerFindOne
     */
    id: string
}

export interface StoresApiStoresControllerRemoveRequest {
    /**
     * 
     * @type string
     * @memberof StoresApistoresControllerRemove
     */
    id: string
}

export interface StoresApiStoresControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof StoresApistoresControllerUpdate
     */
    id: string
    /**
     * 
     * @type any
     * @memberof StoresApistoresControllerUpdate
     */
    body: any
}

export class ObjectStoresApi {
    private api: ObservableStoresApi

    public constructor(configuration: Configuration, requestFactory?: StoresApiRequestFactory, responseProcessor?: StoresApiResponseProcessor) {
        this.api = new ObservableStoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public storesControllerCreateWithHttpInfo(param: StoresApiStoresControllerCreateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.storesControllerCreateWithHttpInfo(param.createStoreDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerCreate(param: StoresApiStoresControllerCreateRequest, options?: Configuration): Promise<void> {
        return this.api.storesControllerCreate(param.createStoreDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerFindAllWithHttpInfo(param: StoresApiStoresControllerFindAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EntityStore>>> {
        return this.api.storesControllerFindAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerFindAll(param: StoresApiStoresControllerFindAllRequest = {}, options?: Configuration): Promise<Array<EntityStore>> {
        return this.api.storesControllerFindAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerFindOneWithHttpInfo(param: StoresApiStoresControllerFindOneRequest, options?: Configuration): Promise<HttpInfo<EntityStore>> {
        return this.api.storesControllerFindOneWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerFindOne(param: StoresApiStoresControllerFindOneRequest, options?: Configuration): Promise<EntityStore> {
        return this.api.storesControllerFindOne(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerRemoveWithHttpInfo(param: StoresApiStoresControllerRemoveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.storesControllerRemoveWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerRemove(param: StoresApiStoresControllerRemoveRequest, options?: Configuration): Promise<void> {
        return this.api.storesControllerRemove(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerUpdateWithHttpInfo(param: StoresApiStoresControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.storesControllerUpdateWithHttpInfo(param.id, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storesControllerUpdate(param: StoresApiStoresControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.storesControllerUpdate(param.id, param.body,  options).toPromise();
    }

}
