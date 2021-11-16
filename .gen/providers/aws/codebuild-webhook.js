"use strict";
// https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html
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
exports.CodebuildWebhook = void 0;
var cdktf = require("cdktf");
function codebuildWebhookFilterGroupFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exclude_matched_pattern: cdktf.booleanToTerraform(struct.excludeMatchedPattern),
        pattern: cdktf.stringToTerraform(struct.pattern),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function codebuildWebhookFilterGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        filter: cdktf.listMapper(codebuildWebhookFilterGroupFilterToTerraform)(struct.filter)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook}
*/
var CodebuildWebhook = /** @class */ (function (_super) {
    __extends(CodebuildWebhook, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildWebhookConfig
    */
    function CodebuildWebhook(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codebuild_webhook',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._branchFilter = config.branchFilter;
        _this._buildType = config.buildType;
        _this._projectName = config.projectName;
        _this._filterGroup = config.filterGroup;
        return _this;
    }
    Object.defineProperty(CodebuildWebhook.prototype, "branchFilter", {
        get: function () {
            return this.getStringAttribute('branch_filter');
        },
        set: function (value) {
            this._branchFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildWebhook.prototype.resetBranchFilter = function () {
        this._branchFilter = undefined;
    };
    Object.defineProperty(CodebuildWebhook.prototype, "branchFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branchFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildWebhook.prototype, "buildType", {
        get: function () {
            return this.getStringAttribute('build_type');
        },
        set: function (value) {
            this._buildType = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildWebhook.prototype.resetBuildType = function () {
        this._buildType = undefined;
    };
    Object.defineProperty(CodebuildWebhook.prototype, "buildTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildWebhook.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildWebhook.prototype, "payloadUrl", {
        // payload_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('payload_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildWebhook.prototype, "projectName", {
        get: function () {
            return this.getStringAttribute('project_name');
        },
        set: function (value) {
            this._projectName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildWebhook.prototype, "projectNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildWebhook.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildWebhook.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildWebhook.prototype, "filterGroup", {
        get: function () {
            return this.interpolationForAttribute('filter_group');
        },
        set: function (value) {
            this._filterGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildWebhook.prototype.resetFilterGroup = function () {
        this._filterGroup = undefined;
    };
    Object.defineProperty(CodebuildWebhook.prototype, "filterGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filterGroup;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodebuildWebhook.prototype.synthesizeAttributes = function () {
        return {
            branch_filter: cdktf.stringToTerraform(this._branchFilter),
            build_type: cdktf.stringToTerraform(this._buildType),
            project_name: cdktf.stringToTerraform(this._projectName),
            filter_group: cdktf.listMapper(codebuildWebhookFilterGroupToTerraform)(this._filterGroup)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodebuildWebhook.tfResourceType = "aws_codebuild_webhook";
    return CodebuildWebhook;
}(cdktf.TerraformResource));
exports.CodebuildWebhook = CodebuildWebhook;
