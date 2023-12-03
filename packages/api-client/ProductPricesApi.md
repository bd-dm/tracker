# .ProductPricesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productPricesControllerFindAll**](ProductPricesApi.md#productPricesControllerFindAll) | **GET** /product-prices | 
[**productPricesControllerFindByProduct**](ProductPricesApi.md#productPricesControllerFindByProduct) | **GET** /product-prices/{productId} | 


# **productPricesControllerFindAll**
> Array<EntityProductPrice> productPricesControllerFindAll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductPricesApi(configuration);

let body:any = {};

apiInstance.productPricesControllerFindAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<EntityProductPrice>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productPricesControllerFindByProduct**
> Array<EntityProductPrice> productPricesControllerFindByProduct()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductPricesApi(configuration);

let body:.ProductPricesApiProductPricesControllerFindByProductRequest = {
  // string
  productId: "productId_example",
};

apiInstance.productPricesControllerFindByProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] |  | defaults to undefined


### Return type

**Array<EntityProductPrice>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


