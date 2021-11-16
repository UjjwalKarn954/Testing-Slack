"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html
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
exports.ApiGatewayUsagePlan = void 0;
var cdktf = require("cdktf");
function apiGatewayUsagePlanApiStagesThrottleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        burst_limit: cdktf.numberToTerraform(struct.burstLimit),
        path: cdktf.stringToTerraform(struct.path),
        rate_limit: cdktf.numberToTerraform(struct.rateLimit)
    };
}
function apiGatewayUsagePlanApiStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        api_id: cdktf.stringToTerraform(struct.apiId),
        stage: cdktf.stringToTerraform(struct.stage),
        throttle: cdktf.listMapper(apiGatewayUsagePlanApiStagesThrottleToTerraform)(struct.throttle)
    };
}
function apiGatewayUsagePlanQuotaSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        limit: cdktf.numberToTerraform(struct.limit),
        offset: cdktf.numberToTerraform(struct.offset),
        period: cdktf.stringToTerraform(struct.period)
    };
}
function apiGatewayUsagePlanThrottleSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        burst_limit: cdktf.numberToTerraform(struct.burstLimit),
        rate_limit: cdktf.numberToTerraform(struct.rateLimit)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan}
*/
var ApiGatewayUsagePlan = /** @class */ (function (_super) {
    __extends(ApiGatewayUsagePlan, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayUsagePlanConfig
    */
    function ApiGatewayUsagePlan(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_usage_plan',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._productCode = config.productCode;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._apiStages = config.apiStages;
        _this._quotaSettings = config.quotaSettings;
        _this._throttleSettings = config.throttleSettings;
        return _this;
    }
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayUsagePlan.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "productCode", {
        get: function () {
            return this.getStringAttribute('product_code');
        },
        set: function (value) {
            this._productCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayUsagePlan.prototype.resetProductCode = function () {
        this._productCode = undefined;
    };
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "productCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayUsagePlan.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayUsagePlan.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "apiStages", {
        get: function () {
            return this.interpolationForAttribute('api_stages');
        },
        set: function (value) {
            this._apiStages = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayUsagePlan.prototype.resetApiStages = function () {
        this._apiStages = undefined;
    };
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "apiStagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiStages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "quotaSettings", {
        get: function () {
            return this.interpolationForAttribute('quota_settings');
        },
        set: function (value) {
            this._quotaSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayUsagePlan.prototype.resetQuotaSettings = function () {
        this._quotaSettings = undefined;
    };
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "quotaSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._quotaSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "throttleSettings", {
        get: function () {
            return this.interpolationForAttribute('throttle_settings');
        },
        set: function (value) {
            this._throttleSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayUsagePlan.prototype.resetThrottleSettings = function () {
        this._throttleSettings = undefined;
    };
    Object.defineProperty(ApiGatewayUsagePlan.prototype, "throttleSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._throttleSettings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayUsagePlan.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            product_code: cdktf.stringToTerraform(this._productCode),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            api_stages: cdktf.listMapper(apiGatewayUsagePlanApiStagesToTerraform)(this._apiStages),
            quota_settings: cdktf.listMapper(apiGatewayUsagePlanQuotaSettingsToTerraform)(this._quotaSettings),
            throttle_settings: cdktf.listMapper(apiGatewayUsagePlanThrottleSettingsToTerraform)(this._throttleSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayUsagePlan.tfResourceType = "aws_api_gateway_usage_plan";
    return ApiGatewayUsagePlan;
}(cdktf.TerraformResource));
exports.ApiGatewayUsagePlan = ApiGatewayUsagePlan;
