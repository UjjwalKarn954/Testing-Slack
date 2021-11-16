"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html
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
exports.Apigatewayv2Deployment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html aws_apigatewayv2_deployment}
*/
var Apigatewayv2Deployment = /** @class */ (function (_super) {
    __extends(Apigatewayv2Deployment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html aws_apigatewayv2_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2DeploymentConfig
    */
    function Apigatewayv2Deployment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_deployment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._description = config.description;
        _this._triggers = config.triggers;
        return _this;
    }
    Object.defineProperty(Apigatewayv2Deployment.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Deployment.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Deployment.prototype, "autoDeployed", {
        // auto_deployed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_deployed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Deployment.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Deployment.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Apigatewayv2Deployment.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Deployment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Deployment.prototype, "triggers", {
        get: function () {
            return this.interpolationForAttribute('triggers');
        },
        set: function (value) {
            this._triggers = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Deployment.prototype.resetTriggers = function () {
        this._triggers = undefined;
    };
    Object.defineProperty(Apigatewayv2Deployment.prototype, "triggersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._triggers;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2Deployment.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            description: cdktf.stringToTerraform(this._description),
            triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2Deployment.tfResourceType = "aws_apigatewayv2_deployment";
    return Apigatewayv2Deployment;
}(cdktf.TerraformResource));
exports.Apigatewayv2Deployment = Apigatewayv2Deployment;
