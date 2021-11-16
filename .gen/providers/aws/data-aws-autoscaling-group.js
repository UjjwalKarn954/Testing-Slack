"use strict";
// https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html
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
exports.DataAwsAutoscalingGroup = exports.DataAwsAutoscalingGroupLaunchTemplate = void 0;
var cdktf = require("cdktf");
var DataAwsAutoscalingGroupLaunchTemplate = /** @class */ (function (_super) {
    __extends(DataAwsAutoscalingGroupLaunchTemplate, _super);
    function DataAwsAutoscalingGroupLaunchTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAutoscalingGroupLaunchTemplate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroupLaunchTemplate.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroupLaunchTemplate.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAutoscalingGroupLaunchTemplate;
}(cdktf.ComplexComputedList));
exports.DataAwsAutoscalingGroupLaunchTemplate = DataAwsAutoscalingGroupLaunchTemplate;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html aws_autoscaling_group}
*/
var DataAwsAutoscalingGroup = /** @class */ (function (_super) {
    __extends(DataAwsAutoscalingGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html aws_autoscaling_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAutoscalingGroupConfig
    */
    function DataAwsAutoscalingGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "arn", {
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
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "defaultCooldown", {
        // default_cooldown - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_cooldown');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "desiredCapacity", {
        // desired_capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('desired_capacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "healthCheckGracePeriod", {
        // health_check_grace_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('health_check_grace_period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "healthCheckType", {
        // health_check_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('health_check_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "launchConfiguration", {
        // launch_configuration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('launch_configuration');
        },
        enumerable: false,
        configurable: true
    });
    // launch_template - computed: true, optional: false, required: false
    DataAwsAutoscalingGroup.prototype.launchTemplate = function (index) {
        return new DataAwsAutoscalingGroupLaunchTemplate(this, 'launch_template', index);
    };
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "loadBalancers", {
        // load_balancers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('load_balancers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "maxSize", {
        // max_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "minSize", {
        // min_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "newInstancesProtectedFromScaleIn", {
        // new_instances_protected_from_scale_in - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('new_instances_protected_from_scale_in');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "placementGroup", {
        // placement_group - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('placement_group');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "serviceLinkedRoleArn", {
        // service_linked_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_linked_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "targetGroupArns", {
        // target_group_arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_group_arns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "terminationPolicies", {
        // termination_policies - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('termination_policies');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroup.prototype, "vpcZoneIdentifier", {
        // vpc_zone_identifier - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_zone_identifier');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsAutoscalingGroup.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAutoscalingGroup.tfResourceType = "aws_autoscaling_group";
    return DataAwsAutoscalingGroup;
}(cdktf.TerraformDataSource));
exports.DataAwsAutoscalingGroup = DataAwsAutoscalingGroup;
