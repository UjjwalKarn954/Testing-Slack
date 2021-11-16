"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html
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
exports.ConfigRemediationConfiguration = void 0;
var cdktf = require("cdktf");
function configRemediationConfigurationParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        resource_value: cdktf.stringToTerraform(struct.resourceValue),
        static_value: cdktf.stringToTerraform(struct.staticValue)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration}
*/
var ConfigRemediationConfiguration = /** @class */ (function (_super) {
    __extends(ConfigRemediationConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigRemediationConfigurationConfig
    */
    function ConfigRemediationConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_remediation_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._configRuleName = config.configRuleName;
        _this._resourceType = config.resourceType;
        _this._targetId = config.targetId;
        _this._targetType = config.targetType;
        _this._targetVersion = config.targetVersion;
        _this._parameter = config.parameter;
        return _this;
    }
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "arn", {
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
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "configRuleName", {
        get: function () {
            return this.getStringAttribute('config_rule_name');
        },
        set: function (value) {
            this._configRuleName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "configRuleNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configRuleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "resourceType", {
        get: function () {
            return this.getStringAttribute('resource_type');
        },
        set: function (value) {
            this._resourceType = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigRemediationConfiguration.prototype.resetResourceType = function () {
        this._resourceType = undefined;
    };
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "resourceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "targetId", {
        get: function () {
            return this.getStringAttribute('target_id');
        },
        set: function (value) {
            this._targetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "targetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "targetType", {
        get: function () {
            return this.getStringAttribute('target_type');
        },
        set: function (value) {
            this._targetType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "targetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "targetVersion", {
        get: function () {
            return this.getStringAttribute('target_version');
        },
        set: function (value) {
            this._targetVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigRemediationConfiguration.prototype.resetTargetVersion = function () {
        this._targetVersion = undefined;
    };
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "targetVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "parameter", {
        get: function () {
            return this.interpolationForAttribute('parameter');
        },
        set: function (value) {
            this._parameter = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigRemediationConfiguration.prototype.resetParameter = function () {
        this._parameter = undefined;
    };
    Object.defineProperty(ConfigRemediationConfiguration.prototype, "parameterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ConfigRemediationConfiguration.prototype.synthesizeAttributes = function () {
        return {
            config_rule_name: cdktf.stringToTerraform(this._configRuleName),
            resource_type: cdktf.stringToTerraform(this._resourceType),
            target_id: cdktf.stringToTerraform(this._targetId),
            target_type: cdktf.stringToTerraform(this._targetType),
            target_version: cdktf.stringToTerraform(this._targetVersion),
            parameter: cdktf.listMapper(configRemediationConfigurationParameterToTerraform)(this._parameter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigRemediationConfiguration.tfResourceType = "aws_config_remediation_configuration";
    return ConfigRemediationConfiguration;
}(cdktf.TerraformResource));
exports.ConfigRemediationConfiguration = ConfigRemediationConfiguration;
