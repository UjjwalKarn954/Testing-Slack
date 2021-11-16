"use strict";
// https://www.terraform.io/docs/providers/aws/r/ebs_volume.html
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
exports.EbsVolume = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html aws_ebs_volume}
*/
var EbsVolume = /** @class */ (function (_super) {
    __extends(EbsVolume, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html aws_ebs_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsVolumeConfig
    */
    function EbsVolume(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ebs_volume',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._encrypted = config.encrypted;
        _this._iops = config.iops;
        _this._kmsKeyId = config.kmsKeyId;
        _this._multiAttachEnabled = config.multiAttachEnabled;
        _this._outpostArn = config.outpostArn;
        _this._size = config.size;
        _this._snapshotId = config.snapshotId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._throughput = config.throughput;
        _this._type = config.type;
        return _this;
    }
    Object.defineProperty(EbsVolume.prototype, "arn", {
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
    Object.defineProperty(EbsVolume.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "encrypted", {
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        set: function (value) {
            this._encrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetEncrypted = function () {
        this._encrypted = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "encryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "iops", {
        get: function () {
            return this.getNumberAttribute('iops');
        },
        set: function (value) {
            this._iops = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetIops = function () {
        this._iops = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "iopsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iops;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "multiAttachEnabled", {
        get: function () {
            return this.getBooleanAttribute('multi_attach_enabled');
        },
        set: function (value) {
            this._multiAttachEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetMultiAttachEnabled = function () {
        this._multiAttachEnabled = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "multiAttachEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multiAttachEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "outpostArn", {
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        set: function (value) {
            this._outpostArn = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetOutpostArn = function () {
        this._outpostArn = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "outpostArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outpostArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "size", {
        get: function () {
            return this.getNumberAttribute('size');
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetSize = function () {
        this._size = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "sizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "snapshotId", {
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        set: function (value) {
            this._snapshotId = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetSnapshotId = function () {
        this._snapshotId = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "snapshotIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "throughput", {
        get: function () {
            return this.getNumberAttribute('throughput');
        },
        set: function (value) {
            this._throughput = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetThroughput = function () {
        this._throughput = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "throughputInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._throughput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsVolume.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsVolume.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(EbsVolume.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EbsVolume.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            encrypted: cdktf.booleanToTerraform(this._encrypted),
            iops: cdktf.numberToTerraform(this._iops),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            multi_attach_enabled: cdktf.booleanToTerraform(this._multiAttachEnabled),
            outpost_arn: cdktf.stringToTerraform(this._outpostArn),
            size: cdktf.numberToTerraform(this._size),
            snapshot_id: cdktf.stringToTerraform(this._snapshotId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            throughput: cdktf.numberToTerraform(this._throughput),
            type: cdktf.stringToTerraform(this._type)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EbsVolume.tfResourceType = "aws_ebs_volume";
    return EbsVolume;
}(cdktf.TerraformResource));
exports.EbsVolume = EbsVolume;
