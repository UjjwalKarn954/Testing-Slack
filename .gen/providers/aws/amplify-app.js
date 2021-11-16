"use strict";
// https://www.terraform.io/docs/providers/aws/r/amplify_app.html
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
exports.AmplifyApp = exports.AmplifyAppProductionBranch = void 0;
var cdktf = require("cdktf");
var AmplifyAppProductionBranch = /** @class */ (function (_super) {
    __extends(AmplifyAppProductionBranch, _super);
    function AmplifyAppProductionBranch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AmplifyAppProductionBranch.prototype, "branchName", {
        // branch_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyAppProductionBranch.prototype, "lastDeployTime", {
        // last_deploy_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_deploy_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyAppProductionBranch.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyAppProductionBranch.prototype, "thumbnailUrl", {
        // thumbnail_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thumbnail_url');
        },
        enumerable: false,
        configurable: true
    });
    return AmplifyAppProductionBranch;
}(cdktf.ComplexComputedList));
exports.AmplifyAppProductionBranch = AmplifyAppProductionBranch;
function amplifyAppAutoBranchCreationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        basic_auth_credentials: cdktf.stringToTerraform(struct.basicAuthCredentials),
        build_spec: cdktf.stringToTerraform(struct.buildSpec),
        enable_auto_build: cdktf.booleanToTerraform(struct.enableAutoBuild),
        enable_basic_auth: cdktf.booleanToTerraform(struct.enableBasicAuth),
        enable_performance_mode: cdktf.booleanToTerraform(struct.enablePerformanceMode),
        enable_pull_request_preview: cdktf.booleanToTerraform(struct.enablePullRequestPreview),
        environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.environmentVariables),
        framework: cdktf.stringToTerraform(struct.framework),
        pull_request_environment_name: cdktf.stringToTerraform(struct.pullRequestEnvironmentName),
        stage: cdktf.stringToTerraform(struct.stage)
    };
}
function amplifyAppCustomRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        source: cdktf.stringToTerraform(struct.source),
        status: cdktf.stringToTerraform(struct.status),
        target: cdktf.stringToTerraform(struct.target)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app}
*/
var AmplifyApp = /** @class */ (function (_super) {
    __extends(AmplifyApp, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyAppConfig
    */
    function AmplifyApp(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_amplify_app',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessToken = config.accessToken;
        _this._autoBranchCreationPatterns = config.autoBranchCreationPatterns;
        _this._basicAuthCredentials = config.basicAuthCredentials;
        _this._buildSpec = config.buildSpec;
        _this._description = config.description;
        _this._enableAutoBranchCreation = config.enableAutoBranchCreation;
        _this._enableBasicAuth = config.enableBasicAuth;
        _this._enableBranchAutoBuild = config.enableBranchAutoBuild;
        _this._enableBranchAutoDeletion = config.enableBranchAutoDeletion;
        _this._environmentVariables = config.environmentVariables;
        _this._iamServiceRoleArn = config.iamServiceRoleArn;
        _this._name = config.name;
        _this._oauthToken = config.oauthToken;
        _this._platform = config.platform;
        _this._repository = config.repository;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._autoBranchCreationConfig = config.autoBranchCreationConfig;
        _this._customRule = config.customRule;
        return _this;
    }
    Object.defineProperty(AmplifyApp.prototype, "accessToken", {
        get: function () {
            return this.getStringAttribute('access_token');
        },
        set: function (value) {
            this._accessToken = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetAccessToken = function () {
        this._accessToken = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "accessTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "autoBranchCreationPatterns", {
        get: function () {
            return this.getListAttribute('auto_branch_creation_patterns');
        },
        set: function (value) {
            this._autoBranchCreationPatterns = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetAutoBranchCreationPatterns = function () {
        this._autoBranchCreationPatterns = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "autoBranchCreationPatternsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoBranchCreationPatterns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "basicAuthCredentials", {
        get: function () {
            return this.getStringAttribute('basic_auth_credentials');
        },
        set: function (value) {
            this._basicAuthCredentials = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetBasicAuthCredentials = function () {
        this._basicAuthCredentials = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "basicAuthCredentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._basicAuthCredentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "buildSpec", {
        get: function () {
            return this.getStringAttribute('build_spec');
        },
        set: function (value) {
            this._buildSpec = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetBuildSpec = function () {
        this._buildSpec = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "buildSpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildSpec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "defaultDomain", {
        // default_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "enableAutoBranchCreation", {
        get: function () {
            return this.getBooleanAttribute('enable_auto_branch_creation');
        },
        set: function (value) {
            this._enableAutoBranchCreation = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetEnableAutoBranchCreation = function () {
        this._enableAutoBranchCreation = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "enableAutoBranchCreationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableAutoBranchCreation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "enableBasicAuth", {
        get: function () {
            return this.getBooleanAttribute('enable_basic_auth');
        },
        set: function (value) {
            this._enableBasicAuth = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetEnableBasicAuth = function () {
        this._enableBasicAuth = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "enableBasicAuthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableBasicAuth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "enableBranchAutoBuild", {
        get: function () {
            return this.getBooleanAttribute('enable_branch_auto_build');
        },
        set: function (value) {
            this._enableBranchAutoBuild = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetEnableBranchAutoBuild = function () {
        this._enableBranchAutoBuild = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "enableBranchAutoBuildInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableBranchAutoBuild;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "enableBranchAutoDeletion", {
        get: function () {
            return this.getBooleanAttribute('enable_branch_auto_deletion');
        },
        set: function (value) {
            this._enableBranchAutoDeletion = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetEnableBranchAutoDeletion = function () {
        this._enableBranchAutoDeletion = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "enableBranchAutoDeletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableBranchAutoDeletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "environmentVariables", {
        get: function () {
            return this.interpolationForAttribute('environment_variables');
        },
        set: function (value) {
            this._environmentVariables = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetEnvironmentVariables = function () {
        this._environmentVariables = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "environmentVariablesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentVariables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "iamServiceRoleArn", {
        get: function () {
            return this.getStringAttribute('iam_service_role_arn');
        },
        set: function (value) {
            this._iamServiceRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetIamServiceRoleArn = function () {
        this._iamServiceRoleArn = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "iamServiceRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamServiceRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "oauthToken", {
        get: function () {
            return this.getStringAttribute('oauth_token');
        },
        set: function (value) {
            this._oauthToken = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetOauthToken = function () {
        this._oauthToken = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "oauthTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oauthToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "platform", {
        get: function () {
            return this.getStringAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetPlatform = function () {
        this._platform = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    // production_branch - computed: true, optional: false, required: false
    AmplifyApp.prototype.productionBranch = function (index) {
        return new AmplifyAppProductionBranch(this, 'production_branch', index);
    };
    Object.defineProperty(AmplifyApp.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetRepository = function () {
        this._repository = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "autoBranchCreationConfig", {
        get: function () {
            return this.interpolationForAttribute('auto_branch_creation_config');
        },
        set: function (value) {
            this._autoBranchCreationConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetAutoBranchCreationConfig = function () {
        this._autoBranchCreationConfig = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "autoBranchCreationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoBranchCreationConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyApp.prototype, "customRule", {
        get: function () {
            return this.interpolationForAttribute('custom_rule');
        },
        set: function (value) {
            this._customRule = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyApp.prototype.resetCustomRule = function () {
        this._customRule = undefined;
    };
    Object.defineProperty(AmplifyApp.prototype, "customRuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customRule;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AmplifyApp.prototype.synthesizeAttributes = function () {
        return {
            access_token: cdktf.stringToTerraform(this._accessToken),
            auto_branch_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._autoBranchCreationPatterns),
            basic_auth_credentials: cdktf.stringToTerraform(this._basicAuthCredentials),
            build_spec: cdktf.stringToTerraform(this._buildSpec),
            description: cdktf.stringToTerraform(this._description),
            enable_auto_branch_creation: cdktf.booleanToTerraform(this._enableAutoBranchCreation),
            enable_basic_auth: cdktf.booleanToTerraform(this._enableBasicAuth),
            enable_branch_auto_build: cdktf.booleanToTerraform(this._enableBranchAutoBuild),
            enable_branch_auto_deletion: cdktf.booleanToTerraform(this._enableBranchAutoDeletion),
            environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
            iam_service_role_arn: cdktf.stringToTerraform(this._iamServiceRoleArn),
            name: cdktf.stringToTerraform(this._name),
            oauth_token: cdktf.stringToTerraform(this._oauthToken),
            platform: cdktf.stringToTerraform(this._platform),
            repository: cdktf.stringToTerraform(this._repository),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            auto_branch_creation_config: cdktf.listMapper(amplifyAppAutoBranchCreationConfigToTerraform)(this._autoBranchCreationConfig),
            custom_rule: cdktf.listMapper(amplifyAppCustomRuleToTerraform)(this._customRule)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AmplifyApp.tfResourceType = "aws_amplify_app";
    return AmplifyApp;
}(cdktf.TerraformResource));
exports.AmplifyApp = AmplifyApp;
