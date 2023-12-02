import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateProductDto } from '../models/CreateProductDto';
import { CreateStoreDto } from '../models/CreateStoreDto';
import { ObservableProductPricesApi } from './ObservableAPI';

import { ProductPricesApiRequestFactory, ProductPricesApiResponseProcessor} from "../apis/ProductPricesApi";
export class PromiseProductPricesApi {
    private api: ObservableProductPricesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductPricesApiRequestFactory,
        responseProcessor?: ProductPricesApiResponseProcessor
    ) {
        this.api = new ObservableProductPricesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public productPricesControllerFindAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.productPricesControllerFindAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public productPricesControllerFindAll(_options?: Configuration): Promise<void> {
        const result = this.api.productPricesControllerFindAll(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public productPricesControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.productPricesControllerFindOneWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public productPricesControllerFindOne(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.productPricesControllerFindOne(id, _options);
        return result.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createProductDto 
     */
    public productsControllerCreateWithHttpInfo(createProductDto: CreateProductDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.productsControllerCreateWithHttpInfo(createProductDto, _options);
        return result.toPromise();
    }

    /**
     * @param createProductDto 
     */
    public productsControllerCreate(createProductDto: CreateProductDto, _options?: Configuration): Promise<void> {
        const result = this.api.productsControllerCreate(createProductDto, _options);
        return result.toPromise();
    }

    /**
     */
    public productsControllerFindAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.productsControllerFindAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public productsControllerFindAll(_options?: Configuration): Promise<void> {
        const result = this.api.productsControllerFindAll(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public productsControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.productsControllerFindOneWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public productsControllerFindOne(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.productsControllerFindOne(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public productsControllerRemoveWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.productsControllerRemoveWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public productsControllerRemove(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.productsControllerRemove(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param body 
     */
    public productsControllerUpdateWithHttpInfo(id: string, body: any, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.productsControllerUpdateWithHttpInfo(id, body, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param body 
     */
    public productsControllerUpdate(id: string, body: any, _options?: Configuration): Promise<void> {
        const result = this.api.productsControllerUpdate(id, body, _options);
        return result.toPromise();
    }


}



import { ObservableScrapperApi } from './ObservableAPI';

import { ScrapperApiRequestFactory, ScrapperApiResponseProcessor} from "../apis/ScrapperApi";
export class PromiseScrapperApi {
    private api: ObservableScrapperApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ScrapperApiRequestFactory,
        responseProcessor?: ScrapperApiResponseProcessor
    ) {
        this.api = new ObservableScrapperApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public scrapperControllerRunWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.scrapperControllerRunWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public scrapperControllerRun(_options?: Configuration): Promise<void> {
        const result = this.api.scrapperControllerRun(_options);
        return result.toPromise();
    }


}



import { ObservableStoresApi } from './ObservableAPI';

import { StoresApiRequestFactory, StoresApiResponseProcessor} from "../apis/StoresApi";
export class PromiseStoresApi {
    private api: ObservableStoresApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StoresApiRequestFactory,
        responseProcessor?: StoresApiResponseProcessor
    ) {
        this.api = new ObservableStoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createStoreDto 
     */
    public storesControllerCreateWithHttpInfo(createStoreDto: CreateStoreDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.storesControllerCreateWithHttpInfo(createStoreDto, _options);
        return result.toPromise();
    }

    /**
     * @param createStoreDto 
     */
    public storesControllerCreate(createStoreDto: CreateStoreDto, _options?: Configuration): Promise<void> {
        const result = this.api.storesControllerCreate(createStoreDto, _options);
        return result.toPromise();
    }

    /**
     */
    public storesControllerFindAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.storesControllerFindAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public storesControllerFindAll(_options?: Configuration): Promise<void> {
        const result = this.api.storesControllerFindAll(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public storesControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.storesControllerFindOneWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public storesControllerFindOne(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.storesControllerFindOne(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public storesControllerRemoveWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.storesControllerRemoveWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public storesControllerRemove(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.storesControllerRemove(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param body 
     */
    public storesControllerUpdateWithHttpInfo(id: string, body: any, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.storesControllerUpdateWithHttpInfo(id, body, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param body 
     */
    public storesControllerUpdate(id: string, body: any, _options?: Configuration): Promise<void> {
        const result = this.api.storesControllerUpdate(id, body, _options);
        return result.toPromise();
    }


}



