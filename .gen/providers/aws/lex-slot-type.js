"use strict";
// https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html
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
exports.LexSlotType = void 0;
var cdktf = require("cdktf");
function lexSlotTypeEnumerationValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        synonyms: cdktf.listMapper(cdktf.stringToTerraform)(struct.synonyms),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function lexSlotTypeTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type}
*/
var LexSlotType = /** @class */ (function (_super) {
    __extends(LexSlotType, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexSlotTypeConfig
    */
    function LexSlotType(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lex_slot_type',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._createVersion = config.createVersion;
        _this._description = config.description;
        _this._name = config.name;
        _this._valueSelectionStrategy = config.valueSelectionStrategy;
        _this._enumerationValue = config.enumerationValue;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(LexSlotType.prototype, "checksum", {
        // ==========
        // ATTRIBUTES
        // ==========
        // checksum - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checksum');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "createVersion", {
        get: function () {
            return this.getBooleanAttribute('create_version');
        },
        set: function (value) {
            this._createVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    LexSlotType.prototype.resetCreateVersion = function () {
        this._createVersion = undefined;
    };
    Object.defineProperty(LexSlotType.prototype, "createVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LexSlotType.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LexSlotType.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "valueSelectionStrategy", {
        get: function () {
            return this.getStringAttribute('value_selection_strategy');
        },
        set: function (value) {
            this._valueSelectionStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    LexSlotType.prototype.resetValueSelectionStrategy = function () {
        this._valueSelectionStrategy = undefined;
    };
    Object.defineProperty(LexSlotType.prototype, "valueSelectionStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._valueSelectionStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "enumerationValue", {
        get: function () {
            return this.interpolationForAttribute('enumeration_value');
        },
        set: function (value) {
            this._enumerationValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "enumerationValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enumerationValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexSlotType.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    LexSlotType.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(LexSlotType.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LexSlotType.prototype.synthesizeAttributes = function () {
        return {
            create_version: cdktf.booleanToTerraform(this._createVersion),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            value_selection_strategy: cdktf.stringToTerraform(this._valueSelectionStrategy),
            enumeration_value: cdktf.listMapper(lexSlotTypeEnumerationValueToTerraform)(this._enumerationValue),
            timeouts: lexSlotTypeTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LexSlotType.tfResourceType = "aws_lex_slot_type";
    return LexSlotType;
}(cdktf.TerraformResource));
exports.LexSlotType = LexSlotType;
