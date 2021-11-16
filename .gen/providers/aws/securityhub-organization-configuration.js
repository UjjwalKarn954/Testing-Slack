"use strict";
// https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html
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
exports.SecurityhubOrganizationConfiguration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html aws_securityhub_organization_configuration}
*/
var SecurityhubOrganizationConfiguration = /** @class */ (function (_super) {
    __extends(SecurityhubOrganizationConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html aws_securityhub_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubOrganizationConfigurationConfig
    */
    function SecurityhubOrganizationConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_securityhub_organization_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoEnable = config.autoEnable;
        return _this;
    }
    Object.defineProperty(SecurityhubOrganizationConfiguration.prototype, "autoEnable", {
        get: function () {
            return this.getBooleanAttribute('auto_enable');
        },
        set: function (value) {
            this._autoEnable = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubOrganizationConfiguration.prototype, "autoEnableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoEnable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubOrganizationConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecurityhubOrganizationConfiguration.prototype.synthesizeAttributes = function () {
        return {
            auto_enable: cdktf.booleanToTerraform(this._autoEnable)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityhubOrganizationConfiguration.tfResourceType = "aws_securityhub_organization_configuration";
    return SecurityhubOrganizationConfiguration;
}(cdktf.TerraformResource));
exports.SecurityhubOrganizationConfiguration = SecurityhubOrganizationConfiguration;
