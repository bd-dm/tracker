import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CreateProductDto } from '../models/CreateProductDto';
import { CreateStoreDto } from '../models/CreateStoreDto';
import { EntityProduct } from '../models/EntityProduct';
import { EntityProductPrice } from '../models/EntityProductPrice';
import { EntityStore } from '../models/EntityStore';

import { ProductPricesApiRequestFactory, ProductPricesApiResponseProcessor} from "../apis/ProductPricesApi";
export class ObservableProductPricesApi {
    private requestFactory: ProductPricesApiRequestFactory;
    private responseProcessor: ProductPricesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductPricesApiRequestFactory,
        responseProcessor?: ProductPricesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductPricesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductPricesApiResponseProcessor();
    }

    /**
     */
    public productPricesControllerFindAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<EntityProductPrice>>> {
        const requestContextPromise = this.requestFactory.productPricesControllerFindAll(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productPricesControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public productPricesControllerFindAll(_options?: Configuration): Observable<Array<EntityProductPrice>> {
        return this.productPricesControllerFindAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<EntityProductPrice>>) => apiResponse.data));
    }

    /**
     * @param productId 
     */
    public productPricesControllerFindByProductWithHttpInfo(productId: string, _options?: Configuration): Observable<HttpInfo<Array<EntityProductPrice>>> {
        const requestContextPromise = this.requestFactory.productPricesControllerFindByProduct(productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productPricesControllerFindByProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param productId 
     */
    public productPricesControllerFindByProduct(productId: string, _options?: Configuration): Observable<Array<EntityProductPrice>> {
        return this.productPricesControllerFindByProductWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<Array<EntityProductPrice>>) => apiResponse.data));
    }

}

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class ObservableProductsApi {
    private requestFactory: ProductsApiRequestFactory;
    private responseProcessor: ProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApiResponseProcessor();
    }

    /**
     * @param createProductDto 
     */
    public productsControllerCreateWithHttpInfo(createProductDto: CreateProductDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.productsControllerCreate(createProductDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createProductDto 
     */
    public productsControllerCreate(createProductDto: CreateProductDto, _options?: Configuration): Observable<void> {
        return this.productsControllerCreateWithHttpInfo(createProductDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public productsControllerFindAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<EntityProduct>>> {
        const requestContextPromise = this.requestFactory.productsControllerFindAll(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public productsControllerFindAll(_options?: Configuration): Observable<Array<EntityProduct>> {
        return this.productsControllerFindAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<EntityProduct>>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public productsControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<EntityProduct>> {
        const requestContextPromise = this.requestFactory.productsControllerFindOne(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsControllerFindOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public productsControllerFindOne(id: string, _options?: Configuration): Observable<EntityProduct> {
        return this.productsControllerFindOneWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EntityProduct>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public productsControllerRemoveWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.productsControllerRemove(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsControllerRemoveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public productsControllerRemove(id: string, _options?: Configuration): Observable<void> {
        return this.productsControllerRemoveWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param body 
     */
    public productsControllerUpdateWithHttpInfo(id: string, body: any, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.productsControllerUpdate(id, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param body 
     */
    public productsControllerUpdate(id: string, body: any, _options?: Configuration): Observable<void> {
        return this.productsControllerUpdateWithHttpInfo(id, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ScrapperApiRequestFactory, ScrapperApiResponseProcessor} from "../apis/ScrapperApi";
export class ObservableScrapperApi {
    private requestFactory: ScrapperApiRequestFactory;
    private responseProcessor: ScrapperApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ScrapperApiRequestFactory,
        responseProcessor?: ScrapperApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ScrapperApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ScrapperApiResponseProcessor();
    }

    /**
     */
    public scrapperControllerRunWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.scrapperControllerRun(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.scrapperControllerRunWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public scrapperControllerRun(_options?: Configuration): Observable<void> {
        return this.scrapperControllerRunWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { StoresApiRequestFactory, StoresApiResponseProcessor} from "../apis/StoresApi";
export class ObservableStoresApi {
    private requestFactory: StoresApiRequestFactory;
    private responseProcessor: StoresApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StoresApiRequestFactory,
        responseProcessor?: StoresApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StoresApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StoresApiResponseProcessor();
    }

    /**
     * @param createStoreDto 
     */
    public storesControllerCreateWithHttpInfo(createStoreDto: CreateStoreDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.storesControllerCreate(createStoreDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.storesControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createStoreDto 
     */
    public storesControllerCreate(createStoreDto: CreateStoreDto, _options?: Configuration): Observable<void> {
        return this.storesControllerCreateWithHttpInfo(createStoreDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public storesControllerFindAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<EntityStore>>> {
        const requestContextPromise = this.requestFactory.storesControllerFindAll(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.storesControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public storesControllerFindAll(_options?: Configuration): Observable<Array<EntityStore>> {
        return this.storesControllerFindAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<EntityStore>>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public storesControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<EntityStore>> {
        const requestContextPromise = this.requestFactory.storesControllerFindOne(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.storesControllerFindOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public storesControllerFindOne(id: string, _options?: Configuration): Observable<EntityStore> {
        return this.storesControllerFindOneWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EntityStore>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public storesControllerRemoveWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.storesControllerRemove(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.storesControllerRemoveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public storesControllerRemove(id: string, _options?: Configuration): Observable<void> {
        return this.storesControllerRemoveWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param body 
     */
    public storesControllerUpdateWithHttpInfo(id: string, body: any, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.storesControllerUpdate(id, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.storesControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param body 
     */
    public storesControllerUpdate(id: string, body: any, _options?: Configuration): Observable<void> {
        return this.storesControllerUpdateWithHttpInfo(id, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
