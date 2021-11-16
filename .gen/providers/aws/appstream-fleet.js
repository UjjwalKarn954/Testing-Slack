"use strict";
// https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html
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
exports.AppstreamFleet = void 0;
var cdktf = require("cdktf");
function appstreamFleetComputeCapacityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        desired_instances: cdktf.numberToTerraform(struct.desiredInstances)
    };
}
function appstreamFleetDomainJoinInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        directory_name: cdktf.stringToTerraform(struct.directoryName),
        organizational_unit_distinguished_name: cdktf.stringToTerraform(struct.organizationalUnitDistinguishedName)
    };
}
function appstreamFleetVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html aws_appstream_fleet}
*/
var AppstreamFleet = /** @class */ (function (_super) {
    __extends(AppstreamFleet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html aws_appstream_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamFleetConfig
    */
    function AppstreamFleet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appstream_fleet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._disconnectTimeoutInSeconds = config.disconnectTimeoutInSeconds;
        _this._displayName = config.displayName;
        _this._enableDefaultInternetAccess = config.enableDefaultInternetAccess;
        _this._fleetType = config.fleetType;
        _this._iamRoleArn = config.iamRoleArn;
        _this._idleDisconnectTimeoutInSeconds = config.idleDisconnectTimeoutInSeconds;
        _this._imageArn = config.imageArn;
        _this._imageName = config.imageName;
        _this._instanceType = config.instanceType;
        _this._maxUserDurationInSeconds = config.maxUserDurationInSeconds;
        _this._name = config.name;
        _this._streamView = config.streamView;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._computeCapacity = config.computeCapacity;
        _this._domainJoinInfo = config.domainJoinInfo;
        _this._vpcConfig = config.vpcConfig;
        return _this;
    }
    Object.defineProperty(AppstreamFleet.prototype, "arn", {
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
    Object.defineProperty(AppstreamFleet.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "disconnectTimeoutInSeconds", {
        get: function () {
            return this.getNumberAttribute('disconnect_timeout_in_seconds');
        },
        set: function (value) {
            this._disconnectTimeoutInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetDisconnectTimeoutInSeconds = function () {
        this._disconnectTimeoutInSeconds = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "disconnectTimeoutInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disconnectTimeoutInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "displayName", {
        get: function () {
            return this.getStringAttribute('display_name');
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetDisplayName = function () {
        this._displayName = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "displayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "enableDefaultInternetAccess", {
        get: function () {
            return this.getBooleanAttribute('enable_default_internet_access');
        },
        set: function (value) {
            this._enableDefaultInternetAccess = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetEnableDefaultInternetAccess = function () {
        this._enableDefaultInternetAccess = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "enableDefaultInternetAccessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableDefaultInternetAccess;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "fleetType", {
        get: function () {
            return this.getStringAttribute('fleet_type');
        },
        set: function (value) {
            this._fleetType = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetFleetType = function () {
        this._fleetType = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "fleetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fleetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "iamRoleArn", {
        get: function () {
            return this.getStringAttribute('iam_role_arn');
        },
        set: function (value) {
            this._iamRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetIamRoleArn = function () {
        this._iamRoleArn = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "iamRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "idleDisconnectTimeoutInSeconds", {
        get: function () {
            return this.getNumberAttribute('idle_disconnect_timeout_in_seconds');
        },
        set: function (value) {
            this._idleDisconnectTimeoutInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetIdleDisconnectTimeoutInSeconds = function () {
        this._idleDisconnectTimeoutInSeconds = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "idleDisconnectTimeoutInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idleDisconnectTimeoutInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "imageArn", {
        get: function () {
            return this.getStringAttribute('image_arn');
        },
        set: function (value) {
            this._imageArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetImageArn = function () {
        this._imageArn = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "imageArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "imageName", {
        get: function () {
            return this.getStringAttribute('image_name');
        },
        set: function (value) {
            this._imageName = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetImageName = function () {
        this._imageName = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "imageNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "maxUserDurationInSeconds", {
        get: function () {
            return this.getNumberAttribute('max_user_duration_in_seconds');
        },
        set: function (value) {
            this._maxUserDurationInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetMaxUserDurationInSeconds = function () {
        this._maxUserDurationInSeconds = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "maxUserDurationInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxUserDurationInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "streamView", {
        get: function () {
            return this.getStringAttribute('stream_view');
        },
        set: function (value) {
            this._streamView = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetStreamView = function () {
        this._streamView = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "streamViewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._streamView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "computeCapacity", {
        get: function () {
            return this.interpolationForAttribute('compute_capacity');
        },
        set: function (value) {
            this._computeCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "computeCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._computeCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "domainJoinInfo", {
        get: function () {
            return this.interpolationForAttribute('domain_join_info');
        },
        set: function (value) {
            this._domainJoinInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetDomainJoinInfo = function () {
        this._domainJoinInfo = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "domainJoinInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainJoinInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamFleet.prototype, "vpcConfig", {
        get: function () {
            return this.interpolationForAttribute('vpc_config');
        },
        set: function (value) {
            this._vpcConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamFleet.prototype.resetVpcConfig = function () {
        this._vpcConfig = undefined;
    };
    Object.defineProperty(AppstreamFleet.prototype, "vpcConfigInput", {
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
    AppstreamFleet.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            disconnect_timeout_in_seconds: cdktf.numberToTerraform(this._disconnectTimeoutInSeconds),
            display_name: cdktf.stringToTerraform(this._displayName),
            enable_default_internet_access: cdktf.booleanToTerraform(this._enableDefaultInternetAccess),
            fleet_type: cdktf.stringToTerraform(this._fleetType),
            iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
            idle_disconnect_timeout_in_seconds: cdktf.numberToTerraform(this._idleDisconnectTimeoutInSeconds),
            image_arn: cdktf.stringToTerraform(this._imageArn),
            image_name: cdktf.stringToTerraform(this._imageName),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            max_user_duration_in_seconds: cdktf.numberToTerraform(this._maxUserDurationInSeconds),
            name: cdktf.stringToTerraform(this._name),
            stream_view: cdktf.stringToTerraform(this._streamView),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            compute_capacity: cdktf.listMapper(appstreamFleetComputeCapacityToTerraform)(this._computeCapacity),
            domain_join_info: cdktf.listMapper(appstreamFleetDomainJoinInfoToTerraform)(this._domainJoinInfo),
            vpc_config: cdktf.listMapper(appstreamFleetVpcConfigToTerraform)(this._vpcConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppstreamFleet.tfResourceType = "aws_appstream_fleet";
    return AppstreamFleet;
}(cdktf.TerraformResource));
exports.AppstreamFleet = AppstreamFleet;
