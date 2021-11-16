"use strict";
// https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html
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
exports.SnsPlatformApplication = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application}
*/
var SnsPlatformApplication = /** @class */ (function (_super) {
    __extends(SnsPlatformApplication, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsPlatformApplicationConfig
    */
    function SnsPlatformApplication(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sns_platform_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._eventDeliveryFailureTopicArn = config.eventDeliveryFailureTopicArn;
        _this._eventEndpointCreatedTopicArn = config.eventEndpointCreatedTopicArn;
        _this._eventEndpointDeletedTopicArn = config.eventEndpointDeletedTopicArn;
        _this._eventEndpointUpdatedTopicArn = config.eventEndpointUpdatedTopicArn;
        _this._failureFeedbackRoleArn = config.failureFeedbackRoleArn;
        _this._name = config.name;
        _this._platform = config.platform;
        _this._platformCredential = config.platformCredential;
        _this._platformPrincipal = config.platformPrincipal;
        _this._successFeedbackRoleArn = config.successFeedbackRoleArn;
        _this._successFeedbackSampleRate = config.successFeedbackSampleRate;
        return _this;
    }
    Object.defineProperty(SnsPlatformApplication.prototype, "arn", {
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
    Object.defineProperty(SnsPlatformApplication.prototype, "eventDeliveryFailureTopicArn", {
        get: function () {
            return this.getStringAttribute('event_delivery_failure_topic_arn');
        },
        set: function (value) {
            this._eventDeliveryFailureTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsPlatformApplication.prototype.resetEventDeliveryFailureTopicArn = function () {
        this._eventDeliveryFailureTopicArn = undefined;
    };
    Object.defineProperty(SnsPlatformApplication.prototype, "eventDeliveryFailureTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventDeliveryFailureTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "eventEndpointCreatedTopicArn", {
        get: function () {
            return this.getStringAttribute('event_endpoint_created_topic_arn');
        },
        set: function (value) {
            this._eventEndpointCreatedTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsPlatformApplication.prototype.resetEventEndpointCreatedTopicArn = function () {
        this._eventEndpointCreatedTopicArn = undefined;
    };
    Object.defineProperty(SnsPlatformApplication.prototype, "eventEndpointCreatedTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventEndpointCreatedTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "eventEndpointDeletedTopicArn", {
        get: function () {
            return this.getStringAttribute('event_endpoint_deleted_topic_arn');
        },
        set: function (value) {
            this._eventEndpointDeletedTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsPlatformApplication.prototype.resetEventEndpointDeletedTopicArn = function () {
        this._eventEndpointDeletedTopicArn = undefined;
    };
    Object.defineProperty(SnsPlatformApplication.prototype, "eventEndpointDeletedTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventEndpointDeletedTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "eventEndpointUpdatedTopicArn", {
        get: function () {
            return this.getStringAttribute('event_endpoint_updated_topic_arn');
        },
        set: function (value) {
            this._eventEndpointUpdatedTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsPlatformApplication.prototype.resetEventEndpointUpdatedTopicArn = function () {
        this._eventEndpointUpdatedTopicArn = undefined;
    };
    Object.defineProperty(SnsPlatformApplication.prototype, "eventEndpointUpdatedTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventEndpointUpdatedTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "failureFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('failure_feedback_role_arn');
        },
        set: function (value) {
            this._failureFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsPlatformApplication.prototype.resetFailureFeedbackRoleArn = function () {
        this._failureFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsPlatformApplication.prototype, "failureFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failureFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "platform", {
        get: function () {
            return this.getStringAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "platformCredential", {
        get: function () {
            return this.getStringAttribute('platform_credential');
        },
        set: function (value) {
            this._platformCredential = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "platformCredentialInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platformCredential;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "platformPrincipal", {
        get: function () {
            return this.getStringAttribute('platform_principal');
        },
        set: function (value) {
            this._platformPrincipal = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsPlatformApplication.prototype.resetPlatformPrincipal = function () {
        this._platformPrincipal = undefined;
    };
    Object.defineProperty(SnsPlatformApplication.prototype, "platformPrincipalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platformPrincipal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "successFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('success_feedback_role_arn');
        },
        set: function (value) {
            this._successFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsPlatformApplication.prototype.resetSuccessFeedbackRoleArn = function () {
        this._successFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsPlatformApplication.prototype, "successFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._successFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsPlatformApplication.prototype, "successFeedbackSampleRate", {
        get: function () {
            return this.getStringAttribute('success_feedback_sample_rate');
        },
        set: function (value) {
            this._successFeedbackSampleRate = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsPlatformApplication.prototype.resetSuccessFeedbackSampleRate = function () {
        this._successFeedbackSampleRate = undefined;
    };
    Object.defineProperty(SnsPlatformApplication.prototype, "successFeedbackSampleRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._successFeedbackSampleRate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SnsPlatformApplication.prototype.synthesizeAttributes = function () {
        return {
            event_delivery_failure_topic_arn: cdktf.stringToTerraform(this._eventDeliveryFailureTopicArn),
            event_endpoint_created_topic_arn: cdktf.stringToTerraform(this._eventEndpointCreatedTopicArn),
            event_endpoint_deleted_topic_arn: cdktf.stringToTerraform(this._eventEndpointDeletedTopicArn),
            event_endpoint_updated_topic_arn: cdktf.stringToTerraform(this._eventEndpointUpdatedTopicArn),
            failure_feedback_role_arn: cdktf.stringToTerraform(this._failureFeedbackRoleArn),
            name: cdktf.stringToTerraform(this._name),
            platform: cdktf.stringToTerraform(this._platform),
            platform_credential: cdktf.stringToTerraform(this._platformCredential),
            platform_principal: cdktf.stringToTerraform(this._platformPrincipal),
            success_feedback_role_arn: cdktf.stringToTerraform(this._successFeedbackRoleArn),
            success_feedback_sample_rate: cdktf.stringToTerraform(this._successFeedbackSampleRate)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SnsPlatformApplication.tfResourceType = "aws_sns_platform_application";
    return SnsPlatformApplication;
}(cdktf.TerraformResource));
exports.SnsPlatformApplication = SnsPlatformApplication;
