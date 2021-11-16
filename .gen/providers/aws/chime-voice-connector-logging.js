"use strict";
// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html
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
exports.ChimeVoiceConnectorLogging = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging}
*/
var ChimeVoiceConnectorLogging = /** @class */ (function (_super) {
    __extends(ChimeVoiceConnectorLogging, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorLoggingConfig
    */
    function ChimeVoiceConnectorLogging(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_logging',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._enableSipLogs = config.enableSipLogs;
        _this._voiceConnectorId = config.voiceConnectorId;
        return _this;
    }
    Object.defineProperty(ChimeVoiceConnectorLogging.prototype, "enableSipLogs", {
        get: function () {
            return this.getBooleanAttribute('enable_sip_logs');
        },
        set: function (value) {
            this._enableSipLogs = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnectorLogging.prototype.resetEnableSipLogs = function () {
        this._enableSipLogs = undefined;
    };
    Object.defineProperty(ChimeVoiceConnectorLogging.prototype, "enableSipLogsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableSipLogs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorLogging.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorLogging.prototype, "voiceConnectorId", {
        get: function () {
            return this.getStringAttribute('voice_connector_id');
        },
        set: function (value) {
            this._voiceConnectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorLogging.prototype, "voiceConnectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._voiceConnectorId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ChimeVoiceConnectorLogging.prototype.synthesizeAttributes = function () {
        return {
            enable_sip_logs: cdktf.booleanToTerraform(this._enableSipLogs),
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ChimeVoiceConnectorLogging.tfResourceType = "aws_chime_voice_connector_logging";
    return ChimeVoiceConnectorLogging;
}(cdktf.TerraformResource));
exports.ChimeVoiceConnectorLogging = ChimeVoiceConnectorLogging;
