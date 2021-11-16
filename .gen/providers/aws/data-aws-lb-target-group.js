"use strict";
// https://www.terraform.io/docs/providers/aws/d/lb_target_group.html
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
exports.DataAwsLbTargetGroup = exports.DataAwsLbTargetGroupStickiness = exports.DataAwsLbTargetGroupHealthCheck = void 0;
var cdktf = require("cdktf");
var DataAwsLbTargetGroupHealthCheck = /** @class */ (function (_super) {
    __extends(DataAwsLbTargetGroupHealthCheck, _super);
    function DataAwsLbTargetGroupHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "healthyThreshold", {
        // healthy_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('healthy_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "matcher", {
        // matcher - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('matcher');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "unhealthyThreshold", {
        // unhealthy_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('unhealthy_threshold');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbTargetGroupHealthCheck;
}(cdktf.ComplexComputedList));
exports.DataAwsLbTargetGroupHealthCheck = DataAwsLbTargetGroupHealthCheck;
var DataAwsLbTargetGroupStickiness = /** @class */ (function (_super) {
    __extends(DataAwsLbTargetGroupStickiness, _super);
    function DataAwsLbTargetGroupStickiness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbTargetGroupStickiness.prototype, "cookieDuration", {
        // cookie_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cookie_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupStickiness.prototype, "cookieName", {
        // cookie_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cookie_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupStickiness.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroupStickiness.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbTargetGroupStickiness;
}(cdktf.ComplexComputedList));
exports.DataAwsLbTargetGroupStickiness = DataAwsLbTargetGroupStickiness;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group}
*/
var DataAwsLbTargetGroup = /** @class */ (function (_super) {
    __extends(DataAwsLbTargetGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbTargetGroupConfig = {}
    */
    function DataAwsLbTargetGroup(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lb_target_group',
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
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "arnSuffix", {
        // arn_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "deregistrationDelay", {
        // deregistration_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('deregistration_delay');
        },
        enumerable: false,
        configurable: true
    });
    // health_check - computed: true, optional: false, required: false
    DataAwsLbTargetGroup.prototype.healthCheck = function (index) {
        return new DataAwsLbTargetGroupHealthCheck(this, 'health_check', index);
    };
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "lambdaMultiValueHeadersEnabled", {
        // lambda_multi_value_headers_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "loadBalancingAlgorithmType", {
        // load_balancing_algorithm_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('load_balancing_algorithm_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLbTargetGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "preserveClientIp", {
        // preserve_client_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preserve_client_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "protocolVersion", {
        // protocol_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "proxyProtocolV2", {
        // proxy_protocol_v2 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxy_protocol_v2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "slowStart", {
        // slow_start - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('slow_start');
        },
        enumerable: false,
        configurable: true
    });
    // stickiness - computed: true, optional: false, required: false
    DataAwsLbTargetGroup.prototype.stickiness = function (index) {
        return new DataAwsLbTargetGroupStickiness(this, 'stickiness', index);
    };
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLbTargetGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "targetType", {
        // target_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbTargetGroup.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLbTargetGroup.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLbTargetGroup.tfResourceType = "aws_lb_target_group";
    return DataAwsLbTargetGroup;
}(cdktf.TerraformDataSource));
exports.DataAwsLbTargetGroup = DataAwsLbTargetGroup;
