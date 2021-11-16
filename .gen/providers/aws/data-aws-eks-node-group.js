"use strict";
// https://www.terraform.io/docs/providers/aws/d/eks_node_group.html
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
exports.DataAwsEksNodeGroup = exports.DataAwsEksNodeGroupScalingConfig = exports.DataAwsEksNodeGroupResources = exports.DataAwsEksNodeGroupResourcesAutoscalingGroups = exports.DataAwsEksNodeGroupRemoteAccess = void 0;
var cdktf = require("cdktf");
var DataAwsEksNodeGroupRemoteAccess = /** @class */ (function (_super) {
    __extends(DataAwsEksNodeGroupRemoteAccess, _super);
    function DataAwsEksNodeGroupRemoteAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksNodeGroupRemoteAccess.prototype, "ec2SshKey", {
        // ec2_ssh_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ec2_ssh_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroupRemoteAccess.prototype, "sourceSecurityGroupIds", {
        // source_security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('source_security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksNodeGroupRemoteAccess;
}(cdktf.ComplexComputedList));
exports.DataAwsEksNodeGroupRemoteAccess = DataAwsEksNodeGroupRemoteAccess;
var DataAwsEksNodeGroupResourcesAutoscalingGroups = /** @class */ (function (_super) {
    __extends(DataAwsEksNodeGroupResourcesAutoscalingGroups, _super);
    function DataAwsEksNodeGroupResourcesAutoscalingGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksNodeGroupResourcesAutoscalingGroups.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksNodeGroupResourcesAutoscalingGroups;
}(cdktf.ComplexComputedList));
exports.DataAwsEksNodeGroupResourcesAutoscalingGroups = DataAwsEksNodeGroupResourcesAutoscalingGroups;
var DataAwsEksNodeGroupResources = /** @class */ (function (_super) {
    __extends(DataAwsEksNodeGroupResources, _super);
    function DataAwsEksNodeGroupResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksNodeGroupResources.prototype, "autoscalingGroups", {
        // autoscaling_groups - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('autoscaling_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroupResources.prototype, "remoteAccessSecurityGroupId", {
        // remote_access_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('remote_access_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksNodeGroupResources;
}(cdktf.ComplexComputedList));
exports.DataAwsEksNodeGroupResources = DataAwsEksNodeGroupResources;
var DataAwsEksNodeGroupScalingConfig = /** @class */ (function (_super) {
    __extends(DataAwsEksNodeGroupScalingConfig, _super);
    function DataAwsEksNodeGroupScalingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksNodeGroupScalingConfig.prototype, "desiredSize", {
        // desired_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('desired_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroupScalingConfig.prototype, "maxSize", {
        // max_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroupScalingConfig.prototype, "minSize", {
        // min_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_size');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksNodeGroupScalingConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsEksNodeGroupScalingConfig = DataAwsEksNodeGroupScalingConfig;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group}
*/
var DataAwsEksNodeGroup = /** @class */ (function (_super) {
    __extends(DataAwsEksNodeGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupConfig
    */
    function DataAwsEksNodeGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_eks_node_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterName = config.clusterName;
        _this._nodeGroupName = config.nodeGroupName;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "amiType", {
        // ==========
        // ATTRIBUTES
        // ==========
        // ami_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ami_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "diskSize", {
        // disk_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('disk_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "instanceTypes", {
        // instance_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('instance_types');
        },
        enumerable: false,
        configurable: true
    });
    // labels - computed: true, optional: false, required: false
    DataAwsEksNodeGroup.prototype.labels = function (key) {
        return new cdktf.StringMap(this, 'labels').lookup(key);
    };
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "nodeGroupName", {
        get: function () {
            return this.getStringAttribute('node_group_name');
        },
        set: function (value) {
            this._nodeGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "nodeGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "nodeRoleArn", {
        // node_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "releaseVersion", {
        // release_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('release_version');
        },
        enumerable: false,
        configurable: true
    });
    // remote_access - computed: true, optional: false, required: false
    DataAwsEksNodeGroup.prototype.remoteAccess = function (index) {
        return new DataAwsEksNodeGroupRemoteAccess(this, 'remote_access', index);
    };
    // resources - computed: true, optional: false, required: false
    DataAwsEksNodeGroup.prototype.resources = function (index) {
        return new DataAwsEksNodeGroupResources(this, 'resources', index);
    };
    // scaling_config - computed: true, optional: false, required: false
    DataAwsEksNodeGroup.prototype.scalingConfig = function (index) {
        return new DataAwsEksNodeGroupScalingConfig(this, 'scaling_config', index);
    };
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEksNodeGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksNodeGroup.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEksNodeGroup.prototype.synthesizeAttributes = function () {
        return {
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEksNodeGroup.tfResourceType = "aws_eks_node_group";
    return DataAwsEksNodeGroup;
}(cdktf.TerraformDataSource));
exports.DataAwsEksNodeGroup = DataAwsEksNodeGroup;
