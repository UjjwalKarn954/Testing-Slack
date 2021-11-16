"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html
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
exports.CloudfrontMonitoringSubscription = void 0;
var cdktf = require("cdktf");
function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        realtime_metrics_subscription_status: cdktf.stringToTerraform(struct.realtimeMetricsSubscriptionStatus)
    };
}
function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        realtime_metrics_subscription_config: cdktf.listMapper(cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform)(struct.realtimeMetricsSubscriptionConfig)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription}
*/
var CloudfrontMonitoringSubscription = /** @class */ (function (_super) {
    __extends(CloudfrontMonitoringSubscription, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontMonitoringSubscriptionConfig
    */
    function CloudfrontMonitoringSubscription(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_monitoring_subscription',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._distributionId = config.distributionId;
        _this._monitoringSubscription = config.monitoringSubscription;
        return _this;
    }
    Object.defineProperty(CloudfrontMonitoringSubscription.prototype, "distributionId", {
        get: function () {
            return this.getStringAttribute('distribution_id');
        },
        set: function (value) {
            this._distributionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontMonitoringSubscription.prototype, "distributionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._distributionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontMonitoringSubscription.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontMonitoringSubscription.prototype, "monitoringSubscription", {
        get: function () {
            return this.interpolationForAttribute('monitoring_subscription');
        },
        set: function (value) {
            this._monitoringSubscription = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontMonitoringSubscription.prototype, "monitoringSubscriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitoringSubscription;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontMonitoringSubscription.prototype.synthesizeAttributes = function () {
        return {
            distribution_id: cdktf.stringToTerraform(this._distributionId),
            monitoring_subscription: cdktf.listMapper(cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform)(this._monitoringSubscription)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontMonitoringSubscription.tfResourceType = "aws_cloudfront_monitoring_subscription";
    return CloudfrontMonitoringSubscription;
}(cdktf.TerraformResource));
exports.CloudfrontMonitoringSubscription = CloudfrontMonitoringSubscription;
