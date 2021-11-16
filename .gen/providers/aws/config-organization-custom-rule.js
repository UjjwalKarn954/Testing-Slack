"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html
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
exports.ConfigOrganizationCustomRule = void 0;
var cdktf = require("cdktf");
function configOrganizationCustomRuleTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html aws_config_organization_custom_rule}
*/
var ConfigOrganizationCustomRule = /** @class */ (function (_super) {
    __extends(ConfigOrganizationCustomRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html aws_config_organization_custom_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationCustomRuleConfig
    */
    function ConfigOrganizationCustomRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_organization_custom_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._excludedAccounts = config.excludedAccounts;
        _this._inputParameters = config.inputParameters;
        _this._lambdaFunctionArn = config.lambdaFunctionArn;
        _this._maximumExecutionFrequency = config.maximumExecutionFrequency;
        _this._name = config.name;
        _this._resourceIdScope = config.resourceIdScope;
        _this._resourceTypesScope = config.resourceTypesScope;
        _this._tagKeyScope = config.tagKeyScope;
        _this._tagValueScope = config.tagValueScope;
        _this._triggerTypes = config.triggerTypes;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "arn", {
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
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "excludedAccounts", {
        get: function () {
            return this.getListAttribute('excluded_accounts');
        },
        set: function (value) {
            this._excludedAccounts = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetExcludedAccounts = function () {
        this._excludedAccounts = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "excludedAccountsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludedAccounts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "inputParameters", {
        get: function () {
            return this.getStringAttribute('input_parameters');
        },
        set: function (value) {
            this._inputParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetInputParameters = function () {
        this._inputParameters = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "inputParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "lambdaFunctionArn", {
        get: function () {
            return this.getStringAttribute('lambda_function_arn');
        },
        set: function (value) {
            this._lambdaFunctionArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "lambdaFunctionArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaFunctionArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "maximumExecutionFrequency", {
        get: function () {
            return this.getStringAttribute('maximum_execution_frequency');
        },
        set: function (value) {
            this._maximumExecutionFrequency = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetMaximumExecutionFrequency = function () {
        this._maximumExecutionFrequency = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "maximumExecutionFrequencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumExecutionFrequency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "resourceIdScope", {
        get: function () {
            return this.getStringAttribute('resource_id_scope');
        },
        set: function (value) {
            this._resourceIdScope = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetResourceIdScope = function () {
        this._resourceIdScope = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "resourceIdScopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceIdScope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "resourceTypesScope", {
        get: function () {
            return this.getListAttribute('resource_types_scope');
        },
        set: function (value) {
            this._resourceTypesScope = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetResourceTypesScope = function () {
        this._resourceTypesScope = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "resourceTypesScopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceTypesScope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "tagKeyScope", {
        get: function () {
            return this.getStringAttribute('tag_key_scope');
        },
        set: function (value) {
            this._tagKeyScope = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetTagKeyScope = function () {
        this._tagKeyScope = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "tagKeyScopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagKeyScope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "tagValueScope", {
        get: function () {
            return this.getStringAttribute('tag_value_scope');
        },
        set: function (value) {
            this._tagValueScope = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetTagValueScope = function () {
        this._tagValueScope = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "tagValueScopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagValueScope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "triggerTypes", {
        get: function () {
            return this.getListAttribute('trigger_types');
        },
        set: function (value) {
            this._triggerTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "triggerTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._triggerTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationCustomRule.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ConfigOrganizationCustomRule.prototype, "timeoutsInput", {
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
    ConfigOrganizationCustomRule.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
            input_parameters: cdktf.stringToTerraform(this._inputParameters),
            lambda_function_arn: cdktf.stringToTerraform(this._lambdaFunctionArn),
            maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
            name: cdktf.stringToTerraform(this._name),
            resource_id_scope: cdktf.stringToTerraform(this._resourceIdScope),
            resource_types_scope: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypesScope),
            tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
            tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
            trigger_types: cdktf.listMapper(cdktf.stringToTerraform)(this._triggerTypes),
            timeouts: configOrganizationCustomRuleTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigOrganizationCustomRule.tfResourceType = "aws_config_organization_custom_rule";
    return ConfigOrganizationCustomRule;
}(cdktf.TerraformResource));
exports.ConfigOrganizationCustomRule = ConfigOrganizationCustomRule;
