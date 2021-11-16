"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_query_log.html
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
exports.Route53QueryLog = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html aws_route53_query_log}
*/
var Route53QueryLog = /** @class */ (function (_super) {
    __extends(Route53QueryLog, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html aws_route53_query_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53QueryLogConfig
    */
    function Route53QueryLog(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_query_log',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
        _this._zoneId = config.zoneId;
        return _this;
    }
    Object.defineProperty(Route53QueryLog.prototype, "arn", {
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
    Object.defineProperty(Route53QueryLog.prototype, "cloudwatchLogGroupArn", {
        get: function () {
            return this.getStringAttribute('cloudwatch_log_group_arn');
        },
        set: function (value) {
            this._cloudwatchLogGroupArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53QueryLog.prototype, "cloudwatchLogGroupArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchLogGroupArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53QueryLog.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53QueryLog.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53QueryLog.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53QueryLog.prototype.synthesizeAttributes = function () {
        return {
            cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
            zone_id: cdktf.stringToTerraform(this._zoneId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53QueryLog.tfResourceType = "aws_route53_query_log";
    return Route53QueryLog;
}(cdktf.TerraformResource));
exports.Route53QueryLog = Route53QueryLog;
