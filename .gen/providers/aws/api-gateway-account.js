"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html
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
exports.ApiGatewayAccount = exports.ApiGatewayAccountThrottleSettings = void 0;
var cdktf = require("cdktf");
var ApiGatewayAccountThrottleSettings = /** @class */ (function (_super) {
    __extends(ApiGatewayAccountThrottleSettings, _super);
    function ApiGatewayAccountThrottleSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ApiGatewayAccountThrottleSettings.prototype, "burstLimit", {
        // burst_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('burst_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAccountThrottleSettings.prototype, "rateLimit", {
        // rate_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('rate_limit');
        },
        enumerable: false,
        configurable: true
    });
    return ApiGatewayAccountThrottleSettings;
}(cdktf.ComplexComputedList));
exports.ApiGatewayAccountThrottleSettings = ApiGatewayAccountThrottleSettings;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html aws_api_gateway_account}
*/
var ApiGatewayAccount = /** @class */ (function (_super) {
    __extends(ApiGatewayAccount, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html aws_api_gateway_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayAccountConfig = {}
    */
    function ApiGatewayAccount(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_account',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cloudwatchRoleArn = config.cloudwatchRoleArn;
        return _this;
    }
    Object.defineProperty(ApiGatewayAccount.prototype, "cloudwatchRoleArn", {
        get: function () {
            return this.getStringAttribute('cloudwatch_role_arn');
        },
        set: function (value) {
            this._cloudwatchRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayAccount.prototype.resetCloudwatchRoleArn = function () {
        this._cloudwatchRoleArn = undefined;
    };
    Object.defineProperty(ApiGatewayAccount.prototype, "cloudwatchRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAccount.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // throttle_settings - computed: true, optional: false, required: false
    ApiGatewayAccount.prototype.throttleSettings = function (index) {
        return new ApiGatewayAccountThrottleSettings(this, 'throttle_settings', index);
    };
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayAccount.prototype.synthesizeAttributes = function () {
        return {
            cloudwatch_role_arn: cdktf.stringToTerraform(this._cloudwatchRoleArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayAccount.tfResourceType = "aws_api_gateway_account";
    return ApiGatewayAccount;
}(cdktf.TerraformResource));
exports.ApiGatewayAccount = ApiGatewayAccount;
