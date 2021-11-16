"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html
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
exports.Wafv2WebAclLoggingConfiguration = void 0;
var cdktf = require("cdktf");
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action)
    };
}
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        label_name: cdktf.stringToTerraform(struct.labelName)
    };
}
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform)(struct.actionCondition),
        label_name_condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform)(struct.labelNameCondition)
    };
}
function wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        behavior: cdktf.stringToTerraform(struct.behavior),
        requirement: cdktf.stringToTerraform(struct.requirement),
        condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform)(struct.condition)
    };
}
function wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_behavior: cdktf.stringToTerraform(struct.defaultBehavior),
        filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform)(struct.filter)
    };
}
function wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform)(struct.uriPath)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration}
*/
var Wafv2WebAclLoggingConfiguration = /** @class */ (function (_super) {
    __extends(Wafv2WebAclLoggingConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclLoggingConfigurationConfig
    */
    function Wafv2WebAclLoggingConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafv2_web_acl_logging_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._logDestinationConfigs = config.logDestinationConfigs;
        _this._resourceArn = config.resourceArn;
        _this._loggingFilter = config.loggingFilter;
        _this._redactedFields = config.redactedFields;
        return _this;
    }
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "logDestinationConfigs", {
        get: function () {
            return this.getListAttribute('log_destination_configs');
        },
        set: function (value) {
            this._logDestinationConfigs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "logDestinationConfigsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logDestinationConfigs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "resourceArn", {
        get: function () {
            return this.getStringAttribute('resource_arn');
        },
        set: function (value) {
            this._resourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "resourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "loggingFilter", {
        get: function () {
            return this.interpolationForAttribute('logging_filter');
        },
        set: function (value) {
            this._loggingFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2WebAclLoggingConfiguration.prototype.resetLoggingFilter = function () {
        this._loggingFilter = undefined;
    };
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "loggingFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "redactedFields", {
        get: function () {
            return this.interpolationForAttribute('redacted_fields');
        },
        set: function (value) {
            this._redactedFields = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2WebAclLoggingConfiguration.prototype.resetRedactedFields = function () {
        this._redactedFields = undefined;
    };
    Object.defineProperty(Wafv2WebAclLoggingConfiguration.prototype, "redactedFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redactedFields;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Wafv2WebAclLoggingConfiguration.prototype.synthesizeAttributes = function () {
        return {
            log_destination_configs: cdktf.listMapper(cdktf.stringToTerraform)(this._logDestinationConfigs),
            resource_arn: cdktf.stringToTerraform(this._resourceArn),
            logging_filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterToTerraform)(this._loggingFilter),
            redacted_fields: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform)(this._redactedFields)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Wafv2WebAclLoggingConfiguration.tfResourceType = "aws_wafv2_web_acl_logging_configuration";
    return Wafv2WebAclLoggingConfiguration;
}(cdktf.TerraformResource));
exports.Wafv2WebAclLoggingConfiguration = Wafv2WebAclLoggingConfiguration;
