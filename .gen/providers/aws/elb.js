"use strict";
// https://www.terraform.io/docs/providers/aws/r/elb.html
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
exports.Elb = void 0;
var cdktf = require("cdktf");
function elbAccessLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        interval: cdktf.numberToTerraform(struct.interval)
    };
}
function elbHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval: cdktf.numberToTerraform(struct.interval),
        target: cdktf.stringToTerraform(struct.target),
        timeout: cdktf.numberToTerraform(struct.timeout),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold)
    };
}
function elbListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_port: cdktf.numberToTerraform(struct.instancePort),
        instance_protocol: cdktf.stringToTerraform(struct.instanceProtocol),
        lb_port: cdktf.numberToTerraform(struct.lbPort),
        lb_protocol: cdktf.stringToTerraform(struct.lbProtocol),
        ssl_certificate_id: cdktf.stringToTerraform(struct.sslCertificateId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb.html aws_elb}
*/
var Elb = /** @class */ (function (_super) {
    __extends(Elb, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elb.html aws_elb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElbConfig
    */
    function Elb(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elb',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZones = config.availabilityZones;
        _this._connectionDraining = config.connectionDraining;
        _this._connectionDrainingTimeout = config.connectionDrainingTimeout;
        _this._crossZoneLoadBalancing = config.crossZoneLoadBalancing;
        _this._idleTimeout = config.idleTimeout;
        _this._instances = config.instances;
        _this._internal = config.internal;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._securityGroups = config.securityGroups;
        _this._sourceSecurityGroup = config.sourceSecurityGroup;
        _this._subnets = config.subnets;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._accessLogs = config.accessLogs;
        _this._healthCheck = config.healthCheck;
        _this._listener = config.listener;
        return _this;
    }
    Object.defineProperty(Elb.prototype, "arn", {
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
    Object.defineProperty(Elb.prototype, "availabilityZones", {
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        set: function (value) {
            this._availabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetAvailabilityZones = function () {
        this._availabilityZones = undefined;
    };
    Object.defineProperty(Elb.prototype, "availabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "connectionDraining", {
        get: function () {
            return this.getBooleanAttribute('connection_draining');
        },
        set: function (value) {
            this._connectionDraining = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetConnectionDraining = function () {
        this._connectionDraining = undefined;
    };
    Object.defineProperty(Elb.prototype, "connectionDrainingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionDraining;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "connectionDrainingTimeout", {
        get: function () {
            return this.getNumberAttribute('connection_draining_timeout');
        },
        set: function (value) {
            this._connectionDrainingTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetConnectionDrainingTimeout = function () {
        this._connectionDrainingTimeout = undefined;
    };
    Object.defineProperty(Elb.prototype, "connectionDrainingTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionDrainingTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "crossZoneLoadBalancing", {
        get: function () {
            return this.getBooleanAttribute('cross_zone_load_balancing');
        },
        set: function (value) {
            this._crossZoneLoadBalancing = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetCrossZoneLoadBalancing = function () {
        this._crossZoneLoadBalancing = undefined;
    };
    Object.defineProperty(Elb.prototype, "crossZoneLoadBalancingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._crossZoneLoadBalancing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "idleTimeout", {
        get: function () {
            return this.getNumberAttribute('idle_timeout');
        },
        set: function (value) {
            this._idleTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetIdleTimeout = function () {
        this._idleTimeout = undefined;
    };
    Object.defineProperty(Elb.prototype, "idleTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idleTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "instances", {
        get: function () {
            return this.getListAttribute('instances');
        },
        set: function (value) {
            this._instances = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetInstances = function () {
        this._instances = undefined;
    };
    Object.defineProperty(Elb.prototype, "instancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "internal", {
        get: function () {
            return this.getBooleanAttribute('internal');
        },
        set: function (value) {
            this._internal = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetInternal = function () {
        this._internal = undefined;
    };
    Object.defineProperty(Elb.prototype, "internalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._internal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Elb.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(Elb.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(Elb.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "sourceSecurityGroup", {
        get: function () {
            return this.getStringAttribute('source_security_group');
        },
        set: function (value) {
            this._sourceSecurityGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetSourceSecurityGroup = function () {
        this._sourceSecurityGroup = undefined;
    };
    Object.defineProperty(Elb.prototype, "sourceSecurityGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceSecurityGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "sourceSecurityGroupId", {
        // source_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "subnets", {
        get: function () {
            return this.getListAttribute('subnets');
        },
        set: function (value) {
            this._subnets = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetSubnets = function () {
        this._subnets = undefined;
    };
    Object.defineProperty(Elb.prototype, "subnetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Elb.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Elb.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "accessLogs", {
        get: function () {
            return this.interpolationForAttribute('access_logs');
        },
        set: function (value) {
            this._accessLogs = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetAccessLogs = function () {
        this._accessLogs = undefined;
    };
    Object.defineProperty(Elb.prototype, "accessLogsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessLogs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "healthCheck", {
        get: function () {
            return this.interpolationForAttribute('health_check');
        },
        set: function (value) {
            this._healthCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    Elb.prototype.resetHealthCheck = function () {
        this._healthCheck = undefined;
    };
    Object.defineProperty(Elb.prototype, "healthCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "listener", {
        get: function () {
            return this.interpolationForAttribute('listener');
        },
        set: function (value) {
            this._listener = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elb.prototype, "listenerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._listener;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Elb.prototype.synthesizeAttributes = function () {
        return {
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            connection_draining: cdktf.booleanToTerraform(this._connectionDraining),
            connection_draining_timeout: cdktf.numberToTerraform(this._connectionDrainingTimeout),
            cross_zone_load_balancing: cdktf.booleanToTerraform(this._crossZoneLoadBalancing),
            idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
            instances: cdktf.listMapper(cdktf.stringToTerraform)(this._instances),
            internal: cdktf.booleanToTerraform(this._internal),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            source_security_group: cdktf.stringToTerraform(this._sourceSecurityGroup),
            subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._subnets),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            access_logs: cdktf.listMapper(elbAccessLogsToTerraform)(this._accessLogs),
            health_check: cdktf.listMapper(elbHealthCheckToTerraform)(this._healthCheck),
            listener: cdktf.listMapper(elbListenerToTerraform)(this._listener)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Elb.tfResourceType = "aws_elb";
    return Elb;
}(cdktf.TerraformResource));
exports.Elb = Elb;
