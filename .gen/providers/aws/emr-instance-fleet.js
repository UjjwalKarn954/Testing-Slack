"use strict";
// https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html
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
exports.EmrInstanceFleet = void 0;
var cdktf = require("cdktf");
function emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties)
    };
}
function emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance)
    };
}
function emrInstanceFleetInstanceTypeConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct.bidPriceAsPercentageOfOnDemandPrice),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
        configurations: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct.configurations),
        ebs_config: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct.ebsConfig)
    };
}
function emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy)
    };
}
function emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
        timeout_duration_minutes: cdktf.numberToTerraform(struct.timeoutDurationMinutes)
    };
}
function emrInstanceFleetLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_demand_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct.onDemandSpecification),
        spot_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct.spotSpecification)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet}
*/
var EmrInstanceFleet = /** @class */ (function (_super) {
    __extends(EmrInstanceFleet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceFleetConfig
    */
    function EmrInstanceFleet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_emr_instance_fleet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterId = config.clusterId;
        _this._name = config.name;
        _this._targetOnDemandCapacity = config.targetOnDemandCapacity;
        _this._targetSpotCapacity = config.targetSpotCapacity;
        _this._instanceTypeConfigs = config.instanceTypeConfigs;
        _this._launchSpecifications = config.launchSpecifications;
        return _this;
    }
    Object.defineProperty(EmrInstanceFleet.prototype, "clusterId", {
        get: function () {
            return this.getStringAttribute('cluster_id');
        },
        set: function (value) {
            this._clusterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "clusterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceFleet.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(EmrInstanceFleet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "provisionedOnDemandCapacity", {
        // provisioned_on_demand_capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('provisioned_on_demand_capacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "provisionedSpotCapacity", {
        // provisioned_spot_capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('provisioned_spot_capacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "targetOnDemandCapacity", {
        get: function () {
            return this.getNumberAttribute('target_on_demand_capacity');
        },
        set: function (value) {
            this._targetOnDemandCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceFleet.prototype.resetTargetOnDemandCapacity = function () {
        this._targetOnDemandCapacity = undefined;
    };
    Object.defineProperty(EmrInstanceFleet.prototype, "targetOnDemandCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetOnDemandCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "targetSpotCapacity", {
        get: function () {
            return this.getNumberAttribute('target_spot_capacity');
        },
        set: function (value) {
            this._targetSpotCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceFleet.prototype.resetTargetSpotCapacity = function () {
        this._targetSpotCapacity = undefined;
    };
    Object.defineProperty(EmrInstanceFleet.prototype, "targetSpotCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetSpotCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "instanceTypeConfigs", {
        get: function () {
            return this.interpolationForAttribute('instance_type_configs');
        },
        set: function (value) {
            this._instanceTypeConfigs = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceFleet.prototype.resetInstanceTypeConfigs = function () {
        this._instanceTypeConfigs = undefined;
    };
    Object.defineProperty(EmrInstanceFleet.prototype, "instanceTypeConfigsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceTypeConfigs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceFleet.prototype, "launchSpecifications", {
        get: function () {
            return this.interpolationForAttribute('launch_specifications');
        },
        set: function (value) {
            this._launchSpecifications = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceFleet.prototype.resetLaunchSpecifications = function () {
        this._launchSpecifications = undefined;
    };
    Object.defineProperty(EmrInstanceFleet.prototype, "launchSpecificationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchSpecifications;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmrInstanceFleet.prototype.synthesizeAttributes = function () {
        return {
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            name: cdktf.stringToTerraform(this._name),
            target_on_demand_capacity: cdktf.numberToTerraform(this._targetOnDemandCapacity),
            target_spot_capacity: cdktf.numberToTerraform(this._targetSpotCapacity),
            instance_type_configs: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsToTerraform)(this._instanceTypeConfigs),
            launch_specifications: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsToTerraform)(this._launchSpecifications)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EmrInstanceFleet.tfResourceType = "aws_emr_instance_fleet";
    return EmrInstanceFleet;
}(cdktf.TerraformResource));
exports.EmrInstanceFleet = EmrInstanceFleet;
