"use strict";
// https://www.terraform.io/docs/providers/aws/r/ami_copy.html
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
exports.AmiCopy = void 0;
var cdktf = require("cdktf");
function amiCopyEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function amiCopyEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function amiCopyTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy}
*/
var AmiCopy = /** @class */ (function (_super) {
    __extends(AmiCopy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiCopyConfig
    */
    function AmiCopy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ami_copy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._destinationOutpostArn = config.destinationOutpostArn;
        _this._encrypted = config.encrypted;
        _this._kmsKeyId = config.kmsKeyId;
        _this._name = config.name;
        _this._sourceAmiId = config.sourceAmiId;
        _this._sourceAmiRegion = config.sourceAmiRegion;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._ebsBlockDevice = config.ebsBlockDevice;
        _this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(AmiCopy.prototype, "architecture", {
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
    Object.defineProperty(AmiCopy.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "destinationOutpostArn", {
        get: function () {
            return this.getStringAttribute('destination_outpost_arn');
        },
        set: function (value) {
            this._destinationOutpostArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetDestinationOutpostArn = function () {
        this._destinationOutpostArn = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "destinationOutpostArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationOutpostArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "enaSupport", {
        // ena_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ena_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "encrypted", {
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        set: function (value) {
            this._encrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetEncrypted = function () {
        this._encrypted = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "encryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "hypervisor", {
        // hypervisor - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hypervisor');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "imageLocation", {
        // image_location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "imageOwnerAlias", {
        // image_owner_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_owner_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "imageType", {
        // image_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "kernelId", {
        // kernel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kernel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "manageEbsSnapshots", {
        // manage_ebs_snapshots - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('manage_ebs_snapshots');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "platformDetails", {
        // platform_details - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_details');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "public", {
        // public - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('public');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "ramdiskId", {
        // ramdisk_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ramdisk_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "rootDeviceName", {
        // root_device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "rootSnapshotId", {
        // root_snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "sourceAmiId", {
        get: function () {
            return this.getStringAttribute('source_ami_id');
        },
        set: function (value) {
            this._sourceAmiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "sourceAmiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceAmiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "sourceAmiRegion", {
        get: function () {
            return this.getStringAttribute('source_ami_region');
        },
        set: function (value) {
            this._sourceAmiRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "sourceAmiRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceAmiRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "sriovNetSupport", {
        // sriov_net_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sriov_net_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "usageOperation", {
        // usage_operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "virtualizationType", {
        // virtualization_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtualization_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "ebsBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ebs_block_device');
        },
        set: function (value) {
            this._ebsBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetEbsBlockDevice = function () {
        this._ebsBlockDevice = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "ebsBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "ephemeralBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ephemeral_block_device');
        },
        set: function (value) {
            this._ephemeralBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetEphemeralBlockDevice = function () {
        this._ephemeralBlockDevice = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "ephemeralBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiCopy.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    AmiCopy.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(AmiCopy.prototype, "timeoutsInput", {
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
    AmiCopy.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            destination_outpost_arn: cdktf.stringToTerraform(this._destinationOutpostArn),
            encrypted: cdktf.booleanToTerraform(this._encrypted),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            name: cdktf.stringToTerraform(this._name),
            source_ami_id: cdktf.stringToTerraform(this._sourceAmiId),
            source_ami_region: cdktf.stringToTerraform(this._sourceAmiRegion),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            ebs_block_device: cdktf.listMapper(amiCopyEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            ephemeral_block_device: cdktf.listMapper(amiCopyEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            timeouts: amiCopyTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AmiCopy.tfResourceType = "aws_ami_copy";
    return AmiCopy;
}(cdktf.TerraformResource));
exports.AmiCopy = AmiCopy;
