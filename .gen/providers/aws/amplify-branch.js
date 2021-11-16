"use strict";
// https://www.terraform.io/docs/providers/aws/r/amplify_branch.html
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
exports.AmplifyBranch = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html aws_amplify_branch}
*/
var AmplifyBranch = /** @class */ (function (_super) {
    __extends(AmplifyBranch, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html aws_amplify_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBranchConfig
    */
    function AmplifyBranch(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_amplify_branch',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appId = config.appId;
        _this._backendEnvironmentArn = config.backendEnvironmentArn;
        _this._basicAuthCredentials = config.basicAuthCredentials;
        _this._branchName = config.branchName;
        _this._description = config.description;
        _this._displayName = config.displayName;
        _this._enableAutoBuild = config.enableAutoBuild;
        _this._enableBasicAuth = config.enableBasicAuth;
        _this._enableNotification = config.enableNotification;
        _this._enablePerformanceMode = config.enablePerformanceMode;
        _this._enablePullRequestPreview = config.enablePullRequestPreview;
        _this._environmentVariables = config.environmentVariables;
        _this._framework = config.framework;
        _this._pullRequestEnvironmentName = config.pullRequestEnvironmentName;
        _this._stage = config.stage;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._ttl = config.ttl;
        return _this;
    }
    Object.defineProperty(AmplifyBranch.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "associatedResources", {
        // associated_resources - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('associated_resources');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "backendEnvironmentArn", {
        get: function () {
            return this.getStringAttribute('backend_environment_arn');
        },
        set: function (value) {
            this._backendEnvironmentArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetBackendEnvironmentArn = function () {
        this._backendEnvironmentArn = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "backendEnvironmentArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backendEnvironmentArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "basicAuthCredentials", {
        get: function () {
            return this.getStringAttribute('basic_auth_credentials');
        },
        set: function (value) {
            this._basicAuthCredentials = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetBasicAuthCredentials = function () {
        this._basicAuthCredentials = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "basicAuthCredentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._basicAuthCredentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "branchName", {
        get: function () {
            return this.getStringAttribute('branch_name');
        },
        set: function (value) {
            this._branchName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "branchNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branchName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "customDomains", {
        // custom_domains - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('custom_domains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "destinationBranch", {
        // destination_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "displayName", {
        get: function () {
            return this.getStringAttribute('display_name');
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetDisplayName = function () {
        this._displayName = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "displayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "enableAutoBuild", {
        get: function () {
            return this.getBooleanAttribute('enable_auto_build');
        },
        set: function (value) {
            this._enableAutoBuild = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetEnableAutoBuild = function () {
        this._enableAutoBuild = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "enableAutoBuildInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableAutoBuild;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "enableBasicAuth", {
        get: function () {
            return this.getBooleanAttribute('enable_basic_auth');
        },
        set: function (value) {
            this._enableBasicAuth = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetEnableBasicAuth = function () {
        this._enableBasicAuth = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "enableBasicAuthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableBasicAuth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "enableNotification", {
        get: function () {
            return this.getBooleanAttribute('enable_notification');
        },
        set: function (value) {
            this._enableNotification = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetEnableNotification = function () {
        this._enableNotification = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "enableNotificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableNotification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "enablePerformanceMode", {
        get: function () {
            return this.getBooleanAttribute('enable_performance_mode');
        },
        set: function (value) {
            this._enablePerformanceMode = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetEnablePerformanceMode = function () {
        this._enablePerformanceMode = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "enablePerformanceModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enablePerformanceMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "enablePullRequestPreview", {
        get: function () {
            return this.getBooleanAttribute('enable_pull_request_preview');
        },
        set: function (value) {
            this._enablePullRequestPreview = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetEnablePullRequestPreview = function () {
        this._enablePullRequestPreview = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "enablePullRequestPreviewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enablePullRequestPreview;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "environmentVariables", {
        get: function () {
            return this.interpolationForAttribute('environment_variables');
        },
        set: function (value) {
            this._environmentVariables = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetEnvironmentVariables = function () {
        this._environmentVariables = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "environmentVariablesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentVariables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "framework", {
        get: function () {
            return this.getStringAttribute('framework');
        },
        set: function (value) {
            this._framework = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetFramework = function () {
        this._framework = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "frameworkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._framework;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "pullRequestEnvironmentName", {
        get: function () {
            return this.getStringAttribute('pull_request_environment_name');
        },
        set: function (value) {
            this._pullRequestEnvironmentName = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetPullRequestEnvironmentName = function () {
        this._pullRequestEnvironmentName = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "pullRequestEnvironmentNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pullRequestEnvironmentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "sourceBranch", {
        // source_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "stage", {
        get: function () {
            return this.getStringAttribute('stage');
        },
        set: function (value) {
            this._stage = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetStage = function () {
        this._stage = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "stageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBranch.prototype, "ttl", {
        get: function () {
            return this.getStringAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBranch.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(AmplifyBranch.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AmplifyBranch.prototype.synthesizeAttributes = function () {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            backend_environment_arn: cdktf.stringToTerraform(this._backendEnvironmentArn),
            basic_auth_credentials: cdktf.stringToTerraform(this._basicAuthCredentials),
            branch_name: cdktf.stringToTerraform(this._branchName),
            description: cdktf.stringToTerraform(this._description),
            display_name: cdktf.stringToTerraform(this._displayName),
            enable_auto_build: cdktf.booleanToTerraform(this._enableAutoBuild),
            enable_basic_auth: cdktf.booleanToTerraform(this._enableBasicAuth),
            enable_notification: cdktf.booleanToTerraform(this._enableNotification),
            enable_performance_mode: cdktf.booleanToTerraform(this._enablePerformanceMode),
            enable_pull_request_preview: cdktf.booleanToTerraform(this._enablePullRequestPreview),
            environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
            framework: cdktf.stringToTerraform(this._framework),
            pull_request_environment_name: cdktf.stringToTerraform(this._pullRequestEnvironmentName),
            stage: cdktf.stringToTerraform(this._stage),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            ttl: cdktf.stringToTerraform(this._ttl)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AmplifyBranch.tfResourceType = "aws_amplify_branch";
    return AmplifyBranch;
}(cdktf.TerraformResource));
exports.AmplifyBranch = AmplifyBranch;
