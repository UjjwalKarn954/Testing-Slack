"use strict";
// https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html
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
exports.DataAwsLambdaInvocation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html aws_lambda_invocation}
*/
var DataAwsLambdaInvocation = /** @class */ (function (_super) {
    __extends(DataAwsLambdaInvocation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html aws_lambda_invocation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaInvocationConfig
    */
    function DataAwsLambdaInvocation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_invocation',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._functionName = config.functionName;
        _this._input = config.input;
        _this._qualifier = config.qualifier;
        return _this;
    }
    Object.defineProperty(DataAwsLambdaInvocation.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaInvocation.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaInvocation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaInvocation.prototype, "input", {
        get: function () {
            return this.getStringAttribute('input');
        },
        set: function (value) {
            this._input = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaInvocation.prototype, "inputInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaInvocation.prototype, "qualifier", {
        get: function () {
            return this.getStringAttribute('qualifier');
        },
        set: function (value) {
            this._qualifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLambdaInvocation.prototype.resetQualifier = function () {
        this._qualifier = undefined;
    };
    Object.defineProperty(DataAwsLambdaInvocation.prototype, "qualifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._qualifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaInvocation.prototype, "result", {
        // result - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('result');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLambdaInvocation.prototype.synthesizeAttributes = function () {
        return {
            function_name: cdktf.stringToTerraform(this._functionName),
            input: cdktf.stringToTerraform(this._input),
            qualifier: cdktf.stringToTerraform(this._qualifier)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLambdaInvocation.tfResourceType = "aws_lambda_invocation";
    return DataAwsLambdaInvocation;
}(cdktf.TerraformDataSource));
exports.DataAwsLambdaInvocation = DataAwsLambdaInvocation;
