"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html
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
exports.SsmParameter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html aws_ssm_parameter}
*/
var SsmParameter = /** @class */ (function (_super) {
    __extends(SsmParameter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html aws_ssm_parameter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmParameterConfig
    */
    function SsmParameter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_parameter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowedPattern = config.allowedPattern;
        _this._dataType = config.dataType;
        _this._description = config.description;
        _this._keyId = config.keyId;
        _this._name = config.name;
        _this._overwrite = config.overwrite;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._tier = config.tier;
        _this._type = config.type;
        _this._value = config.value;
        return _this;
    }
    Object.defineProperty(SsmParameter.prototype, "allowedPattern", {
        get: function () {
            return this.getStringAttribute('allowed_pattern');
        },
        set: function (value) {
            this._allowedPattern = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmParameter.prototype.resetAllowedPattern = function () {
        this._allowedPattern = undefined;
    };
    Object.defineProperty(SsmParameter.prototype, "allowedPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedPattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "arn", {
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "dataType", {
        get: function () {
            return this.getStringAttribute('data_type');
        },
        set: function (value) {
            this._dataType = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmParameter.prototype.resetDataType = function () {
        this._dataType = undefined;
    };
    Object.defineProperty(SsmParameter.prototype, "dataTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmParameter.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SsmParameter.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmParameter.prototype.resetKeyId = function () {
        this._keyId = undefined;
    };
    Object.defineProperty(SsmParameter.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "overwrite", {
        get: function () {
            return this.getBooleanAttribute('overwrite');
        },
        set: function (value) {
            this._overwrite = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmParameter.prototype.resetOverwrite = function () {
        this._overwrite = undefined;
    };
    Object.defineProperty(SsmParameter.prototype, "overwriteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overwrite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmParameter.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SsmParameter.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmParameter.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SsmParameter.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "tier", {
        get: function () {
            return this.getStringAttribute('tier');
        },
        set: function (value) {
            this._tier = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmParameter.prototype.resetTier = function () {
        this._tier = undefined;
    };
    Object.defineProperty(SsmParameter.prototype, "tierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmParameter.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsmParameter.prototype.synthesizeAttributes = function () {
        return {
            allowed_pattern: cdktf.stringToTerraform(this._allowedPattern),
            data_type: cdktf.stringToTerraform(this._dataType),
            description: cdktf.stringToTerraform(this._description),
            key_id: cdktf.stringToTerraform(this._keyId),
            name: cdktf.stringToTerraform(this._name),
            overwrite: cdktf.booleanToTerraform(this._overwrite),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            tier: cdktf.stringToTerraform(this._tier),
            type: cdktf.stringToTerraform(this._type),
            value: cdktf.stringToTerraform(this._value)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmParameter.tfResourceType = "aws_ssm_parameter";
    return SsmParameter;
}(cdktf.TerraformResource));
exports.SsmParameter = SsmParameter;
