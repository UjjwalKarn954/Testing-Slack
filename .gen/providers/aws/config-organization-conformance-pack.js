"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html
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
exports.ConfigOrganizationConformancePack = void 0;
var cdktf = require("cdktf");
function configOrganizationConformancePackInputParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue)
    };
}
function configOrganizationConformancePackTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html aws_config_organization_conformance_pack}
*/
var ConfigOrganizationConformancePack = /** @class */ (function (_super) {
    __extends(ConfigOrganizationConformancePack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html aws_config_organization_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationConformancePackConfig
    */
    function ConfigOrganizationConformancePack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_organization_conformance_pack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deliveryS3Bucket = config.deliveryS3Bucket;
        _this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
        _this._excludedAccounts = config.excludedAccounts;
        _this._name = config.name;
        _this._templateBody = config.templateBody;
        _this._templateS3Uri = config.templateS3Uri;
        _this._inputParameter = config.inputParameter;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "arn", {
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
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "deliveryS3Bucket", {
        get: function () {
            return this.getStringAttribute('delivery_s3_bucket');
        },
        set: function (value) {
            this._deliveryS3Bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationConformancePack.prototype.resetDeliveryS3Bucket = function () {
        this._deliveryS3Bucket = undefined;
    };
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "deliveryS3BucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryS3Bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "deliveryS3KeyPrefix", {
        get: function () {
            return this.getStringAttribute('delivery_s3_key_prefix');
        },
        set: function (value) {
            this._deliveryS3KeyPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationConformancePack.prototype.resetDeliveryS3KeyPrefix = function () {
        this._deliveryS3KeyPrefix = undefined;
    };
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "deliveryS3KeyPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryS3KeyPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "excludedAccounts", {
        get: function () {
            return this.getListAttribute('excluded_accounts');
        },
        set: function (value) {
            this._excludedAccounts = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationConformancePack.prototype.resetExcludedAccounts = function () {
        this._excludedAccounts = undefined;
    };
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "excludedAccountsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludedAccounts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "templateBody", {
        get: function () {
            return this.getStringAttribute('template_body');
        },
        set: function (value) {
            this._templateBody = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationConformancePack.prototype.resetTemplateBody = function () {
        this._templateBody = undefined;
    };
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "templateBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "templateS3Uri", {
        get: function () {
            return this.getStringAttribute('template_s3_uri');
        },
        set: function (value) {
            this._templateS3Uri = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationConformancePack.prototype.resetTemplateS3Uri = function () {
        this._templateS3Uri = undefined;
    };
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "templateS3UriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateS3Uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "inputParameter", {
        get: function () {
            return this.interpolationForAttribute('input_parameter');
        },
        set: function (value) {
            this._inputParameter = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationConformancePack.prototype.resetInputParameter = function () {
        this._inputParameter = undefined;
    };
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "inputParameterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputParameter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigOrganizationConformancePack.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ConfigOrganizationConformancePack.prototype, "timeoutsInput", {
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
    ConfigOrganizationConformancePack.prototype.synthesizeAttributes = function () {
        return {
            delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
            delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
            excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
            name: cdktf.stringToTerraform(this._name),
            template_body: cdktf.stringToTerraform(this._templateBody),
            template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
            input_parameter: cdktf.listMapper(configOrganizationConformancePackInputParameterToTerraform)(this._inputParameter),
            timeouts: configOrganizationConformancePackTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigOrganizationConformancePack.tfResourceType = "aws_config_organization_conformance_pack";
    return ConfigOrganizationConformancePack;
}(cdktf.TerraformResource));
exports.ConfigOrganizationConformancePack = ConfigOrganizationConformancePack;
