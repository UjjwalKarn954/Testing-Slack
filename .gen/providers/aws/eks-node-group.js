"use strict";
// https://www.terraform.io/docs/providers/aws/r/eks_node_group.html
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
exports.EksNodeGroup = exports.EksNodeGroupResources = exports.EksNodeGroupResourcesAutoscalingGroups = void 0;
var cdktf = require("cdktf");
var EksNodeGroupResourcesAutoscalingGroups = /** @class */ (function (_super) {
    __extends(EksNodeGroupResourcesAutoscalingGroups, _super);
    function EksNodeGroupResourcesAutoscalingGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EksNodeGroupResourcesAutoscalingGroups.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return EksNodeGroupResourcesAutoscalingGroups;
}(cdktf.ComplexComputedList));
exports.EksNodeGroupResourcesAutoscalingGroups = EksNodeGroupResourcesAutoscalingGroups;
var EksNodeGroupResources = /** @class */ (function (_super) {
    __extends(EksNodeGroupResources, _super);
    function EksNodeGroupResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EksNodeGroupResources.prototype, "autoscalingGroups", {
        // autoscaling_groups - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('autoscaling_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroupResources.prototype, "remoteAccessSecurityGroupId", {
        // remote_access_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('remote_access_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    return EksNodeGroupResources;
}(cdktf.ComplexComputedList));
exports.EksNodeGroupResources = EksNodeGroupResources;
function eksNodeGroupLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function eksNodeGroupRemoteAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ec2_ssh_key: cdktf.stringToTerraform(struct.ec2SshKey),
        source_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceSecurityGroupIds)
    };
}
function eksNodeGroupScalingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        desired_size: cdktf.numberToTerraform(struct.desiredSize),
        max_size: cdktf.numberToTerraform(struct.maxSize),
        min_size: cdktf.numberToTerraform(struct.minSize)
    };
}
function eksNodeGroupTaintToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        effect: cdktf.stringToTerraform(struct.effect),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function eksNodeGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
function eksNodeGroupUpdateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_unavailable: cdktf.numberToTerraform(struct.maxUnavailable),
        max_unavailable_percentage: cdktf.numberToTerraform(struct.maxUnavailablePercentage)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group}
*/
var EksNodeGroup = /** @class */ (function (_super) {
    __extends(EksNodeGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksNodeGroupConfig
    */
    function EksNodeGroup(scope, id, config) {
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
        _this._amiType = config.amiType;
        _this._capacityType = config.capacityType;
        _this._clusterName = config.clusterName;
        _this._diskSize = config.diskSize;
        _this._forceUpdateVersion = config.forceUpdateVersion;
        _this._instanceTypes = config.instanceTypes;
        _this._labels = config.labels;
        _this._nodeGroupName = config.nodeGroupName;
        _this._nodeGroupNamePrefix = config.nodeGroupNamePrefix;
        _this._nodeRoleArn = config.nodeRoleArn;
        _this._releaseVersion = config.releaseVersion;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._version = config.version;
        _this._launchTemplate = config.launchTemplate;
        _this._remoteAccess = config.remoteAccess;
        _this._scalingConfig = config.scalingConfig;
        _this._taint = config.taint;
        _this._timeouts = config.timeouts;
        _this._updateConfig = config.updateConfig;
        return _this;
    }
    Object.defineProperty(EksNodeGroup.prototype, "amiType", {
        get: function () {
            return this.getStringAttribute('ami_type');
        },
        set: function (value) {
            this._amiType = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetAmiType = function () {
        this._amiType = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "amiTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amiType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "capacityType", {
        get: function () {
            return this.getStringAttribute('capacity_type');
        },
        set: function (value) {
            this._capacityType = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetCapacityType = function () {
        this._capacityType = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "capacityTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacityType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "diskSize", {
        get: function () {
            return this.getNumberAttribute('disk_size');
        },
        set: function (value) {
            this._diskSize = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetDiskSize = function () {
        this._diskSize = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "diskSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._diskSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "forceUpdateVersion", {
        get: function () {
            return this.getBooleanAttribute('force_update_version');
        },
        set: function (value) {
            this._forceUpdateVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetForceUpdateVersion = function () {
        this._forceUpdateVersion = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "forceUpdateVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceUpdateVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "instanceTypes", {
        get: function () {
            return this.getListAttribute('instance_types');
        },
        set: function (value) {
            this._instanceTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetInstanceTypes = function () {
        this._instanceTypes = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "instanceTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "labels", {
        get: function () {
            return this.interpolationForAttribute('labels');
        },
        set: function (value) {
            this._labels = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetLabels = function () {
        this._labels = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "nodeGroupName", {
        get: function () {
            return this.getStringAttribute('node_group_name');
        },
        set: function (value) {
            this._nodeGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetNodeGroupName = function () {
        this._nodeGroupName = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "nodeGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "nodeGroupNamePrefix", {
        get: function () {
            return this.getStringAttribute('node_group_name_prefix');
        },
        set: function (value) {
            this._nodeGroupNamePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetNodeGroupNamePrefix = function () {
        this._nodeGroupNamePrefix = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "nodeGroupNamePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeGroupNamePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "nodeRoleArn", {
        get: function () {
            return this.getStringAttribute('node_role_arn');
        },
        set: function (value) {
            this._nodeRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "nodeRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "releaseVersion", {
        get: function () {
            return this.getStringAttribute('release_version');
        },
        set: function (value) {
            this._releaseVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetReleaseVersion = function () {
        this._releaseVersion = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "releaseVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._releaseVersion;
        },
        enumerable: false,
        configurable: true
    });
    // resources - computed: true, optional: false, required: false
    EksNodeGroup.prototype.resources = function (index) {
        return new EksNodeGroupResources(this, 'resources', index);
    };
    Object.defineProperty(EksNodeGroup.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "launchTemplate", {
        get: function () {
            return this.interpolationForAttribute('launch_template');
        },
        set: function (value) {
            this._launchTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetLaunchTemplate = function () {
        this._launchTemplate = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "launchTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "remoteAccess", {
        get: function () {
            return this.interpolationForAttribute('remote_access');
        },
        set: function (value) {
            this._remoteAccess = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetRemoteAccess = function () {
        this._remoteAccess = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "remoteAccessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._remoteAccess;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "scalingConfig", {
        get: function () {
            return this.interpolationForAttribute('scaling_config');
        },
        set: function (value) {
            this._scalingConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "scalingConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scalingConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "taint", {
        get: function () {
            return this.interpolationForAttribute('taint');
        },
        set: function (value) {
            this._taint = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetTaint = function () {
        this._taint = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "taintInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksNodeGroup.prototype, "updateConfig", {
        get: function () {
            return this.interpolationForAttribute('update_config');
        },
        set: function (value) {
            this._updateConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    EksNodeGroup.prototype.resetUpdateConfig = function () {
        this._updateConfig = undefined;
    };
    Object.defineProperty(EksNodeGroup.prototype, "updateConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updateConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EksNodeGroup.prototype.synthesizeAttributes = function () {
        return {
            ami_type: cdktf.stringToTerraform(this._amiType),
            capacity_type: cdktf.stringToTerraform(this._capacityType),
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            disk_size: cdktf.numberToTerraform(this._diskSize),
            force_update_version: cdktf.booleanToTerraform(this._forceUpdateVersion),
            instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypes),
            labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
            node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
            node_group_name_prefix: cdktf.stringToTerraform(this._nodeGroupNamePrefix),
            node_role_arn: cdktf.stringToTerraform(this._nodeRoleArn),
            release_version: cdktf.stringToTerraform(this._releaseVersion),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            version: cdktf.stringToTerraform(this._version),
            launch_template: cdktf.listMapper(eksNodeGroupLaunchTemplateToTerraform)(this._launchTemplate),
            remote_access: cdktf.listMapper(eksNodeGroupRemoteAccessToTerraform)(this._remoteAccess),
            scaling_config: cdktf.listMapper(eksNodeGroupScalingConfigToTerraform)(this._scalingConfig),
            taint: cdktf.listMapper(eksNodeGroupTaintToTerraform)(this._taint),
            timeouts: eksNodeGroupTimeoutsToTerraform(this._timeouts),
            update_config: cdktf.listMapper(eksNodeGroupUpdateConfigToTerraform)(this._updateConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EksNodeGroup.tfResourceType = "aws_eks_node_group";
    return EksNodeGroup;
}(cdktf.TerraformResource));
exports.EksNodeGroup = EksNodeGroup;
