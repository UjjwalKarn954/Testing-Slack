"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html
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
exports.PinpointBaiduChannel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html aws_pinpoint_baidu_channel}
*/
var PinpointBaiduChannel = /** @class */ (function (_super) {
    __extends(PinpointBaiduChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html aws_pinpoint_baidu_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointBaiduChannelConfig
    */
    function PinpointBaiduChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_baidu_channel',
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
        _this._secretKey = config.secretKey;
        return _this;
    }
    Object.defineProperty(PinpointBaiduChannel.prototype, "apiKey", {
        get: function () {
            return this.getStringAttribute('api_key');
        },
        set: function (value) {
            this._apiKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointBaiduChannel.prototype, "apiKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointBaiduChannel.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointBaiduChannel.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointBaiduChannel.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointBaiduChannel.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(PinpointBaiduChannel.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointBaiduChannel.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointBaiduChannel.prototype, "secretKey", {
        get: function () {
            return this.getStringAttribute('secret_key');
        },
        set: function (value) {
            this._secretKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointBaiduChannel.prototype, "secretKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretKey;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PinpointBaiduChannel.prototype.synthesizeAttributes = function () {
        return {
            api_key: cdktf.stringToTerraform(this._apiKey),
            application_id: cdktf.stringToTerraform(this._applicationId),
            enabled: cdktf.booleanToTerraform(this._enabled),
            secret_key: cdktf.stringToTerraform(this._secretKey)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PinpointBaiduChannel.tfResourceType = "aws_pinpoint_baidu_channel";
    return PinpointBaiduChannel;
}(cdktf.TerraformResource));
exports.PinpointBaiduChannel = PinpointBaiduChannel;
