"use strict";
// https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html
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
exports.DataAwsDbClusterSnapshot = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot}
*/
var DataAwsDbClusterSnapshot = /** @class */ (function (_super) {
    __extends(DataAwsDbClusterSnapshot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbClusterSnapshotConfig = {}
    */
    function DataAwsDbClusterSnapshot(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_cluster_snapshot',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dbClusterIdentifier = config.dbClusterIdentifier;
        _this._dbClusterSnapshotIdentifier = config.dbClusterSnapshotIdentifier;
        _this._includePublic = config.includePublic;
        _this._includeShared = config.includeShared;
        _this._mostRecent = config.mostRecent;
        _this._snapshotType = config.snapshotType;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "allocatedStorage", {
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
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "dbClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('db_cluster_identifier');
        },
        set: function (value) {
            this._dbClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbClusterSnapshot.prototype.resetDbClusterIdentifier = function () {
        this._dbClusterIdentifier = undefined;
    };
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "dbClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "dbClusterSnapshotArn", {
        // db_cluster_snapshot_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_cluster_snapshot_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "dbClusterSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('db_cluster_snapshot_identifier');
        },
        set: function (value) {
            this._dbClusterSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbClusterSnapshot.prototype.resetDbClusterSnapshotIdentifier = function () {
        this._dbClusterSnapshotIdentifier = undefined;
    };
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "dbClusterSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbClusterSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "engine", {
        // engine - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "includePublic", {
        get: function () {
            return this.getBooleanAttribute('include_public');
        },
        set: function (value) {
            this._includePublic = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbClusterSnapshot.prototype.resetIncludePublic = function () {
        this._includePublic = undefined;
    };
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "includePublicInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includePublic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "includeShared", {
        get: function () {
            return this.getBooleanAttribute('include_shared');
        },
        set: function (value) {
            this._includeShared = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbClusterSnapshot.prototype.resetIncludeShared = function () {
        this._includeShared = undefined;
    };
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "includeSharedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeShared;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "licenseModel", {
        // license_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('license_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "mostRecent", {
        get: function () {
            return this.getBooleanAttribute('most_recent');
        },
        set: function (value) {
            this._mostRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbClusterSnapshot.prototype.resetMostRecent = function () {
        this._mostRecent = undefined;
    };
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "mostRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mostRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "snapshotCreateTime", {
        // snapshot_create_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_create_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "snapshotType", {
        get: function () {
            return this.getStringAttribute('snapshot_type');
        },
        set: function (value) {
            this._snapshotType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbClusterSnapshot.prototype.resetSnapshotType = function () {
        this._snapshotType = undefined;
    };
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "snapshotTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "sourceDbClusterSnapshotArn", {
        // source_db_cluster_snapshot_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_db_cluster_snapshot_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "storageEncrypted", {
        // storage_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbClusterSnapshot.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbClusterSnapshot.prototype, "vpcId", {
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
    DataAwsDbClusterSnapshot.prototype.synthesizeAttributes = function () {
        return {
            db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
            db_cluster_snapshot_identifier: cdktf.stringToTerraform(this._dbClusterSnapshotIdentifier),
            include_public: cdktf.booleanToTerraform(this._includePublic),
            include_shared: cdktf.booleanToTerraform(this._includeShared),
            most_recent: cdktf.booleanToTerraform(this._mostRecent),
            snapshot_type: cdktf.stringToTerraform(this._snapshotType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDbClusterSnapshot.tfResourceType = "aws_db_cluster_snapshot";
    return DataAwsDbClusterSnapshot;
}(cdktf.TerraformDataSource));
exports.DataAwsDbClusterSnapshot = DataAwsDbClusterSnapshot;
