"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html
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
exports.SesIdentityNotificationTopic = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html aws_ses_identity_notification_topic}
*/
var SesIdentityNotificationTopic = /** @class */ (function (_super) {
    __extends(SesIdentityNotificationTopic, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html aws_ses_identity_notification_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesIdentityNotificationTopicConfig
    */
    function SesIdentityNotificationTopic(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_identity_notification_topic',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._identity = config.identity;
        _this._includeOriginalHeaders = config.includeOriginalHeaders;
        _this._notificationType = config.notificationType;
        _this._topicArn = config.topicArn;
        return _this;
    }
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "identity", {
        get: function () {
            return this.getStringAttribute('identity');
        },
        set: function (value) {
            this._identity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "identityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "includeOriginalHeaders", {
        get: function () {
            return this.getBooleanAttribute('include_original_headers');
        },
        set: function (value) {
            this._includeOriginalHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    SesIdentityNotificationTopic.prototype.resetIncludeOriginalHeaders = function () {
        this._includeOriginalHeaders = undefined;
    };
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "includeOriginalHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeOriginalHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "notificationType", {
        get: function () {
            return this.getStringAttribute('notification_type');
        },
        set: function (value) {
            this._notificationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "notificationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "topicArn", {
        get: function () {
            return this.getStringAttribute('topic_arn');
        },
        set: function (value) {
            this._topicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SesIdentityNotificationTopic.prototype.resetTopicArn = function () {
        this._topicArn = undefined;
    };
    Object.defineProperty(SesIdentityNotificationTopic.prototype, "topicArnInput", {
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
    SesIdentityNotificationTopic.prototype.synthesizeAttributes = function () {
        return {
            identity: cdktf.stringToTerraform(this._identity),
            include_original_headers: cdktf.booleanToTerraform(this._includeOriginalHeaders),
            notification_type: cdktf.stringToTerraform(this._notificationType),
            topic_arn: cdktf.stringToTerraform(this._topicArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesIdentityNotificationTopic.tfResourceType = "aws_ses_identity_notification_topic";
    return SesIdentityNotificationTopic;
}(cdktf.TerraformResource));
exports.SesIdentityNotificationTopic = SesIdentityNotificationTopic;
