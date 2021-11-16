"use strict";
// https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html
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
exports.DataAwsEbsSnapshot = void 0;
var cdktf = require("cdktf");
function dataAwsEbsSnapshotFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot}
*/
var DataAwsEbsSnapshot = /** @class */ (function (_super) {
    __extends(DataAwsEbsSnapshot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsSnapshotConfig = {}
    */
    function DataAwsEbsSnapshot(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._mostRecent = config.mostRecent;
        _this._owners = config.owners;
        _this._restorableByUserIds = config.restorableByUserIds;
        _this._snapshotIds = config.snapshotIds;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "arn", {
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
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "dataEncryptionKeyId", {
        // data_encryption_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data_encryption_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "mostRecent", {
        get: function () {
            return this.getBooleanAttribute('most_recent');
        },
        set: function (value) {
            this._mostRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshot.prototype.resetMostRecent = function () {
        this._mostRecent = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "mostRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mostRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "ownerAlias", {
        // owner_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "owners", {
        get: function () {
            return this.getListAttribute('owners');
        },
        set: function (value) {
            this._owners = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshot.prototype.resetOwners = function () {
        this._owners = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "ownersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owners;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "restorableByUserIds", {
        get: function () {
            return this.getListAttribute('restorable_by_user_ids');
        },
        set: function (value) {
            this._restorableByUserIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshot.prototype.resetRestorableByUserIds = function () {
        this._restorableByUserIds = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "restorableByUserIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restorableByUserIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "snapshotId", {
        // snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "snapshotIds", {
        get: function () {
            return this.getListAttribute('snapshot_ids');
        },
        set: function (value) {
            this._snapshotIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshot.prototype.resetSnapshotIds = function () {
        this._snapshotIds = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "snapshotIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshot.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "volumeId", {
        // volume_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshot.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshot.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEbsSnapshot.prototype.synthesizeAttributes = function () {
        return {
            most_recent: cdktf.booleanToTerraform(this._mostRecent),
            owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
            restorable_by_user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._restorableByUserIds),
            snapshot_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEbsSnapshotFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEbsSnapshot.tfResourceType = "aws_ebs_snapshot";
    return DataAwsEbsSnapshot;
}(cdktf.TerraformDataSource));
exports.DataAwsEbsSnapshot = DataAwsEbsSnapshot;
