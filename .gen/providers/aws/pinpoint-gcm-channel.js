"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html
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
exports.PinpointGcmChannel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html aws_pinpoint_gcm_channel}
*/
var PinpointGcmChannel = /** @class */ (function (_super) {
    __extends(PinpointGcmChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html aws_pinpoint_gcm_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointGcmChannelConfig
    */
    function PinpointGcmChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_gcm_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiKey = config.apiKey;
        _this._applicationId = config.applicationId;
        _this._enabled = config.enabled;
        return _this;
    }
    Object.defineProperty(PinpointGcmChannel.prototype, "apiKey", {
        get: function () {
            return this.getStringAttribute('api_key');
        },
        set: function (value) {
            this._apiKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointGcmChannel.prototype, "apiKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointGcmChannel.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointGcmChannel.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointGcmChannel.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointGcmChannel.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(PinpointGcmChannel.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointGcmChannel.prototype, "id", {
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
    PinpointGcmChannel.prototype.synthesizeAttributes = function () {
        return {
            api_key: cdktf.stringToTerraform(this._apiKey),
            application_id: cdktf.stringToTerraform(this._applicationId),
            enabled: cdktf.booleanToTerraform(this._enabled)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PinpointGcmChannel.tfResourceType = "aws_pinpoint_gcm_channel";
    return PinpointGcmChannel;
}(cdktf.TerraformResource));
exports.PinpointGcmChannel = PinpointGcmChannel;
