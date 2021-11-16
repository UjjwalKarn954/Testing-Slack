"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html
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
exports.ConfigConfigurationRecorderStatus = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status}
*/
var ConfigConfigurationRecorderStatus = /** @class */ (function (_super) {
    __extends(ConfigConfigurationRecorderStatus, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderStatusConfig
    */
    function ConfigConfigurationRecorderStatus(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_configuration_recorder_status',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._isEnabled = config.isEnabled;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(ConfigConfigurationRecorderStatus.prototype, "id", {
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
    Object.defineProperty(ConfigConfigurationRecorderStatus.prototype, "isEnabled", {
        get: function () {
            return this.getBooleanAttribute('is_enabled');
        },
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationRecorderStatus.prototype, "isEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationRecorderStatus.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationRecorderStatus.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ConfigConfigurationRecorderStatus.prototype.synthesizeAttributes = function () {
        return {
            is_enabled: cdktf.booleanToTerraform(this._isEnabled),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigConfigurationRecorderStatus.tfResourceType = "aws_config_configuration_recorder_status";
    return ConfigConfigurationRecorderStatus;
}(cdktf.TerraformResource));
exports.ConfigConfigurationRecorderStatus = ConfigConfigurationRecorderStatus;
