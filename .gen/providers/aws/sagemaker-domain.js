"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html
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
exports.SagemakerDomain = void 0;
var cdktf = require("cdktf");
function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn)
    };
}
function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        default_resource_spec: cdktf.listMapper(sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform)(struct.defaultResourceSpec)
    };
}
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        app_image_config_name: cdktf.stringToTerraform(struct.appImageConfigName),
        image_name: cdktf.stringToTerraform(struct.imageName),
        image_version_number: cdktf.numberToTerraform(struct.imageVersionNumber)
    };
}
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn)
    };
}
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct.customImage),
        default_resource_spec: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform)(struct.defaultResourceSpec)
    };
}
function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        notebook_output_option: cdktf.stringToTerraform(struct.notebookOutputOption),
        s3_kms_key_id: cdktf.stringToTerraform(struct.s3KmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath)
    };
}
function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn)
    };
}
function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_resource_spec: cdktf.listMapper(sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform)(struct.defaultResourceSpec)
    };
}
function sagemakerDomainDefaultUserSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        execution_role: cdktf.stringToTerraform(struct.executionRole),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        jupyter_server_app_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform)(struct.jupyterServerAppSettings),
        kernel_gateway_app_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform)(struct.kernelGatewayAppSettings),
        sharing_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform)(struct.sharingSettings),
        tensor_board_app_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform)(struct.tensorBoardAppSettings)
    };
}
function sagemakerDomainRetentionPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        home_efs_file_system: cdktf.stringToTerraform(struct.homeEfsFileSystem)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain}
*/
var SagemakerDomain = /** @class */ (function (_super) {
    __extends(SagemakerDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDomainConfig
    */
    function SagemakerDomain(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appNetworkAccessType = config.appNetworkAccessType;
        _this._authMode = config.authMode;
        _this._domainName = config.domainName;
        _this._kmsKeyId = config.kmsKeyId;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        _this._defaultUserSettings = config.defaultUserSettings;
        _this._retentionPolicy = config.retentionPolicy;
        return _this;
    }
    Object.defineProperty(SagemakerDomain.prototype, "appNetworkAccessType", {
        get: function () {
            return this.getStringAttribute('app_network_access_type');
        },
        set: function (value) {
            this._appNetworkAccessType = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDomain.prototype.resetAppNetworkAccessType = function () {
        this._appNetworkAccessType = undefined;
    };
    Object.defineProperty(SagemakerDomain.prototype, "appNetworkAccessTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appNetworkAccessType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "authMode", {
        get: function () {
            return this.getStringAttribute('auth_mode');
        },
        set: function (value) {
            this._authMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "authModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "homeEfsFileSystemId", {
        // home_efs_file_system_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('home_efs_file_system_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDomain.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(SagemakerDomain.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "singleSignOnManagedApplicationInstanceId", {
        // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('single_sign_on_managed_application_instance_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDomain.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerDomain.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDomain.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerDomain.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "defaultUserSettings", {
        get: function () {
            return this.interpolationForAttribute('default_user_settings');
        },
        set: function (value) {
            this._defaultUserSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "defaultUserSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultUserSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerDomain.prototype, "retentionPolicy", {
        get: function () {
            return this.interpolationForAttribute('retention_policy');
        },
        set: function (value) {
            this._retentionPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerDomain.prototype.resetRetentionPolicy = function () {
        this._retentionPolicy = undefined;
    };
    Object.defineProperty(SagemakerDomain.prototype, "retentionPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retentionPolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerDomain.prototype.synthesizeAttributes = function () {
        return {
            app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
            auth_mode: cdktf.stringToTerraform(this._authMode),
            domain_name: cdktf.stringToTerraform(this._domainName),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            default_user_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsToTerraform)(this._defaultUserSettings),
            retention_policy: cdktf.listMapper(sagemakerDomainRetentionPolicyToTerraform)(this._retentionPolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerDomain.tfResourceType = "aws_sagemaker_domain";
    return SagemakerDomain;
}(cdktf.TerraformResource));
exports.SagemakerDomain = SagemakerDomain;
