"use strict";
// https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html
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
exports.AlbTargetGroupAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html aws_alb_target_group_attachment}
*/
var AlbTargetGroupAttachment = /** @class */ (function (_super) {
    __extends(AlbTargetGroupAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html aws_alb_target_group_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbTargetGroupAttachmentConfig
    */
    function AlbTargetGroupAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_alb_target_group_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._port = config.port;
        _this._targetGroupArn = config.targetGroupArn;
        _this._targetId = config.targetId;
        return _this;
    }
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbTargetGroupAttachment.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbTargetGroupAttachment.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "targetGroupArn", {
        get: function () {
            return this.getStringAttribute('target_group_arn');
        },
        set: function (value) {
            this._targetGroupArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "targetGroupArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetGroupArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "targetId", {
        get: function () {
            return this.getStringAttribute('target_id');
        },
        set: function (value) {
            this._targetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbTargetGroupAttachment.prototype, "targetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AlbTargetGroupAttachment.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            port: cdktf.numberToTerraform(this._port),
            target_group_arn: cdktf.stringToTerraform(this._targetGroupArn),
            target_id: cdktf.stringToTerraform(this._targetId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AlbTargetGroupAttachment.tfResourceType = "aws_alb_target_group_attachment";
    return AlbTargetGroupAttachment;
}(cdktf.TerraformResource));
exports.AlbTargetGroupAttachment = AlbTargetGroupAttachment;
