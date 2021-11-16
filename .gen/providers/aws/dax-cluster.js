"use strict";
// https://www.terraform.io/docs/providers/aws/r/dax_cluster.html
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
exports.DaxCluster = exports.DaxClusterNodes = void 0;
var cdktf = require("cdktf");
var DaxClusterNodes = /** @class */ (function (_super) {
    __extends(DaxClusterNodes, _super);
    function DaxClusterNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DaxClusterNodes.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxClusterNodes.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxClusterNodes.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxClusterNodes.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DaxClusterNodes;
}(cdktf.ComplexComputedList));
exports.DaxClusterNodes = DaxClusterNodes;
function daxClusterServerSideEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function daxClusterTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html aws_dax_cluster}
*/
var DaxCluster = /** @class */ (function (_super) {
    __extends(DaxCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html aws_dax_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DaxClusterConfig
    */
    function DaxCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dax_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZones = config.availabilityZones;
        _this._clusterName = config.clusterName;
        _this._description = config.description;
        _this._iamRoleArn = config.iamRoleArn;
        _this._maintenanceWindow = config.maintenanceWindow;
        _this._nodeType = config.nodeType;
        _this._notificationTopicArn = config.notificationTopicArn;
        _this._parameterGroupName = config.parameterGroupName;
        _this._replicationFactor = config.replicationFactor;
        _this._securityGroupIds = config.securityGroupIds;
        _this._subnetGroupName = config.subnetGroupName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._serverSideEncryption = config.serverSideEncryption;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DaxCluster.prototype, "arn", {
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
    Object.defineProperty(DaxCluster.prototype, "availabilityZones", {
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        set: function (value) {
            this._availabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetAvailabilityZones = function () {
        this._availabilityZones = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "availabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "clusterAddress", {
        // cluster_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "configurationEndpoint", {
        // configuration_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('configuration_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "iamRoleArn", {
        get: function () {
            return this.getStringAttribute('iam_role_arn');
        },
        set: function (value) {
            this._iamRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "iamRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "maintenanceWindow", {
        get: function () {
            return this.getStringAttribute('maintenance_window');
        },
        set: function (value) {
            this._maintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetMaintenanceWindow = function () {
        this._maintenanceWindow = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "maintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "nodeType", {
        get: function () {
            return this.getStringAttribute('node_type');
        },
        set: function (value) {
            this._nodeType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "nodeTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeType;
        },
        enumerable: false,
        configurable: true
    });
    // nodes - computed: true, optional: false, required: false
    DaxCluster.prototype.nodes = function (index) {
        return new DaxClusterNodes(this, 'nodes', index);
    };
    Object.defineProperty(DaxCluster.prototype, "notificationTopicArn", {
        get: function () {
            return this.getStringAttribute('notification_topic_arn');
        },
        set: function (value) {
            this._notificationTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetNotificationTopicArn = function () {
        this._notificationTopicArn = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "notificationTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "parameterGroupName", {
        get: function () {
            return this.getStringAttribute('parameter_group_name');
        },
        set: function (value) {
            this._parameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetParameterGroupName = function () {
        this._parameterGroupName = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "parameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "replicationFactor", {
        get: function () {
            return this.getNumberAttribute('replication_factor');
        },
        set: function (value) {
            this._replicationFactor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "replicationFactorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationFactor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "subnetGroupName", {
        get: function () {
            return this.getStringAttribute('subnet_group_name');
        },
        set: function (value) {
            this._subnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetSubnetGroupName = function () {
        this._subnetGroupName = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "subnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "serverSideEncryption", {
        get: function () {
            return this.interpolationForAttribute('server_side_encryption');
        },
        set: function (value) {
            this._serverSideEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetServerSideEncryption = function () {
        this._serverSideEncryption = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "serverSideEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverSideEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaxCluster.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DaxCluster.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DaxCluster.prototype, "timeoutsInput", {
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
    DaxCluster.prototype.synthesizeAttributes = function () {
        return {
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            description: cdktf.stringToTerraform(this._description),
            iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
            maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
            node_type: cdktf.stringToTerraform(this._nodeType),
            notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
            parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
            replication_factor: cdktf.numberToTerraform(this._replicationFactor),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            server_side_encryption: cdktf.listMapper(daxClusterServerSideEncryptionToTerraform)(this._serverSideEncryption),
            timeouts: daxClusterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DaxCluster.tfResourceType = "aws_dax_cluster";
    return DaxCluster;
}(cdktf.TerraformResource));
exports.DaxCluster = DaxCluster;
