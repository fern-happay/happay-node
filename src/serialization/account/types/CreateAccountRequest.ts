/**
 * This file auto-generated by Fern from our API Definition.
 */

import { HappayApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const CreateAccountRequest: core.schemas.ObjectSchema<CreateAccountRequest.Raw, HappayApi.CreateAccountRequest> =
  core.schemas.object({
    accountType: core.schemas.property(
      "account_type",
      core.schemas.lazy(async () => (await import("../..")).AccountTypes)
    ),
    userId: core.schemas.property("user_id", core.schemas.string()),
  });

export declare namespace CreateAccountRequest {
  interface Raw {
    account_type: serializers.AccountTypes.Raw;
    user_id: string;
  }
}
