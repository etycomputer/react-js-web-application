/* tslint:disable */
/* eslint-disable */

import { DefaultApiFactory } from "./api";
import { Configuration } from "./configuration";

/**
 * Objects API
 * API for managing objects
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
// export * from "./api";
// export * from "./configuration";
export * from "./models";

export const apiConfigs = new Configuration({
  basePath: "baseUrl",
});

export const apis = DefaultApiFactory(apiConfigs);

