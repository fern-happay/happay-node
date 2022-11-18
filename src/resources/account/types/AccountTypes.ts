/**
 * This file auto-generated by Fern from our API Definition.
 */

import { HappayApi } from "../../..";

export interface AccountTypes<RawValue extends AccountTypes.RawValue = AccountTypes.RawValue> {
  value: RawValue;
  visit: <_Result>(visitor: HappayApi.AccountTypes._Visitor<_Result>) => _Result;
}

const _Prepaid: AccountTypes<"PREPAID"> = {
  value: "PREPAID",
  visit: (visitor) => visitor.prepaid(),
};
const _Limit: AccountTypes<"LIMIT"> = {
  value: "LIMIT",
  visit: (visitor) => visitor.limit(),
};
export const AccountTypes = {
  Prepaid: _Prepaid,
  Limit: _Limit,
  _parse: (value: string): AccountTypes => {
    switch (value) {
      case "PREPAID": {
        return _Prepaid;
      }
      case "LIMIT": {
        return _Limit;
      }
      default: {
        return {
          value: value as AccountTypes.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace AccountTypes {
  type RawValue = "PREPAID" | "LIMIT";

  interface _Visitor<_Result> {
    prepaid: () => _Result;
    limit: () => _Result;
    _other: (value: string) => _Result;
  }
}