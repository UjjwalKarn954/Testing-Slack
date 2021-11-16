"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html
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
exports.PinpointApnsChannel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html aws_pinpoint_apns_channel}
*/
var PinpointApnsChannel = /** @class */ (function (_super) {
    __extends(PinpointApnsChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html aws_pinpoint_apns_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsChannelConfig
    */
    function PinpointApnsChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_apns_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._bundleId = config.bundleId;
        _this._certificate = config.certificate;
        _this._defaultAuthenticationMethod = config.defaultAuthenticationMethod;
        _this._enabled = config.enabled;
        _this._privateKey = config.privateKey;
        _this._teamId = config.teamId;
        _this._tokenKey = config.tokenKey;
        _this._tokenKeyId = config.tokenKeyId;
        return _this;
    }
    Object.defineProperty(PinpointApnsChannel.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "bundleId", {
        get: function () {
            return this.getStringAttribute('bundle_id');
        },
        set: function (value) {
            this._bundleId = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsChannel.prototype.resetBundleId = function () {
        this._bundleId = undefined;
    };
    Object.defineProperty(PinpointApnsChannel.prototype, "bundleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bundleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsChannel.prototype.resetCertificate = function () {
        this._certificate = undefined;
    };
    Object.defineProperty(PinpointApnsChannel.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "defaultAuthenticationMethod", {
        get: function () {
            return this.getStringAttribute('default_authentication_method');
        },
        set: function (value) {
            this._defaultAuthenticationMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsChannel.prototype.resetDefaultAuthenticationMethod = function () {
        this._defaultAuthenticationMethod = undefined;
    };
    Object.defineProperty(PinpointApnsChannel.prototype, "defaultAuthenticationMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultAuthenticationMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsChannel.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(PinpointApnsChannel.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "privateKey", {
        get: function () {
            return this.getStringAttribute('private_key');
        },
        set: function (value) {
            this._privateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsChannel.prototype.resetPrivateKey = function () {
        this._privateKey = undefined;
    };
    Object.defineProperty(PinpointApnsChannel.prototype, "privateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "teamId", {
        get: function () {
            return this.getStringAttribute('team_id');
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsChannel.prototype.resetTeamId = function () {
        this._teamId = undefined;
    };
    Object.defineProperty(PinpointApnsChannel.prototype, "teamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "tokenKey", {
        get: function () {
            return this.getStringAttribute('token_key');
        },
        set: function (value) {
            this._tokenKey = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsChannel.prototype.resetTokenKey = function () {
        this._tokenKey = undefined;
    };
    Object.defineProperty(PinpointApnsChannel.prototype, "tokenKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsChannel.prototype, "tokenKeyId", {
        get: function () {
            return this.getStringAttribute('token_key_id');
        },
        set: function (value) {
            this._tokenKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsChannel.prototype.resetTokenKeyId = function () {
        this._tokenKeyId = undefined;
    };
    Object.defineProperty(PinpointApnsChannel.prototype, "tokenKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenKeyId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PinpointApnsChannel.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            bundle_id: cdktf.stringToTerraform(this._bundleId),
            certificate: cdktf.stringToTerraform(this._certificate),
            default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
            enabled: cdktf.booleanToTerraform(this._enabled),
            private_key: cdktf.stringToTerraform(this._privateKey),
            team_id: cdktf.stringToTerraform(this._teamId),
            token_key: cdktf.stringToTerraform(this._tokenKey),
            token_key_id: cdktf.stringToTerraform(this._tokenKeyId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PinpointApnsChannel.tfResourceType = "aws_pinpoint_apns_channel";
    return PinpointApnsChannel;
}(cdktf.TerraformResource));
exports.PinpointApnsChannel = PinpointApnsChannel;