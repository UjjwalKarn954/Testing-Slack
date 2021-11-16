"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html
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
exports.DataAwsCloudformationType = exports.DataAwsCloudformationTypeLoggingConfig = void 0;
var cdktf = require("cdktf");
var DataAwsCloudformationTypeLoggingConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudformationTypeLoggingConfig, _super);
    function DataAwsCloudformationTypeLoggingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudformationTypeLoggingConfig.prototype, "logGroupName", {
        // log_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('log_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationTypeLoggingConfig.prototype, "logRoleArn", {
        // log_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('log_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudformationTypeLoggingConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudformationTypeLoggingConfig = DataAwsCloudformationTypeLoggingConfig;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html aws_cloudformation_type}
*/
var DataAwsCloudformationType = /** @class */ (function (_super) {
    __extends(DataAwsCloudformationType, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html aws_cloudformation_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationTypeConfig = {}
    */
    function DataAwsCloudformationType(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._type = config.type;
        _this._typeName = config.typeName;
        _this._versionId = config.versionId;
        return _this;
    }
    Object.defineProperty(DataAwsCloudformationType.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "defaultVersionId", {
        // default_version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "deprecatedStatus", {
        // deprecated_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deprecated_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "documentationUrl", {
        // documentation_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('documentation_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "executionRoleArn", {
        // execution_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('execution_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "isDefaultVersion", {
        // is_default_version - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_default_version');
        },
        enumerable: false,
        configurable: true
    });
    // logging_config - computed: true, optional: false, required: false
    DataAwsCloudformationType.prototype.loggingConfig = function (index) {
        return new DataAwsCloudformationTypeLoggingConfig(this, 'logging_config', index);
    };
    Object.defineProperty(DataAwsCloudformationType.prototype, "provisioningType", {
        // provisioning_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provisioning_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "schema", {
        // schema - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schema');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "sourceUrl", {
        // source_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudformationType.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataAwsCloudformationType.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "typeArn", {
        // type_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "typeName", {
        get: function () {
            return this.getStringAttribute('type_name');
        },
        set: function (value) {
            this._typeName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudformationType.prototype.resetTypeName = function () {
        this._typeName = undefined;
    };
    Object.defineProperty(DataAwsCloudformationType.prototype, "typeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._typeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "versionId", {
        get: function () {
            return this.getStringAttribute('version_id');
        },
        set: function (value) {
            this._versionId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudformationType.prototype.resetVersionId = function () {
        this._versionId = undefined;
    };
    Object.defineProperty(DataAwsCloudformationType.prototype, "versionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationType.prototype, "visibility", {
        // visibility - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('visibility');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudformationType.prototype.synthesizeAttributes = function () {
        return {
            type: cdktf.stringToTerraform(this._type),
            type_name: cdktf.stringToTerraform(this._typeName),
            version_id: cdktf.stringToTerraform(this._versionId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudformationType.tfResourceType = "aws_cloudformation_type";
    return DataAwsCloudformationType;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudformationType = DataAwsCloudformationType;
