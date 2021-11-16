"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html
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
exports.ConfigConfigurationRecorder = void 0;
var cdktf = require("cdktf");
function configConfigurationRecorderRecordingGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_supported: cdktf.booleanToTerraform(struct.allSupported),
        include_global_resource_types: cdktf.booleanToTerraform(struct.includeGlobalResourceTypes),
        resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.resourceTypes)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder}
*/
var ConfigConfigurationRecorder = /** @class */ (function (_super) {
    __extends(ConfigConfigurationRecorder, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderConfig
    */
    function ConfigConfigurationRecorder(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_configuration_recorder',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._roleArn = config.roleArn;
        _this._recordingGroup = config.recordingGroup;
        return _this;
    }
    Object.defineProperty(ConfigConfigurationRecorder.prototype, "id", {
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
    Object.defineProperty(ConfigConfigurationRecorder.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigurationRecorder.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ConfigConfigurationRecorder.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationRecorder.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationRecorder.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationRecorder.prototype, "recordingGroup", {
        get: function () {
            return this.interpolationForAttribute('recording_group');
        },
        set: function (value) {
            this._recordingGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigurationRecorder.prototype.resetRecordingGroup = function () {
        this._recordingGroup = undefined;
    };
    Object.defineProperty(ConfigConfigurationRecorder.prototype, "recordingGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recordingGroup;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ConfigConfigurationRecorder.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            recording_group: cdktf.listMapper(configConfigurationRecorderRecordingGroupToTerraform)(this._recordingGroup)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigConfigurationRecorder.tfResourceType = "aws_config_configuration_recorder";
    return ConfigConfigurationRecorder;
}(cdktf.TerraformResource));
exports.ConfigConfigurationRecorder = ConfigConfigurationRecorder;
