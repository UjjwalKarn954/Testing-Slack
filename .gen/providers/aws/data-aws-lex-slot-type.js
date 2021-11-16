"use strict";
// https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html
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
exports.DataAwsLexSlotType = exports.DataAwsLexSlotTypeEnumerationValue = void 0;
var cdktf = require("cdktf");
var DataAwsLexSlotTypeEnumerationValue = /** @class */ (function (_super) {
    __extends(DataAwsLexSlotTypeEnumerationValue, _super);
    function DataAwsLexSlotTypeEnumerationValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLexSlotTypeEnumerationValue.prototype, "synonyms", {
        // synonyms - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('synonyms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexSlotTypeEnumerationValue.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLexSlotTypeEnumerationValue;
}(cdktf.ComplexComputedList));
exports.DataAwsLexSlotTypeEnumerationValue = DataAwsLexSlotTypeEnumerationValue;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html aws_lex_slot_type}
*/
var DataAwsLexSlotType = /** @class */ (function (_super) {
    __extends(DataAwsLexSlotType, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html aws_lex_slot_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexSlotTypeConfig
    */
    function DataAwsLexSlotType(scope, id, config) {
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
        _this._name = config.name;
        _this._version = config.version;
        return _this;
    }
    Object.defineProperty(DataAwsLexSlotType.prototype, "checksum", {
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
    Object.defineProperty(DataAwsLexSlotType.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexSlotType.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    // enumeration_value - computed: true, optional: false, required: false
    DataAwsLexSlotType.prototype.enumerationValue = function (index) {
        return new DataAwsLexSlotTypeEnumerationValue(this, 'enumeration_value', index);
    };
    Object.defineProperty(DataAwsLexSlotType.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexSlotType.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexSlotType.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexSlotType.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexSlotType.prototype, "valueSelectionStrategy", {
        // value_selection_strategy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value_selection_strategy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexSlotType.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLexSlotType.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(DataAwsLexSlotType.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLexSlotType.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            version: cdktf.stringToTerraform(this._version)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLexSlotType.tfResourceType = "aws_lex_slot_type";
    return DataAwsLexSlotType;
}(cdktf.TerraformDataSource));
exports.DataAwsLexSlotType = DataAwsLexSlotType;
