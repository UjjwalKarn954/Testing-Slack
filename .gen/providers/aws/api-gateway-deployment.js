"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html
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
exports.ApiGatewayDeployment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html aws_api_gateway_deployment}
*/
var ApiGatewayDeployment = /** @class */ (function (_super) {
    __extends(ApiGatewayDeployment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html aws_api_gateway_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDeploymentConfig
    */
    function ApiGatewayDeployment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_deployment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._restApiId = config.restApiId;
        _this._stageDescription = config.stageDescription;
        _this._stageName = config.stageName;
        _this._triggers = config.triggers;
        _this._variables = config.variables;
        return _this;
    }
    Object.defineProperty(ApiGatewayDeployment.prototype, "createdDate", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDeployment.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ApiGatewayDeployment.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "executionArn", {
        // execution_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('execution_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "invokeUrl", {
        // invoke_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invoke_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "stageDescription", {
        get: function () {
            return this.getStringAttribute('stage_description');
        },
        set: function (value) {
            this._stageDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDeployment.prototype.resetStageDescription = function () {
        this._stageDescription = undefined;
    };
    Object.defineProperty(ApiGatewayDeployment.prototype, "stageDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stageDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "stageName", {
        get: function () {
            return this.getStringAttribute('stage_name');
        },
        set: function (value) {
            this._stageName = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDeployment.prototype.resetStageName = function () {
        this._stageName = undefined;
    };
    Object.defineProperty(ApiGatewayDeployment.prototype, "stageNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stageName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "triggers", {
        get: function () {
            return this.interpolationForAttribute('triggers');
        },
        set: function (value) {
            this._triggers = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDeployment.prototype.resetTriggers = function () {
        this._triggers = undefined;
    };
    Object.defineProperty(ApiGatewayDeployment.prototype, "triggersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._triggers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDeployment.prototype, "variables", {
        get: function () {
            return this.interpolationForAttribute('variables');
        },
        set: function (value) {
            this._variables = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDeployment.prototype.resetVariables = function () {
        this._variables = undefined;
    };
    Object.defineProperty(ApiGatewayDeployment.prototype, "variablesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._variables;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayDeployment.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            stage_description: cdktf.stringToTerraform(this._stageDescription),
            stage_name: cdktf.stringToTerraform(this._stageName),
            triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
            variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayDeployment.tfResourceType = "aws_api_gateway_deployment";
    return ApiGatewayDeployment;
}(cdktf.TerraformResource));
exports.ApiGatewayDeployment = ApiGatewayDeployment;
