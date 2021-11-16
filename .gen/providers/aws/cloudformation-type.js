"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html
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
exports.CloudformationType = void 0;
var cdktf = require("cdktf");
function cloudformationTypeLoggingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_role_arn: cdktf.stringToTerraform(struct.logRoleArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type}
*/
var CloudformationType = /** @class */ (function (_super) {
    __extends(CloudformationType, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationTypeConfig
    */
    function CloudformationType(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudformation_type',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._executionRoleArn = config.executionRoleArn;
        _this._schemaHandlerPackage = config.schemaHandlerPackage;
        _this._type = config.type;
        _this._typeName = config.typeName;
        _this._loggingConfig = config.loggingConfig;
        return _this;
    }
    Object.defineProperty(CloudformationType.prototype, "arn", {
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
    Object.defineProperty(CloudformationType.prototype, "defaultVersionId", {
        // default_version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "deprecatedStatus", {
        // deprecated_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deprecated_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "documentationUrl", {
        // documentation_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('documentation_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "executionRoleArn", {
        get: function () {
            return this.getStringAttribute('execution_role_arn');
        },
        set: function (value) {
            this._executionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationType.prototype.resetExecutionRoleArn = function () {
        this._executionRoleArn = undefined;
    };
    Object.defineProperty(CloudformationType.prototype, "executionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "isDefaultVersion", {
        // is_default_version - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_default_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "provisioningType", {
        // provisioning_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provisioning_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "schema", {
        // schema - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schema');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "schemaHandlerPackage", {
        get: function () {
            return this.getStringAttribute('schema_handler_package');
        },
        set: function (value) {
            this._schemaHandlerPackage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "schemaHandlerPackageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schemaHandlerPackage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "sourceUrl", {
        // source_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationType.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(CloudformationType.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "typeArn", {
        // type_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "typeName", {
        get: function () {
            return this.getStringAttribute('type_name');
        },
        set: function (value) {
            this._typeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "typeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._typeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "visibility", {
        // visibility - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('visibility');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationType.prototype, "loggingConfig", {
        get: function () {
            return this.interpolationForAttribute('logging_config');
        },
        set: function (value) {
            this._loggingConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationType.prototype.resetLoggingConfig = function () {
        this._loggingConfig = undefined;
    };
    Object.defineProperty(CloudformationType.prototype, "loggingConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudformationType.prototype.synthesizeAttributes = function () {
        return {
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            schema_handler_package: cdktf.stringToTerraform(this._schemaHandlerPackage),
            type: cdktf.stringToTerraform(this._type),
            type_name: cdktf.stringToTerraform(this._typeName),
            logging_config: cdktf.listMapper(cloudformationTypeLoggingConfigToTerraform)(this._loggingConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudformationType.tfResourceType = "aws_cloudformation_type";
    return CloudformationType;
}(cdktf.TerraformResource));
exports.CloudformationType = CloudformationType;
