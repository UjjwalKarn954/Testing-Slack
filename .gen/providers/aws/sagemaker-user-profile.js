"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html
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
exports.SagemakerUserProfile = void 0;
var cdktf = require("cdktf");
function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn)
    };
}
function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        default_resource_spec: cdktf.listMapper(sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform)(struct.defaultResourceSpec)
    };
}
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        app_image_config_name: cdktf.stringToTerraform(struct.appImageConfigName),
        image_name: cdktf.stringToTerraform(struct.imageName),
        image_version_number: cdktf.numberToTerraform(struct.imageVersionNumber)
    };
}
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn)
    };
}
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct.customImage),
        default_resource_spec: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform)(struct.defaultResourceSpec)
    };
}
function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        notebook_output_option: cdktf.stringToTerraform(struct.notebookOutputOption),
        s3_kms_key_id: cdktf.stringToTerraform(struct.s3KmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath)
    };
}
function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn)
    };
}
function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_resource_spec: cdktf.listMapper(sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform)(struct.defaultResourceSpec)
    };
}
function sagemakerUserProfileUserSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        execution_role: cdktf.stringToTerraform(struct.executionRole),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        jupyter_server_app_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform)(struct.jupyterServerAppSettings),
        kernel_gateway_app_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform)(struct.kernelGatewayAppSettings),
        sharing_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsSharingSettingsToTerraform)(struct.sharingSettings),
        tensor_board_app_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform)(struct.tensorBoardAppSettings)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile}
*/
var SagemakerUserProfile = /** @class */ (function (_super) {
    __extends(SagemakerUserProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerUserProfileConfig
    */
    function SagemakerUserProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_user_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domainId = config.domainId;
        _this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
        _this._singleSignOnUserValue = config.singleSignOnUserValue;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._userProfileName = config.userProfileName;
        _this._userSettings = config.userSettings;
        return _this;
    }
    Object.defineProperty(SagemakerUserProfile.prototype, "arn", {
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
    Object.defineProperty(SagemakerUserProfile.prototype, "domainId", {
        get: function () {
            return this.getStringAttribute('domain_id');
        },
        set: function (value) {
            this._domainId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "domainIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "homeEfsFileSystemUid", {
        // home_efs_file_system_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('home_efs_file_system_uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "singleSignOnUserIdentifier", {
        get: function () {
            return this.getStringAttribute('single_sign_on_user_identifier');
        },
        set: function (value) {
            this._singleSignOnUserIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerUserProfile.prototype.resetSingleSignOnUserIdentifier = function () {
        this._singleSignOnUserIdentifier = undefined;
    };
    Object.defineProperty(SagemakerUserProfile.prototype, "singleSignOnUserIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._singleSignOnUserIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "singleSignOnUserValue", {
        get: function () {
            return this.getStringAttribute('single_sign_on_user_value');
        },
        set: function (value) {
            this._singleSignOnUserValue = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerUserProfile.prototype.resetSingleSignOnUserValue = function () {
        this._singleSignOnUserValue = undefined;
    };
    Object.defineProperty(SagemakerUserProfile.prototype, "singleSignOnUserValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._singleSignOnUserValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerUserProfile.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerUserProfile.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerUserProfile.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerUserProfile.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "userProfileName", {
        get: function () {
            return this.getStringAttribute('user_profile_name');
        },
        set: function (value) {
            this._userProfileName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "userProfileNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userProfileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerUserProfile.prototype, "userSettings", {
        get: function () {
            return this.interpolationForAttribute('user_settings');
        },
        set: function (value) {
            this._userSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerUserProfile.prototype.resetUserSettings = function () {
        this._userSettings = undefined;
    };
    Object.defineProperty(SagemakerUserProfile.prototype, "userSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userSettings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerUserProfile.prototype.synthesizeAttributes = function () {
        return {
            domain_id: cdktf.stringToTerraform(this._domainId),
            single_sign_on_user_identifier: cdktf.stringToTerraform(this._singleSignOnUserIdentifier),
            single_sign_on_user_value: cdktf.stringToTerraform(this._singleSignOnUserValue),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_profile_name: cdktf.stringToTerraform(this._userProfileName),
            user_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsToTerraform)(this._userSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerUserProfile.tfResourceType = "aws_sagemaker_user_profile";
    return SagemakerUserProfile;
}(cdktf.TerraformResource));
exports.SagemakerUserProfile = SagemakerUserProfile;
