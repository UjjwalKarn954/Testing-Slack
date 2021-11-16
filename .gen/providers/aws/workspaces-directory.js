"use strict";
// https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html
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
exports.WorkspacesDirectory = void 0;
var cdktf = require("cdktf");
function workspacesDirectorySelfServicePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        change_compute_type: cdktf.booleanToTerraform(struct.changeComputeType),
        increase_volume_size: cdktf.booleanToTerraform(struct.increaseVolumeSize),
        rebuild_workspace: cdktf.booleanToTerraform(struct.rebuildWorkspace),
        restart_workspace: cdktf.booleanToTerraform(struct.restartWorkspace),
        switch_running_mode: cdktf.booleanToTerraform(struct.switchRunningMode)
    };
}
function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_type_android: cdktf.stringToTerraform(struct.deviceTypeAndroid),
        device_type_chromeos: cdktf.stringToTerraform(struct.deviceTypeChromeos),
        device_type_ios: cdktf.stringToTerraform(struct.deviceTypeIos),
        device_type_linux: cdktf.stringToTerraform(struct.deviceTypeLinux),
        device_type_osx: cdktf.stringToTerraform(struct.deviceTypeOsx),
        device_type_web: cdktf.stringToTerraform(struct.deviceTypeWeb),
        device_type_windows: cdktf.stringToTerraform(struct.deviceTypeWindows),
        device_type_zeroclient: cdktf.stringToTerraform(struct.deviceTypeZeroclient)
    };
}
function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_security_group_id: cdktf.stringToTerraform(struct.customSecurityGroupId),
        default_ou: cdktf.stringToTerraform(struct.defaultOu),
        enable_internet_access: cdktf.booleanToTerraform(struct.enableInternetAccess),
        enable_maintenance_mode: cdktf.booleanToTerraform(struct.enableMaintenanceMode),
        user_enabled_as_local_administrator: cdktf.booleanToTerraform(struct.userEnabledAsLocalAdministrator)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory}
*/
var WorkspacesDirectory = /** @class */ (function (_super) {
    __extends(WorkspacesDirectory, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesDirectoryConfig
    */
    function WorkspacesDirectory(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_workspaces_directory',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._directoryId = config.directoryId;
        _this._ipGroupIds = config.ipGroupIds;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._selfServicePermissions = config.selfServicePermissions;
        _this._workspaceAccessProperties = config.workspaceAccessProperties;
        _this._workspaceCreationProperties = config.workspaceCreationProperties;
        return _this;
    }
    Object.defineProperty(WorkspacesDirectory.prototype, "alias", {
        // ==========
        // ATTRIBUTES
        // ==========
        // alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "customerUserName", {
        // customer_user_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_user_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "directoryName", {
        // directory_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('directory_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "directoryType", {
        // directory_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('directory_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "dnsIpAddresses", {
        // dns_ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "iamRoleId", {
        // iam_role_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iam_role_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "ipGroupIds", {
        get: function () {
            return this.getListAttribute('ip_group_ids');
        },
        set: function (value) {
            this._ipGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesDirectory.prototype.resetIpGroupIds = function () {
        this._ipGroupIds = undefined;
    };
    Object.defineProperty(WorkspacesDirectory.prototype, "ipGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "registrationCode", {
        // registration_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registration_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesDirectory.prototype.resetSubnetIds = function () {
        this._subnetIds = undefined;
    };
    Object.defineProperty(WorkspacesDirectory.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesDirectory.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(WorkspacesDirectory.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesDirectory.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(WorkspacesDirectory.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "workspaceSecurityGroupId", {
        // workspace_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workspace_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "selfServicePermissions", {
        get: function () {
            return this.interpolationForAttribute('self_service_permissions');
        },
        set: function (value) {
            this._selfServicePermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesDirectory.prototype.resetSelfServicePermissions = function () {
        this._selfServicePermissions = undefined;
    };
    Object.defineProperty(WorkspacesDirectory.prototype, "selfServicePermissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selfServicePermissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "workspaceAccessProperties", {
        get: function () {
            return this.interpolationForAttribute('workspace_access_properties');
        },
        set: function (value) {
            this._workspaceAccessProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesDirectory.prototype.resetWorkspaceAccessProperties = function () {
        this._workspaceAccessProperties = undefined;
    };
    Object.defineProperty(WorkspacesDirectory.prototype, "workspaceAccessPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workspaceAccessProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesDirectory.prototype, "workspaceCreationProperties", {
        get: function () {
            return this.interpolationForAttribute('workspace_creation_properties');
        },
        set: function (value) {
            this._workspaceCreationProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesDirectory.prototype.resetWorkspaceCreationProperties = function () {
        this._workspaceCreationProperties = undefined;
    };
    Object.defineProperty(WorkspacesDirectory.prototype, "workspaceCreationPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workspaceCreationProperties;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkspacesDirectory.prototype.synthesizeAttributes = function () {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            ip_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._ipGroupIds),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            self_service_permissions: cdktf.listMapper(workspacesDirectorySelfServicePermissionsToTerraform)(this._selfServicePermissions),
            workspace_access_properties: cdktf.listMapper(workspacesDirectoryWorkspaceAccessPropertiesToTerraform)(this._workspaceAccessProperties),
            workspace_creation_properties: cdktf.listMapper(workspacesDirectoryWorkspaceCreationPropertiesToTerraform)(this._workspaceCreationProperties)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WorkspacesDirectory.tfResourceType = "aws_workspaces_directory";
    return WorkspacesDirectory;
}(cdktf.TerraformResource));
exports.WorkspacesDirectory = WorkspacesDirectory;
