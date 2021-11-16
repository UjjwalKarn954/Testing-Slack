"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_health_check.html
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
exports.Route53HealthCheck = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check}
*/
var Route53HealthCheck = /** @class */ (function (_super) {
    __extends(Route53HealthCheck, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HealthCheckConfig
    */
    function Route53HealthCheck(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_health_check',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._childHealthThreshold = config.childHealthThreshold;
        _this._childHealthchecks = config.childHealthchecks;
        _this._cloudwatchAlarmName = config.cloudwatchAlarmName;
        _this._cloudwatchAlarmRegion = config.cloudwatchAlarmRegion;
        _this._disabled = config.disabled;
        _this._enableSni = config.enableSni;
        _this._failureThreshold = config.failureThreshold;
        _this._fqdn = config.fqdn;
        _this._insufficientDataHealthStatus = config.insufficientDataHealthStatus;
        _this._invertHealthcheck = config.invertHealthcheck;
        _this._ipAddress = config.ipAddress;
        _this._measureLatency = config.measureLatency;
        _this._port = config.port;
        _this._referenceName = config.referenceName;
        _this._regions = config.regions;
        _this._requestInterval = config.requestInterval;
        _this._resourcePath = config.resourcePath;
        _this._routingControlArn = config.routingControlArn;
        _this._searchString = config.searchString;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        return _this;
    }
    Object.defineProperty(Route53HealthCheck.prototype, "arn", {
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
    Object.defineProperty(Route53HealthCheck.prototype, "childHealthThreshold", {
        get: function () {
            return this.getNumberAttribute('child_health_threshold');
        },
        set: function (value) {
            this._childHealthThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetChildHealthThreshold = function () {
        this._childHealthThreshold = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "childHealthThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._childHealthThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "childHealthchecks", {
        get: function () {
            return this.getListAttribute('child_healthchecks');
        },
        set: function (value) {
            this._childHealthchecks = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetChildHealthchecks = function () {
        this._childHealthchecks = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "childHealthchecksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._childHealthchecks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "cloudwatchAlarmName", {
        get: function () {
            return this.getStringAttribute('cloudwatch_alarm_name');
        },
        set: function (value) {
            this._cloudwatchAlarmName = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetCloudwatchAlarmName = function () {
        this._cloudwatchAlarmName = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "cloudwatchAlarmNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchAlarmName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "cloudwatchAlarmRegion", {
        get: function () {
            return this.getStringAttribute('cloudwatch_alarm_region');
        },
        set: function (value) {
            this._cloudwatchAlarmRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetCloudwatchAlarmRegion = function () {
        this._cloudwatchAlarmRegion = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "cloudwatchAlarmRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchAlarmRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "enableSni", {
        get: function () {
            return this.getBooleanAttribute('enable_sni');
        },
        set: function (value) {
            this._enableSni = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetEnableSni = function () {
        this._enableSni = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "enableSniInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableSni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "failureThreshold", {
        get: function () {
            return this.getNumberAttribute('failure_threshold');
        },
        set: function (value) {
            this._failureThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetFailureThreshold = function () {
        this._failureThreshold = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "failureThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failureThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "fqdn", {
        get: function () {
            return this.getStringAttribute('fqdn');
        },
        set: function (value) {
            this._fqdn = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetFqdn = function () {
        this._fqdn = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "fqdnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fqdn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "insufficientDataHealthStatus", {
        get: function () {
            return this.getStringAttribute('insufficient_data_health_status');
        },
        set: function (value) {
            this._insufficientDataHealthStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetInsufficientDataHealthStatus = function () {
        this._insufficientDataHealthStatus = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "insufficientDataHealthStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insufficientDataHealthStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "invertHealthcheck", {
        get: function () {
            return this.getBooleanAttribute('invert_healthcheck');
        },
        set: function (value) {
            this._invertHealthcheck = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetInvertHealthcheck = function () {
        this._invertHealthcheck = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "invertHealthcheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invertHealthcheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "measureLatency", {
        get: function () {
            return this.getBooleanAttribute('measure_latency');
        },
        set: function (value) {
            this._measureLatency = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetMeasureLatency = function () {
        this._measureLatency = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "measureLatencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._measureLatency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "referenceName", {
        get: function () {
            return this.getStringAttribute('reference_name');
        },
        set: function (value) {
            this._referenceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetReferenceName = function () {
        this._referenceName = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "referenceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._referenceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "regions", {
        get: function () {
            return this.getListAttribute('regions');
        },
        set: function (value) {
            this._regions = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetRegions = function () {
        this._regions = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "regionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "requestInterval", {
        get: function () {
            return this.getNumberAttribute('request_interval');
        },
        set: function (value) {
            this._requestInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetRequestInterval = function () {
        this._requestInterval = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "requestIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "resourcePath", {
        get: function () {
            return this.getStringAttribute('resource_path');
        },
        set: function (value) {
            this._resourcePath = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetResourcePath = function () {
        this._resourcePath = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "resourcePathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourcePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "routingControlArn", {
        get: function () {
            return this.getStringAttribute('routing_control_arn');
        },
        set: function (value) {
            this._routingControlArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetRoutingControlArn = function () {
        this._routingControlArn = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "routingControlArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routingControlArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "searchString", {
        get: function () {
            return this.getStringAttribute('search_string');
        },
        set: function (value) {
            this._searchString = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetSearchString = function () {
        this._searchString = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "searchStringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._searchString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HealthCheck.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53HealthCheck.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HealthCheck.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53HealthCheck.prototype.synthesizeAttributes = function () {
        return {
            child_health_threshold: cdktf.numberToTerraform(this._childHealthThreshold),
            child_healthchecks: cdktf.listMapper(cdktf.stringToTerraform)(this._childHealthchecks),
            cloudwatch_alarm_name: cdktf.stringToTerraform(this._cloudwatchAlarmName),
            cloudwatch_alarm_region: cdktf.stringToTerraform(this._cloudwatchAlarmRegion),
            disabled: cdktf.booleanToTerraform(this._disabled),
            enable_sni: cdktf.booleanToTerraform(this._enableSni),
            failure_threshold: cdktf.numberToTerraform(this._failureThreshold),
            fqdn: cdktf.stringToTerraform(this._fqdn),
            insufficient_data_health_status: cdktf.stringToTerraform(this._insufficientDataHealthStatus),
            invert_healthcheck: cdktf.booleanToTerraform(this._invertHealthcheck),
            ip_address: cdktf.stringToTerraform(this._ipAddress),
            measure_latency: cdktf.booleanToTerraform(this._measureLatency),
            port: cdktf.numberToTerraform(this._port),
            reference_name: cdktf.stringToTerraform(this._referenceName),
            regions: cdktf.listMapper(cdktf.stringToTerraform)(this._regions),
            request_interval: cdktf.numberToTerraform(this._requestInterval),
            resource_path: cdktf.stringToTerraform(this._resourcePath),
            routing_control_arn: cdktf.stringToTerraform(this._routingControlArn),
            search_string: cdktf.stringToTerraform(this._searchString),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53HealthCheck.tfResourceType = "aws_route53_health_check";
    return Route53HealthCheck;
}(cdktf.TerraformResource));
exports.Route53HealthCheck = Route53HealthCheck;
