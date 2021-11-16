"use strict";
// https://www.terraform.io/docs/providers/aws/r/volume_attachment.html
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
exports.VolumeAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment}
*/
var VolumeAttachment = /** @class */ (function (_super) {
    __extends(VolumeAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VolumeAttachmentConfig
    */
    function VolumeAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_volume_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deviceName = config.deviceName;
        _this._forceDetach = config.forceDetach;
        _this._instanceId = config.instanceId;
        _this._skipDestroy = config.skipDestroy;
        _this._stopInstanceBeforeDetaching = config.stopInstanceBeforeDetaching;
        _this._volumeId = config.volumeId;
        return _this;
    }
    Object.defineProperty(VolumeAttachment.prototype, "deviceName", {
        get: function () {
            return this.getStringAttribute('device_name');
        },
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "deviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "forceDetach", {
        get: function () {
            return this.getBooleanAttribute('force_detach');
        },
        set: function (value) {
            this._forceDetach = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeAttachment.prototype.resetForceDetach = function () {
        this._forceDetach = undefined;
    };
    Object.defineProperty(VolumeAttachment.prototype, "forceDetachInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDetach;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "skipDestroy", {
        get: function () {
            return this.getBooleanAttribute('skip_destroy');
        },
        set: function (value) {
            this._skipDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeAttachment.prototype.resetSkipDestroy = function () {
        this._skipDestroy = undefined;
    };
    Object.defineProperty(VolumeAttachment.prototype, "skipDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "stopInstanceBeforeDetaching", {
        get: function () {
            return this.getBooleanAttribute('stop_instance_before_detaching');
        },
        set: function (value) {
            this._stopInstanceBeforeDetaching = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeAttachment.prototype.resetStopInstanceBeforeDetaching = function () {
        this._stopInstanceBeforeDetaching = undefined;
    };
    Object.defineProperty(VolumeAttachment.prototype, "stopInstanceBeforeDetachingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stopInstanceBeforeDetaching;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "volumeId", {
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        set: function (value) {
            this._volumeId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeAttachment.prototype, "volumeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VolumeAttachment.prototype.synthesizeAttributes = function () {
        return {
            device_name: cdktf.stringToTerraform(this._deviceName),
            force_detach: cdktf.booleanToTerraform(this._forceDetach),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
            stop_instance_before_detaching: cdktf.booleanToTerraform(this._stopInstanceBeforeDetaching),
            volume_id: cdktf.stringToTerraform(this._volumeId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VolumeAttachment.tfResourceType = "aws_volume_attachment";
    return VolumeAttachment;
}(cdktf.TerraformResource));
exports.VolumeAttachment = VolumeAttachment;
