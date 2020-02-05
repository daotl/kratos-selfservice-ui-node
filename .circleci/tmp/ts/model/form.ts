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

import { FormField } from './formField';

/**
* HTMLForm represents a HTML Form. The container can work with both HTTP Form and JSON requests
*/
export class Form {
    /**
    * Action should be used as the form action URL (<form action=\"{{ .Action }}\" method=\"post\">).
    */
    'action'?: string;
    /**
    * Errors contains all form errors. These will be duplicates of the individual field errors.
    */
    'errors'?: Array<Error>;
    /**
    * Fields contains multiple fields
    */
    'fields'?: Array<FormField>;
    /**
    * Method is the form method (e.g. POST)
    */
    'method'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error>"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<FormField>"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Form.attributeTypeMap;
    }
}

