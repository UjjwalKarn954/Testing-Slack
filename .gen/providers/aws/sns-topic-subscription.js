"use strict";
// https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html
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
exports.SnsTopicSubscription = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html aws_sns_topic_subscription}
*/
var SnsTopicSubscription = /** @class */ (function (_super) {
    __extends(SnsTopicSubscription, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html aws_sns_topic_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicSubscriptionConfig
    */
    function SnsTopicSubscription(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sns_topic_subscription',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._confirmationTimeoutInMinutes = config.confirmationTimeoutInMinutes;
        _this._deliveryPolicy = config.deliveryPolicy;
        _this._endpoint = config.endpoint;
        _this._endpointAutoConfirms = config.endpointAutoConfirms;
        _this._filterPolicy = config.filterPolicy;
        _this._protocol = config.protocol;
        _this._rawMessageDelivery = config.rawMessageDelivery;
        _this._redrivePolicy = config.redrivePolicy;
        _this._subscriptionRoleArn = config.subscriptionRoleArn;
        _this._topicArn = config.topicArn;
        return _this;
    }
    Object.defineProperty(SnsTopicSubscription.prototype, "arn", {
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
    Object.defineProperty(SnsTopicSubscription.prototype, "confirmationTimeoutInMinutes", {
        get: function () {
            return this.getNumberAttribute('confirmation_timeout_in_minutes');
        },
        set: function (value) {
            this._confirmationTimeoutInMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopicSubscription.prototype.resetConfirmationTimeoutInMinutes = function () {
        this._confirmationTimeoutInMinutes = undefined;
    };
    Object.defineProperty(SnsTopicSubscription.prototype, "confirmationTimeoutInMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._confirmationTimeoutInMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "confirmationWasAuthenticated", {
        // confirmation_was_authenticated - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('confirmation_was_authenticated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "deliveryPolicy", {
        get: function () {
            return this.getStringAttribute('delivery_policy');
        },
        set: function (value) {
            this._deliveryPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopicSubscription.prototype.resetDeliveryPolicy = function () {
        this._deliveryPolicy = undefined;
    };
    Object.defineProperty(SnsTopicSubscription.prototype, "deliveryPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "endpoint", {
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "endpointAutoConfirms", {
        get: function () {
            return this.getBooleanAttribute('endpoint_auto_confirms');
        },
        set: function (value) {
            this._endpointAutoConfirms = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopicSubscription.prototype.resetEndpointAutoConfirms = function () {
        this._endpointAutoConfirms = undefined;
    };
    Object.defineProperty(SnsTopicSubscription.prototype, "endpointAutoConfirmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointAutoConfirms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "filterPolicy", {
        get: function () {
            return this.getStringAttribute('filter_policy');
        },
        set: function (value) {
            this._filterPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopicSubscription.prototype.resetFilterPolicy = function () {
        this._filterPolicy = undefined;
    };
    Object.defineProperty(SnsTopicSubscription.prototype, "filterPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filterPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "pendingConfirmation", {
        // pending_confirmation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pending_confirmation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "rawMessageDelivery", {
        get: function () {
            return this.getBooleanAttribute('raw_message_delivery');
        },
        set: function (value) {
            this._rawMessageDelivery = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopicSubscription.prototype.resetRawMessageDelivery = function () {
        this._rawMessageDelivery = undefined;
    };
    Object.defineProperty(SnsTopicSubscription.prototype, "rawMessageDeliveryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rawMessageDelivery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "redrivePolicy", {
        get: function () {
            return this.getStringAttribute('redrive_policy');
        },
        set: function (value) {
            this._redrivePolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopicSubscription.prototype.resetRedrivePolicy = function () {
        this._redrivePolicy = undefined;
    };
    Object.defineProperty(SnsTopicSubscription.prototype, "redrivePolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redrivePolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "subscriptionRoleArn", {
        get: function () {
            return this.getStringAttribute('subscription_role_arn');
        },
        set: function (value) {
            this._subscriptionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopicSubscription.prototype.resetSubscriptionRoleArn = function () {
        this._subscriptionRoleArn = undefined;
    };
    Object.defineProperty(SnsTopicSubscription.prototype, "subscriptionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subscriptionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "topicArn", {
        get: function () {
            return this.getStringAttribute('topic_arn');
        },
        set: function (value) {
            this._topicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicSubscription.prototype, "topicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._topicArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SnsTopicSubscription.prototype.synthesizeAttributes = function () {
        return {
            confirmation_timeout_in_minutes: cdktf.numberToTerraform(this._confirmationTimeoutInMinutes),
            delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
            endpoint: cdktf.stringToTerraform(this._endpoint),
            endpoint_auto_confirms: cdktf.booleanToTerraform(this._endpointAutoConfirms),
            filter_policy: cdktf.stringToTerraform(this._filterPolicy),
            protocol: cdktf.stringToTerraform(this._protocol),
            raw_message_delivery: cdktf.booleanToTerraform(this._rawMessageDelivery),
            redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
            subscription_role_arn: cdktf.stringToTerraform(this._subscriptionRoleArn),
            topic_arn: cdktf.stringToTerraform(this._topicArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SnsTopicSubscription.tfResourceType = "aws_sns_topic_subscription";
    return SnsTopicSubscription;
}(cdktf.TerraformResource));
exports.SnsTopicSubscription = SnsTopicSubscription;
