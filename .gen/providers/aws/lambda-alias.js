"use strict";
// https://www.terraform.io/docs/providers/aws/r/lambda_alias.html
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
exports.LambdaAlias = void 0;
var cdktf = require("cdktf");
function lambdaAliasRoutingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        additional_version_weights: cdktf.hashMapper(cdktf.anyToTerraform)(struct.additionalVersionWeights)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html aws_lambda_alias}
*/
var LambdaAlias = /** @class */ (function (_super) {
    __extends(LambdaAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html aws_lambda_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaAliasConfig
    */
    function LambdaAlias(scope, id, config) {
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
        _this._description = config.description;
        _this._functionName = config.functionName;
        _this._functionVersion = config.functionVersion;
        _this._name = config.name;
        _this._routingConfig = config.routingConfig;
        return _this;
    }
    Object.defineProperty(LambdaAlias.prototype, "arn", {
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
    Object.defineProperty(LambdaAlias.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaAlias.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LambdaAlias.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "functionVersion", {
        get: function () {
            return this.getStringAttribute('function_version');
        },
        set: function (value) {
            this._functionVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "functionVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "invokeArn", {
        // invoke_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invoke_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaAlias.prototype, "routingConfig", {
        get: function () {
            return this.interpolationForAttribute('routing_config');
        },
        set: function (value) {
            this._routingConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaAlias.prototype.resetRoutingConfig = function () {
        this._routingConfig = undefined;
    };
    Object.defineProperty(LambdaAlias.prototype, "routingConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routingConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LambdaAlias.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            function_name: cdktf.stringToTerraform(this._functionName),
            function_version: cdktf.stringToTerraform(this._functionVersion),
            name: cdktf.stringToTerraform(this._name),
            routing_config: cdktf.listMapper(lambdaAliasRoutingConfigToTerraform)(this._routingConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LambdaAlias.tfResourceType = "aws_lambda_alias";
    return LambdaAlias;
}(cdktf.TerraformResource));
exports.LambdaAlias = LambdaAlias;
