"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html
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
exports.PinpointSmsChannel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html aws_pinpoint_sms_channel}
*/
var PinpointSmsChannel = /** @class */ (function (_super) {
    __extends(PinpointSmsChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html aws_pinpoint_sms_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointSmsChannelConfig
    */
    function PinpointSmsChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_sms_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._enabled = config.enabled;
        _this._senderId = config.senderId;
        _this._shortCode = config.shortCode;
        return _this;
    }
    Object.defineProperty(PinpointSmsChannel.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointSmsChannel.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointSmsChannel.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointSmsChannel.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(PinpointSmsChannel.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointSmsChannel.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointSmsChannel.prototype, "promotionalMessagesPerSecond", {
        // promotional_messages_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('promotional_messages_per_second');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointSmsChannel.prototype, "senderId", {
        get: function () {
            return this.getStringAttribute('sender_id');
        },
        set: function (value) {
            this._senderId = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointSmsChannel.prototype.resetSenderId = function () {
        this._senderId = undefined;
    };
    Object.defineProperty(PinpointSmsChannel.prototype, "senderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._senderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointSmsChannel.prototype, "shortCode", {
        get: function () {
            return this.getStringAttribute('short_code');
        },
        set: function (value) {
            this._shortCode = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointSmsChannel.prototype.resetShortCode = function () {
        this._shortCode = undefined;
    };
    Object.defineProperty(PinpointSmsChannel.prototype, "shortCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shortCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointSmsChannel.prototype, "transactionalMessagesPerSecond", {
        // transactional_messages_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('transactional_messages_per_second');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PinpointSmsChannel.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            enabled: cdktf.booleanToTerraform(this._enabled),
            sender_id: cdktf.stringToTerraform(this._senderId),
            short_code: cdktf.stringToTerraform(this._shortCode)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PinpointSmsChannel.tfResourceType = "aws_pinpoint_sms_channel";
    return PinpointSmsChannel;
}(cdktf.TerraformResource));
exports.PinpointSmsChannel = PinpointSmsChannel;
