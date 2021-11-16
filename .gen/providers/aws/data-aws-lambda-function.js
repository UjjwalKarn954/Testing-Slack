"use strict";
// https://www.terraform.io/docs/providers/aws/d/lambda_function.html
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
exports.DataAwsLambdaFunction = exports.DataAwsLambdaFunctionVpcConfig = exports.DataAwsLambdaFunctionTracingConfig = exports.DataAwsLambdaFunctionFileSystemConfig = exports.DataAwsLambdaFunctionEnvironment = exports.DataAwsLambdaFunctionDeadLetterConfig = void 0;
var cdktf = require("cdktf");
var DataAwsLambdaFunctionDeadLetterConfig = /** @class */ (function (_super) {
    __extends(DataAwsLambdaFunctionDeadLetterConfig, _super);
    function DataAwsLambdaFunctionDeadLetterConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLambdaFunctionDeadLetterConfig.prototype, "targetArn", {
        // target_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_arn');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLambdaFunctionDeadLetterConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsLambdaFunctionDeadLetterConfig = DataAwsLambdaFunctionDeadLetterConfig;
var DataAwsLambdaFunctionEnvironment = /** @class */ (function (_super) {
    __extends(DataAwsLambdaFunctionEnvironment, _super);
    function DataAwsLambdaFunctionEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLambdaFunctionEnvironment.prototype, "variables", {
        // variables - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('variables');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLambdaFunctionEnvironment;
}(cdktf.ComplexComputedList));
exports.DataAwsLambdaFunctionEnvironment = DataAwsLambdaFunctionEnvironment;
var DataAwsLambdaFunctionFileSystemConfig = /** @class */ (function (_super) {
    __extends(DataAwsLambdaFunctionFileSystemConfig, _super);
    function DataAwsLambdaFunctionFileSystemConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLambdaFunctionFileSystemConfig.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunctionFileSystemConfig.prototype, "localMountPath", {
        // local_mount_path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('local_mount_path');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLambdaFunctionFileSystemConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsLambdaFunctionFileSystemConfig = DataAwsLambdaFunctionFileSystemConfig;
var DataAwsLambdaFunctionTracingConfig = /** @class */ (function (_super) {
    __extends(DataAwsLambdaFunctionTracingConfig, _super);
    function DataAwsLambdaFunctionTracingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLambdaFunctionTracingConfig.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLambdaFunctionTracingConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsLambdaFunctionTracingConfig = DataAwsLambdaFunctionTracingConfig;
var DataAwsLambdaFunctionVpcConfig = /** @class */ (function (_super) {
    __extends(DataAwsLambdaFunctionVpcConfig, _super);
    function DataAwsLambdaFunctionVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLambdaFunctionVpcConfig.prototype, "securityGroupIds", {
        // security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunctionVpcConfig.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunctionVpcConfig.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLambdaFunctionVpcConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsLambdaFunctionVpcConfig = DataAwsLambdaFunctionVpcConfig;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html aws_lambda_function}
*/
var DataAwsLambdaFunction = /** @class */ (function (_super) {
    __extends(DataAwsLambdaFunction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html aws_lambda_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaFunctionConfig
    */
    function DataAwsLambdaFunction(scope, id, config) {
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
        _this._functionName = config.functionName;
        _this._qualifier = config.qualifier;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsLambdaFunction.prototype, "architectures", {
        // ==========
        // ATTRIBUTES
        // ==========
        // architectures - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('architectures');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "codeSigningConfigArn", {
        // code_signing_config_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code_signing_config_arn');
        },
        enumerable: false,
        configurable: true
    });
    // dead_letter_config - computed: true, optional: false, required: false
    DataAwsLambdaFunction.prototype.deadLetterConfig = function (index) {
        return new DataAwsLambdaFunctionDeadLetterConfig(this, 'dead_letter_config', index);
    };
    Object.defineProperty(DataAwsLambdaFunction.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    // environment - computed: true, optional: false, required: false
    DataAwsLambdaFunction.prototype.environment = function (index) {
        return new DataAwsLambdaFunctionEnvironment(this, 'environment', index);
    };
    // file_system_config - computed: true, optional: false, required: false
    DataAwsLambdaFunction.prototype.fileSystemConfig = function (index) {
        return new DataAwsLambdaFunctionFileSystemConfig(this, 'file_system_config', index);
    };
    Object.defineProperty(DataAwsLambdaFunction.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "handler", {
        // handler - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('handler');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "invokeArn", {
        // invoke_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invoke_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "kmsKeyArn", {
        // kms_key_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "layers", {
        // layers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('layers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "memorySize", {
        // memory_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('memory_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "qualifiedArn", {
        // qualified_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('qualified_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "qualifier", {
        get: function () {
            return this.getStringAttribute('qualifier');
        },
        set: function (value) {
            this._qualifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLambdaFunction.prototype.resetQualifier = function () {
        this._qualifier = undefined;
    };
    Object.defineProperty(DataAwsLambdaFunction.prototype, "qualifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._qualifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "reservedConcurrentExecutions", {
        // reserved_concurrent_executions - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('reserved_concurrent_executions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "role", {
        // role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "runtime", {
        // runtime - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('runtime');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "signingJobArn", {
        // signing_job_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_job_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "signingProfileVersionArn", {
        // signing_profile_version_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_profile_version_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "sourceCodeHash", {
        // source_code_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_code_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "sourceCodeSize", {
        // source_code_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('source_code_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLambdaFunction.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsLambdaFunction.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaFunction.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    // tracing_config - computed: true, optional: false, required: false
    DataAwsLambdaFunction.prototype.tracingConfig = function (index) {
        return new DataAwsLambdaFunctionTracingConfig(this, 'tracing_config', index);
    };
    Object.defineProperty(DataAwsLambdaFunction.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // vpc_config - computed: true, optional: false, required: false
    DataAwsLambdaFunction.prototype.vpcConfig = function (index) {
        return new DataAwsLambdaFunctionVpcConfig(this, 'vpc_config', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsLambdaFunction.prototype.synthesizeAttributes = function () {
        return {
            function_name: cdktf.stringToTerraform(this._functionName),
            qualifier: cdktf.stringToTerraform(this._qualifier),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLambdaFunction.tfResourceType = "aws_lambda_function";
    return DataAwsLambdaFunction;
}(cdktf.TerraformDataSource));
exports.DataAwsLambdaFunction = DataAwsLambdaFunction;
