"use strict";
// https://www.terraform.io/docs/providers/aws/r/codebuild_project.html
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
exports.CodebuildProject = void 0;
var cdktf = require("cdktf");
function codebuildProjectArtifactsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        artifact_identifier: cdktf.stringToTerraform(struct.artifactIdentifier),
        encryption_disabled: cdktf.booleanToTerraform(struct.encryptionDisabled),
        location: cdktf.stringToTerraform(struct.location),
        name: cdktf.stringToTerraform(struct.name),
        namespace_type: cdktf.stringToTerraform(struct.namespaceType),
        override_artifact_name: cdktf.booleanToTerraform(struct.overrideArtifactName),
        packaging: cdktf.stringToTerraform(struct.packaging),
        path: cdktf.stringToTerraform(struct.path),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        compute_types_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct.computeTypesAllowed),
        maximum_builds_allowed: cdktf.numberToTerraform(struct.maximumBuildsAllowed)
    };
}
function codebuildProjectBuildBatchConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        combine_artifacts: cdktf.booleanToTerraform(struct.combineArtifacts),
        service_role: cdktf.stringToTerraform(struct.serviceRole),
        timeout_in_mins: cdktf.numberToTerraform(struct.timeoutInMins),
        restrictions: cdktf.listMapper(codebuildProjectBuildBatchConfigRestrictionsToTerraform)(struct.restrictions)
    };
}
function codebuildProjectCacheToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        location: cdktf.stringToTerraform(struct.location),
        modes: cdktf.listMapper(cdktf.stringToTerraform)(struct.modes),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function codebuildProjectEnvironmentEnvironmentVariableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function codebuildProjectEnvironmentRegistryCredentialToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        credential: cdktf.stringToTerraform(struct.credential),
        credential_provider: cdktf.stringToTerraform(struct.credentialProvider)
    };
}
function codebuildProjectEnvironmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate: cdktf.stringToTerraform(struct.certificate),
        compute_type: cdktf.stringToTerraform(struct.computeType),
        image: cdktf.stringToTerraform(struct.image),
        image_pull_credentials_type: cdktf.stringToTerraform(struct.imagePullCredentialsType),
        privileged_mode: cdktf.booleanToTerraform(struct.privilegedMode),
        type: cdktf.stringToTerraform(struct.type),
        environment_variable: cdktf.listMapper(codebuildProjectEnvironmentEnvironmentVariableToTerraform)(struct.environmentVariable),
        registry_credential: cdktf.listMapper(codebuildProjectEnvironmentRegistryCredentialToTerraform)(struct.registryCredential)
    };
}
function codebuildProjectFileSystemLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        identifier: cdktf.stringToTerraform(struct.identifier),
        location: cdktf.stringToTerraform(struct.location),
        mount_options: cdktf.stringToTerraform(struct.mountOptions),
        mount_point: cdktf.stringToTerraform(struct.mountPoint),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        group_name: cdktf.stringToTerraform(struct.groupName),
        status: cdktf.stringToTerraform(struct.status),
        stream_name: cdktf.stringToTerraform(struct.streamName)
    };
}
function codebuildProjectLogsConfigS3LogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption_disabled: cdktf.booleanToTerraform(struct.encryptionDisabled),
        location: cdktf.stringToTerraform(struct.location),
        status: cdktf.stringToTerraform(struct.status)
    };
}
function codebuildProjectLogsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_logs: cdktf.listMapper(codebuildProjectLogsConfigCloudwatchLogsToTerraform)(struct.cloudwatchLogs),
        s3_logs: cdktf.listMapper(codebuildProjectLogsConfigS3LogsToTerraform)(struct.s3Logs)
    };
}
function codebuildProjectSecondaryArtifactsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        artifact_identifier: cdktf.stringToTerraform(struct.artifactIdentifier),
        encryption_disabled: cdktf.booleanToTerraform(struct.encryptionDisabled),
        location: cdktf.stringToTerraform(struct.location),
        name: cdktf.stringToTerraform(struct.name),
        namespace_type: cdktf.stringToTerraform(struct.namespaceType),
        override_artifact_name: cdktf.booleanToTerraform(struct.overrideArtifactName),
        packaging: cdktf.stringToTerraform(struct.packaging),
        path: cdktf.stringToTerraform(struct.path),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function codebuildProjectSecondarySourcesAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource: cdktf.stringToTerraform(struct.resource),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        context: cdktf.stringToTerraform(struct.context),
        target_url: cdktf.stringToTerraform(struct.targetUrl)
    };
}
function codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fetch_submodules: cdktf.booleanToTerraform(struct.fetchSubmodules)
    };
}
function codebuildProjectSecondarySourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        buildspec: cdktf.stringToTerraform(struct.buildspec),
        git_clone_depth: cdktf.numberToTerraform(struct.gitCloneDepth),
        insecure_ssl: cdktf.booleanToTerraform(struct.insecureSsl),
        location: cdktf.stringToTerraform(struct.location),
        report_build_status: cdktf.booleanToTerraform(struct.reportBuildStatus),
        source_identifier: cdktf.stringToTerraform(struct.sourceIdentifier),
        type: cdktf.stringToTerraform(struct.type),
        auth: cdktf.listMapper(codebuildProjectSecondarySourcesAuthToTerraform)(struct.auth),
        build_status_config: cdktf.listMapper(codebuildProjectSecondarySourcesBuildStatusConfigToTerraform)(struct.buildStatusConfig),
        git_submodules_config: cdktf.listMapper(codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform)(struct.gitSubmodulesConfig)
    };
}
function codebuildProjectSourceAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource: cdktf.stringToTerraform(struct.resource),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function codebuildProjectSourceBuildStatusConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        context: cdktf.stringToTerraform(struct.context),
        target_url: cdktf.stringToTerraform(struct.targetUrl)
    };
}
function codebuildProjectSourceGitSubmodulesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fetch_submodules: cdktf.booleanToTerraform(struct.fetchSubmodules)
    };
}
function codebuildProjectSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        buildspec: cdktf.stringToTerraform(struct.buildspec),
        git_clone_depth: cdktf.numberToTerraform(struct.gitCloneDepth),
        insecure_ssl: cdktf.booleanToTerraform(struct.insecureSsl),
        location: cdktf.stringToTerraform(struct.location),
        report_build_status: cdktf.booleanToTerraform(struct.reportBuildStatus),
        type: cdktf.stringToTerraform(struct.type),
        auth: cdktf.listMapper(codebuildProjectSourceAuthToTerraform)(struct.auth),
        build_status_config: cdktf.listMapper(codebuildProjectSourceBuildStatusConfigToTerraform)(struct.buildStatusConfig),
        git_submodules_config: cdktf.listMapper(codebuildProjectSourceGitSubmodulesConfigToTerraform)(struct.gitSubmodulesConfig)
    };
}
function codebuildProjectVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
        vpc_id: cdktf.stringToTerraform(struct.vpcId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project}
*/
var CodebuildProject = /** @class */ (function (_super) {
    __extends(CodebuildProject, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildProjectConfig
    */
    function CodebuildProject(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codebuild_project',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._badgeEnabled = config.badgeEnabled;
        _this._buildTimeout = config.buildTimeout;
        _this._concurrentBuildLimit = config.concurrentBuildLimit;
        _this._description = config.description;
        _this._encryptionKey = config.encryptionKey;
        _this._name = config.name;
        _this._queuedTimeout = config.queuedTimeout;
        _this._serviceRole = config.serviceRole;
        _this._sourceVersion = config.sourceVersion;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._artifacts = config.artifacts;
        _this._buildBatchConfig = config.buildBatchConfig;
        _this._cache = config.cache;
        _this._environment = config.environment;
        _this._fileSystemLocations = config.fileSystemLocations;
        _this._logsConfig = config.logsConfig;
        _this._secondaryArtifacts = config.secondaryArtifacts;
        _this._secondarySources = config.secondarySources;
        _this._source = config.source;
        _this._vpcConfig = config.vpcConfig;
        return _this;
    }
    Object.defineProperty(CodebuildProject.prototype, "arn", {
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
    Object.defineProperty(CodebuildProject.prototype, "badgeEnabled", {
        get: function () {
            return this.getBooleanAttribute('badge_enabled');
        },
        set: function (value) {
            this._badgeEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetBadgeEnabled = function () {
        this._badgeEnabled = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "badgeEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._badgeEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "badgeUrl", {
        // badge_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('badge_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "buildTimeout", {
        get: function () {
            return this.getNumberAttribute('build_timeout');
        },
        set: function (value) {
            this._buildTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetBuildTimeout = function () {
        this._buildTimeout = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "buildTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "concurrentBuildLimit", {
        get: function () {
            return this.getNumberAttribute('concurrent_build_limit');
        },
        set: function (value) {
            this._concurrentBuildLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetConcurrentBuildLimit = function () {
        this._concurrentBuildLimit = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "concurrentBuildLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._concurrentBuildLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "encryptionKey", {
        get: function () {
            return this.getStringAttribute('encryption_key');
        },
        set: function (value) {
            this._encryptionKey = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetEncryptionKey = function () {
        this._encryptionKey = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "encryptionKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "queuedTimeout", {
        get: function () {
            return this.getNumberAttribute('queued_timeout');
        },
        set: function (value) {
            this._queuedTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetQueuedTimeout = function () {
        this._queuedTimeout = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "queuedTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queuedTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "serviceRole", {
        get: function () {
            return this.getStringAttribute('service_role');
        },
        set: function (value) {
            this._serviceRole = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "serviceRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "sourceVersion", {
        get: function () {
            return this.getStringAttribute('source_version');
        },
        set: function (value) {
            this._sourceVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetSourceVersion = function () {
        this._sourceVersion = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "sourceVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "artifacts", {
        get: function () {
            return this.interpolationForAttribute('artifacts');
        },
        set: function (value) {
            this._artifacts = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "artifactsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._artifacts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "buildBatchConfig", {
        get: function () {
            return this.interpolationForAttribute('build_batch_config');
        },
        set: function (value) {
            this._buildBatchConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetBuildBatchConfig = function () {
        this._buildBatchConfig = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "buildBatchConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildBatchConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "cache", {
        get: function () {
            return this.interpolationForAttribute('cache');
        },
        set: function (value) {
            this._cache = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetCache = function () {
        this._cache = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "cacheInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cache;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "environment", {
        get: function () {
            return this.interpolationForAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "fileSystemLocations", {
        get: function () {
            return this.interpolationForAttribute('file_system_locations');
        },
        set: function (value) {
            this._fileSystemLocations = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetFileSystemLocations = function () {
        this._fileSystemLocations = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "fileSystemLocationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemLocations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "logsConfig", {
        get: function () {
            return this.interpolationForAttribute('logs_config');
        },
        set: function (value) {
            this._logsConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetLogsConfig = function () {
        this._logsConfig = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "logsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logsConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "secondaryArtifacts", {
        get: function () {
            return this.interpolationForAttribute('secondary_artifacts');
        },
        set: function (value) {
            this._secondaryArtifacts = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetSecondaryArtifacts = function () {
        this._secondaryArtifacts = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "secondaryArtifactsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondaryArtifacts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "secondarySources", {
        get: function () {
            return this.interpolationForAttribute('secondary_sources');
        },
        set: function (value) {
            this._secondarySources = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetSecondarySources = function () {
        this._secondarySources = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "secondarySourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondarySources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "source", {
        get: function () {
            return this.interpolationForAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildProject.prototype, "vpcConfig", {
        get: function () {
            return this.interpolationForAttribute('vpc_config');
        },
        set: function (value) {
            this._vpcConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildProject.prototype.resetVpcConfig = function () {
        this._vpcConfig = undefined;
    };
    Object.defineProperty(CodebuildProject.prototype, "vpcConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodebuildProject.prototype.synthesizeAttributes = function () {
        return {
            badge_enabled: cdktf.booleanToTerraform(this._badgeEnabled),
            build_timeout: cdktf.numberToTerraform(this._buildTimeout),
            concurrent_build_limit: cdktf.numberToTerraform(this._concurrentBuildLimit),
            description: cdktf.stringToTerraform(this._description),
            encryption_key: cdktf.stringToTerraform(this._encryptionKey),
            name: cdktf.stringToTerraform(this._name),
            queued_timeout: cdktf.numberToTerraform(this._queuedTimeout),
            service_role: cdktf.stringToTerraform(this._serviceRole),
            source_version: cdktf.stringToTerraform(this._sourceVersion),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            artifacts: cdktf.listMapper(codebuildProjectArtifactsToTerraform)(this._artifacts),
            build_batch_config: cdktf.listMapper(codebuildProjectBuildBatchConfigToTerraform)(this._buildBatchConfig),
            cache: cdktf.listMapper(codebuildProjectCacheToTerraform)(this._cache),
            environment: cdktf.listMapper(codebuildProjectEnvironmentToTerraform)(this._environment),
            file_system_locations: cdktf.listMapper(codebuildProjectFileSystemLocationsToTerraform)(this._fileSystemLocations),
            logs_config: cdktf.listMapper(codebuildProjectLogsConfigToTerraform)(this._logsConfig),
            secondary_artifacts: cdktf.listMapper(codebuildProjectSecondaryArtifactsToTerraform)(this._secondaryArtifacts),
            secondary_sources: cdktf.listMapper(codebuildProjectSecondarySourcesToTerraform)(this._secondarySources),
            source: cdktf.listMapper(codebuildProjectSourceToTerraform)(this._source),
            vpc_config: cdktf.listMapper(codebuildProjectVpcConfigToTerraform)(this._vpcConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodebuildProject.tfResourceType = "aws_codebuild_project";
    return CodebuildProject;
}(cdktf.TerraformResource));
exports.CodebuildProject = CodebuildProject;
