"use strict";
// https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html
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
exports.AutoscalingAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html aws_autoscaling_attachment}
*/
var AutoscalingAttachment = /** @class */ (function (_super) {
    __extends(AutoscalingAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html aws_autoscaling_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingAttachmentConfig
    */
    function AutoscalingAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._albTargetGroupArn = config.albTargetGroupArn;
        _this._autoscalingGroupName = config.autoscalingGroupName;
        _this._elb = config.elb;
        return _this;
    }
    Object.defineProperty(AutoscalingAttachment.prototype, "albTargetGroupArn", {
        get: function () {
            return this.getStringAttribute('alb_target_group_arn');
        },
        set: function (value) {
            this._albTargetGroupArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingAttachment.prototype.resetAlbTargetGroupArn = function () {
        this._albTargetGroupArn = undefined;
    };
    Object.defineProperty(AutoscalingAttachment.prototype, "albTargetGroupArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._albTargetGroupArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingAttachment.prototype, "autoscalingGroupName", {
        get: function () {
            return this.getStringAttribute('autoscaling_group_name');
        },
        set: function (value) {
            this._autoscalingGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingAttachment.prototype, "autoscalingGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoscalingGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingAttachment.prototype, "elb", {
        get: function () {
            return this.getStringAttribute('elb');
        },
        set: function (value) {
            this._elb = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingAttachment.prototype.resetElb = function () {
        this._elb = undefined;
    };
    Object.defineProperty(AutoscalingAttachment.prototype, "elbInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingAttachment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AutoscalingAttachment.prototype.synthesizeAttributes = function () {
        return {
            alb_target_group_arn: cdktf.stringToTerraform(this._albTargetGroupArn),
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            elb: cdktf.stringToTerraform(this._elb)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AutoscalingAttachment.tfResourceType = "aws_autoscaling_attachment";
    return AutoscalingAttachment;
}(cdktf.TerraformResource));
exports.AutoscalingAttachment = AutoscalingAttachment;
