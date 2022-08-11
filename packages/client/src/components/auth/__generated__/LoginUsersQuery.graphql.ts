/**
 * @generated SignedSource<<d8e2b2b19cacfa13be1efedc3e197dd5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LoginUsersQuery$variables = {};
export type LoginUsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly fullName: string;
  }>;
};
export type LoginUsersQuery = {
  response: LoginUsersQuery$data;
  variables: LoginUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LoginUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "894b2ddd55f032ea054769650550d8e2",
    "id": null,
    "metadata": {},
    "name": "LoginUsersQuery",
    "operationKind": "query",
    "text": "query LoginUsersQuery {\n  users {\n    fullName\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "35e4a73c07b94e217e84057a5f7b0f09";

export default node;
