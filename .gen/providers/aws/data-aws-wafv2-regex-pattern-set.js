"use strict";
// https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set.html
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
exports.DataAwsWafv2RegexPatternSet = exports.DataAwsWafv2RegexPatternSetRegularExpression = void 0;
var cdktf = require("cdktf");
var DataAwsWafv2RegexPatternSetRegularExpression = /** @class */ (function (_super) {
    __extends(DataAwsWafv2RegexPatternSetRegularExpression, _super);
    function DataAwsWafv2RegexPatternSetRegularExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsWafv2RegexPatternSetRegularExpression.prototype, "regexString", {
        // regex_string - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex_string');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsWafv2RegexPatternSetRegularExpression;
}(cdktf.ComplexComputedList));
exports.DataAwsWafv2RegexPatternSetRegularExpression = DataAwsWafv2RegexPatternSetRegularExpression;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set}
*/
var DataAwsWafv2RegexPatternSet = /** @class */ (function (_super) {
    __extends(DataAwsWafv2RegexPatternSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafv2RegexPatternSetConfig
    */
    function DataAwsWafv2RegexPatternSet(scope, id, config) {
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
        _this._name = config.name;
        _this._scope = config.scope;
        return _this;
    }
    Object.defineProperty(DataAwsWafv2RegexPatternSet.prototype, "arn", {
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
    Object.defineProperty(DataAwsWafv2RegexPatternSet.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2RegexPatternSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2RegexPatternSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2RegexPatternSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // regular_expression - computed: true, optional: false, required: false
    DataAwsWafv2RegexPatternSet.prototype.regularExpression = function (index) {
        return new DataAwsWafv2RegexPatternSetRegularExpression(this, 'regular_expression', index);
    };
    Object.defineProperty(DataAwsWafv2RegexPatternSet.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2RegexPatternSet.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsWafv2RegexPatternSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            scope: cdktf.stringToTerraform(this._scope)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsWafv2RegexPatternSet.tfResourceType = "aws_wafv2_regex_pattern_set";
    return DataAwsWafv2RegexPatternSet;
}(cdktf.TerraformDataSource));
exports.DataAwsWafv2RegexPatternSet = DataAwsWafv2RegexPatternSet;
