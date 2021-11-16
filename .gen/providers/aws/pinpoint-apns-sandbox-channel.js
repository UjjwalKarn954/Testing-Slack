"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html
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
exports.PinpointApnsSandboxChannel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html aws_pinpoint_apns_sandbox_channel}
*/
var PinpointApnsSandboxChannel = /** @class */ (function (_super) {
    __extends(PinpointApnsSandboxChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html aws_pinpoint_apns_sandbox_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsSandboxChannelConfig
    */
    function PinpointApnsSandboxChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_apns_sandbox_channel',
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
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "bundleId", {
        get: function () {
            return this.getStringAttribute('bundle_id');
        },
        set: function (value) {
            this._bundleId = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsSandboxChannel.prototype.resetBundleId = function () {
        this._bundleId = undefined;
    };
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "bundleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bundleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsSandboxChannel.prototype.resetCertificate = function () {
        this._certificate = undefined;
    };
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "defaultAuthenticationMethod", {
        get: function () {
            return this.getStringAttribute('default_authentication_method');
        },
        set: function (value) {
            this._defaultAuthenticationMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsSandboxChannel.prototype.resetDefaultAuthenticationMethod = function () {
        this._defaultAuthenticationMethod = undefined;
    };
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "defaultAuthenticationMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultAuthenticationMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsSandboxChannel.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "privateKey", {
        get: function () {
            return this.getStringAttribute('private_key');
        },
        set: function (value) {
            this._privateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsSandboxChannel.prototype.resetPrivateKey = function () {
        this._privateKey = undefined;
    };
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "privateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "teamId", {
        get: function () {
            return this.getStringAttribute('team_id');
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsSandboxChannel.prototype.resetTeamId = function () {
        this._teamId = undefined;
    };
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "teamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "tokenKey", {
        get: function () {
            return this.getStringAttribute('token_key');
        },
        set: function (value) {
            this._tokenKey = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsSandboxChannel.prototype.resetTokenKey = function () {
        this._tokenKey = undefined;
    };
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "tokenKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "tokenKeyId", {
        get: function () {
            return this.getStringAttribute('token_key_id');
        },
        set: function (value) {
            this._tokenKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApnsSandboxChannel.prototype.resetTokenKeyId = function () {
        this._tokenKeyId = undefined;
    };
    Object.defineProperty(PinpointApnsSandboxChannel.prototype, "tokenKeyIdInput", {
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
    PinpointApnsSandboxChannel.prototype.synthesizeAttributes = function () {
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
    PinpointApnsSandboxChannel.tfResourceType = "aws_pinpoint_apns_sandbox_channel";
    return PinpointApnsSandboxChannel;
}(cdktf.TerraformResource));
exports.PinpointApnsSandboxChannel = PinpointApnsSandboxChannel;
