"use strict";
// https://www.terraform.io/docs/providers/aws/d/glue_script.html
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
exports.DataAwsGlueScript = void 0;
var cdktf = require("cdktf");
function dataAwsGlueScriptDagEdgeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        source: cdktf.stringToTerraform(struct.source),
        target: cdktf.stringToTerraform(struct.target),
        target_parameter: cdktf.stringToTerraform(struct.targetParameter)
    };
}
function dataAwsGlueScriptDagNodeArgsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        param: cdktf.booleanToTerraform(struct.param),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function dataAwsGlueScriptDagNodeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        line_number: cdktf.numberToTerraform(struct.lineNumber),
        node_type: cdktf.stringToTerraform(struct.nodeType),
        args: cdktf.listMapper(dataAwsGlueScriptDagNodeArgsToTerraform)(struct.args)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html aws_glue_script}
*/
var DataAwsGlueScript = /** @class */ (function (_super) {
    __extends(DataAwsGlueScript, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html aws_glue_script} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueScriptConfig
    */
    function DataAwsGlueScript(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_script',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._language = config.language;
        _this._dagEdge = config.dagEdge;
        _this._dagNode = config.dagNode;
        return _this;
    }
    Object.defineProperty(DataAwsGlueScript.prototype, "id", {
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
    Object.defineProperty(DataAwsGlueScript.prototype, "language", {
        get: function () {
            return this.getStringAttribute('language');
        },
        set: function (value) {
            this._language = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsGlueScript.prototype.resetLanguage = function () {
        this._language = undefined;
    };
    Object.defineProperty(DataAwsGlueScript.prototype, "languageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueScript.prototype, "pythonScript", {
        // python_script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('python_script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueScript.prototype, "scalaCode", {
        // scala_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scala_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueScript.prototype, "dagEdge", {
        get: function () {
            return this.interpolationForAttribute('dag_edge');
        },
        set: function (value) {
            this._dagEdge = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueScript.prototype, "dagEdgeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dagEdge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueScript.prototype, "dagNode", {
        get: function () {
            return this.interpolationForAttribute('dag_node');
        },
        set: function (value) {
            this._dagNode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueScript.prototype, "dagNodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dagNode;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsGlueScript.prototype.synthesizeAttributes = function () {
        return {
            language: cdktf.stringToTerraform(this._language),
            dag_edge: cdktf.listMapper(dataAwsGlueScriptDagEdgeToTerraform)(this._dagEdge),
            dag_node: cdktf.listMapper(dataAwsGlueScriptDagNodeToTerraform)(this._dagNode)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsGlueScript.tfResourceType = "aws_glue_script";
    return DataAwsGlueScript;
}(cdktf.TerraformDataSource));
exports.DataAwsGlueScript = DataAwsGlueScript;
