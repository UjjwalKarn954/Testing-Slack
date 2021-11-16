"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html
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
exports.PinpointEmailChannel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html aws_pinpoint_email_channel}
*/
var PinpointEmailChannel = /** @class */ (function (_super) {
    __extends(PinpointEmailChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html aws_pinpoint_email_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointEmailChannelConfig
    */
    function PinpointEmailChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_email_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._configurationSet = config.configurationSet;
        _this._enabled = config.enabled;
        _this._fromAddress = config.fromAddress;
        _this._identity = config.identity;
        _this._roleArn = config.roleArn;
        return _this;
    }
    Object.defineProperty(PinpointEmailChannel.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "configurationSet", {
        get: function () {
            return this.getStringAttribute('configuration_set');
        },
        set: function (value) {
            this._configurationSet = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointEmailChannel.prototype.resetConfigurationSet = function () {
        this._configurationSet = undefined;
    };
    Object.defineProperty(PinpointEmailChannel.prototype, "configurationSetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationSet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointEmailChannel.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(PinpointEmailChannel.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "fromAddress", {
        get: function () {
            return this.getStringAttribute('from_address');
        },
        set: function (value) {
            this._fromAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "fromAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "identity", {
        get: function () {
            return this.getStringAttribute('identity');
        },
        set: function (value) {
            this._identity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "identityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "messagesPerSecond", {
        // messages_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('messages_per_second');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEmailChannel.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointEmailChannel.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(PinpointEmailChannel.prototype, "roleArnInput", {
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
    PinpointEmailChannel.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            configuration_set: cdktf.stringToTerraform(this._configurationSet),
            enabled: cdktf.booleanToTerraform(this._enabled),
            from_address: cdktf.stringToTerraform(this._fromAddress),
            identity: cdktf.stringToTerraform(this._identity),
            role_arn: cdktf.stringToTerraform(this._roleArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PinpointEmailChannel.tfResourceType = "aws_pinpoint_email_channel";
    return PinpointEmailChannel;
}(cdktf.TerraformResource));
exports.PinpointEmailChannel = PinpointEmailChannel;
