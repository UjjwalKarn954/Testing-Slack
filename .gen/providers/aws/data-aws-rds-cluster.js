"use strict";
// https://www.terraform.io/docs/providers/aws/d/rds_cluster.html
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
exports.DataAwsRdsCluster = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html aws_rds_cluster}
*/
var DataAwsRdsCluster = /** @class */ (function (_super) {
    __extends(DataAwsRdsCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html aws_rds_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsClusterConfig
    */
    function DataAwsRdsCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsRdsCluster.prototype, "arn", {
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
    Object.defineProperty(DataAwsRdsCluster.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "backtrackWindow", {
        // backtrack_window - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('backtrack_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "backupRetentionPeriod", {
        // backup_retention_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('backup_retention_period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "clusterMembers", {
        // cluster_members - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('cluster_members');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "clusterResourceId", {
        // cluster_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "databaseName", {
        // database_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('database_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "dbClusterParameterGroupName", {
        // db_cluster_parameter_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_cluster_parameter_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "dbSubnetGroupName", {
        // db_subnet_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_subnet_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "enabledCloudwatchLogsExports", {
        // enabled_cloudwatch_logs_exports - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('enabled_cloudwatch_logs_exports');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "engine", {
        // engine - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "finalSnapshotIdentifier", {
        // final_snapshot_identifier - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('final_snapshot_identifier');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "iamDatabaseAuthenticationEnabled", {
        // iam_database_authentication_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('iam_database_authentication_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "iamRoles", {
        // iam_roles - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('iam_roles');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "masterUsername", {
        // master_username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "preferredBackupWindow", {
        // preferred_backup_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preferred_backup_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "preferredMaintenanceWindow", {
        // preferred_maintenance_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "readerEndpoint", {
        // reader_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reader_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "replicationSourceIdentifier", {
        // replication_source_identifier - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replication_source_identifier');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "storageEncrypted", {
        // storage_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsRdsCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCluster.prototype, "vpcSecurityGroupIds", {
        // vpc_security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRdsCluster.prototype.synthesizeAttributes = function () {
        return {
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRdsCluster.tfResourceType = "aws_rds_cluster";
    return DataAwsRdsCluster;
}(cdktf.TerraformDataSource));
exports.DataAwsRdsCluster = DataAwsRdsCluster;
