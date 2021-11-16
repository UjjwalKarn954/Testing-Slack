"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html
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
exports.GlueDevEndpoint = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html aws_glue_dev_endpoint}
*/
var GlueDevEndpoint = /** @class */ (function (_super) {
    __extends(GlueDevEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html aws_glue_dev_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDevEndpointConfig
    */
    function GlueDevEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_dev_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arguments = config.arguments;
        _this._extraJarsS3Path = config.extraJarsS3Path;
        _this._extraPythonLibsS3Path = config.extraPythonLibsS3Path;
        _this._glueVersion = config.glueVersion;
        _this._name = config.name;
        _this._numberOfNodes = config.numberOfNodes;
        _this._numberOfWorkers = config.numberOfWorkers;
        _this._publicKey = config.publicKey;
        _this._publicKeys = config.publicKeys;
        _this._roleArn = config.roleArn;
        _this._securityConfiguration = config.securityConfiguration;
        _this._securityGroupIds = config.securityGroupIds;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._workerType = config.workerType;
        return _this;
    }
    Object.defineProperty(GlueDevEndpoint.prototype, "arguments", {
        get: function () {
            return this.interpolationForAttribute('arguments');
        },
        set: function (value) {
            this._arguments = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetArguments = function () {
        this._arguments = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "argumentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arguments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "extraJarsS3Path", {
        get: function () {
            return this.getStringAttribute('extra_jars_s3_path');
        },
        set: function (value) {
            this._extraJarsS3Path = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetExtraJarsS3Path = function () {
        this._extraJarsS3Path = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "extraJarsS3PathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extraJarsS3Path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "extraPythonLibsS3Path", {
        get: function () {
            return this.getStringAttribute('extra_python_libs_s3_path');
        },
        set: function (value) {
            this._extraPythonLibsS3Path = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetExtraPythonLibsS3Path = function () {
        this._extraPythonLibsS3Path = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "extraPythonLibsS3PathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extraPythonLibsS3Path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "failureReason", {
        // failure_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('failure_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "glueVersion", {
        get: function () {
            return this.getStringAttribute('glue_version');
        },
        set: function (value) {
            this._glueVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetGlueVersion = function () {
        this._glueVersion = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "glueVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._glueVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "numberOfNodes", {
        get: function () {
            return this.getNumberAttribute('number_of_nodes');
        },
        set: function (value) {
            this._numberOfNodes = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetNumberOfNodes = function () {
        this._numberOfNodes = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "numberOfNodesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numberOfNodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "numberOfWorkers", {
        get: function () {
            return this.getNumberAttribute('number_of_workers');
        },
        set: function (value) {
            this._numberOfWorkers = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetNumberOfWorkers = function () {
        this._numberOfWorkers = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "numberOfWorkersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numberOfWorkers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "privateAddress", {
        // private_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "publicAddress", {
        // public_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "publicKey", {
        get: function () {
            return this.getStringAttribute('public_key');
        },
        set: function (value) {
            this._publicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetPublicKey = function () {
        this._publicKey = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "publicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "publicKeys", {
        get: function () {
            return this.getListAttribute('public_keys');
        },
        set: function (value) {
            this._publicKeys = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetPublicKeys = function () {
        this._publicKeys = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "publicKeysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKeys;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "securityConfiguration", {
        get: function () {
            return this.getStringAttribute('security_configuration');
        },
        set: function (value) {
            this._securityConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetSecurityConfiguration = function () {
        this._securityConfiguration = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "securityConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "workerType", {
        get: function () {
            return this.getStringAttribute('worker_type');
        },
        set: function (value) {
            this._workerType = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDevEndpoint.prototype.resetWorkerType = function () {
        this._workerType = undefined;
    };
    Object.defineProperty(GlueDevEndpoint.prototype, "workerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "yarnEndpointAddress", {
        // yarn_endpoint_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('yarn_endpoint_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDevEndpoint.prototype, "zeppelinRemoteSparkInterpreterPort", {
        // zeppelin_remote_spark_interpreter_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('zeppelin_remote_spark_interpreter_port');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueDevEndpoint.prototype.synthesizeAttributes = function () {
        return {
            arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._arguments),
            extra_jars_s3_path: cdktf.stringToTerraform(this._extraJarsS3Path),
            extra_python_libs_s3_path: cdktf.stringToTerraform(this._extraPythonLibsS3Path),
            glue_version: cdktf.stringToTerraform(this._glueVersion),
            name: cdktf.stringToTerraform(this._name),
            number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
            number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
            public_key: cdktf.stringToTerraform(this._publicKey),
            public_keys: cdktf.listMapper(cdktf.stringToTerraform)(this._publicKeys),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            worker_type: cdktf.stringToTerraform(this._workerType)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueDevEndpoint.tfResourceType = "aws_glue_dev_endpoint";
    return GlueDevEndpoint;
}(cdktf.TerraformResource));
exports.GlueDevEndpoint = GlueDevEndpoint;
