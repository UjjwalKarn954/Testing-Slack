"use strict";
// https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html
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
exports.StoragegatewayStoredIscsiVolume = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html aws_storagegateway_stored_iscsi_volume}
*/
var StoragegatewayStoredIscsiVolume = /** @class */ (function (_super) {
    __extends(StoragegatewayStoredIscsiVolume, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html aws_storagegateway_stored_iscsi_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayStoredIscsiVolumeConfig
    */
    function StoragegatewayStoredIscsiVolume(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_stored_iscsi_volume',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._diskId = config.diskId;
        _this._gatewayArn = config.gatewayArn;
        _this._kmsEncrypted = config.kmsEncrypted;
        _this._kmsKey = config.kmsKey;
        _this._networkInterfaceId = config.networkInterfaceId;
        _this._preserveExistingData = config.preserveExistingData;
        _this._snapshotId = config.snapshotId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetName = config.targetName;
        return _this;
    }
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "arn", {
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
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "chapEnabled", {
        // chap_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('chap_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "diskId", {
        get: function () {
            return this.getStringAttribute('disk_id');
        },
        set: function (value) {
            this._diskId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "diskIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._diskId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "gatewayArn", {
        get: function () {
            return this.getStringAttribute('gateway_arn');
        },
        set: function (value) {
            this._gatewayArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "gatewayArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "kmsEncrypted", {
        get: function () {
            return this.getBooleanAttribute('kms_encrypted');
        },
        set: function (value) {
            this._kmsEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayStoredIscsiVolume.prototype.resetKmsEncrypted = function () {
        this._kmsEncrypted = undefined;
    };
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "kmsEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "kmsKey", {
        get: function () {
            return this.getStringAttribute('kms_key');
        },
        set: function (value) {
            this._kmsKey = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayStoredIscsiVolume.prototype.resetKmsKey = function () {
        this._kmsKey = undefined;
    };
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "kmsKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "lunNumber", {
        // lun_number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lun_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "networkInterfaceId", {
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        set: function (value) {
            this._networkInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "networkInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "networkInterfacePort", {
        // network_interface_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('network_interface_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "preserveExistingData", {
        get: function () {
            return this.getBooleanAttribute('preserve_existing_data');
        },
        set: function (value) {
            this._preserveExistingData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "preserveExistingDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preserveExistingData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "snapshotId", {
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        set: function (value) {
            this._snapshotId = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayStoredIscsiVolume.prototype.resetSnapshotId = function () {
        this._snapshotId = undefined;
    };
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "snapshotIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayStoredIscsiVolume.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayStoredIscsiVolume.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "targetArn", {
        // target_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "targetName", {
        get: function () {
            return this.getStringAttribute('target_name');
        },
        set: function (value) {
            this._targetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "targetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "volumeAttachmentStatus", {
        // volume_attachment_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_attachment_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "volumeId", {
        // volume_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "volumeSizeInBytes", {
        // volume_size_in_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size_in_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "volumeStatus", {
        // volume_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayStoredIscsiVolume.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    StoragegatewayStoredIscsiVolume.prototype.synthesizeAttributes = function () {
        return {
            disk_id: cdktf.stringToTerraform(this._diskId),
            gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
            kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
            kms_key: cdktf.stringToTerraform(this._kmsKey),
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            preserve_existing_data: cdktf.booleanToTerraform(this._preserveExistingData),
            snapshot_id: cdktf.stringToTerraform(this._snapshotId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_name: cdktf.stringToTerraform(this._targetName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    StoragegatewayStoredIscsiVolume.tfResourceType = "aws_storagegateway_stored_iscsi_volume";
    return StoragegatewayStoredIscsiVolume;
}(cdktf.TerraformResource));
exports.StoragegatewayStoredIscsiVolume = StoragegatewayStoredIscsiVolume;
