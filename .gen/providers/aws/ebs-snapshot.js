"use strict";
// https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html
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
exports.EbsSnapshot = void 0;
var cdktf = require("cdktf");
function ebsSnapshotTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html aws_ebs_snapshot}
*/
var EbsSnapshot = /** @class */ (function (_super) {
    __extends(EbsSnapshot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html aws_ebs_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotConfig
    */
    function EbsSnapshot(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ebs_snapshot',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._volumeId = config.volumeId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(EbsSnapshot.prototype, "arn", {
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
    Object.defineProperty(EbsSnapshot.prototype, "dataEncryptionKeyId", {
        // data_encryption_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data_encryption_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshot.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(EbsSnapshot.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "ownerAlias", {
        // owner_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshot.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EbsSnapshot.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshot.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EbsSnapshot.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "volumeId", {
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        set: function (value) {
            this._volumeId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "volumeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsSnapshot.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsSnapshot.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EbsSnapshot.prototype, "timeoutsInput", {
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
    EbsSnapshot.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            volume_id: cdktf.stringToTerraform(this._volumeId),
            timeouts: ebsSnapshotTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EbsSnapshot.tfResourceType = "aws_ebs_snapshot";
    return EbsSnapshot;
}(cdktf.TerraformResource));
exports.EbsSnapshot = EbsSnapshot;
