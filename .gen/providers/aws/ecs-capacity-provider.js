"use strict";
// https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html
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
exports.EcsCapacityProvider = void 0;
var cdktf = require("cdktf");
function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_warmup_period: cdktf.numberToTerraform(struct.instanceWarmupPeriod),
        maximum_scaling_step_size: cdktf.numberToTerraform(struct.maximumScalingStepSize),
        minimum_scaling_step_size: cdktf.numberToTerraform(struct.minimumScalingStepSize),
        status: cdktf.stringToTerraform(struct.status),
        target_capacity: cdktf.numberToTerraform(struct.targetCapacity)
    };
}
function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auto_scaling_group_arn: cdktf.stringToTerraform(struct.autoScalingGroupArn),
        managed_termination_protection: cdktf.stringToTerraform(struct.managedTerminationProtection),
        managed_scaling: cdktf.listMapper(ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform)(struct.managedScaling)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider}
*/
var EcsCapacityProvider = /** @class */ (function (_super) {
    __extends(EcsCapacityProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsCapacityProviderConfig
    */
    function EcsCapacityProvider(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecs_capacity_provider',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._autoScalingGroupProvider = config.autoScalingGroupProvider;
        return _this;
    }
    Object.defineProperty(EcsCapacityProvider.prototype, "arn", {
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
    Object.defineProperty(EcsCapacityProvider.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCapacityProvider.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCapacityProvider.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCapacityProvider.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsCapacityProvider.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EcsCapacityProvider.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCapacityProvider.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsCapacityProvider.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EcsCapacityProvider.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCapacityProvider.prototype, "autoScalingGroupProvider", {
        get: function () {
            return this.interpolationForAttribute('auto_scaling_group_provider');
        },
        set: function (value) {
            this._autoScalingGroupProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCapacityProvider.prototype, "autoScalingGroupProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoScalingGroupProvider;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EcsCapacityProvider.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            auto_scaling_group_provider: cdktf.listMapper(ecsCapacityProviderAutoScalingGroupProviderToTerraform)(this._autoScalingGroupProvider)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EcsCapacityProvider.tfResourceType = "aws_ecs_capacity_provider";
    return EcsCapacityProvider;
}(cdktf.TerraformResource));
exports.EcsCapacityProvider = EcsCapacityProvider;
