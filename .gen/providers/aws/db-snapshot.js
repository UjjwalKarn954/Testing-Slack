"use strict";
// https://www.terraform.io/docs/providers/aws/r/db_snapshot.html
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
exports.DbSnapshot = void 0;
var cdktf = require("cdktf");
function dbSnapshotTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        read: cdktf.stringToTerraform(struct.read)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html aws_db_snapshot}
*/
var DbSnapshot = /** @class */ (function (_super) {
    __extends(DbSnapshot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html aws_db_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbSnapshotConfig
    */
    function DbSnapshot(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_snapshot',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dbInstanceIdentifier = config.dbInstanceIdentifier;
        _this._dbSnapshotIdentifier = config.dbSnapshotIdentifier;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DbSnapshot.prototype, "allocatedStorage", {
        // ==========
        // ATTRIBUTES
        // ==========
        // allocated_storage - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('allocated_storage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "dbInstanceIdentifier", {
        get: function () {
            return this.getStringAttribute('db_instance_identifier');
        },
        set: function (value) {
            this._dbInstanceIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "dbInstanceIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbInstanceIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "dbSnapshotArn", {
        // db_snapshot_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_snapshot_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "dbSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('db_snapshot_identifier');
        },
        set: function (value) {
            this._dbSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "dbSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "engine", {
        // engine - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "licenseModel", {
        // license_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('license_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "optionGroupName", {
        // option_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('option_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "snapshotType", {
        // snapshot_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "sourceDbSnapshotIdentifier", {
        // source_db_snapshot_identifier - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_db_snapshot_identifier');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "sourceRegion", {
        // source_region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "storageType", {
        // storage_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DbSnapshot.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DbSnapshot.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DbSnapshot.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DbSnapshot.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbSnapshot.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DbSnapshot.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DbSnapshot.prototype, "timeoutsInput", {
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
    DbSnapshot.prototype.synthesizeAttributes = function () {
        return {
            db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
            db_snapshot_identifier: cdktf.stringToTerraform(this._dbSnapshotIdentifier),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: dbSnapshotTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DbSnapshot.tfResourceType = "aws_db_snapshot";
    return DbSnapshot;
}(cdktf.TerraformResource));
exports.DbSnapshot = DbSnapshot;
