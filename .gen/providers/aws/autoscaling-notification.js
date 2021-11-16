"use strict";
// https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html
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
exports.AutoscalingNotification = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html aws_autoscaling_notification}
*/
var AutoscalingNotification = /** @class */ (function (_super) {
    __extends(AutoscalingNotification, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html aws_autoscaling_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingNotificationConfig
    */
    function AutoscalingNotification(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_notification',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._groupNames = config.groupNames;
        _this._notifications = config.notifications;
        _this._topicArn = config.topicArn;
        return _this;
    }
    Object.defineProperty(AutoscalingNotification.prototype, "groupNames", {
        get: function () {
            return this.getListAttribute('group_names');
        },
        set: function (value) {
            this._groupNames = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingNotification.prototype, "groupNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingNotification.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingNotification.prototype, "notifications", {
        get: function () {
            return this.getListAttribute('notifications');
        },
        set: function (value) {
            this._notifications = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingNotification.prototype, "notificationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notifications;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingNotification.prototype, "topicArn", {
        get: function () {
            return this.getStringAttribute('topic_arn');
        },
        set: function (value) {
            this._topicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingNotification.prototype, "topicArnInput", {
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
    AutoscalingNotification.prototype.synthesizeAttributes = function () {
        return {
            group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._groupNames),
            notifications: cdktf.listMapper(cdktf.stringToTerraform)(this._notifications),
            topic_arn: cdktf.stringToTerraform(this._topicArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AutoscalingNotification.tfResourceType = "aws_autoscaling_notification";
    return AutoscalingNotification;
}(cdktf.TerraformResource));
exports.AutoscalingNotification = AutoscalingNotification;
