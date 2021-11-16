"use strict";
// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html
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
exports.ChimeVoiceConnectorOrigination = void 0;
var cdktf = require("cdktf");
function chimeVoiceConnectorOriginationRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
        priority: cdktf.numberToTerraform(struct.priority),
        protocol: cdktf.stringToTerraform(struct.protocol),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination}
*/
var ChimeVoiceConnectorOrigination = /** @class */ (function (_super) {
    __extends(ChimeVoiceConnectorOrigination, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorOriginationConfig
    */
    function ChimeVoiceConnectorOrigination(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_origination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._disabled = config.disabled;
        _this._voiceConnectorId = config.voiceConnectorId;
        _this._route = config.route;
        return _this;
    }
    Object.defineProperty(ChimeVoiceConnectorOrigination.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnectorOrigination.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(ChimeVoiceConnectorOrigination.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorOrigination.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorOrigination.prototype, "voiceConnectorId", {
        get: function () {
            return this.getStringAttribute('voice_connector_id');
        },
        set: function (value) {
            this._voiceConnectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorOrigination.prototype, "voiceConnectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._voiceConnectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorOrigination.prototype, "route", {
        get: function () {
            return this.interpolationForAttribute('route');
        },
        set: function (value) {
            this._route = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorOrigination.prototype, "routeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._route;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ChimeVoiceConnectorOrigination.prototype.synthesizeAttributes = function () {
        return {
            disabled: cdktf.booleanToTerraform(this._disabled),
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
            route: cdktf.listMapper(chimeVoiceConnectorOriginationRouteToTerraform)(this._route)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ChimeVoiceConnectorOrigination.tfResourceType = "aws_chime_voice_connector_origination";
    return ChimeVoiceConnectorOrigination;
}(cdktf.TerraformResource));
exports.ChimeVoiceConnectorOrigination = ChimeVoiceConnectorOrigination;
