"use strict";
// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html
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
exports.ChimeVoiceConnectorTermination = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html aws_chime_voice_connector_termination}
*/
var ChimeVoiceConnectorTermination = /** @class */ (function (_super) {
    __extends(ChimeVoiceConnectorTermination, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html aws_chime_voice_connector_termination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationConfig
    */
    function ChimeVoiceConnectorTermination(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_termination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._callingRegions = config.callingRegions;
        _this._cidrAllowList = config.cidrAllowList;
        _this._cpsLimit = config.cpsLimit;
        _this._defaultPhoneNumber = config.defaultPhoneNumber;
        _this._disabled = config.disabled;
        _this._voiceConnectorId = config.voiceConnectorId;
        return _this;
    }
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "callingRegions", {
        get: function () {
            return this.getListAttribute('calling_regions');
        },
        set: function (value) {
            this._callingRegions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "callingRegionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._callingRegions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "cidrAllowList", {
        get: function () {
            return this.getListAttribute('cidr_allow_list');
        },
        set: function (value) {
            this._cidrAllowList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "cidrAllowListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrAllowList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "cpsLimit", {
        get: function () {
            return this.getNumberAttribute('cps_limit');
        },
        set: function (value) {
            this._cpsLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnectorTermination.prototype.resetCpsLimit = function () {
        this._cpsLimit = undefined;
    };
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "cpsLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpsLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "defaultPhoneNumber", {
        get: function () {
            return this.getStringAttribute('default_phone_number');
        },
        set: function (value) {
            this._defaultPhoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnectorTermination.prototype.resetDefaultPhoneNumber = function () {
        this._defaultPhoneNumber = undefined;
    };
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "defaultPhoneNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultPhoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnectorTermination.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "voiceConnectorId", {
        get: function () {
            return this.getStringAttribute('voice_connector_id');
        },
        set: function (value) {
            this._voiceConnectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorTermination.prototype, "voiceConnectorIdInput", {
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
    ChimeVoiceConnectorTermination.prototype.synthesizeAttributes = function () {
        return {
            calling_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._callingRegions),
            cidr_allow_list: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrAllowList),
            cps_limit: cdktf.numberToTerraform(this._cpsLimit),
            default_phone_number: cdktf.stringToTerraform(this._defaultPhoneNumber),
            disabled: cdktf.booleanToTerraform(this._disabled),
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ChimeVoiceConnectorTermination.tfResourceType = "aws_chime_voice_connector_termination";
    return ChimeVoiceConnectorTermination;
}(cdktf.TerraformResource));
exports.ChimeVoiceConnectorTermination = ChimeVoiceConnectorTermination;
