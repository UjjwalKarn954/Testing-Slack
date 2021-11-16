"use strict";
// https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html
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
exports.EmrManagedScalingPolicy = void 0;
var cdktf = require("cdktf");
function emrManagedScalingPolicyComputeLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        maximum_capacity_units: cdktf.numberToTerraform(struct.maximumCapacityUnits),
        maximum_core_capacity_units: cdktf.numberToTerraform(struct.maximumCoreCapacityUnits),
        maximum_ondemand_capacity_units: cdktf.numberToTerraform(struct.maximumOndemandCapacityUnits),
        minimum_capacity_units: cdktf.numberToTerraform(struct.minimumCapacityUnits),
        unit_type: cdktf.stringToTerraform(struct.unitType)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy}
*/
var EmrManagedScalingPolicy = /** @class */ (function (_super) {
    __extends(EmrManagedScalingPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrManagedScalingPolicyConfig
    */
    function EmrManagedScalingPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_emr_managed_scaling_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterId = config.clusterId;
        _this._computeLimits = config.computeLimits;
        return _this;
    }
    Object.defineProperty(EmrManagedScalingPolicy.prototype, "clusterId", {
        get: function () {
            return this.getStringAttribute('cluster_id');
        },
        set: function (value) {
            this._clusterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrManagedScalingPolicy.prototype, "clusterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrManagedScalingPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrManagedScalingPolicy.prototype, "computeLimits", {
        get: function () {
            return this.interpolationForAttribute('compute_limits');
        },
        set: function (value) {
            this._computeLimits = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrManagedScalingPolicy.prototype, "computeLimitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._computeLimits;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmrManagedScalingPolicy.prototype.synthesizeAttributes = function () {
        return {
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            compute_limits: cdktf.listMapper(emrManagedScalingPolicyComputeLimitsToTerraform)(this._computeLimits)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EmrManagedScalingPolicy.tfResourceType = "aws_emr_managed_scaling_policy";
    return EmrManagedScalingPolicy;
}(cdktf.TerraformResource));
exports.EmrManagedScalingPolicy = EmrManagedScalingPolicy;
