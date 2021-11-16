"use strict";
// https://www.terraform.io/docs/providers/aws/d/db_snapshot.html
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
exports.DataAwsDbSnapshot = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot}
*/
var DataAwsDbSnapshot = /** @class */ (function (_super) {
    __extends(DataAwsDbSnapshot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbSnapshotConfig = {}
    */
    function DataAwsDbSnapshot(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._includePublic = config.includePublic;
        _this._includeShared = config.includeShared;
        _this._mostRecent = config.mostRecent;
        _this._snapshotType = config.snapshotType;
        return _this;
    }
    Object.defineProperty(DataAwsDbSnapshot.prototype, "allocatedStorage", {
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
    Object.defineProperty(DataAwsDbSnapshot.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "dbInstanceIdentifier", {
        get: function () {
            return this.getStringAttribute('db_instance_identifier');
        },
        set: function (value) {
            this._dbInstanceIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbSnapshot.prototype.resetDbInstanceIdentifier = function () {
        this._dbInstanceIdentifier = undefined;
    };
    Object.defineProperty(DataAwsDbSnapshot.prototype, "dbInstanceIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbInstanceIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "dbSnapshotArn", {
        // db_snapshot_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_snapshot_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "dbSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('db_snapshot_identifier');
        },
        set: function (value) {
            this._dbSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbSnapshot.prototype.resetDbSnapshotIdentifier = function () {
        this._dbSnapshotIdentifier = undefined;
    };
    Object.defineProperty(DataAwsDbSnapshot.prototype, "dbSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "engine", {
        // engine - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "includePublic", {
        get: function () {
            return this.getBooleanAttribute('include_public');
        },
        set: function (value) {
            this._includePublic = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbSnapshot.prototype.resetIncludePublic = function () {
        this._includePublic = undefined;
    };
    Object.defineProperty(DataAwsDbSnapshot.prototype, "includePublicInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includePublic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "includeShared", {
        get: function () {
            return this.getBooleanAttribute('include_shared');
        },
        set: function (value) {
            this._includeShared = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbSnapshot.prototype.resetIncludeShared = function () {
        this._includeShared = undefined;
    };
    Object.defineProperty(DataAwsDbSnapshot.prototype, "includeSharedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeShared;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "licenseModel", {
        // license_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('license_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "mostRecent", {
        get: function () {
            return this.getBooleanAttribute('most_recent');
        },
        set: function (value) {
            this._mostRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbSnapshot.prototype.resetMostRecent = function () {
        this._mostRecent = undefined;
    };
    Object.defineProperty(DataAwsDbSnapshot.prototype, "mostRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mostRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "optionGroupName", {
        // option_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('option_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "snapshotCreateTime", {
        // snapshot_create_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_create_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "snapshotType", {
        get: function () {
            return this.getStringAttribute('snapshot_type');
        },
        set: function (value) {
            this._snapshotType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbSnapshot.prototype.resetSnapshotType = function () {
        this._snapshotType = undefined;
    };
    Object.defineProperty(DataAwsDbSnapshot.prototype, "snapshotTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "sourceDbSnapshotIdentifier", {
        // source_db_snapshot_identifier - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_db_snapshot_identifier');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "sourceRegion", {
        // source_region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "storageType", {
        // storage_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbSnapshot.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsDbSnapshot.prototype.synthesizeAttributes = function () {
        return {
            db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
            db_snapshot_identifier: cdktf.stringToTerraform(this._dbSnapshotIdentifier),
            include_public: cdktf.booleanToTerraform(this._includePublic),
            include_shared: cdktf.booleanToTerraform(this._includeShared),
            most_recent: cdktf.booleanToTerraform(this._mostRecent),
            snapshot_type: cdktf.stringToTerraform(this._snapshotType)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDbSnapshot.tfResourceType = "aws_db_snapshot";
    return DataAwsDbSnapshot;
}(cdktf.TerraformDataSource));
exports.DataAwsDbSnapshot = DataAwsDbSnapshot;
