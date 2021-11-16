"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_classifier.html
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
exports.GlueClassifier = void 0;
var cdktf = require("cdktf");
function glueClassifierCsvClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_single_column: cdktf.booleanToTerraform(struct.allowSingleColumn),
        contains_header: cdktf.stringToTerraform(struct.containsHeader),
        delimiter: cdktf.stringToTerraform(struct.delimiter),
        disable_value_trimming: cdktf.booleanToTerraform(struct.disableValueTrimming),
        header: cdktf.listMapper(cdktf.stringToTerraform)(struct.header),
        quote_symbol: cdktf.stringToTerraform(struct.quoteSymbol)
    };
}
function glueClassifierGrokClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        custom_patterns: cdktf.stringToTerraform(struct.customPatterns),
        grok_pattern: cdktf.stringToTerraform(struct.grokPattern)
    };
}
function glueClassifierJsonClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        json_path: cdktf.stringToTerraform(struct.jsonPath)
    };
}
function glueClassifierXmlClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        row_tag: cdktf.stringToTerraform(struct.rowTag)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier}
*/
var GlueClassifier = /** @class */ (function (_super) {
    __extends(GlueClassifier, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueClassifierConfig
    */
    function GlueClassifier(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_classifier',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._csvClassifier = config.csvClassifier;
        _this._grokClassifier = config.grokClassifier;
        _this._jsonClassifier = config.jsonClassifier;
        _this._xmlClassifier = config.xmlClassifier;
        return _this;
    }
    Object.defineProperty(GlueClassifier.prototype, "id", {
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
    Object.defineProperty(GlueClassifier.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueClassifier.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueClassifier.prototype, "csvClassifier", {
        get: function () {
            return this.interpolationForAttribute('csv_classifier');
        },
        set: function (value) {
            this._csvClassifier = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueClassifier.prototype.resetCsvClassifier = function () {
        this._csvClassifier = undefined;
    };
    Object.defineProperty(GlueClassifier.prototype, "csvClassifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._csvClassifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueClassifier.prototype, "grokClassifier", {
        get: function () {
            return this.interpolationForAttribute('grok_classifier');
        },
        set: function (value) {
            this._grokClassifier = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueClassifier.prototype.resetGrokClassifier = function () {
        this._grokClassifier = undefined;
    };
    Object.defineProperty(GlueClassifier.prototype, "grokClassifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._grokClassifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueClassifier.prototype, "jsonClassifier", {
        get: function () {
            return this.interpolationForAttribute('json_classifier');
        },
        set: function (value) {
            this._jsonClassifier = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueClassifier.prototype.resetJsonClassifier = function () {
        this._jsonClassifier = undefined;
    };
    Object.defineProperty(GlueClassifier.prototype, "jsonClassifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jsonClassifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueClassifier.prototype, "xmlClassifier", {
        get: function () {
            return this.interpolationForAttribute('xml_classifier');
        },
        set: function (value) {
            this._xmlClassifier = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueClassifier.prototype.resetXmlClassifier = function () {
        this._xmlClassifier = undefined;
    };
    Object.defineProperty(GlueClassifier.prototype, "xmlClassifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._xmlClassifier;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueClassifier.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            csv_classifier: cdktf.listMapper(glueClassifierCsvClassifierToTerraform)(this._csvClassifier),
            grok_classifier: cdktf.listMapper(glueClassifierGrokClassifierToTerraform)(this._grokClassifier),
            json_classifier: cdktf.listMapper(glueClassifierJsonClassifierToTerraform)(this._jsonClassifier),
            xml_classifier: cdktf.listMapper(glueClassifierXmlClassifierToTerraform)(this._xmlClassifier)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueClassifier.tfResourceType = "aws_glue_classifier";
    return GlueClassifier;
}(cdktf.TerraformResource));
exports.GlueClassifier = GlueClassifier;
