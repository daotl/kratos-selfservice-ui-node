/**
 * Ory Kratos
 * Welcome to the ORY Kratos HTTP API documentation!
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GenericErrorPayload } from './genericErrorPayload';

/**
* Error responses are sent when an error (e.g. unauthorized, bad request, ...) occurred.
*/
export class GenericError {
    'error'?: GenericErrorPayload;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "GenericErrorPayload"
        }    ];

    static getAttributeTypeMap() {
        return GenericError.attributeTypeMap;
    }
}

