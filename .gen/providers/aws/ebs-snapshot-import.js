"use strict";
// https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html
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
exports.EbsSnapshotImport = void 0;
var cdktf = require("cdktf");
function ebsSnapshotImportClientDataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        upload_end: cdktf.stringToTerraform(struct.uploadEnd),
        upload_size: cdktf.numberToTerraform(struct.uploadSize),
        upload_start: cdktf.stringToTerraform(struct.uploadStart)
    };
}
function ebsSnapshotImportDiskContainerUserBucketToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_bucket: cdktf.stringToTerraform(struct.s3Bucket),
        s3_key: cdktf.stringToTerraform(struct.s3Key)
    };
}
function ebsSnapshotImportDiskContainerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        format: cdktf.stringToTerraform(struct.format),
        url: cdktf.stringToTerraform(struct.url),
        user_bucket: cdktf.listMapper(ebsSnapshotImportDiskContainerUserBucketToTerraform)(struct.userBucket)
    };
}
function ebsSnapshotImportTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html aws_ebs_snapshot_import}
*/
var EbsSnapshotImport = /** @class */ (function (_super) {
    __extends(EbsSnapshotImport, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html aws_ebs_snapshot_import} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotImportConfig
    */
    function EbsSnapshotImport(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ebs_snapshot_import',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._encrypted = config.encrypted;
        _this._kmsKeyId = config.kmsKeyId;
        _this._roleName = config.roleName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._clientData = config.clientData;
        _this._diskContainer = config.diskContainer;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(EbsSnapshotImport.prototype, "arn", {
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
    Object.defineProperty(EbsSnapshotImport.prototype, "dataEncryptionKeyId", {
        // data_encryption_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data_encryption_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotImport.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(EbsSnapshotImport.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "encrypted", {
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        set: function (value) {
            this._encrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotImport.prototype.resetEncrypted = function () {
        this._encrypted = undefined;
    };
    Object.defineProperty(EbsSnapshotImport.prototype, "encryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotImport.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(EbsSnapshotImport.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "ownerAlias", {
        // owner_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "roleName", {
        get: function () {
            return this.getStringAttribute('role_name');
        },
        set: function (value) {
            this._roleName = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotImport.prototype.resetRoleName = function () {
        this._roleName = undefined;
    };
    Object.defineProperty(EbsSnapshotImport.prototype, "roleNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotImport.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EbsSnapshotImport.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotImport.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EbsSnapshotImport.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "clientData", {
        get: function () {
            return this.interpolationForAttribute('client_data');
        },
        set: function (value) {
            this._clientData = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotImport.prototype.resetClientData = function () {
        this._clientData = undefined;
    };
    Object.defineProperty(EbsSnapshotImport.prototype, "clientDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "diskContainer", {
        get: function () {
            return this.interpolationForAttribute('disk_container');
        },
        set: function (value) {
            this._diskContainer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "diskContainerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._diskContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotImport.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotImport.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EbsSnapshotImport.prototype, "timeoutsInput", {
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
    EbsSnapshotImport.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            encrypted: cdktf.booleanToTerraform(this._encrypted),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            role_name: cdktf.stringToTerraform(this._roleName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            client_data: cdktf.listMapper(ebsSnapshotImportClientDataToTerraform)(this._clientData),
            disk_container: cdktf.listMapper(ebsSnapshotImportDiskContainerToTerraform)(this._diskContainer),
            timeouts: ebsSnapshotImportTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EbsSnapshotImport.tfResourceType = "aws_ebs_snapshot_import";
    return EbsSnapshotImport;
}(cdktf.TerraformResource));
exports.EbsSnapshotImport = EbsSnapshotImport;
