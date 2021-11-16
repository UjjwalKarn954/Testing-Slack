"use strict";
// https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html
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
exports.AmiFromInstance = void 0;
var cdktf = require("cdktf");
function amiFromInstanceEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function amiFromInstanceEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function amiFromInstanceTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance}
*/
var AmiFromInstance = /** @class */ (function (_super) {
    __extends(AmiFromInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiFromInstanceConfig
    */
    function AmiFromInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ami_from_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._snapshotWithoutReboot = config.snapshotWithoutReboot;
        _this._sourceInstanceId = config.sourceInstanceId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._ebsBlockDevice = config.ebsBlockDevice;
        _this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(AmiFromInstance.prototype, "architecture", {
        // ==========
        // ATTRIBUTES
        // ==========
        // architecture - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('architecture');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiFromInstance.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AmiFromInstance.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "enaSupport", {
        // ena_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ena_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "hypervisor", {
        // hypervisor - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hypervisor');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "imageLocation", {
        // image_location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "imageOwnerAlias", {
        // image_owner_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_owner_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "imageType", {
        // image_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "kernelId", {
        // kernel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kernel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "manageEbsSnapshots", {
        // manage_ebs_snapshots - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('manage_ebs_snapshots');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "platformDetails", {
        // platform_details - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_details');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "public", {
        // public - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('public');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "ramdiskId", {
        // ramdisk_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ramdisk_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "rootDeviceName", {
        // root_device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "rootSnapshotId", {
        // root_snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "snapshotWithoutReboot", {
        get: function () {
            return this.getBooleanAttribute('snapshot_without_reboot');
        },
        set: function (value) {
            this._snapshotWithoutReboot = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiFromInstance.prototype.resetSnapshotWithoutReboot = function () {
        this._snapshotWithoutReboot = undefined;
    };
    Object.defineProperty(AmiFromInstance.prototype, "snapshotWithoutRebootInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotWithoutReboot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "sourceInstanceId", {
        get: function () {
            return this.getStringAttribute('source_instance_id');
        },
        set: function (value) {
            this._sourceInstanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "sourceInstanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceInstanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "sriovNetSupport", {
        // sriov_net_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sriov_net_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiFromInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AmiFromInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiFromInstance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AmiFromInstance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "usageOperation", {
        // usage_operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "virtualizationType", {
        // virtualization_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtualization_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "ebsBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ebs_block_device');
        },
        set: function (value) {
            this._ebsBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiFromInstance.prototype.resetEbsBlockDevice = function () {
        this._ebsBlockDevice = undefined;
    };
    Object.defineProperty(AmiFromInstance.prototype, "ebsBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "ephemeralBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ephemeral_block_device');
        },
        set: function (value) {
            this._ephemeralBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiFromInstance.prototype.resetEphemeralBlockDevice = function () {
        this._ephemeralBlockDevice = undefined;
    };
    Object.defineProperty(AmiFromInstance.prototype, "ephemeralBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiFromInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiFromInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(AmiFromInstance.prototype, "timeoutsInput", {
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
    AmiFromInstance.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            snapshot_without_reboot: cdktf.booleanToTerraform(this._snapshotWithoutReboot),
            source_instance_id: cdktf.stringToTerraform(this._sourceInstanceId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            ebs_block_device: cdktf.listMapper(amiFromInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            ephemeral_block_device: cdktf.listMapper(amiFromInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            timeouts: amiFromInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AmiFromInstance.tfResourceType = "aws_ami_from_instance";
    return AmiFromInstance;
}(cdktf.TerraformResource));
exports.AmiFromInstance = AmiFromInstance;
