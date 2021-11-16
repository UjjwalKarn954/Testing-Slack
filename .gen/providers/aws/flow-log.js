"use strict";
// https://www.terraform.io/docs/providers/aws/r/flow_log.html
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
exports.FlowLog = void 0;
var cdktf = require("cdktf");
function flowLogDestinationOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file_format: cdktf.stringToTerraform(struct.fileFormat),
        hive_compatible_partitions: cdktf.booleanToTerraform(struct.hiveCompatiblePartitions),
        per_hour_partition: cdktf.booleanToTerraform(struct.perHourPartition)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log}
*/
var FlowLog = /** @class */ (function (_super) {
    __extends(FlowLog, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FlowLogConfig
    */
    function FlowLog(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_flow_log',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._eniId = config.eniId;
        _this._iamRoleArn = config.iamRoleArn;
        _this._logDestination = config.logDestination;
        _this._logDestinationType = config.logDestinationType;
        _this._logFormat = config.logFormat;
        _this._logGroupName = config.logGroupName;
        _this._maxAggregationInterval = config.maxAggregationInterval;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._trafficType = config.trafficType;
        _this._vpcId = config.vpcId;
        _this._destinationOptions = config.destinationOptions;
        return _this;
    }
    Object.defineProperty(FlowLog.prototype, "arn", {
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
    Object.defineProperty(FlowLog.prototype, "eniId", {
        get: function () {
            return this.getStringAttribute('eni_id');
        },
        set: function (value) {
            this._eniId = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetEniId = function () {
        this._eniId = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "eniIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eniId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "iamRoleArn", {
        get: function () {
            return this.getStringAttribute('iam_role_arn');
        },
        set: function (value) {
            this._iamRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetIamRoleArn = function () {
        this._iamRoleArn = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "iamRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "logDestination", {
        get: function () {
            return this.getStringAttribute('log_destination');
        },
        set: function (value) {
            this._logDestination = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetLogDestination = function () {
        this._logDestination = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "logDestinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logDestination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "logDestinationType", {
        get: function () {
            return this.getStringAttribute('log_destination_type');
        },
        set: function (value) {
            this._logDestinationType = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetLogDestinationType = function () {
        this._logDestinationType = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "logDestinationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logDestinationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "logFormat", {
        get: function () {
            return this.getStringAttribute('log_format');
        },
        set: function (value) {
            this._logFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetLogFormat = function () {
        this._logFormat = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "logFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "logGroupName", {
        get: function () {
            return this.getStringAttribute('log_group_name');
        },
        set: function (value) {
            this._logGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetLogGroupName = function () {
        this._logGroupName = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "logGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "maxAggregationInterval", {
        get: function () {
            return this.getNumberAttribute('max_aggregation_interval');
        },
        set: function (value) {
            this._maxAggregationInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetMaxAggregationInterval = function () {
        this._maxAggregationInterval = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "maxAggregationIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAggregationInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "trafficType", {
        get: function () {
            return this.getStringAttribute('traffic_type');
        },
        set: function (value) {
            this._trafficType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "trafficTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLog.prototype, "destinationOptions", {
        get: function () {
            return this.interpolationForAttribute('destination_options');
        },
        set: function (value) {
            this._destinationOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    FlowLog.prototype.resetDestinationOptions = function () {
        this._destinationOptions = undefined;
    };
    Object.defineProperty(FlowLog.prototype, "destinationOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationOptions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    FlowLog.prototype.synthesizeAttributes = function () {
        return {
            eni_id: cdktf.stringToTerraform(this._eniId),
            iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
            log_destination: cdktf.stringToTerraform(this._logDestination),
            log_destination_type: cdktf.stringToTerraform(this._logDestinationType),
            log_format: cdktf.stringToTerraform(this._logFormat),
            log_group_name: cdktf.stringToTerraform(this._logGroupName),
            max_aggregation_interval: cdktf.numberToTerraform(this._maxAggregationInterval),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            traffic_type: cdktf.stringToTerraform(this._trafficType),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            destination_options: cdktf.listMapper(flowLogDestinationOptionsToTerraform)(this._destinationOptions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    FlowLog.tfResourceType = "aws_flow_log";
    return FlowLog;
}(cdktf.TerraformResource));
exports.FlowLog = FlowLog;
