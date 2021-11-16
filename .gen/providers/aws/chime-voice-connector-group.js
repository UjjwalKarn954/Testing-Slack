"use strict";
// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html
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
exports.ChimeVoiceConnectorGroup = void 0;
var cdktf = require("cdktf");
function chimeVoiceConnectorGroupConnectorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        voice_connector_id: cdktf.stringToTerraform(struct.voiceConnectorId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html aws_chime_voice_connector_group}
*/
var ChimeVoiceConnectorGroup = /** @class */ (function (_super) {
    __extends(ChimeVoiceConnectorGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html aws_chime_voice_connector_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorGroupConfig
    */
    function ChimeVoiceConnectorGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._connector = config.connector;
        return _this;
    }
    Object.defineProperty(ChimeVoiceConnectorGroup.prototype, "id", {
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
    Object.defineProperty(ChimeVoiceConnectorGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChimeVoiceConnectorGroup.prototype, "connector", {
        get: function () {
            return this.interpolationForAttribute('connector');
        },
        set: function (value) {
            this._connector = value;
        },
        enumerable: false,
        configurable: true
    });
    ChimeVoiceConnectorGroup.prototype.resetConnector = function () {
        this._connector = undefined;
    };
    Object.defineProperty(ChimeVoiceConnectorGroup.prototype, "connectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connector;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ChimeVoiceConnectorGroup.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            connector: cdktf.listMapper(chimeVoiceConnectorGroupConnectorToTerraform)(this._connector)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ChimeVoiceConnectorGroup.tfResourceType = "aws_chime_voice_connector_group";
    return ChimeVoiceConnectorGroup;
}(cdktf.TerraformResource));
exports.ChimeVoiceConnectorGroup = ChimeVoiceConnectorGroup;
