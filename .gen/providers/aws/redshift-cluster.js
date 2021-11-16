"use strict";
// https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html
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
exports.RedshiftCluster = exports.RedshiftClusterClusterNodes = void 0;
var cdktf = require("cdktf");
var RedshiftClusterClusterNodes = /** @class */ (function (_super) {
    __extends(RedshiftClusterClusterNodes, _super);
    function RedshiftClusterClusterNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RedshiftClusterClusterNodes.prototype, "nodeRole", {
        // node_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftClusterClusterNodes.prototype, "privateIpAddress", {
        // private_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftClusterClusterNodes.prototype, "publicIpAddress", {
        // public_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    return RedshiftClusterClusterNodes;
}(cdktf.ComplexComputedList));
exports.RedshiftClusterClusterNodes = RedshiftClusterClusterNodes;
function redshiftClusterLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        enable: cdktf.booleanToTerraform(struct.enable),
        s3_key_prefix: cdktf.stringToTerraform(struct.s3KeyPrefix)
    };
}
function redshiftClusterSnapshotCopyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_region: cdktf.stringToTerraform(struct.destinationRegion),
        grant_name: cdktf.stringToTerraform(struct.grantName),
        retention_period: cdktf.numberToTerraform(struct.retentionPeriod)
    };
}
function redshiftClusterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html aws_redshift_cluster}
*/
var RedshiftCluster = /** @class */ (function (_super) {
    __extends(RedshiftCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html aws_redshift_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftClusterConfig
    */
    function RedshiftCluster(scope, id, config) {
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
        _this._allowVersionUpgrade = config.allowVersionUpgrade;
        _this._automatedSnapshotRetentionPeriod = config.automatedSnapshotRetentionPeriod;
        _this._availabilityZone = config.availabilityZone;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._clusterParameterGroupName = config.clusterParameterGroupName;
        _this._clusterPublicKey = config.clusterPublicKey;
        _this._clusterRevisionNumber = config.clusterRevisionNumber;
        _this._clusterSecurityGroups = config.clusterSecurityGroups;
        _this._clusterSubnetGroupName = config.clusterSubnetGroupName;
        _this._clusterType = config.clusterType;
        _this._clusterVersion = config.clusterVersion;
        _this._databaseName = config.databaseName;
        _this._elasticIp = config.elasticIp;
        _this._encrypted = config.encrypted;
        _this._endpoint = config.endpoint;
        _this._enhancedVpcRouting = config.enhancedVpcRouting;
        _this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        _this._iamRoles = config.iamRoles;
        _this._kmsKeyId = config.kmsKeyId;
        _this._masterPassword = config.masterPassword;
        _this._masterUsername = config.masterUsername;
        _this._nodeType = config.nodeType;
        _this._numberOfNodes = config.numberOfNodes;
        _this._ownerAccount = config.ownerAccount;
        _this._port = config.port;
        _this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        _this._publiclyAccessible = config.publiclyAccessible;
        _this._skipFinalSnapshot = config.skipFinalSnapshot;
        _this._snapshotClusterIdentifier = config.snapshotClusterIdentifier;
        _this._snapshotIdentifier = config.snapshotIdentifier;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._logging = config.logging;
        _this._snapshotCopy = config.snapshotCopy;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(RedshiftCluster.prototype, "allowVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('allow_version_upgrade');
        },
        set: function (value) {
            this._allowVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetAllowVersionUpgrade = function () {
        this._allowVersionUpgrade = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "allowVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "automatedSnapshotRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('automated_snapshot_retention_period');
        },
        set: function (value) {
            this._automatedSnapshotRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetAutomatedSnapshotRetentionPeriod = function () {
        this._automatedSnapshotRetentionPeriod = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "automatedSnapshotRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automatedSnapshotRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    // cluster_nodes - computed: true, optional: false, required: false
    RedshiftCluster.prototype.clusterNodes = function (index) {
        return new RedshiftClusterClusterNodes(this, 'cluster_nodes', index);
    };
    Object.defineProperty(RedshiftCluster.prototype, "clusterParameterGroupName", {
        get: function () {
            return this.getStringAttribute('cluster_parameter_group_name');
        },
        set: function (value) {
            this._clusterParameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetClusterParameterGroupName = function () {
        this._clusterParameterGroupName = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "clusterParameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterParameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "clusterPublicKey", {
        get: function () {
            return this.getStringAttribute('cluster_public_key');
        },
        set: function (value) {
            this._clusterPublicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetClusterPublicKey = function () {
        this._clusterPublicKey = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "clusterPublicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterPublicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "clusterRevisionNumber", {
        get: function () {
            return this.getStringAttribute('cluster_revision_number');
        },
        set: function (value) {
            this._clusterRevisionNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetClusterRevisionNumber = function () {
        this._clusterRevisionNumber = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "clusterRevisionNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterRevisionNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "clusterSecurityGroups", {
        get: function () {
            return this.getListAttribute('cluster_security_groups');
        },
        set: function (value) {
            this._clusterSecurityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetClusterSecurityGroups = function () {
        this._clusterSecurityGroups = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "clusterSecurityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterSecurityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "clusterSubnetGroupName", {
        get: function () {
            return this.getStringAttribute('cluster_subnet_group_name');
        },
        set: function (value) {
            this._clusterSubnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetClusterSubnetGroupName = function () {
        this._clusterSubnetGroupName = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "clusterSubnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterSubnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "clusterType", {
        get: function () {
            return this.getStringAttribute('cluster_type');
        },
        set: function (value) {
            this._clusterType = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetClusterType = function () {
        this._clusterType = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "clusterTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "clusterVersion", {
        get: function () {
            return this.getStringAttribute('cluster_version');
        },
        set: function (value) {
            this._clusterVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetClusterVersion = function () {
        this._clusterVersion = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "clusterVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetDatabaseName = function () {
        this._databaseName = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "elasticIp", {
        get: function () {
            return this.getStringAttribute('elastic_ip');
        },
        set: function (value) {
            this._elasticIp = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetElasticIp = function () {
        this._elasticIp = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "elasticIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "encrypted", {
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        set: function (value) {
            this._encrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetEncrypted = function () {
        this._encrypted = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "encryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "endpoint", {
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetEndpoint = function () {
        this._endpoint = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "enhancedVpcRouting", {
        get: function () {
            return this.getBooleanAttribute('enhanced_vpc_routing');
        },
        set: function (value) {
            this._enhancedVpcRouting = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetEnhancedVpcRouting = function () {
        this._enhancedVpcRouting = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "enhancedVpcRoutingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enhancedVpcRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "finalSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('final_snapshot_identifier');
        },
        set: function (value) {
            this._finalSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetFinalSnapshotIdentifier = function () {
        this._finalSnapshotIdentifier = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "finalSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._finalSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "iamRoles", {
        get: function () {
            return this.getListAttribute('iam_roles');
        },
        set: function (value) {
            this._iamRoles = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetIamRoles = function () {
        this._iamRoles = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "iamRolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "masterPassword", {
        get: function () {
            return this.getStringAttribute('master_password');
        },
        set: function (value) {
            this._masterPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetMasterPassword = function () {
        this._masterPassword = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "masterPasswordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterPassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "masterUsername", {
        get: function () {
            return this.getStringAttribute('master_username');
        },
        set: function (value) {
            this._masterUsername = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetMasterUsername = function () {
        this._masterUsername = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "masterUsernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterUsername;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "nodeType", {
        get: function () {
            return this.getStringAttribute('node_type');
        },
        set: function (value) {
            this._nodeType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "nodeTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "numberOfNodes", {
        get: function () {
            return this.getNumberAttribute('number_of_nodes');
        },
        set: function (value) {
            this._numberOfNodes = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetNumberOfNodes = function () {
        this._numberOfNodes = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "numberOfNodesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numberOfNodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "ownerAccount", {
        get: function () {
            return this.getStringAttribute('owner_account');
        },
        set: function (value) {
            this._ownerAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetOwnerAccount = function () {
        this._ownerAccount = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "ownerAccountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerAccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "preferredMaintenanceWindow", {
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        set: function (value) {
            this._preferredMaintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetPreferredMaintenanceWindow = function () {
        this._preferredMaintenanceWindow = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "preferredMaintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredMaintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "publiclyAccessible", {
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        set: function (value) {
            this._publiclyAccessible = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetPubliclyAccessible = function () {
        this._publiclyAccessible = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "publiclyAccessibleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publiclyAccessible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "skipFinalSnapshot", {
        get: function () {
            return this.getBooleanAttribute('skip_final_snapshot');
        },
        set: function (value) {
            this._skipFinalSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetSkipFinalSnapshot = function () {
        this._skipFinalSnapshot = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "skipFinalSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipFinalSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "snapshotClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('snapshot_cluster_identifier');
        },
        set: function (value) {
            this._snapshotClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetSnapshotClusterIdentifier = function () {
        this._snapshotClusterIdentifier = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "snapshotClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "snapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('snapshot_identifier');
        },
        set: function (value) {
            this._snapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetSnapshotIdentifier = function () {
        this._snapshotIdentifier = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "snapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "logging", {
        get: function () {
            return this.interpolationForAttribute('logging');
        },
        set: function (value) {
            this._logging = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetLogging = function () {
        this._logging = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "loggingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logging;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "snapshotCopy", {
        get: function () {
            return this.interpolationForAttribute('snapshot_copy');
        },
        set: function (value) {
            this._snapshotCopy = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetSnapshotCopy = function () {
        this._snapshotCopy = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "snapshotCopyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotCopy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftCluster.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftCluster.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(RedshiftCluster.prototype, "timeoutsInput", {
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
    RedshiftCluster.prototype.synthesizeAttributes = function () {
        return {
            allow_version_upgrade: cdktf.booleanToTerraform(this._allowVersionUpgrade),
            automated_snapshot_retention_period: cdktf.numberToTerraform(this._automatedSnapshotRetentionPeriod),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            cluster_parameter_group_name: cdktf.stringToTerraform(this._clusterParameterGroupName),
            cluster_public_key: cdktf.stringToTerraform(this._clusterPublicKey),
            cluster_revision_number: cdktf.stringToTerraform(this._clusterRevisionNumber),
            cluster_security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterSecurityGroups),
            cluster_subnet_group_name: cdktf.stringToTerraform(this._clusterSubnetGroupName),
            cluster_type: cdktf.stringToTerraform(this._clusterType),
            cluster_version: cdktf.stringToTerraform(this._clusterVersion),
            database_name: cdktf.stringToTerraform(this._databaseName),
            elastic_ip: cdktf.stringToTerraform(this._elasticIp),
            encrypted: cdktf.booleanToTerraform(this._encrypted),
            endpoint: cdktf.stringToTerraform(this._endpoint),
            enhanced_vpc_routing: cdktf.booleanToTerraform(this._enhancedVpcRouting),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            master_password: cdktf.stringToTerraform(this._masterPassword),
            master_username: cdktf.stringToTerraform(this._masterUsername),
            node_type: cdktf.stringToTerraform(this._nodeType),
            number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
            owner_account: cdktf.stringToTerraform(this._ownerAccount),
            port: cdktf.numberToTerraform(this._port),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_cluster_identifier: cdktf.stringToTerraform(this._snapshotClusterIdentifier),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            logging: cdktf.listMapper(redshiftClusterLoggingToTerraform)(this._logging),
            snapshot_copy: cdktf.listMapper(redshiftClusterSnapshotCopyToTerraform)(this._snapshotCopy),
            timeouts: redshiftClusterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RedshiftCluster.tfResourceType = "aws_redshift_cluster";
    return RedshiftCluster;
}(cdktf.TerraformResource));
exports.RedshiftCluster = RedshiftCluster;
