"use strict";
// https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html
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
exports.AppstreamImageBuilder = void 0;
var cdktf = require("cdktf");
function appstreamImageBuilderAccessEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_type: cdktf.stringToTerraform(struct.endpointType),
        vpce_id: cdktf.stringToTerraform(struct.vpceId)
    };
}
function appstreamImageBuilderDomainJoinInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        directory_name: cdktf.stringToTerraform(struct.directoryName),
        organizational_unit_distinguished_name: cdktf.stringToTerraform(struct.organizationalUnitDistinguishedName)
    };
}
function appstreamImageBuilderVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html aws_appstream_image_builder}
*/
var AppstreamImageBuilder = /** @class */ (function (_super) {
    __extends(AppstreamImageBuilder, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html aws_appstream_image_builder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamImageBuilderConfig
    */
    function AppstreamImageBuilder(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appstream_image_builder',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appstreamAgentVersion = config.appstreamAgentVersion;
        _this._description = config.description;
        _this._displayName = config.displayName;
        _this._enableDefaultInternetAccess = config.enableDefaultInternetAccess;
        _this._iamRoleArn = config.iamRoleArn;
        _this._imageArn = config.imageArn;
        _this._imageName = config.imageName;
        _this._instanceType = config.instanceType;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._accessEndpoint = config.accessEndpoint;
        _this._domainJoinInfo = config.domainJoinInfo;
        _this._vpcConfig = config.vpcConfig;
        return _this;
    }
    Object.defineProperty(AppstreamImageBuilder.prototype, "appstreamAgentVersion", {
        get: function () {
            return this.getStringAttribute('appstream_agent_version');
        },
        set: function (value) {
            this._appstreamAgentVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetAppstreamAgentVersion = function () {
        this._appstreamAgentVersion = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "appstreamAgentVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appstreamAgentVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "displayName", {
        get: function () {
            return this.getStringAttribute('display_name');
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetDisplayName = function () {
        this._displayName = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "displayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "enableDefaultInternetAccess", {
        get: function () {
            return this.getBooleanAttribute('enable_default_internet_access');
        },
        set: function (value) {
            this._enableDefaultInternetAccess = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetEnableDefaultInternetAccess = function () {
        this._enableDefaultInternetAccess = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "enableDefaultInternetAccessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableDefaultInternetAccess;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "iamRoleArn", {
        get: function () {
            return this.getStringAttribute('iam_role_arn');
        },
        set: function (value) {
            this._iamRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetIamRoleArn = function () {
        this._iamRoleArn = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "iamRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "imageArn", {
        get: function () {
            return this.getStringAttribute('image_arn');
        },
        set: function (value) {
            this._imageArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetImageArn = function () {
        this._imageArn = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "imageArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "imageName", {
        get: function () {
            return this.getStringAttribute('image_name');
        },
        set: function (value) {
            this._imageName = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetImageName = function () {
        this._imageName = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "imageNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "accessEndpoint", {
        get: function () {
            return this.interpolationForAttribute('access_endpoint');
        },
        set: function (value) {
            this._accessEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetAccessEndpoint = function () {
        this._accessEndpoint = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "accessEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "domainJoinInfo", {
        get: function () {
            return this.interpolationForAttribute('domain_join_info');
        },
        set: function (value) {
            this._domainJoinInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetDomainJoinInfo = function () {
        this._domainJoinInfo = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "domainJoinInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainJoinInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamImageBuilder.prototype, "vpcConfig", {
        get: function () {
            return this.interpolationForAttribute('vpc_config');
        },
        set: function (value) {
            this._vpcConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamImageBuilder.prototype.resetVpcConfig = function () {
        this._vpcConfig = undefined;
    };
    Object.defineProperty(AppstreamImageBuilder.prototype, "vpcConfigInput", {
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
    AppstreamImageBuilder.prototype.synthesizeAttributes = function () {
        return {
            appstream_agent_version: cdktf.stringToTerraform(this._appstreamAgentVersion),
            description: cdktf.stringToTerraform(this._description),
            display_name: cdktf.stringToTerraform(this._displayName),
            enable_default_internet_access: cdktf.booleanToTerraform(this._enableDefaultInternetAccess),
            iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
            image_arn: cdktf.stringToTerraform(this._imageArn),
            image_name: cdktf.stringToTerraform(this._imageName),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            access_endpoint: cdktf.listMapper(appstreamImageBuilderAccessEndpointToTerraform)(this._accessEndpoint),
            domain_join_info: cdktf.listMapper(appstreamImageBuilderDomainJoinInfoToTerraform)(this._domainJoinInfo),
            vpc_config: cdktf.listMapper(appstreamImageBuilderVpcConfigToTerraform)(this._vpcConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppstreamImageBuilder.tfResourceType = "aws_appstream_image_builder";
    return AppstreamImageBuilder;
}(cdktf.TerraformResource));
exports.AppstreamImageBuilder = AppstreamImageBuilder;
