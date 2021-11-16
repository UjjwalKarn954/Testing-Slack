"use strict";
// https://www.terraform.io/docs/providers/aws/r/ami.html
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
exports.Ami = void 0;
var cdktf = require("cdktf");
function amiEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function amiEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName)
    };
}
function amiTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami.html aws_ami}
*/
var Ami = /** @class */ (function (_super) {
    __extends(Ami, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami.html aws_ami} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiConfig
    */
    function Ami(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ami',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._architecture = config.architecture;
        _this._description = config.description;
        _this._enaSupport = config.enaSupport;
        _this._imageLocation = config.imageLocation;
        _this._kernelId = config.kernelId;
        _this._name = config.name;
        _this._ramdiskId = config.ramdiskId;
        _this._rootDeviceName = config.rootDeviceName;
        _this._sriovNetSupport = config.sriovNetSupport;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._virtualizationType = config.virtualizationType;
        _this._ebsBlockDevice = config.ebsBlockDevice;
        _this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Ami.prototype, "architecture", {
        get: function () {
            return this.getStringAttribute('architecture');
        },
        set: function (value) {
            this._architecture = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetArchitecture = function () {
        this._architecture = undefined;
    };
    Object.defineProperty(Ami.prototype, "architectureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._architecture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ami.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "enaSupport", {
        get: function () {
            return this.getBooleanAttribute('ena_support');
        },
        set: function (value) {
            this._enaSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetEnaSupport = function () {
        this._enaSupport = undefined;
    };
    Object.defineProperty(Ami.prototype, "enaSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enaSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "hypervisor", {
        // hypervisor - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hypervisor');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "imageLocation", {
        get: function () {
            return this.getStringAttribute('image_location');
        },
        set: function (value) {
            this._imageLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetImageLocation = function () {
        this._imageLocation = undefined;
    };
    Object.defineProperty(Ami.prototype, "imageLocationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageLocation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "imageOwnerAlias", {
        // image_owner_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_owner_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "imageType", {
        // image_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "kernelId", {
        get: function () {
            return this.getStringAttribute('kernel_id');
        },
        set: function (value) {
            this._kernelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetKernelId = function () {
        this._kernelId = undefined;
    };
    Object.defineProperty(Ami.prototype, "kernelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kernelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "manageEbsSnapshots", {
        // manage_ebs_snapshots - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('manage_ebs_snapshots');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "platformDetails", {
        // platform_details - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_details');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "public", {
        // public - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('public');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "ramdiskId", {
        get: function () {
            return this.getStringAttribute('ramdisk_id');
        },
        set: function (value) {
            this._ramdiskId = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetRamdiskId = function () {
        this._ramdiskId = undefined;
    };
    Object.defineProperty(Ami.prototype, "ramdiskIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ramdiskId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "rootDeviceName", {
        get: function () {
            return this.getStringAttribute('root_device_name');
        },
        set: function (value) {
            this._rootDeviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetRootDeviceName = function () {
        this._rootDeviceName = undefined;
    };
    Object.defineProperty(Ami.prototype, "rootDeviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootDeviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "rootSnapshotId", {
        // root_snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "sriovNetSupport", {
        get: function () {
            return this.getStringAttribute('sriov_net_support');
        },
        set: function (value) {
            this._sriovNetSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetSriovNetSupport = function () {
        this._sriovNetSupport = undefined;
    };
    Object.defineProperty(Ami.prototype, "sriovNetSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sriovNetSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ami.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ami.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "usageOperation", {
        // usage_operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "virtualizationType", {
        get: function () {
            return this.getStringAttribute('virtualization_type');
        },
        set: function (value) {
            this._virtualizationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetVirtualizationType = function () {
        this._virtualizationType = undefined;
    };
    Object.defineProperty(Ami.prototype, "virtualizationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualizationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "ebsBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ebs_block_device');
        },
        set: function (value) {
            this._ebsBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetEbsBlockDevice = function () {
        this._ebsBlockDevice = undefined;
    };
    Object.defineProperty(Ami.prototype, "ebsBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "ephemeralBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ephemeral_block_device');
        },
        set: function (value) {
            this._ephemeralBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetEphemeralBlockDevice = function () {
        this._ephemeralBlockDevice = undefined;
    };
    Object.defineProperty(Ami.prototype, "ephemeralBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ami.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Ami.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Ami.prototype, "timeoutsInput", {
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
    Ami.prototype.synthesizeAttributes = function () {
        return {
            architecture: cdktf.stringToTerraform(this._architecture),
            description: cdktf.stringToTerraform(this._description),
            ena_support: cdktf.booleanToTerraform(this._enaSupport),
            image_location: cdktf.stringToTerraform(this._imageLocation),
            kernel_id: cdktf.stringToTerraform(this._kernelId),
            name: cdktf.stringToTerraform(this._name),
            ramdisk_id: cdktf.stringToTerraform(this._ramdiskId),
            root_device_name: cdktf.stringToTerraform(this._rootDeviceName),
            sriov_net_support: cdktf.stringToTerraform(this._sriovNetSupport),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
            ebs_block_device: cdktf.listMapper(amiEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            ephemeral_block_device: cdktf.listMapper(amiEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            timeouts: amiTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ami.tfResourceType = "aws_ami";
    return Ami;
}(cdktf.TerraformResource));
exports.Ami = Ami;
