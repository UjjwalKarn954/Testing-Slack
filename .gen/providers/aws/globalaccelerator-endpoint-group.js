"use strict";
// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html
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
exports.GlobalacceleratorEndpointGroup = void 0;
var cdktf = require("cdktf");
function globalacceleratorEndpointGroupEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_ip_preservation_enabled: cdktf.booleanToTerraform(struct.clientIpPreservationEnabled),
        endpoint_id: cdktf.stringToTerraform(struct.endpointId),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function globalacceleratorEndpointGroupPortOverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_port: cdktf.numberToTerraform(struct.endpointPort),
        listener_port: cdktf.numberToTerraform(struct.listenerPort)
    };
}
function globalacceleratorEndpointGroupTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html aws_globalaccelerator_endpoint_group}
*/
var GlobalacceleratorEndpointGroup = /** @class */ (function (_super) {
    __extends(GlobalacceleratorEndpointGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html aws_globalaccelerator_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorEndpointGroupConfig
    */
    function GlobalacceleratorEndpointGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_globalaccelerator_endpoint_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._endpointGroupRegion = config.endpointGroupRegion;
        _this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
        _this._healthCheckPath = config.healthCheckPath;
        _this._healthCheckPort = config.healthCheckPort;
        _this._healthCheckProtocol = config.healthCheckProtocol;
        _this._listenerArn = config.listenerArn;
        _this._thresholdCount = config.thresholdCount;
        _this._trafficDialPercentage = config.trafficDialPercentage;
        _this._endpointConfiguration = config.endpointConfiguration;
        _this._portOverride = config.portOverride;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "arn", {
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
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "endpointGroupRegion", {
        get: function () {
            return this.getStringAttribute('endpoint_group_region');
        },
        set: function (value) {
            this._endpointGroupRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetEndpointGroupRegion = function () {
        this._endpointGroupRegion = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "endpointGroupRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointGroupRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "healthCheckIntervalSeconds", {
        get: function () {
            return this.getNumberAttribute('health_check_interval_seconds');
        },
        set: function (value) {
            this._healthCheckIntervalSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetHealthCheckIntervalSeconds = function () {
        this._healthCheckIntervalSeconds = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "healthCheckIntervalSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckIntervalSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "healthCheckPath", {
        get: function () {
            return this.getStringAttribute('health_check_path');
        },
        set: function (value) {
            this._healthCheckPath = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetHealthCheckPath = function () {
        this._healthCheckPath = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "healthCheckPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "healthCheckPort", {
        get: function () {
            return this.getNumberAttribute('health_check_port');
        },
        set: function (value) {
            this._healthCheckPort = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetHealthCheckPort = function () {
        this._healthCheckPort = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "healthCheckPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "healthCheckProtocol", {
        get: function () {
            return this.getStringAttribute('health_check_protocol');
        },
        set: function (value) {
            this._healthCheckProtocol = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetHealthCheckProtocol = function () {
        this._healthCheckProtocol = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "healthCheckProtocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckProtocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "listenerArn", {
        get: function () {
            return this.getStringAttribute('listener_arn');
        },
        set: function (value) {
            this._listenerArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "listenerArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._listenerArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "thresholdCount", {
        get: function () {
            return this.getNumberAttribute('threshold_count');
        },
        set: function (value) {
            this._thresholdCount = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetThresholdCount = function () {
        this._thresholdCount = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "thresholdCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thresholdCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "trafficDialPercentage", {
        get: function () {
            return this.getNumberAttribute('traffic_dial_percentage');
        },
        set: function (value) {
            this._trafficDialPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetTrafficDialPercentage = function () {
        this._trafficDialPercentage = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "trafficDialPercentageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficDialPercentage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "endpointConfiguration", {
        get: function () {
            return this.interpolationForAttribute('endpoint_configuration');
        },
        set: function (value) {
            this._endpointConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetEndpointConfiguration = function () {
        this._endpointConfiguration = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "endpointConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "portOverride", {
        get: function () {
            return this.interpolationForAttribute('port_override');
        },
        set: function (value) {
            this._portOverride = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetPortOverride = function () {
        this._portOverride = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "portOverrideInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portOverride;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorEndpointGroup.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(GlobalacceleratorEndpointGroup.prototype, "timeoutsInput", {
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
    GlobalacceleratorEndpointGroup.prototype.synthesizeAttributes = function () {
        return {
            endpoint_group_region: cdktf.stringToTerraform(this._endpointGroupRegion),
            health_check_interval_seconds: cdktf.numberToTerraform(this._healthCheckIntervalSeconds),
            health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
            health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
            health_check_protocol: cdktf.stringToTerraform(this._healthCheckProtocol),
            listener_arn: cdktf.stringToTerraform(this._listenerArn),
            threshold_count: cdktf.numberToTerraform(this._thresholdCount),
            traffic_dial_percentage: cdktf.numberToTerraform(this._trafficDialPercentage),
            endpoint_configuration: cdktf.listMapper(globalacceleratorEndpointGroupEndpointConfigurationToTerraform)(this._endpointConfiguration),
            port_override: cdktf.listMapper(globalacceleratorEndpointGroupPortOverrideToTerraform)(this._portOverride),
            timeouts: globalacceleratorEndpointGroupTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlobalacceleratorEndpointGroup.tfResourceType = "aws_globalaccelerator_endpoint_group";
    return GlobalacceleratorEndpointGroup;
}(cdktf.TerraformResource));
exports.GlobalacceleratorEndpointGroup = GlobalacceleratorEndpointGroup;
