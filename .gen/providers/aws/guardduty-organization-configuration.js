"use strict";
// https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html
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
exports.GuarddutyOrganizationConfiguration = void 0;
var cdktf = require("cdktf");
function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auto_enable: cdktf.booleanToTerraform(struct.autoEnable)
    };
}
function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_logs: cdktf.listMapper(guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform)(struct.s3Logs)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration}
*/
var GuarddutyOrganizationConfiguration = /** @class */ (function (_super) {
    __extends(GuarddutyOrganizationConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyOrganizationConfigurationConfig
    */
    function GuarddutyOrganizationConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_guardduty_organization_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoEnable = config.autoEnable;
        _this._detectorId = config.detectorId;
        _this._datasources = config.datasources;
        return _this;
    }
    Object.defineProperty(GuarddutyOrganizationConfiguration.prototype, "autoEnable", {
        get: function () {
            return this.getBooleanAttribute('auto_enable');
        },
        set: function (value) {
            this._autoEnable = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyOrganizationConfiguration.prototype, "autoEnableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoEnable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyOrganizationConfiguration.prototype, "detectorId", {
        get: function () {
            return this.getStringAttribute('detector_id');
        },
        set: function (value) {
            this._detectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyOrganizationConfiguration.prototype, "detectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._detectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyOrganizationConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyOrganizationConfiguration.prototype, "datasources", {
        get: function () {
            return this.interpolationForAttribute('datasources');
        },
        set: function (value) {
            this._datasources = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyOrganizationConfiguration.prototype.resetDatasources = function () {
        this._datasources = undefined;
    };
    Object.defineProperty(GuarddutyOrganizationConfiguration.prototype, "datasourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._datasources;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GuarddutyOrganizationConfiguration.prototype.synthesizeAttributes = function () {
        return {
            auto_enable: cdktf.booleanToTerraform(this._autoEnable),
            detector_id: cdktf.stringToTerraform(this._detectorId),
            datasources: cdktf.listMapper(guarddutyOrganizationConfigurationDatasourcesToTerraform)(this._datasources)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GuarddutyOrganizationConfiguration.tfResourceType = "aws_guardduty_organization_configuration";
    return GuarddutyOrganizationConfiguration;
}(cdktf.TerraformResource));
exports.GuarddutyOrganizationConfiguration = GuarddutyOrganizationConfiguration;
