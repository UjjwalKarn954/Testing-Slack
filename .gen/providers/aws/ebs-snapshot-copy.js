"use strict";
// https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html
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
exports.EbsSnapshotCopy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html aws_ebs_snapshot_copy}
*/
var EbsSnapshotCopy = /** @class */ (function (_super) {
    __extends(EbsSnapshotCopy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html aws_ebs_snapshot_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotCopyConfig
    */
    function EbsSnapshotCopy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ebs_snapshot_copy',
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
        _this._sourceRegion = config.sourceRegion;
        _this._sourceSnapshotId = config.sourceSnapshotId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(EbsSnapshotCopy.prototype, "arn", {
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
    Object.defineProperty(EbsSnapshotCopy.prototype, "dataEncryptionKeyId", {
        // data_encryption_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data_encryption_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotCopy.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(EbsSnapshotCopy.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "encrypted", {
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        set: function (value) {
            this._encrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotCopy.prototype.resetEncrypted = function () {
        this._encrypted = undefined;
    };
    Object.defineProperty(EbsSnapshotCopy.prototype, "encryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotCopy.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(EbsSnapshotCopy.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "ownerAlias", {
        // owner_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "sourceRegion", {
        get: function () {
            return this.getStringAttribute('source_region');
        },
        set: function (value) {
            this._sourceRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "sourceRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "sourceSnapshotId", {
        get: function () {
            return this.getStringAttribute('source_snapshot_id');
        },
        set: function (value) {
            this._sourceSnapshotId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "sourceSnapshotIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceSnapshotId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotCopy.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EbsSnapshotCopy.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshotCopy.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EbsSnapshotCopy.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "volumeId", {
        // volume_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshotCopy.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EbsSnapshotCopy.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            encrypted: cdktf.booleanToTerraform(this._encrypted),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            source_region: cdktf.stringToTerraform(this._sourceRegion),
            source_snapshot_id: cdktf.stringToTerraform(this._sourceSnapshotId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EbsSnapshotCopy.tfResourceType = "aws_ebs_snapshot_copy";
    return EbsSnapshotCopy;
}(cdktf.TerraformResource));
exports.EbsSnapshotCopy = EbsSnapshotCopy;
