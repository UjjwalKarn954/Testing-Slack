"use strict";
// https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html
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
exports.DataAwsWorkspacesDirectory = exports.DataAwsWorkspacesDirectoryWorkspaceCreationProperties = exports.DataAwsWorkspacesDirectoryWorkspaceAccessProperties = exports.DataAwsWorkspacesDirectorySelfServicePermissions = void 0;
var cdktf = require("cdktf");
var DataAwsWorkspacesDirectorySelfServicePermissions = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesDirectorySelfServicePermissions, _super);
    function DataAwsWorkspacesDirectorySelfServicePermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsWorkspacesDirectorySelfServicePermissions.prototype, "changeComputeType", {
        // change_compute_type - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('change_compute_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectorySelfServicePermissions.prototype, "increaseVolumeSize", {
        // increase_volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('increase_volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectorySelfServicePermissions.prototype, "rebuildWorkspace", {
        // rebuild_workspace - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('rebuild_workspace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectorySelfServicePermissions.prototype, "restartWorkspace", {
        // restart_workspace - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('restart_workspace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectorySelfServicePermissions.prototype, "switchRunningMode", {
        // switch_running_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('switch_running_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsWorkspacesDirectorySelfServicePermissions;
}(cdktf.ComplexComputedList));
exports.DataAwsWorkspacesDirectorySelfServicePermissions = DataAwsWorkspacesDirectorySelfServicePermissions;
var DataAwsWorkspacesDirectoryWorkspaceAccessProperties = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesDirectoryWorkspaceAccessProperties, _super);
    function DataAwsWorkspacesDirectoryWorkspaceAccessProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceAccessProperties.prototype, "deviceTypeAndroid", {
        // device_type_android - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type_android');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceAccessProperties.prototype, "deviceTypeChromeos", {
        // device_type_chromeos - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type_chromeos');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceAccessProperties.prototype, "deviceTypeIos", {
        // device_type_ios - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type_ios');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceAccessProperties.prototype, "deviceTypeLinux", {
        // device_type_linux - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type_linux');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceAccessProperties.prototype, "deviceTypeOsx", {
        // device_type_osx - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type_osx');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceAccessProperties.prototype, "deviceTypeWeb", {
        // device_type_web - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type_web');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceAccessProperties.prototype, "deviceTypeWindows", {
        // device_type_windows - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type_windows');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceAccessProperties.prototype, "deviceTypeZeroclient", {
        // device_type_zeroclient - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type_zeroclient');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsWorkspacesDirectoryWorkspaceAccessProperties;
}(cdktf.ComplexComputedList));
exports.DataAwsWorkspacesDirectoryWorkspaceAccessProperties = DataAwsWorkspacesDirectoryWorkspaceAccessProperties;
var DataAwsWorkspacesDirectoryWorkspaceCreationProperties = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesDirectoryWorkspaceCreationProperties, _super);
    function DataAwsWorkspacesDirectoryWorkspaceCreationProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceCreationProperties.prototype, "customSecurityGroupId", {
        // custom_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceCreationProperties.prototype, "defaultOu", {
        // default_ou - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_ou');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceCreationProperties.prototype, "enableInternetAccess", {
        // enable_internet_access - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_internet_access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceCreationProperties.prototype, "enableMaintenanceMode", {
        // enable_maintenance_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_maintenance_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectoryWorkspaceCreationProperties.prototype, "userEnabledAsLocalAdministrator", {
        // user_enabled_as_local_administrator - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('user_enabled_as_local_administrator');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsWorkspacesDirectoryWorkspaceCreationProperties;
}(cdktf.ComplexComputedList));
exports.DataAwsWorkspacesDirectoryWorkspaceCreationProperties = DataAwsWorkspacesDirectoryWorkspaceCreationProperties;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory}
*/
var DataAwsWorkspacesDirectory = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesDirectory, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesDirectoryConfig
    */
    function DataAwsWorkspacesDirectory(scope, id, config) {
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
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "alias", {
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
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "customerUserName", {
        // customer_user_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_user_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "directoryName", {
        // directory_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('directory_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "directoryType", {
        // directory_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('directory_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "dnsIpAddresses", {
        // dns_ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "iamRoleId", {
        // iam_role_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iam_role_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "ipGroupIds", {
        // ip_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ip_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "registrationCode", {
        // registration_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registration_code');
        },
        enumerable: false,
        configurable: true
    });
    // self_service_permissions - computed: true, optional: false, required: false
    DataAwsWorkspacesDirectory.prototype.selfServicePermissions = function (index) {
        return new DataAwsWorkspacesDirectorySelfServicePermissions(this, 'self_service_permissions', index);
    };
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsWorkspacesDirectory.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // workspace_access_properties - computed: true, optional: false, required: false
    DataAwsWorkspacesDirectory.prototype.workspaceAccessProperties = function (index) {
        return new DataAwsWorkspacesDirectoryWorkspaceAccessProperties(this, 'workspace_access_properties', index);
    };
    // workspace_creation_properties - computed: true, optional: false, required: false
    DataAwsWorkspacesDirectory.prototype.workspaceCreationProperties = function (index) {
        return new DataAwsWorkspacesDirectoryWorkspaceCreationProperties(this, 'workspace_creation_properties', index);
    };
    Object.defineProperty(DataAwsWorkspacesDirectory.prototype, "workspaceSecurityGroupId", {
        // workspace_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workspace_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsWorkspacesDirectory.prototype.synthesizeAttributes = function () {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsWorkspacesDirectory.tfResourceType = "aws_workspaces_directory";
    return DataAwsWorkspacesDirectory;
}(cdktf.TerraformDataSource));
exports.DataAwsWorkspacesDirectory = DataAwsWorkspacesDirectory;
