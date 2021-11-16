"use strict";
// https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html
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
exports.StoragegatewayCachedIscsiVolume = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html aws_storagegateway_cached_iscsi_volume}
*/
var StoragegatewayCachedIscsiVolume = /** @class */ (function (_super) {
    __extends(StoragegatewayCachedIscsiVolume, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html aws_storagegateway_cached_iscsi_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayCachedIscsiVolumeConfig
    */
    function StoragegatewayCachedIscsiVolume(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_cached_iscsi_volume',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._gatewayArn = config.gatewayArn;
        _this._kmsEncrypted = config.kmsEncrypted;
        _this._kmsKey = config.kmsKey;
        _this._networkInterfaceId = config.networkInterfaceId;
        _this._snapshotId = config.snapshotId;
        _this._sourceVolumeArn = config.sourceVolumeArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetName = config.targetName;
        _this._volumeSizeInBytes = config.volumeSizeInBytes;
        return _this;
    }
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "arn", {
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
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "chapEnabled", {
        // chap_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('chap_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "gatewayArn", {
        get: function () {
            return this.getStringAttribute('gateway_arn');
        },
        set: function (value) {
            this._gatewayArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "gatewayArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "kmsEncrypted", {
        get: function () {
            return this.getBooleanAttribute('kms_encrypted');
        },
        set: function (value) {
            this._kmsEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayCachedIscsiVolume.prototype.resetKmsEncrypted = function () {
        this._kmsEncrypted = undefined;
    };
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "kmsEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "kmsKey", {
        get: function () {
            return this.getStringAttribute('kms_key');
        },
        set: function (value) {
            this._kmsKey = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayCachedIscsiVolume.prototype.resetKmsKey = function () {
        this._kmsKey = undefined;
    };
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "kmsKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "lunNumber", {
        // lun_number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lun_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "networkInterfaceId", {
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        set: function (value) {
            this._networkInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "networkInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "networkInterfacePort", {
        // network_interface_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('network_interface_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "snapshotId", {
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        set: function (value) {
            this._snapshotId = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayCachedIscsiVolume.prototype.resetSnapshotId = function () {
        this._snapshotId = undefined;
    };
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "snapshotIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "sourceVolumeArn", {
        get: function () {
            return this.getStringAttribute('source_volume_arn');
        },
        set: function (value) {
            this._sourceVolumeArn = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayCachedIscsiVolume.prototype.resetSourceVolumeArn = function () {
        this._sourceVolumeArn = undefined;
    };
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "sourceVolumeArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceVolumeArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayCachedIscsiVolume.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayCachedIscsiVolume.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "targetArn", {
        // target_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "targetName", {
        get: function () {
            return this.getStringAttribute('target_name');
        },
        set: function (value) {
            this._targetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "targetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "volumeArn", {
        // volume_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "volumeId", {
        // volume_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "volumeSizeInBytes", {
        get: function () {
            return this.getNumberAttribute('volume_size_in_bytes');
        },
        set: function (value) {
            this._volumeSizeInBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayCachedIscsiVolume.prototype, "volumeSizeInBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeSizeInBytes;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    StoragegatewayCachedIscsiVolume.prototype.synthesizeAttributes = function () {
        return {
            gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
            kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
            kms_key: cdktf.stringToTerraform(this._kmsKey),
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            snapshot_id: cdktf.stringToTerraform(this._snapshotId),
            source_volume_arn: cdktf.stringToTerraform(this._sourceVolumeArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_name: cdktf.stringToTerraform(this._targetName),
            volume_size_in_bytes: cdktf.numberToTerraform(this._volumeSizeInBytes)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    StoragegatewayCachedIscsiVolume.tfResourceType = "aws_storagegateway_cached_iscsi_volume";
    return StoragegatewayCachedIscsiVolume;
}(cdktf.TerraformResource));
exports.StoragegatewayCachedIscsiVolume = StoragegatewayCachedIscsiVolume;
