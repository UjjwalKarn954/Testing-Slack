"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html
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
exports.Wafv2RegexPatternSet = void 0;
var cdktf = require("cdktf");
function wafv2RegexPatternSetRegularExpressionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        regex_string: cdktf.stringToTerraform(struct.regexString)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set}
*/
var Wafv2RegexPatternSet = /** @class */ (function (_super) {
    __extends(Wafv2RegexPatternSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2RegexPatternSetConfig
    */
    function Wafv2RegexPatternSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafv2_regex_pattern_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._scope = config.scope;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._regularExpression = config.regularExpression;
        return _this;
    }
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2RegexPatternSet.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "lockToken", {
        // lock_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lock_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2RegexPatternSet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2RegexPatternSet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "regularExpression", {
        get: function () {
            return this.interpolationForAttribute('regular_expression');
        },
        set: function (value) {
            this._regularExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2RegexPatternSet.prototype.resetRegularExpression = function () {
        this._regularExpression = undefined;
    };
    Object.defineProperty(Wafv2RegexPatternSet.prototype, "regularExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regularExpression;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Wafv2RegexPatternSet.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            scope: cdktf.stringToTerraform(this._scope),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            regular_expression: cdktf.listMapper(wafv2RegexPatternSetRegularExpressionToTerraform)(this._regularExpression)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Wafv2RegexPatternSet.tfResourceType = "aws_wafv2_regex_pattern_set";
    return Wafv2RegexPatternSet;
}(cdktf.TerraformResource));
exports.Wafv2RegexPatternSet = Wafv2RegexPatternSet;
