"use strict";
// https://www.terraform.io/docs/providers/aws/r/lb_target_group.html
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
exports.LbTargetGroup = void 0;
var cdktf = require("cdktf");
function lbTargetGroupHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval: cdktf.numberToTerraform(struct.interval),
        matcher: cdktf.stringToTerraform(struct.matcher),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.stringToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout: cdktf.numberToTerraform(struct.timeout),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold)
    };
}
function lbTargetGroupStickinessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cookie_duration: cdktf.numberToTerraform(struct.cookieDuration),
        cookie_name: cdktf.stringToTerraform(struct.cookieName),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group}
*/
var LbTargetGroup = /** @class */ (function (_super) {
    __extends(LbTargetGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbTargetGroupConfig = {}
    */
    function LbTargetGroup(scope, id, config) {
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
        _this._deregistrationDelay = config.deregistrationDelay;
        _this._lambdaMultiValueHeadersEnabled = config.lambdaMultiValueHeadersEnabled;
        _this._loadBalancingAlgorithmType = config.loadBalancingAlgorithmType;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._port = config.port;
        _this._preserveClientIp = config.preserveClientIp;
        _this._protocol = config.protocol;
        _this._protocolVersion = config.protocolVersion;
        _this._proxyProtocolV2 = config.proxyProtocolV2;
        _this._slowStart = config.slowStart;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetType = config.targetType;
        _this._vpcId = config.vpcId;
        _this._healthCheck = config.healthCheck;
        _this._stickiness = config.stickiness;
        return _this;
    }
    Object.defineProperty(LbTargetGroup.prototype, "arn", {
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
    Object.defineProperty(LbTargetGroup.prototype, "arnSuffix", {
        // arn_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "deregistrationDelay", {
        get: function () {
            return this.getStringAttribute('deregistration_delay');
        },
        set: function (value) {
            this._deregistrationDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetDeregistrationDelay = function () {
        this._deregistrationDelay = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "deregistrationDelayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deregistrationDelay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "lambdaMultiValueHeadersEnabled", {
        get: function () {
            return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
        },
        set: function (value) {
            this._lambdaMultiValueHeadersEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetLambdaMultiValueHeadersEnabled = function () {
        this._lambdaMultiValueHeadersEnabled = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "lambdaMultiValueHeadersEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaMultiValueHeadersEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "loadBalancingAlgorithmType", {
        get: function () {
            return this.getStringAttribute('load_balancing_algorithm_type');
        },
        set: function (value) {
            this._loadBalancingAlgorithmType = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetLoadBalancingAlgorithmType = function () {
        this._loadBalancingAlgorithmType = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "loadBalancingAlgorithmTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancingAlgorithmType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "preserveClientIp", {
        get: function () {
            return this.getStringAttribute('preserve_client_ip');
        },
        set: function (value) {
            this._preserveClientIp = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetPreserveClientIp = function () {
        this._preserveClientIp = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "preserveClientIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preserveClientIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetProtocol = function () {
        this._protocol = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "protocolVersion", {
        get: function () {
            return this.getStringAttribute('protocol_version');
        },
        set: function (value) {
            this._protocolVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetProtocolVersion = function () {
        this._protocolVersion = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "protocolVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocolVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "proxyProtocolV2", {
        get: function () {
            return this.getBooleanAttribute('proxy_protocol_v2');
        },
        set: function (value) {
            this._proxyProtocolV2 = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetProxyProtocolV2 = function () {
        this._proxyProtocolV2 = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "proxyProtocolV2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxyProtocolV2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "slowStart", {
        get: function () {
            return this.getNumberAttribute('slow_start');
        },
        set: function (value) {
            this._slowStart = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetSlowStart = function () {
        this._slowStart = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "slowStartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slowStart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "targetType", {
        get: function () {
            return this.getStringAttribute('target_type');
        },
        set: function (value) {
            this._targetType = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetTargetType = function () {
        this._targetType = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "targetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "healthCheck", {
        get: function () {
            return this.interpolationForAttribute('health_check');
        },
        set: function (value) {
            this._healthCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetHealthCheck = function () {
        this._healthCheck = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "healthCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbTargetGroup.prototype, "stickiness", {
        get: function () {
            return this.interpolationForAttribute('stickiness');
        },
        set: function (value) {
            this._stickiness = value;
        },
        enumerable: false,
        configurable: true
    });
    LbTargetGroup.prototype.resetStickiness = function () {
        this._stickiness = undefined;
    };
    Object.defineProperty(LbTargetGroup.prototype, "stickinessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stickiness;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LbTargetGroup.prototype.synthesizeAttributes = function () {
        return {
            deregistration_delay: cdktf.stringToTerraform(this._deregistrationDelay),
            lambda_multi_value_headers_enabled: cdktf.booleanToTerraform(this._lambdaMultiValueHeadersEnabled),
            load_balancing_algorithm_type: cdktf.stringToTerraform(this._loadBalancingAlgorithmType),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            port: cdktf.numberToTerraform(this._port),
            preserve_client_ip: cdktf.stringToTerraform(this._preserveClientIp),
            protocol: cdktf.stringToTerraform(this._protocol),
            protocol_version: cdktf.stringToTerraform(this._protocolVersion),
            proxy_protocol_v2: cdktf.booleanToTerraform(this._proxyProtocolV2),
            slow_start: cdktf.numberToTerraform(this._slowStart),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_type: cdktf.stringToTerraform(this._targetType),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            health_check: cdktf.listMapper(lbTargetGroupHealthCheckToTerraform)(this._healthCheck),
            stickiness: cdktf.listMapper(lbTargetGroupStickinessToTerraform)(this._stickiness)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LbTargetGroup.tfResourceType = "aws_lb_target_group";
    return LbTargetGroup;
}(cdktf.TerraformResource));
exports.LbTargetGroup = LbTargetGroup;
