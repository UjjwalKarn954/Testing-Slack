"use strict";
// https://www.terraform.io/docs/providers/aws/d/alb_target_group.html
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
exports.DataAwsAlbTargetGroup = exports.DataAwsAlbTargetGroupStickiness = exports.DataAwsAlbTargetGroupHealthCheck = void 0;
var cdktf = require("cdktf");
var DataAwsAlbTargetGroupHealthCheck = /** @class */ (function (_super) {
    __extends(DataAwsAlbTargetGroupHealthCheck, _super);
    function DataAwsAlbTargetGroupHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "healthyThreshold", {
        // healthy_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('healthy_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "matcher", {
        // matcher - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('matcher');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "unhealthyThreshold", {
        // unhealthy_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('unhealthy_threshold');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbTargetGroupHealthCheck;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbTargetGroupHealthCheck = DataAwsAlbTargetGroupHealthCheck;
var DataAwsAlbTargetGroupStickiness = /** @class */ (function (_super) {
    __extends(DataAwsAlbTargetGroupStickiness, _super);
    function DataAwsAlbTargetGroupStickiness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbTargetGroupStickiness.prototype, "cookieDuration", {
        // cookie_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cookie_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupStickiness.prototype, "cookieName", {
        // cookie_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cookie_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupStickiness.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroupStickiness.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbTargetGroupStickiness;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbTargetGroupStickiness = DataAwsAlbTargetGroupStickiness;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html aws_alb_target_group}
*/
var DataAwsAlbTargetGroup = /** @class */ (function (_super) {
    __extends(DataAwsAlbTargetGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html aws_alb_target_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbTargetGroupConfig = {}
    */
    function DataAwsAlbTargetGroup(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_alb_target_group',
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
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "arn", {
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
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "arnSuffix", {
        // arn_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "deregistrationDelay", {
        // deregistration_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('deregistration_delay');
        },
        enumerable: false,
        configurable: true
    });
    // health_check - computed: true, optional: false, required: false
    DataAwsAlbTargetGroup.prototype.healthCheck = function (index) {
        return new DataAwsAlbTargetGroupHealthCheck(this, 'health_check', index);
    };
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "lambdaMultiValueHeadersEnabled", {
        // lambda_multi_value_headers_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "loadBalancingAlgorithmType", {
        // load_balancing_algorithm_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('load_balancing_algorithm_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAlbTargetGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "preserveClientIp", {
        // preserve_client_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preserve_client_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "protocolVersion", {
        // protocol_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "proxyProtocolV2", {
        // proxy_protocol_v2 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxy_protocol_v2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "slowStart", {
        // slow_start - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('slow_start');
        },
        enumerable: false,
        configurable: true
    });
    // stickiness - computed: true, optional: false, required: false
    DataAwsAlbTargetGroup.prototype.stickiness = function (index) {
        return new DataAwsAlbTargetGroupStickiness(this, 'stickiness', index);
    };
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAlbTargetGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "targetType", {
        // target_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbTargetGroup.prototype, "vpcId", {
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
    DataAwsAlbTargetGroup.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAlbTargetGroup.tfResourceType = "aws_alb_target_group";
    return DataAwsAlbTargetGroup;
}(cdktf.TerraformDataSource));
exports.DataAwsAlbTargetGroup = DataAwsAlbTargetGroup;
