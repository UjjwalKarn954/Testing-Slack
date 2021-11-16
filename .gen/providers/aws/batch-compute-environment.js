"use strict";
// https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html
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
exports.BatchComputeEnvironment = void 0;
var cdktf = require("cdktf");
function batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        image_id_override: cdktf.stringToTerraform(struct.imageIdOverride),
        image_type: cdktf.stringToTerraform(struct.imageType)
    };
}
function batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function batchComputeEnvironmentComputeResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        bid_percentage: cdktf.numberToTerraform(struct.bidPercentage),
        desired_vcpus: cdktf.numberToTerraform(struct.desiredVcpus),
        ec2_key_pair: cdktf.stringToTerraform(struct.ec2KeyPair),
        image_id: cdktf.stringToTerraform(struct.imageId),
        instance_role: cdktf.stringToTerraform(struct.instanceRole),
        instance_type: cdktf.listMapper(cdktf.stringToTerraform)(struct.instanceType),
        max_vcpus: cdktf.numberToTerraform(struct.maxVcpus),
        min_vcpus: cdktf.numberToTerraform(struct.minVcpus),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        spot_iam_fleet_role: cdktf.stringToTerraform(struct.spotIamFleetRole),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        type: cdktf.stringToTerraform(struct.type),
        ec2_configuration: cdktf.listMapper(batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform)(struct.ec2Configuration),
        launch_template: cdktf.listMapper(batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform)(struct.launchTemplate)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html aws_batch_compute_environment}
*/
var BatchComputeEnvironment = /** @class */ (function (_super) {
    __extends(BatchComputeEnvironment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html aws_batch_compute_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchComputeEnvironmentConfig
    */
    function BatchComputeEnvironment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_batch_compute_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._computeEnvironmentName = config.computeEnvironmentName;
        _this._computeEnvironmentNamePrefix = config.computeEnvironmentNamePrefix;
        _this._serviceRole = config.serviceRole;
        _this._state = config.state;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._computeResources = config.computeResources;
        return _this;
    }
    Object.defineProperty(BatchComputeEnvironment.prototype, "arn", {
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
    Object.defineProperty(BatchComputeEnvironment.prototype, "computeEnvironmentName", {
        get: function () {
            return this.getStringAttribute('compute_environment_name');
        },
        set: function (value) {
            this._computeEnvironmentName = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchComputeEnvironment.prototype.resetComputeEnvironmentName = function () {
        this._computeEnvironmentName = undefined;
    };
    Object.defineProperty(BatchComputeEnvironment.prototype, "computeEnvironmentNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._computeEnvironmentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "computeEnvironmentNamePrefix", {
        get: function () {
            return this.getStringAttribute('compute_environment_name_prefix');
        },
        set: function (value) {
            this._computeEnvironmentNamePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchComputeEnvironment.prototype.resetComputeEnvironmentNamePrefix = function () {
        this._computeEnvironmentNamePrefix = undefined;
    };
    Object.defineProperty(BatchComputeEnvironment.prototype, "computeEnvironmentNamePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._computeEnvironmentNamePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "ecsClusterArn", {
        // ecs_cluster_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ecs_cluster_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "serviceRole", {
        get: function () {
            return this.getStringAttribute('service_role');
        },
        set: function (value) {
            this._serviceRole = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchComputeEnvironment.prototype.resetServiceRole = function () {
        this._serviceRole = undefined;
    };
    Object.defineProperty(BatchComputeEnvironment.prototype, "serviceRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchComputeEnvironment.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(BatchComputeEnvironment.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "statusReason", {
        // status_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchComputeEnvironment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(BatchComputeEnvironment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchComputeEnvironment.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(BatchComputeEnvironment.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchComputeEnvironment.prototype, "computeResources", {
        get: function () {
            return this.interpolationForAttribute('compute_resources');
        },
        set: function (value) {
            this._computeResources = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchComputeEnvironment.prototype.resetComputeResources = function () {
        this._computeResources = undefined;
    };
    Object.defineProperty(BatchComputeEnvironment.prototype, "computeResourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._computeResources;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BatchComputeEnvironment.prototype.synthesizeAttributes = function () {
        return {
            compute_environment_name: cdktf.stringToTerraform(this._computeEnvironmentName),
            compute_environment_name_prefix: cdktf.stringToTerraform(this._computeEnvironmentNamePrefix),
            service_role: cdktf.stringToTerraform(this._serviceRole),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            compute_resources: cdktf.listMapper(batchComputeEnvironmentComputeResourcesToTerraform)(this._computeResources)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BatchComputeEnvironment.tfResourceType = "aws_batch_compute_environment";
    return BatchComputeEnvironment;
}(cdktf.TerraformResource));
exports.BatchComputeEnvironment = BatchComputeEnvironment;
