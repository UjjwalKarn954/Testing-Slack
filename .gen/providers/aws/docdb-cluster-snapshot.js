"use strict";
// https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html
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
exports.DocdbClusterSnapshot = void 0;
var cdktf = require("cdktf");
function docdbClusterSnapshotTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html aws_docdb_cluster_snapshot}
*/
var DocdbClusterSnapshot = /** @class */ (function (_super) {
    __extends(DocdbClusterSnapshot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html aws_docdb_cluster_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterSnapshotConfig
    */
    function DocdbClusterSnapshot(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_docdb_cluster_snapshot',
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
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DocdbClusterSnapshot.prototype, "availabilityZones", {
        // ==========
        // ATTRIBUTES
        // ==========
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "dbClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('db_cluster_identifier');
        },
        set: function (value) {
            this._dbClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "dbClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "dbClusterSnapshotArn", {
        // db_cluster_snapshot_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_cluster_snapshot_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "dbClusterSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('db_cluster_snapshot_identifier');
        },
        set: function (value) {
            this._dbClusterSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "dbClusterSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbClusterSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "engine", {
        // engine - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "snapshotType", {
        // snapshot_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "sourceDbClusterSnapshotArn", {
        // source_db_cluster_snapshot_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_db_cluster_snapshot_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "storageEncrypted", {
        // storage_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterSnapshot.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterSnapshot.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DocdbClusterSnapshot.prototype, "timeoutsInput", {
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
    DocdbClusterSnapshot.prototype.synthesizeAttributes = function () {
        return {
            db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
            db_cluster_snapshot_identifier: cdktf.stringToTerraform(this._dbClusterSnapshotIdentifier),
            timeouts: docdbClusterSnapshotTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DocdbClusterSnapshot.tfResourceType = "aws_docdb_cluster_snapshot";
    return DocdbClusterSnapshot;
}(cdktf.TerraformResource));
exports.DocdbClusterSnapshot = DocdbClusterSnapshot;
