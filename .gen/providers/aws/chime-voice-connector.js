"use strict";
// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html
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
exports.ChimeVoiceConnector = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html aws_chime_voice_connector}
*/
var ChimeVoiceConnector = /** @class */ (function (_super) {
    __extends(ChimeVoiceConnector, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html aws_chime_voice_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorConfig
    */
    function ChimeVoiceConnector(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_chime_voice_connector',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._awsRegion = config.awsRegion;
        _this._name = config.name;
        _this._requireEncryption = config.requireEncryption;
        return _this;
    }
    Object.defineProperty(ChimeVoiceConnector.prototype, "awsRegion", {
        get: function () {
            return this.getStringAttribute('aws_region');
        },
        set: function (value) {
            this._awsRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnector.prototype.resetAwsRegion = function () {
        this._awsRegion = undefined;
    };
    Object.defineProperty(ChimeVoiceConnector.prototype, "awsRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnector.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnector.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnector.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnector.prototype, "outboundHostName", {
        // outbound_host_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outbound_host_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnector.prototype, "requireEncryption", {
        get: function () {
            return this.getBooleanAttribute('require_encryption');
        },
        set: function (value) {
            this._requireEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnector.prototype, "requireEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireEncryption;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ChimeVoiceConnector.prototype.synthesizeAttributes = function () {
        return {
            aws_region: cdktf.stringToTerraform(this._awsRegion),
            name: cdktf.stringToTerraform(this._name),
            require_encryption: cdktf.booleanToTerraform(this._requireEncryption)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ChimeVoiceConnector.tfResourceType = "aws_chime_voice_connector";
    return ChimeVoiceConnector;
}(cdktf.TerraformResource));
exports.ChimeVoiceConnector = ChimeVoiceConnector;
