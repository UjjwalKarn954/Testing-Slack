"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_record.html
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
exports.Route53Record = void 0;
var cdktf = require("cdktf");
function route53RecordAliasToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        evaluate_target_health: cdktf.booleanToTerraform(struct.evaluateTargetHealth),
        name: cdktf.stringToTerraform(struct.name),
        zone_id: cdktf.stringToTerraform(struct.zoneId)
    };
}
function route53RecordFailoverRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function route53RecordGeolocationRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        continent: cdktf.stringToTerraform(struct.continent),
        country: cdktf.stringToTerraform(struct.country),
        subdivision: cdktf.stringToTerraform(struct.subdivision)
    };
}
function route53RecordLatencyRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        region: cdktf.stringToTerraform(struct.region)
    };
}
function route53RecordWeightedRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record}
*/
var Route53Record = /** @class */ (function (_super) {
    __extends(Route53Record, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecordConfig
    */
    function Route53Record(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_record',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowOverwrite = config.allowOverwrite;
        _this._healthCheckId = config.healthCheckId;
        _this._multivalueAnswerRoutingPolicy = config.multivalueAnswerRoutingPolicy;
        _this._name = config.name;
        _this._records = config.records;
        _this._setIdentifier = config.setIdentifier;
        _this._ttl = config.ttl;
        _this._type = config.type;
        _this._zoneId = config.zoneId;
        _this._alias = config.alias;
        _this._failoverRoutingPolicy = config.failoverRoutingPolicy;
        _this._geolocationRoutingPolicy = config.geolocationRoutingPolicy;
        _this._latencyRoutingPolicy = config.latencyRoutingPolicy;
        _this._weightedRoutingPolicy = config.weightedRoutingPolicy;
        return _this;
    }
    Object.defineProperty(Route53Record.prototype, "allowOverwrite", {
        get: function () {
            return this.getBooleanAttribute('allow_overwrite');
        },
        set: function (value) {
            this._allowOverwrite = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetAllowOverwrite = function () {
        this._allowOverwrite = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "allowOverwriteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowOverwrite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "fqdn", {
        // fqdn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fqdn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "healthCheckId", {
        get: function () {
            return this.getStringAttribute('health_check_id');
        },
        set: function (value) {
            this._healthCheckId = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetHealthCheckId = function () {
        this._healthCheckId = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "healthCheckIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "multivalueAnswerRoutingPolicy", {
        get: function () {
            return this.getBooleanAttribute('multivalue_answer_routing_policy');
        },
        set: function (value) {
            this._multivalueAnswerRoutingPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetMultivalueAnswerRoutingPolicy = function () {
        this._multivalueAnswerRoutingPolicy = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "multivalueAnswerRoutingPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multivalueAnswerRoutingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "records", {
        get: function () {
            return this.getListAttribute('records');
        },
        set: function (value) {
            this._records = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetRecords = function () {
        this._records = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "recordsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._records;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "setIdentifier", {
        get: function () {
            return this.getStringAttribute('set_identifier');
        },
        set: function (value) {
            this._setIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetSetIdentifier = function () {
        this._setIdentifier = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "setIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._setIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "alias", {
        get: function () {
            return this.interpolationForAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "failoverRoutingPolicy", {
        get: function () {
            return this.interpolationForAttribute('failover_routing_policy');
        },
        set: function (value) {
            this._failoverRoutingPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetFailoverRoutingPolicy = function () {
        this._failoverRoutingPolicy = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "failoverRoutingPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failoverRoutingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "geolocationRoutingPolicy", {
        get: function () {
            return this.interpolationForAttribute('geolocation_routing_policy');
        },
        set: function (value) {
            this._geolocationRoutingPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetGeolocationRoutingPolicy = function () {
        this._geolocationRoutingPolicy = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "geolocationRoutingPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geolocationRoutingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "latencyRoutingPolicy", {
        get: function () {
            return this.interpolationForAttribute('latency_routing_policy');
        },
        set: function (value) {
            this._latencyRoutingPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetLatencyRoutingPolicy = function () {
        this._latencyRoutingPolicy = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "latencyRoutingPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._latencyRoutingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Record.prototype, "weightedRoutingPolicy", {
        get: function () {
            return this.interpolationForAttribute('weighted_routing_policy');
        },
        set: function (value) {
            this._weightedRoutingPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Record.prototype.resetWeightedRoutingPolicy = function () {
        this._weightedRoutingPolicy = undefined;
    };
    Object.defineProperty(Route53Record.prototype, "weightedRoutingPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._weightedRoutingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53Record.prototype.synthesizeAttributes = function () {
        return {
            allow_overwrite: cdktf.booleanToTerraform(this._allowOverwrite),
            health_check_id: cdktf.stringToTerraform(this._healthCheckId),
            multivalue_answer_routing_policy: cdktf.booleanToTerraform(this._multivalueAnswerRoutingPolicy),
            name: cdktf.stringToTerraform(this._name),
            records: cdktf.listMapper(cdktf.stringToTerraform)(this._records),
            set_identifier: cdktf.stringToTerraform(this._setIdentifier),
            ttl: cdktf.numberToTerraform(this._ttl),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
            alias: cdktf.listMapper(route53RecordAliasToTerraform)(this._alias),
            failover_routing_policy: cdktf.listMapper(route53RecordFailoverRoutingPolicyToTerraform)(this._failoverRoutingPolicy),
            geolocation_routing_policy: cdktf.listMapper(route53RecordGeolocationRoutingPolicyToTerraform)(this._geolocationRoutingPolicy),
            latency_routing_policy: cdktf.listMapper(route53RecordLatencyRoutingPolicyToTerraform)(this._latencyRoutingPolicy),
            weighted_routing_policy: cdktf.listMapper(route53RecordWeightedRoutingPolicyToTerraform)(this._weightedRoutingPolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53Record.tfResourceType = "aws_route53_record";
    return Route53Record;
}(cdktf.TerraformResource));
exports.Route53Record = Route53Record;
