"use strict";
// https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html
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
exports.AppconfigDeployment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html aws_appconfig_deployment}
*/
var AppconfigDeployment = /** @class */ (function (_super) {
    __extends(AppconfigDeployment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html aws_appconfig_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigDeploymentConfig
    */
    function AppconfigDeployment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appconfig_deployment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._configurationProfileId = config.configurationProfileId;
        _this._configurationVersion = config.configurationVersion;
        _this._deploymentStrategyId = config.deploymentStrategyId;
        _this._description = config.description;
        _this._environmentId = config.environmentId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(AppconfigDeployment.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "configurationProfileId", {
        get: function () {
            return this.getStringAttribute('configuration_profile_id');
        },
        set: function (value) {
            this._configurationProfileId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "configurationProfileIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationProfileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "configurationVersion", {
        get: function () {
            return this.getStringAttribute('configuration_version');
        },
        set: function (value) {
            this._configurationVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "configurationVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "deploymentNumber", {
        // deployment_number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('deployment_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "deploymentStrategyId", {
        get: function () {
            return this.getStringAttribute('deployment_strategy_id');
        },
        set: function (value) {
            this._deploymentStrategyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "deploymentStrategyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentStrategyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigDeployment.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppconfigDeployment.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "environmentId", {
        get: function () {
            return this.getStringAttribute('environment_id');
        },
        set: function (value) {
            this._environmentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "environmentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigDeployment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppconfigDeployment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeployment.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigDeployment.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppconfigDeployment.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppconfigDeployment.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            configuration_profile_id: cdktf.stringToTerraform(this._configurationProfileId),
            configuration_version: cdktf.stringToTerraform(this._configurationVersion),
            deployment_strategy_id: cdktf.stringToTerraform(this._deploymentStrategyId),
            description: cdktf.stringToTerraform(this._description),
            environment_id: cdktf.stringToTerraform(this._environmentId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppconfigDeployment.tfResourceType = "aws_appconfig_deployment";
    return AppconfigDeployment;
}(cdktf.TerraformResource));
exports.AppconfigDeployment = AppconfigDeployment;
