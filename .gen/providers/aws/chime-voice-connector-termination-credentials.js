"use strict";
// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html
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
exports.ChimeVoiceConnectorTerminationCredentials = void 0;
var cdktf = require("cdktf");
function chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials}
*/
var ChimeVoiceConnectorTerminationCredentials = /** @class */ (function (_super) {
    __extends(ChimeVoiceConnectorTerminationCredentials, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationCredentialsConfig
    */
    function ChimeVoiceConnectorTerminationCredentials(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_termination_credentials',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._voiceConnectorId = config.voiceConnectorId;
        _this._credentials = config.credentials;
        return _this;
    }
    Object.defineProperty(ChimeVoiceConnectorTerminationCredentials.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTerminationCredentials.prototype, "voiceConnectorId", {
        get: function () {
            return this.getStringAttribute('voice_connector_id');
        },
        set: function (value) {
            this._voiceConnectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTerminationCredentials.prototype, "voiceConnectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._voiceConnectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTerminationCredentials.prototype, "credentials", {
        get: function () {
            return this.interpolationForAttribute('credentials');
        },
        set: function (value) {
            this._credentials = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTerminationCredentials.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ChimeVoiceConnectorTerminationCredentials.prototype.synthesizeAttributes = function () {
        return {
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
            credentials: cdktf.listMapper(chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform)(this._credentials)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ChimeVoiceConnectorTerminationCredentials.tfResourceType = "aws_chime_voice_connector_termination_credentials";
    return ChimeVoiceConnectorTerminationCredentials;
}(cdktf.TerraformResource));
exports.ChimeVoiceConnectorTerminationCredentials = ChimeVoiceConnectorTerminationCredentials;
