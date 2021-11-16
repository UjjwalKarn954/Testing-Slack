"use strict";
// https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html
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
exports.AutoscalingLifecycleHook = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html aws_autoscaling_lifecycle_hook}
*/
var AutoscalingLifecycleHook = /** @class */ (function (_super) {
    __extends(AutoscalingLifecycleHook, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html aws_autoscaling_lifecycle_hook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingLifecycleHookConfig
    */
    function AutoscalingLifecycleHook(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_lifecycle_hook',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoscalingGroupName = config.autoscalingGroupName;
        _this._defaultResult = config.defaultResult;
        _this._heartbeatTimeout = config.heartbeatTimeout;
        _this._lifecycleTransition = config.lifecycleTransition;
        _this._name = config.name;
        _this._notificationMetadata = config.notificationMetadata;
        _this._notificationTargetArn = config.notificationTargetArn;
        _this._roleArn = config.roleArn;
        return _this;
    }
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "autoscalingGroupName", {
        get: function () {
            return this.getStringAttribute('autoscaling_group_name');
        },
        set: function (value) {
            this._autoscalingGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "autoscalingGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoscalingGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "defaultResult", {
        get: function () {
            return this.getStringAttribute('default_result');
        },
        set: function (value) {
            this._defaultResult = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingLifecycleHook.prototype.resetDefaultResult = function () {
        this._defaultResult = undefined;
    };
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "defaultResultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "heartbeatTimeout", {
        get: function () {
            return this.getNumberAttribute('heartbeat_timeout');
        },
        set: function (value) {
            this._heartbeatTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingLifecycleHook.prototype.resetHeartbeatTimeout = function () {
        this._heartbeatTimeout = undefined;
    };
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "heartbeatTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._heartbeatTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "lifecycleTransition", {
        get: function () {
            return this.getStringAttribute('lifecycle_transition');
        },
        set: function (value) {
            this._lifecycleTransition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "lifecycleTransitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lifecycleTransition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "notificationMetadata", {
        get: function () {
            return this.getStringAttribute('notification_metadata');
        },
        set: function (value) {
            this._notificationMetadata = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingLifecycleHook.prototype.resetNotificationMetadata = function () {
        this._notificationMetadata = undefined;
    };
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "notificationMetadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "notificationTargetArn", {
        get: function () {
            return this.getStringAttribute('notification_target_arn');
        },
        set: function (value) {
            this._notificationTargetArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingLifecycleHook.prototype.resetNotificationTargetArn = function () {
        this._notificationTargetArn = undefined;
    };
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "notificationTargetArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationTargetArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingLifecycleHook.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(AutoscalingLifecycleHook.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AutoscalingLifecycleHook.prototype.synthesizeAttributes = function () {
        return {
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            default_result: cdktf.stringToTerraform(this._defaultResult),
            heartbeat_timeout: cdktf.numberToTerraform(this._heartbeatTimeout),
            lifecycle_transition: cdktf.stringToTerraform(this._lifecycleTransition),
            name: cdktf.stringToTerraform(this._name),
            notification_metadata: cdktf.stringToTerraform(this._notificationMetadata),
            notification_target_arn: cdktf.stringToTerraform(this._notificationTargetArn),
            role_arn: cdktf.stringToTerraform(this._roleArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AutoscalingLifecycleHook.tfResourceType = "aws_autoscaling_lifecycle_hook";
    return AutoscalingLifecycleHook;
}(cdktf.TerraformResource));
exports.AutoscalingLifecycleHook = AutoscalingLifecycleHook;
