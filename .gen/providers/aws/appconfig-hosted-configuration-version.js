"use strict";
// https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html
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
exports.AppconfigHostedConfigurationVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html aws_appconfig_hosted_configuration_version}
*/
var AppconfigHostedConfigurationVersion = /** @class */ (function (_super) {
    __extends(AppconfigHostedConfigurationVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html aws_appconfig_hosted_configuration_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigHostedConfigurationVersionConfig
    */
    function AppconfigHostedConfigurationVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appconfig_hosted_configuration_version',
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
        _this._content = config.content;
        _this._contentType = config.contentType;
        _this._description = config.description;
        return _this;
    }
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "configurationProfileId", {
        get: function () {
            return this.getStringAttribute('configuration_profile_id');
        },
        set: function (value) {
            this._configurationProfileId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "configurationProfileIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationProfileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigHostedConfigurationVersion.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigHostedConfigurationVersion.prototype, "versionNumber", {
        // version_number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version_number');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppconfigHostedConfigurationVersion.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            configuration_profile_id: cdktf.stringToTerraform(this._configurationProfileId),
            content: cdktf.stringToTerraform(this._content),
            content_type: cdktf.stringToTerraform(this._contentType),
            description: cdktf.stringToTerraform(this._description)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppconfigHostedConfigurationVersion.tfResourceType = "aws_appconfig_hosted_configuration_version";
    return AppconfigHostedConfigurationVersion;
}(cdktf.TerraformResource));
exports.AppconfigHostedConfigurationVersion = AppconfigHostedConfigurationVersion;
