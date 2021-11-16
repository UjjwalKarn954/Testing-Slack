"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ApiGatewayUsagePlanKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html aws_api_gateway_usage_plan_key}
*/
var ApiGatewayUsagePlanKey = /** @class */ (function (_super) {
    __extends(ApiGatewayUsagePlanKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html aws_api_gateway_usage_plan_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayUsagePlanKeyConfig
    */
    function ApiGatewayUsagePlanKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_usage_plan_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._keyId = config.keyId;
        _this._keyType = config.keyType;
        _this._usagePlanId = config.usagePlanId;
        return _this;
    }
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "keyType", {
        get: function () {
            return this.getStringAttribute('key_type');
        },
        set: function (value) {
            this._keyType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "keyTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "usagePlanId", {
        get: function () {
            return this.getStringAttribute('usage_plan_id');
        },
        set: function (value) {
            this._usagePlanId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "usagePlanIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usagePlanId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlanKey.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayUsagePlanKey.prototype.synthesizeAttributes = function () {
        return {
            key_id: cdktf.stringToTerraform(this._keyId),
            key_type: cdktf.stringToTerraform(this._keyType),
            usage_plan_id: cdktf.stringToTerraform(this._usagePlanId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayUsagePlanKey.tfResourceType = "aws_api_gateway_usage_plan_key";
    return ApiGatewayUsagePlanKey;
}(cdktf.TerraformResource));
exports.ApiGatewayUsagePlanKey = ApiGatewayUsagePlanKey;
