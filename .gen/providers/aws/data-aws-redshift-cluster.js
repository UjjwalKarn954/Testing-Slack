"use strict";
// https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html
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
exports.DataAwsRedshiftCluster = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html aws_redshift_cluster}
*/
var DataAwsRedshiftCluster = /** @class */ (function (_super) {
    __extends(DataAwsRedshiftCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html aws_redshift_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftClusterConfig
    */
    function DataAwsRedshiftCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_redshift_cluster',
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
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "allowVersionUpgrade", {
        // ==========
        // ATTRIBUTES
        // ==========
        // allow_version_upgrade - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_version_upgrade');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "automatedSnapshotRetentionPeriod", {
        // automated_snapshot_retention_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('automated_snapshot_retention_period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "bucketName", {
        // bucket_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterParameterGroupName", {
        // cluster_parameter_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_parameter_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterPublicKey", {
        // cluster_public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterRevisionNumber", {
        // cluster_revision_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_revision_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterSecurityGroups", {
        // cluster_security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('cluster_security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterSubnetGroupName", {
        // cluster_subnet_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_subnet_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterType", {
        // cluster_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "clusterVersion", {
        // cluster_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "databaseName", {
        // database_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('database_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "elasticIp", {
        // elastic_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('elastic_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "enableLogging", {
        // enable_logging - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_logging');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "enhancedVpcRouting", {
        // enhanced_vpc_routing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enhanced_vpc_routing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "iamRoles", {
        // iam_roles - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('iam_roles');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "masterUsername", {
        // master_username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "nodeType", {
        // node_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "numberOfNodes", {
        // number_of_nodes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number_of_nodes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "preferredMaintenanceWindow", {
        // preferred_maintenance_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "publiclyAccessible", {
        // publicly_accessible - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "s3KeyPrefix", {
        // s3_key_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('s3_key_prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRedshiftCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftCluster.prototype, "vpcSecurityGroupIds", {
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
    DataAwsRedshiftCluster.prototype.synthesizeAttributes = function () {
        return {
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRedshiftCluster.tfResourceType = "aws_redshift_cluster";
    return DataAwsRedshiftCluster;
}(cdktf.TerraformDataSource));
exports.DataAwsRedshiftCluster = DataAwsRedshiftCluster;
