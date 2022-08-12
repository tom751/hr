/**
 * @generated SignedSource<<9be38dd8911e4dffc4068f8eb6947f6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProtectedRouteQuery$variables = {};
export type ProtectedRouteQuery$data = {
  readonly me: {
    readonly email: string;
    readonly fullName: string;
    readonly id: string;
  } | null;
};
export type ProtectedRouteQuery = {
  response: ProtectedRouteQuery$data;
  variables: ProtectedRouteQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProtectedRouteQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProtectedRouteQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9fe35e969a9ac966bb1803c8092f676f",
    "id": null,
    "metadata": {},
    "name": "ProtectedRouteQuery",
    "operationKind": "query",
    "text": "query ProtectedRouteQuery {\n  me {\n    id\n    email\n    fullName\n  }\n}\n"
  }
};
})();

(node as any).hash = "a42f7c1bb7f027f83ffe0404a2a24780";

export default node;
