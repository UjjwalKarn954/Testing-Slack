"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html
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
exports.SagemakerNotebookInstance = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html aws_sagemaker_notebook_instance}
*/
var SagemakerNotebookInstance = /** @class */ (function (_super) {
    __extends(SagemakerNotebookInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html aws_sagemaker_notebook_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerNotebookInstanceConfig
    */
    function SagemakerNotebookInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_notebook_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._additionalCodeRepositories = config.additionalCodeRepositories;
        _this._defaultCodeRepository = config.defaultCodeRepository;
        _this._directInternetAccess = config.directInternetAccess;
        _this._instanceType = config.instanceType;
        _this._kmsKeyId = config.kmsKeyId;
        _this._lifecycleConfigName = config.lifecycleConfigName;
        _this._name = config.name;
        _this._platformIdentifier = config.platformIdentifier;
        _this._roleArn = config.roleArn;
        _this._rootAccess = config.rootAccess;
        _this._securityGroups = config.securityGroups;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._volumeSize = config.volumeSize;
        return _this;
    }
    Object.defineProperty(SagemakerNotebookInstance.prototype, "additionalCodeRepositories", {
        get: function () {
            return this.getListAttribute('additional_code_repositories');
        },
        set: function (value) {
            this._additionalCodeRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetAdditionalCodeRepositories = function () {
        this._additionalCodeRepositories = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "additionalCodeRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._additionalCodeRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "defaultCodeRepository", {
        get: function () {
            return this.getStringAttribute('default_code_repository');
        },
        set: function (value) {
            this._defaultCodeRepository = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetDefaultCodeRepository = function () {
        this._defaultCodeRepository = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "defaultCodeRepositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultCodeRepository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "directInternetAccess", {
        get: function () {
            return this.getStringAttribute('direct_internet_access');
        },
        set: function (value) {
            this._directInternetAccess = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetDirectInternetAccess = function () {
        this._directInternetAccess = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "directInternetAccessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directInternetAccess;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "lifecycleConfigName", {
        get: function () {
            return this.getStringAttribute('lifecycle_config_name');
        },
        set: function (value) {
            this._lifecycleConfigName = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetLifecycleConfigName = function () {
        this._lifecycleConfigName = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "lifecycleConfigNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lifecycleConfigName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "platformIdentifier", {
        get: function () {
            return this.getStringAttribute('platform_identifier');
        },
        set: function (value) {
            this._platformIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetPlatformIdentifier = function () {
        this._platformIdentifier = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "platformIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platformIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "rootAccess", {
        get: function () {
            return this.getStringAttribute('root_access');
        },
        set: function (value) {
            this._rootAccess = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetRootAccess = function () {
        this._rootAccess = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "rootAccessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootAccess;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstance.prototype, "volumeSize", {
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        set: function (value) {
            this._volumeSize = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstance.prototype.resetVolumeSize = function () {
        this._volumeSize = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstance.prototype, "volumeSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeSize;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerNotebookInstance.prototype.synthesizeAttributes = function () {
        return {
            additional_code_repositories: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalCodeRepositories),
            default_code_repository: cdktf.stringToTerraform(this._defaultCodeRepository),
            direct_internet_access: cdktf.stringToTerraform(this._directInternetAccess),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            lifecycle_config_name: cdktf.stringToTerraform(this._lifecycleConfigName),
            name: cdktf.stringToTerraform(this._name),
            platform_identifier: cdktf.stringToTerraform(this._platformIdentifier),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            root_access: cdktf.stringToTerraform(this._rootAccess),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            volume_size: cdktf.numberToTerraform(this._volumeSize)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerNotebookInstance.tfResourceType = "aws_sagemaker_notebook_instance";
    return SagemakerNotebookInstance;
}(cdktf.TerraformResource));
exports.SagemakerNotebookInstance = SagemakerNotebookInstance;
