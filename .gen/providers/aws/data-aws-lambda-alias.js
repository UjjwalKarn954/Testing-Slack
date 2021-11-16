"use strict";
// https://www.terraform.io/docs/providers/aws/d/lambda_alias.html
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
exports.DataAwsLambdaAlias = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html aws_lambda_alias}
*/
var DataAwsLambdaAlias = /** @class */ (function (_super) {
    __extends(DataAwsLambdaAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html aws_lambda_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaAliasConfig
    */
    function DataAwsLambdaAlias(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_alias',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._functionName = config.functionName;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsLambdaAlias.prototype, "arn", {
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
    Object.defineProperty(DataAwsLambdaAlias.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaAlias.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaAlias.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaAlias.prototype, "functionVersion", {
        // function_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('function_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaAlias.prototype, "invokeArn", {
        // invoke_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invoke_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaAlias.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaAlias.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLambdaAlias.prototype.synthesizeAttributes = function () {
        return {
            function_name: cdktf.stringToTerraform(this._functionName),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLambdaAlias.tfResourceType = "aws_lambda_alias";
    return DataAwsLambdaAlias;
}(cdktf.TerraformDataSource));
exports.DataAwsLambdaAlias = DataAwsLambdaAlias;
