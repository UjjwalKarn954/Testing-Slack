"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html
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
exports.PinpointAdmChannel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html aws_pinpoint_adm_channel}
*/
var PinpointAdmChannel = /** @class */ (function (_super) {
    __extends(PinpointAdmChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html aws_pinpoint_adm_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointAdmChannelConfig
    */
    function PinpointAdmChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_adm_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._clientId = config.clientId;
        _this._clientSecret = config.clientSecret;
        _this._enabled = config.enabled;
        return _this;
    }
    Object.defineProperty(PinpointAdmChannel.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointAdmChannel.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointAdmChannel.prototype, "clientId", {
        get: function () {
            return this.getStringAttribute('client_id');
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointAdmChannel.prototype, "clientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointAdmChannel.prototype, "clientSecret", {
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        set: function (value) {
            this._clientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointAdmChannel.prototype, "clientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointAdmChannel.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointAdmChannel.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(PinpointAdmChannel.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointAdmChannel.prototype, "id", {
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
    PinpointAdmChannel.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            client_id: cdktf.stringToTerraform(this._clientId),
            client_secret: cdktf.stringToTerraform(this._clientSecret),
            enabled: cdktf.booleanToTerraform(this._enabled)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PinpointAdmChannel.tfResourceType = "aws_pinpoint_adm_channel";
    return PinpointAdmChannel;
}(cdktf.TerraformResource));
exports.PinpointAdmChannel = PinpointAdmChannel;
