"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html
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
exports.SagemakerDeviceFleet = void 0;
var cdktf = require("cdktf");
function sagemakerDeviceFleetOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        s3_output_location: cdktf.stringToTerraform(struct.s3OutputLocation)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html aws_sagemaker_device_fleet}
*/
var SagemakerDeviceFleet = /** @class */ (function (_super) {
    __extends(SagemakerDeviceFleet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html aws_sagemaker_device_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDeviceFleetConfig
    */
    function SagemakerDeviceFleet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_device_fleet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._deviceFleetName = config.deviceFleetName;
        _this._enableIotRoleAlias = config.enableIotRoleAlias;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._outputConfig = config.outputConfig;
        return _this;
    }
    Object.defineProperty(SagemakerDeviceFleet.prototype, "arn", {
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
    Object.defineProperty(SagemakerDeviceFleet.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDeviceFleet.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SagemakerDeviceFleet.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "deviceFleetName", {
        get: function () {
            return this.getStringAttribute('device_fleet_name');
        },
        set: function (value) {
            this._deviceFleetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "deviceFleetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceFleetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "enableIotRoleAlias", {
        get: function () {
            return this.getBooleanAttribute('enable_iot_role_alias');
        },
        set: function (value) {
            this._enableIotRoleAlias = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDeviceFleet.prototype.resetEnableIotRoleAlias = function () {
        this._enableIotRoleAlias = undefined;
    };
    Object.defineProperty(SagemakerDeviceFleet.prototype, "enableIotRoleAliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableIotRoleAlias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "iotRoleAlias", {
        // iot_role_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iot_role_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDeviceFleet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerDeviceFleet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDeviceFleet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerDeviceFleet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "outputConfig", {
        get: function () {
            return this.interpolationForAttribute('output_config');
        },
        set: function (value) {
            this._outputConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDeviceFleet.prototype, "outputConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerDeviceFleet.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            device_fleet_name: cdktf.stringToTerraform(this._deviceFleetName),
            enable_iot_role_alias: cdktf.booleanToTerraform(this._enableIotRoleAlias),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            output_config: cdktf.listMapper(sagemakerDeviceFleetOutputConfigToTerraform)(this._outputConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerDeviceFleet.tfResourceType = "aws_sagemaker_device_fleet";
    return SagemakerDeviceFleet;
}(cdktf.TerraformResource));
exports.SagemakerDeviceFleet = SagemakerDeviceFleet;
