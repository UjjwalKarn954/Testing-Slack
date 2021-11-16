"use strict";
// https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html
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
exports.OpsworksStack = void 0;
var cdktf = require("cdktf");
function opsworksStackCustomCookbooksSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        revision: cdktf.stringToTerraform(struct.revision),
        ssh_key: cdktf.stringToTerraform(struct.sshKey),
        type: cdktf.stringToTerraform(struct.type),
        url: cdktf.stringToTerraform(struct.url),
        username: cdktf.stringToTerraform(struct.username)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack}
*/
var OpsworksStack = /** @class */ (function (_super) {
    __extends(OpsworksStack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksStackConfig
    */
    function OpsworksStack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_opsworks_stack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._agentVersion = config.agentVersion;
        _this._berkshelfVersion = config.berkshelfVersion;
        _this._color = config.color;
        _this._configurationManagerName = config.configurationManagerName;
        _this._configurationManagerVersion = config.configurationManagerVersion;
        _this._customJson = config.customJson;
        _this._defaultAvailabilityZone = config.defaultAvailabilityZone;
        _this._defaultInstanceProfileArn = config.defaultInstanceProfileArn;
        _this._defaultOs = config.defaultOs;
        _this._defaultRootDeviceType = config.defaultRootDeviceType;
        _this._defaultSshKeyName = config.defaultSshKeyName;
        _this._defaultSubnetId = config.defaultSubnetId;
        _this._hostnameTheme = config.hostnameTheme;
        _this._manageBerkshelf = config.manageBerkshelf;
        _this._name = config.name;
        _this._region = config.region;
        _this._serviceRoleArn = config.serviceRoleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._useCustomCookbooks = config.useCustomCookbooks;
        _this._useOpsworksSecurityGroups = config.useOpsworksSecurityGroups;
        _this._vpcId = config.vpcId;
        _this._customCookbooksSource = config.customCookbooksSource;
        return _this;
    }
    Object.defineProperty(OpsworksStack.prototype, "agentVersion", {
        get: function () {
            return this.getStringAttribute('agent_version');
        },
        set: function (value) {
            this._agentVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetAgentVersion = function () {
        this._agentVersion = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "agentVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._agentVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "berkshelfVersion", {
        get: function () {
            return this.getStringAttribute('berkshelf_version');
        },
        set: function (value) {
            this._berkshelfVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetBerkshelfVersion = function () {
        this._berkshelfVersion = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "berkshelfVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._berkshelfVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "color", {
        get: function () {
            return this.getStringAttribute('color');
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetColor = function () {
        this._color = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "colorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "configurationManagerName", {
        get: function () {
            return this.getStringAttribute('configuration_manager_name');
        },
        set: function (value) {
            this._configurationManagerName = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetConfigurationManagerName = function () {
        this._configurationManagerName = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "configurationManagerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationManagerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "configurationManagerVersion", {
        get: function () {
            return this.getStringAttribute('configuration_manager_version');
        },
        set: function (value) {
            this._configurationManagerVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetConfigurationManagerVersion = function () {
        this._configurationManagerVersion = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "configurationManagerVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationManagerVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "customJson", {
        get: function () {
            return this.getStringAttribute('custom_json');
        },
        set: function (value) {
            this._customJson = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetCustomJson = function () {
        this._customJson = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "customJsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customJson;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "defaultAvailabilityZone", {
        get: function () {
            return this.getStringAttribute('default_availability_zone');
        },
        set: function (value) {
            this._defaultAvailabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetDefaultAvailabilityZone = function () {
        this._defaultAvailabilityZone = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "defaultAvailabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultAvailabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "defaultInstanceProfileArn", {
        get: function () {
            return this.getStringAttribute('default_instance_profile_arn');
        },
        set: function (value) {
            this._defaultInstanceProfileArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "defaultInstanceProfileArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultInstanceProfileArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "defaultOs", {
        get: function () {
            return this.getStringAttribute('default_os');
        },
        set: function (value) {
            this._defaultOs = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetDefaultOs = function () {
        this._defaultOs = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "defaultOsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultOs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "defaultRootDeviceType", {
        get: function () {
            return this.getStringAttribute('default_root_device_type');
        },
        set: function (value) {
            this._defaultRootDeviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetDefaultRootDeviceType = function () {
        this._defaultRootDeviceType = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "defaultRootDeviceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultRootDeviceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "defaultSshKeyName", {
        get: function () {
            return this.getStringAttribute('default_ssh_key_name');
        },
        set: function (value) {
            this._defaultSshKeyName = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetDefaultSshKeyName = function () {
        this._defaultSshKeyName = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "defaultSshKeyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultSshKeyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "defaultSubnetId", {
        get: function () {
            return this.getStringAttribute('default_subnet_id');
        },
        set: function (value) {
            this._defaultSubnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetDefaultSubnetId = function () {
        this._defaultSubnetId = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "defaultSubnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultSubnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "hostnameTheme", {
        get: function () {
            return this.getStringAttribute('hostname_theme');
        },
        set: function (value) {
            this._hostnameTheme = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetHostnameTheme = function () {
        this._hostnameTheme = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "hostnameThemeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostnameTheme;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "manageBerkshelf", {
        get: function () {
            return this.getBooleanAttribute('manage_berkshelf');
        },
        set: function (value) {
            this._manageBerkshelf = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetManageBerkshelf = function () {
        this._manageBerkshelf = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "manageBerkshelfInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._manageBerkshelf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "serviceRoleArn", {
        get: function () {
            return this.getStringAttribute('service_role_arn');
        },
        set: function (value) {
            this._serviceRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "serviceRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "stackEndpoint", {
        // stack_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stack_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "useCustomCookbooks", {
        get: function () {
            return this.getBooleanAttribute('use_custom_cookbooks');
        },
        set: function (value) {
            this._useCustomCookbooks = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetUseCustomCookbooks = function () {
        this._useCustomCookbooks = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "useCustomCookbooksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._useCustomCookbooks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "useOpsworksSecurityGroups", {
        get: function () {
            return this.getBooleanAttribute('use_opsworks_security_groups');
        },
        set: function (value) {
            this._useOpsworksSecurityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetUseOpsworksSecurityGroups = function () {
        this._useOpsworksSecurityGroups = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "useOpsworksSecurityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._useOpsworksSecurityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksStack.prototype, "customCookbooksSource", {
        get: function () {
            return this.interpolationForAttribute('custom_cookbooks_source');
        },
        set: function (value) {
            this._customCookbooksSource = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksStack.prototype.resetCustomCookbooksSource = function () {
        this._customCookbooksSource = undefined;
    };
    Object.defineProperty(OpsworksStack.prototype, "customCookbooksSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customCookbooksSource;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OpsworksStack.prototype.synthesizeAttributes = function () {
        return {
            agent_version: cdktf.stringToTerraform(this._agentVersion),
            berkshelf_version: cdktf.stringToTerraform(this._berkshelfVersion),
            color: cdktf.stringToTerraform(this._color),
            configuration_manager_name: cdktf.stringToTerraform(this._configurationManagerName),
            configuration_manager_version: cdktf.stringToTerraform(this._configurationManagerVersion),
            custom_json: cdktf.stringToTerraform(this._customJson),
            default_availability_zone: cdktf.stringToTerraform(this._defaultAvailabilityZone),
            default_instance_profile_arn: cdktf.stringToTerraform(this._defaultInstanceProfileArn),
            default_os: cdktf.stringToTerraform(this._defaultOs),
            default_root_device_type: cdktf.stringToTerraform(this._defaultRootDeviceType),
            default_ssh_key_name: cdktf.stringToTerraform(this._defaultSshKeyName),
            default_subnet_id: cdktf.stringToTerraform(this._defaultSubnetId),
            hostname_theme: cdktf.stringToTerraform(this._hostnameTheme),
            manage_berkshelf: cdktf.booleanToTerraform(this._manageBerkshelf),
            name: cdktf.stringToTerraform(this._name),
            region: cdktf.stringToTerraform(this._region),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            use_custom_cookbooks: cdktf.booleanToTerraform(this._useCustomCookbooks),
            use_opsworks_security_groups: cdktf.booleanToTerraform(this._useOpsworksSecurityGroups),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            custom_cookbooks_source: cdktf.listMapper(opsworksStackCustomCookbooksSourceToTerraform)(this._customCookbooksSource)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OpsworksStack.tfResourceType = "aws_opsworks_stack";
    return OpsworksStack;
}(cdktf.TerraformResource));
exports.OpsworksStack = OpsworksStack;
