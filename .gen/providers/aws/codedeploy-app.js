"use strict";
// https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html
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
exports.CodedeployApp = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html aws_codedeploy_app}
*/
var CodedeployApp = /** @class */ (function (_super) {
    __extends(CodedeployApp, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html aws_codedeploy_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployAppConfig
    */
    function CodedeployApp(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codedeploy_app',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._computePlatform = config.computePlatform;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(CodedeployApp.prototype, "applicationId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // application_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('application_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "computePlatform", {
        get: function () {
            return this.getStringAttribute('compute_platform');
        },
        set: function (value) {
            this._computePlatform = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployApp.prototype.resetComputePlatform = function () {
        this._computePlatform = undefined;
    };
    Object.defineProperty(CodedeployApp.prototype, "computePlatformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._computePlatform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "githubAccountName", {
        // github_account_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('github_account_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "linkedToGithub", {
        // linked_to_github - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('linked_to_github');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployApp.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodedeployApp.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployApp.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployApp.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodedeployApp.prototype, "tagsAllInput", {
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
    CodedeployApp.prototype.synthesizeAttributes = function () {
        return {
            compute_platform: cdktf.stringToTerraform(this._computePlatform),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodedeployApp.tfResourceType = "aws_codedeploy_app";
    return CodedeployApp;
}(cdktf.TerraformResource));
exports.CodedeployApp = CodedeployApp;
