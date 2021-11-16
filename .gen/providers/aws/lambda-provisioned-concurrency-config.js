"use strict";
// https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html
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
exports.LambdaProvisionedConcurrencyConfig = void 0;
var cdktf = require("cdktf");
function lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config}
*/
var LambdaProvisionedConcurrencyConfig = /** @class */ (function (_super) {
    __extends(LambdaProvisionedConcurrencyConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaProvisionedConcurrencyConfigConfig
    */
    function LambdaProvisionedConcurrencyConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_provisioned_concurrency_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._functionName = config.functionName;
        _this._provisionedConcurrentExecutions = config.provisionedConcurrentExecutions;
        _this._qualifier = config.qualifier;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "provisionedConcurrentExecutions", {
        get: function () {
            return this.getNumberAttribute('provisioned_concurrent_executions');
        },
        set: function (value) {
            this._provisionedConcurrentExecutions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "provisionedConcurrentExecutionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provisionedConcurrentExecutions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "qualifier", {
        get: function () {
            return this.getStringAttribute('qualifier');
        },
        set: function (value) {
            this._qualifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "qualifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._qualifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaProvisionedConcurrencyConfig.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(LambdaProvisionedConcurrencyConfig.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LambdaProvisionedConcurrencyConfig.prototype.synthesizeAttributes = function () {
        return {
            function_name: cdktf.stringToTerraform(this._functionName),
            provisioned_concurrent_executions: cdktf.numberToTerraform(this._provisionedConcurrentExecutions),
            qualifier: cdktf.stringToTerraform(this._qualifier),
            timeouts: lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LambdaProvisionedConcurrencyConfig.tfResourceType = "aws_lambda_provisioned_concurrency_config";
    return LambdaProvisionedConcurrencyConfig;
}(cdktf.TerraformResource));
exports.LambdaProvisionedConcurrencyConfig = LambdaProvisionedConcurrencyConfig;
