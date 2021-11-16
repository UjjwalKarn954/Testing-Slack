"use strict";
// https://www.terraform.io/docs/providers/aws/d/elb.html
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
exports.DataAwsElb = exports.DataAwsElbListener = exports.DataAwsElbHealthCheck = exports.DataAwsElbAccessLogs = void 0;
var cdktf = require("cdktf");
var DataAwsElbAccessLogs = /** @class */ (function (_super) {
    __extends(DataAwsElbAccessLogs, _super);
    function DataAwsElbAccessLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElbAccessLogs.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbAccessLogs.prototype, "bucketPrefix", {
        // bucket_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbAccessLogs.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbAccessLogs.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElbAccessLogs;
}(cdktf.ComplexComputedList));
exports.DataAwsElbAccessLogs = DataAwsElbAccessLogs;
var DataAwsElbHealthCheck = /** @class */ (function (_super) {
    __extends(DataAwsElbHealthCheck, _super);
    function DataAwsElbHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElbHealthCheck.prototype, "healthyThreshold", {
        // healthy_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('healthy_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbHealthCheck.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbHealthCheck.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbHealthCheck.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbHealthCheck.prototype, "unhealthyThreshold", {
        // unhealthy_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('unhealthy_threshold');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElbHealthCheck;
}(cdktf.ComplexComputedList));
exports.DataAwsElbHealthCheck = DataAwsElbHealthCheck;
var DataAwsElbListener = /** @class */ (function (_super) {
    __extends(DataAwsElbListener, _super);
    function DataAwsElbListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElbListener.prototype, "instancePort", {
        // instance_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('instance_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbListener.prototype, "instanceProtocol", {
        // instance_protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbListener.prototype, "lbPort", {
        // lb_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lb_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbListener.prototype, "lbProtocol", {
        // lb_protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lb_protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbListener.prototype, "sslCertificateId", {
        // ssl_certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssl_certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElbListener;
}(cdktf.ComplexComputedList));
exports.DataAwsElbListener = DataAwsElbListener;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb.html aws_elb}
*/
var DataAwsElb = /** @class */ (function (_super) {
    __extends(DataAwsElb, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb.html aws_elb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElbConfig
    */
    function DataAwsElb(scope, id, config) {
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
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_logs - computed: true, optional: false, required: false
    DataAwsElb.prototype.accessLogs = function (index) {
        return new DataAwsElbAccessLogs(this, 'access_logs', index);
    };
    Object.defineProperty(DataAwsElb.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "connectionDraining", {
        // connection_draining - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('connection_draining');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "connectionDrainingTimeout", {
        // connection_draining_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('connection_draining_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "crossZoneLoadBalancing", {
        // cross_zone_load_balancing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cross_zone_load_balancing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    // health_check - computed: true, optional: false, required: false
    DataAwsElb.prototype.healthCheck = function (index) {
        return new DataAwsElbHealthCheck(this, 'health_check', index);
    };
    Object.defineProperty(DataAwsElb.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "idleTimeout", {
        // idle_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('idle_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "instances", {
        // instances - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('instances');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "internal", {
        // internal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('internal');
        },
        enumerable: false,
        configurable: true
    });
    // listener - computed: true, optional: false, required: false
    DataAwsElb.prototype.listener = function (index) {
        return new DataAwsElbListener(this, 'listener', index);
    };
    Object.defineProperty(DataAwsElb.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "sourceSecurityGroup", {
        // source_security_group - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_security_group');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "sourceSecurityGroupId", {
        // source_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "subnets", {
        // subnets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsElb.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsElb.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElb.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsElb.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsElb.tfResourceType = "aws_elb";
    return DataAwsElb;
}(cdktf.TerraformDataSource));
exports.DataAwsElb = DataAwsElb;
