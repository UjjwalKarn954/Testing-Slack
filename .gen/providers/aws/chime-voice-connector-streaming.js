"use strict";
// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html
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
exports.ChimeVoiceConnectorStreaming = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html aws_chime_voice_connector_streaming}
*/
var ChimeVoiceConnectorStreaming = /** @class */ (function (_super) {
    __extends(ChimeVoiceConnectorStreaming, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html aws_chime_voice_connector_streaming} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorStreamingConfig
    */
    function ChimeVoiceConnectorStreaming(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_streaming',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dataRetention = config.dataRetention;
        _this._disabled = config.disabled;
        _this._streamingNotificationTargets = config.streamingNotificationTargets;
        _this._voiceConnectorId = config.voiceConnectorId;
        return _this;
    }
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "dataRetention", {
        get: function () {
            return this.getNumberAttribute('data_retention');
        },
        set: function (value) {
            this._dataRetention = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "dataRetentionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataRetention;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnectorStreaming.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "streamingNotificationTargets", {
        get: function () {
            return this.getListAttribute('streaming_notification_targets');
        },
        set: function (value) {
            this._streamingNotificationTargets = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnectorStreaming.prototype.resetStreamingNotificationTargets = function () {
        this._streamingNotificationTargets = undefined;
    };
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "streamingNotificationTargetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._streamingNotificationTargets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "voiceConnectorId", {
        get: function () {
            return this.getStringAttribute('voice_connector_id');
        },
        set: function (value) {
            this._voiceConnectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorStreaming.prototype, "voiceConnectorIdInput", {
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
    ChimeVoiceConnectorStreaming.prototype.synthesizeAttributes = function () {
        return {
            data_retention: cdktf.numberToTerraform(this._dataRetention),
            disabled: cdktf.booleanToTerraform(this._disabled),
            streaming_notification_targets: cdktf.listMapper(cdktf.stringToTerraform)(this._streamingNotificationTargets),
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ChimeVoiceConnectorStreaming.tfResourceType = "aws_chime_voice_connector_streaming";
    return ChimeVoiceConnectorStreaming;
}(cdktf.TerraformResource));
exports.ChimeVoiceConnectorStreaming = ChimeVoiceConnectorStreaming;
