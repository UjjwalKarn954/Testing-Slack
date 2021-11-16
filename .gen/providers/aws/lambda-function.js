"use strict";
// https://www.terraform.io/docs/providers/aws/r/lambda_function.html
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
exports.LambdaFunction = void 0;
var cdktf = require("cdktf");
function lambdaFunctionDeadLetterConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target_arn: cdktf.stringToTerraform(struct.targetArn)
    };
}
function lambdaFunctionEnvironmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.variables)
    };
}
function lambdaFunctionFileSystemConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        local_mount_path: cdktf.stringToTerraform(struct.localMountPath)
    };
}
function lambdaFunctionImageConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        command: cdktf.listMapper(cdktf.stringToTerraform)(struct.command),
        entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct.entryPoint),
        working_directory: cdktf.stringToTerraform(struct.workingDirectory)
    };
}
function lambdaFunctionTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
function lambdaFunctionTracingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode)
    };
}
function lambdaFunctionVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function}
*/
var LambdaFunction = /** @class */ (function (_super) {
    __extends(LambdaFunction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionConfig
    */
    function LambdaFunction(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_function',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._architectures = config.architectures;
        _this._codeSigningConfigArn = config.codeSigningConfigArn;
        _this._description = config.description;
        _this._filename = config.filename;
        _this._functionName = config.functionName;
        _this._handler = config.handler;
        _this._imageUri = config.imageUri;
        _this._kmsKeyArn = config.kmsKeyArn;
        _this._layers = config.layers;
        _this._memorySize = config.memorySize;
        _this._packageType = config.packageType;
        _this._publish = config.publish;
        _this._reservedConcurrentExecutions = config.reservedConcurrentExecutions;
        _this._role = config.role;
        _this._runtime = config.runtime;
        _this._s3Bucket = config.s3Bucket;
        _this._s3Key = config.s3Key;
        _this._s3ObjectVersion = config.s3ObjectVersion;
        _this._sourceCodeHash = config.sourceCodeHash;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeout = config.timeout;
        _this._deadLetterConfig = config.deadLetterConfig;
        _this._environment = config.environment;
        _this._fileSystemConfig = config.fileSystemConfig;
        _this._imageConfig = config.imageConfig;
        _this._timeouts = config.timeouts;
        _this._tracingConfig = config.tracingConfig;
        _this._vpcConfig = config.vpcConfig;
        return _this;
    }
    Object.defineProperty(LambdaFunction.prototype, "architectures", {
        get: function () {
            return this.getListAttribute('architectures');
        },
        set: function (value) {
            this._architectures = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetArchitectures = function () {
        this._architectures = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "architecturesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._architectures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "codeSigningConfigArn", {
        get: function () {
            return this.getStringAttribute('code_signing_config_arn');
        },
        set: function (value) {
            this._codeSigningConfigArn = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetCodeSigningConfigArn = function () {
        this._codeSigningConfigArn = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "codeSigningConfigArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._codeSigningConfigArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "filename", {
        get: function () {
            return this.getStringAttribute('filename');
        },
        set: function (value) {
            this._filename = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetFilename = function () {
        this._filename = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "filenameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filename;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "handler", {
        get: function () {
            return this.getStringAttribute('handler');
        },
        set: function (value) {
            this._handler = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetHandler = function () {
        this._handler = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "handlerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._handler;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "imageUri", {
        get: function () {
            return this.getStringAttribute('image_uri');
        },
        set: function (value) {
            this._imageUri = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetImageUri = function () {
        this._imageUri = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "imageUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "invokeArn", {
        // invoke_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invoke_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "kmsKeyArn", {
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        set: function (value) {
            this._kmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetKmsKeyArn = function () {
        this._kmsKeyArn = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "kmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "layers", {
        get: function () {
            return this.getListAttribute('layers');
        },
        set: function (value) {
            this._layers = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetLayers = function () {
        this._layers = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "layersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._layers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "memorySize", {
        get: function () {
            return this.getNumberAttribute('memory_size');
        },
        set: function (value) {
            this._memorySize = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetMemorySize = function () {
        this._memorySize = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "memorySizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memorySize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "packageType", {
        get: function () {
            return this.getStringAttribute('package_type');
        },
        set: function (value) {
            this._packageType = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetPackageType = function () {
        this._packageType = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "packageTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._packageType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "publish", {
        get: function () {
            return this.getBooleanAttribute('publish');
        },
        set: function (value) {
            this._publish = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetPublish = function () {
        this._publish = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "publishInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publish;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "qualifiedArn", {
        // qualified_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('qualified_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "reservedConcurrentExecutions", {
        get: function () {
            return this.getNumberAttribute('reserved_concurrent_executions');
        },
        set: function (value) {
            this._reservedConcurrentExecutions = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetReservedConcurrentExecutions = function () {
        this._reservedConcurrentExecutions = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "reservedConcurrentExecutionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reservedConcurrentExecutions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "runtime", {
        get: function () {
            return this.getStringAttribute('runtime');
        },
        set: function (value) {
            this._runtime = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetRuntime = function () {
        this._runtime = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "runtimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runtime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "s3Bucket", {
        get: function () {
            return this.getStringAttribute('s3_bucket');
        },
        set: function (value) {
            this._s3Bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetS3Bucket = function () {
        this._s3Bucket = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "s3BucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "s3Key", {
        get: function () {
            return this.getStringAttribute('s3_key');
        },
        set: function (value) {
            this._s3Key = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetS3Key = function () {
        this._s3Key = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "s3KeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "s3ObjectVersion", {
        get: function () {
            return this.getStringAttribute('s3_object_version');
        },
        set: function (value) {
            this._s3ObjectVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetS3ObjectVersion = function () {
        this._s3ObjectVersion = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "s3ObjectVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3ObjectVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "signingJobArn", {
        // signing_job_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_job_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "signingProfileVersionArn", {
        // signing_profile_version_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_profile_version_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "sourceCodeHash", {
        get: function () {
            return this.getStringAttribute('source_code_hash');
        },
        set: function (value) {
            this._sourceCodeHash = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetSourceCodeHash = function () {
        this._sourceCodeHash = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "sourceCodeHashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceCodeHash;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "sourceCodeSize", {
        // source_code_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('source_code_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "timeout", {
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "deadLetterConfig", {
        get: function () {
            return this.interpolationForAttribute('dead_letter_config');
        },
        set: function (value) {
            this._deadLetterConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetDeadLetterConfig = function () {
        this._deadLetterConfig = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "deadLetterConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deadLetterConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "environment", {
        get: function () {
            return this.interpolationForAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "fileSystemConfig", {
        get: function () {
            return this.interpolationForAttribute('file_system_config');
        },
        set: function (value) {
            this._fileSystemConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetFileSystemConfig = function () {
        this._fileSystemConfig = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "fileSystemConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "imageConfig", {
        get: function () {
            return this.interpolationForAttribute('image_config');
        },
        set: function (value) {
            this._imageConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetImageConfig = function () {
        this._imageConfig = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "imageConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "tracingConfig", {
        get: function () {
            return this.interpolationForAttribute('tracing_config');
        },
        set: function (value) {
            this._tracingConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetTracingConfig = function () {
        this._tracingConfig = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "tracingConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tracingConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunction.prototype, "vpcConfig", {
        get: function () {
            return this.interpolationForAttribute('vpc_config');
        },
        set: function (value) {
            this._vpcConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunction.prototype.resetVpcConfig = function () {
        this._vpcConfig = undefined;
    };
    Object.defineProperty(LambdaFunction.prototype, "vpcConfigInput", {
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
    LambdaFunction.prototype.synthesizeAttributes = function () {
        return {
            architectures: cdktf.listMapper(cdktf.stringToTerraform)(this._architectures),
            code_signing_config_arn: cdktf.stringToTerraform(this._codeSigningConfigArn),
            description: cdktf.stringToTerraform(this._description),
            filename: cdktf.stringToTerraform(this._filename),
            function_name: cdktf.stringToTerraform(this._functionName),
            handler: cdktf.stringToTerraform(this._handler),
            image_uri: cdktf.stringToTerraform(this._imageUri),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            layers: cdktf.listMapper(cdktf.stringToTerraform)(this._layers),
            memory_size: cdktf.numberToTerraform(this._memorySize),
            package_type: cdktf.stringToTerraform(this._packageType),
            publish: cdktf.booleanToTerraform(this._publish),
            reserved_concurrent_executions: cdktf.numberToTerraform(this._reservedConcurrentExecutions),
            role: cdktf.stringToTerraform(this._role),
            runtime: cdktf.stringToTerraform(this._runtime),
            s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
            s3_key: cdktf.stringToTerraform(this._s3Key),
            s3_object_version: cdktf.stringToTerraform(this._s3ObjectVersion),
            source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeout: cdktf.numberToTerraform(this._timeout),
            dead_letter_config: cdktf.listMapper(lambdaFunctionDeadLetterConfigToTerraform)(this._deadLetterConfig),
            environment: cdktf.listMapper(lambdaFunctionEnvironmentToTerraform)(this._environment),
            file_system_config: cdktf.listMapper(lambdaFunctionFileSystemConfigToTerraform)(this._fileSystemConfig),
            image_config: cdktf.listMapper(lambdaFunctionImageConfigToTerraform)(this._imageConfig),
            timeouts: lambdaFunctionTimeoutsToTerraform(this._timeouts),
            tracing_config: cdktf.listMapper(lambdaFunctionTracingConfigToTerraform)(this._tracingConfig),
            vpc_config: cdktf.listMapper(lambdaFunctionVpcConfigToTerraform)(this._vpcConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LambdaFunction.tfResourceType = "aws_lambda_function";
    return LambdaFunction;
}(cdktf.TerraformResource));
exports.LambdaFunction = LambdaFunction;
