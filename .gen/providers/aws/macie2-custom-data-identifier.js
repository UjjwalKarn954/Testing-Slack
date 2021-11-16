"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html
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
exports.Macie2CustomDataIdentifier = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html aws_macie2_custom_data_identifier}
*/
var Macie2CustomDataIdentifier = /** @class */ (function (_super) {
    __extends(Macie2CustomDataIdentifier, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html aws_macie2_custom_data_identifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2CustomDataIdentifierConfig = {}
    */
    function Macie2CustomDataIdentifier(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie2_custom_data_identifier',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._ignoreWords = config.ignoreWords;
        _this._keywords = config.keywords;
        _this._maximumMatchDistance = config.maximumMatchDistance;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._regex = config.regex;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "arn", {
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
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "ignoreWords", {
        get: function () {
            return this.getListAttribute('ignore_words');
        },
        set: function (value) {
            this._ignoreWords = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetIgnoreWords = function () {
        this._ignoreWords = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "ignoreWordsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreWords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "keywords", {
        get: function () {
            return this.getListAttribute('keywords');
        },
        set: function (value) {
            this._keywords = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetKeywords = function () {
        this._keywords = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "keywordsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keywords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "maximumMatchDistance", {
        get: function () {
            return this.getNumberAttribute('maximum_match_distance');
        },
        set: function (value) {
            this._maximumMatchDistance = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetMaximumMatchDistance = function () {
        this._maximumMatchDistance = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "maximumMatchDistanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumMatchDistance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "regex", {
        get: function () {
            return this.getStringAttribute('regex');
        },
        set: function (value) {
            this._regex = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetRegex = function () {
        this._regex = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "regexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2CustomDataIdentifier.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Macie2CustomDataIdentifier.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Macie2CustomDataIdentifier.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            ignore_words: cdktf.listMapper(cdktf.stringToTerraform)(this._ignoreWords),
            keywords: cdktf.listMapper(cdktf.stringToTerraform)(this._keywords),
            maximum_match_distance: cdktf.numberToTerraform(this._maximumMatchDistance),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            regex: cdktf.stringToTerraform(this._regex),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Macie2CustomDataIdentifier.tfResourceType = "aws_macie2_custom_data_identifier";
    return Macie2CustomDataIdentifier;
}(cdktf.TerraformResource));
exports.Macie2CustomDataIdentifier = Macie2CustomDataIdentifier;
