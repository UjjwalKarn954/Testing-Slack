"use strict";
// https://www.terraform.io/docs/providers/aws/r/codepipeline.html
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
exports.Codepipeline = void 0;
var cdktf = require("cdktf");
function codepipelineArtifactStoreEncryptionKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function codepipelineArtifactStoreToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        location: cdktf.stringToTerraform(struct.location),
        region: cdktf.stringToTerraform(struct.region),
        type: cdktf.stringToTerraform(struct.type),
        encryption_key: cdktf.listMapper(codepipelineArtifactStoreEncryptionKeyToTerraform)(struct.encryptionKey)
    };
}
function codepipelineStageActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        category: cdktf.stringToTerraform(struct.category),
        configuration: cdktf.hashMapper(cdktf.anyToTerraform)(struct.configuration),
        input_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(struct.inputArtifacts),
        name: cdktf.stringToTerraform(struct.name),
        namespace: cdktf.stringToTerraform(struct.namespace),
        output_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(struct.outputArtifacts),
        owner: cdktf.stringToTerraform(struct.owner),
        provider: cdktf.stringToTerraform(struct.provider),
        region: cdktf.stringToTerraform(struct.region),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        run_order: cdktf.numberToTerraform(struct.runOrder),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function codepipelineStageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        action: cdktf.listMapper(codepipelineStageActionToTerraform)(struct.action)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline}
*/
var Codepipeline = /** @class */ (function (_super) {
    __extends(Codepipeline, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodepipelineConfig
    */
    function Codepipeline(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codepipeline',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._artifactStore = config.artifactStore;
        _this._stage = config.stage;
        return _this;
    }
    Object.defineProperty(Codepipeline.prototype, "arn", {
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
    Object.defineProperty(Codepipeline.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Codepipeline.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Codepipeline.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Codepipeline.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Codepipeline.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "artifactStore", {
        get: function () {
            return this.interpolationForAttribute('artifact_store');
        },
        set: function (value) {
            this._artifactStore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "artifactStoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._artifactStore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "stage", {
        get: function () {
            return this.interpolationForAttribute('stage');
        },
        set: function (value) {
            this._stage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codepipeline.prototype, "stageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stage;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Codepipeline.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            artifact_store: cdktf.listMapper(codepipelineArtifactStoreToTerraform)(this._artifactStore),
            stage: cdktf.listMapper(codepipelineStageToTerraform)(this._stage)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Codepipeline.tfResourceType = "aws_codepipeline";
    return Codepipeline;
}(cdktf.TerraformResource));
exports.Codepipeline = Codepipeline;
