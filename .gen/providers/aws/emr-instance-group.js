"use strict";
// https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html
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
exports.EmrInstanceGroup = void 0;
var cdktf = require("cdktf");
function emrInstanceGroupEbsConfigToTerraform(struct) {
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
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html aws_emr_instance_group}
*/
var EmrInstanceGroup = /** @class */ (function (_super) {
    __extends(EmrInstanceGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html aws_emr_instance_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceGroupConfig
    */
    function EmrInstanceGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_emr_instance_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoscalingPolicy = config.autoscalingPolicy;
        _this._bidPrice = config.bidPrice;
        _this._clusterId = config.clusterId;
        _this._configurationsJson = config.configurationsJson;
        _this._ebsOptimized = config.ebsOptimized;
        _this._instanceCount = config.instanceCount;
        _this._instanceType = config.instanceType;
        _this._name = config.name;
        _this._ebsConfig = config.ebsConfig;
        return _this;
    }
    Object.defineProperty(EmrInstanceGroup.prototype, "autoscalingPolicy", {
        get: function () {
            return this.getStringAttribute('autoscaling_policy');
        },
        set: function (value) {
            this._autoscalingPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceGroup.prototype.resetAutoscalingPolicy = function () {
        this._autoscalingPolicy = undefined;
    };
    Object.defineProperty(EmrInstanceGroup.prototype, "autoscalingPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoscalingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "bidPrice", {
        get: function () {
            return this.getStringAttribute('bid_price');
        },
        set: function (value) {
            this._bidPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceGroup.prototype.resetBidPrice = function () {
        this._bidPrice = undefined;
    };
    Object.defineProperty(EmrInstanceGroup.prototype, "bidPriceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bidPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "clusterId", {
        get: function () {
            return this.getStringAttribute('cluster_id');
        },
        set: function (value) {
            this._clusterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "clusterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "configurationsJson", {
        get: function () {
            return this.getStringAttribute('configurations_json');
        },
        set: function (value) {
            this._configurationsJson = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceGroup.prototype.resetConfigurationsJson = function () {
        this._configurationsJson = undefined;
    };
    Object.defineProperty(EmrInstanceGroup.prototype, "configurationsJsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationsJson;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "ebsOptimized", {
        get: function () {
            return this.getBooleanAttribute('ebs_optimized');
        },
        set: function (value) {
            this._ebsOptimized = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceGroup.prototype.resetEbsOptimized = function () {
        this._ebsOptimized = undefined;
    };
    Object.defineProperty(EmrInstanceGroup.prototype, "ebsOptimizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsOptimized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "instanceCount", {
        get: function () {
            return this.getNumberAttribute('instance_count');
        },
        set: function (value) {
            this._instanceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceGroup.prototype.resetInstanceCount = function () {
        this._instanceCount = undefined;
    };
    Object.defineProperty(EmrInstanceGroup.prototype, "instanceCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(EmrInstanceGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "runningInstanceCount", {
        // running_instance_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('running_instance_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrInstanceGroup.prototype, "ebsConfig", {
        get: function () {
            return this.interpolationForAttribute('ebs_config');
        },
        set: function (value) {
            this._ebsConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrInstanceGroup.prototype.resetEbsConfig = function () {
        this._ebsConfig = undefined;
    };
    Object.defineProperty(EmrInstanceGroup.prototype, "ebsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmrInstanceGroup.prototype.synthesizeAttributes = function () {
        return {
            autoscaling_policy: cdktf.stringToTerraform(this._autoscalingPolicy),
            bid_price: cdktf.stringToTerraform(this._bidPrice),
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            configurations_json: cdktf.stringToTerraform(this._configurationsJson),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            instance_count: cdktf.numberToTerraform(this._instanceCount),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            name: cdktf.stringToTerraform(this._name),
            ebs_config: cdktf.listMapper(emrInstanceGroupEbsConfigToTerraform)(this._ebsConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EmrInstanceGroup.tfResourceType = "aws_emr_instance_group";
    return EmrInstanceGroup;
}(cdktf.TerraformResource));
exports.EmrInstanceGroup = EmrInstanceGroup;
