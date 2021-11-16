"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_workflow.html
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
exports.GlueWorkflow = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html aws_glue_workflow}
*/
var GlueWorkflow = /** @class */ (function (_super) {
    __extends(GlueWorkflow, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html aws_glue_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueWorkflowConfig = {}
    */
    function GlueWorkflow(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_workflow',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._defaultRunProperties = config.defaultRunProperties;
        _this._description = config.description;
        _this._maxConcurrentRuns = config.maxConcurrentRuns;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(GlueWorkflow.prototype, "arn", {
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
    Object.defineProperty(GlueWorkflow.prototype, "defaultRunProperties", {
        get: function () {
            return this.interpolationForAttribute('default_run_properties');
        },
        set: function (value) {
            this._defaultRunProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueWorkflow.prototype.resetDefaultRunProperties = function () {
        this._defaultRunProperties = undefined;
    };
    Object.defineProperty(GlueWorkflow.prototype, "defaultRunPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultRunProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueWorkflow.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueWorkflow.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueWorkflow.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueWorkflow.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueWorkflow.prototype, "maxConcurrentRuns", {
        get: function () {
            return this.getNumberAttribute('max_concurrent_runs');
        },
        set: function (value) {
            this._maxConcurrentRuns = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueWorkflow.prototype.resetMaxConcurrentRuns = function () {
        this._maxConcurrentRuns = undefined;
    };
    Object.defineProperty(GlueWorkflow.prototype, "maxConcurrentRunsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxConcurrentRuns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueWorkflow.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueWorkflow.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(GlueWorkflow.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueWorkflow.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueWorkflow.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlueWorkflow.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueWorkflow.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueWorkflow.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlueWorkflow.prototype, "tagsAllInput", {
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
    GlueWorkflow.prototype.synthesizeAttributes = function () {
        return {
            default_run_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._defaultRunProperties),
            description: cdktf.stringToTerraform(this._description),
            max_concurrent_runs: cdktf.numberToTerraform(this._maxConcurrentRuns),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueWorkflow.tfResourceType = "aws_glue_workflow";
    return GlueWorkflow;
}(cdktf.TerraformResource));
exports.GlueWorkflow = GlueWorkflow;
