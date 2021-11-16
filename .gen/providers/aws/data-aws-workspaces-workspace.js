"use strict";
// https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html
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
exports.DataAwsWorkspacesWorkspace = exports.DataAwsWorkspacesWorkspaceWorkspaceProperties = void 0;
var cdktf = require("cdktf");
var DataAwsWorkspacesWorkspaceWorkspaceProperties = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesWorkspaceWorkspaceProperties, _super);
    function DataAwsWorkspacesWorkspaceWorkspaceProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsWorkspacesWorkspaceWorkspaceProperties.prototype, "computeTypeName", {
        // compute_type_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compute_type_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspaceWorkspaceProperties.prototype, "rootVolumeSizeGib", {
        // root_volume_size_gib - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('root_volume_size_gib');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspaceWorkspaceProperties.prototype, "runningMode", {
        // running_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('running_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspaceWorkspaceProperties.prototype, "runningModeAutoStopTimeoutInMinutes", {
        // running_mode_auto_stop_timeout_in_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('running_mode_auto_stop_timeout_in_minutes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspaceWorkspaceProperties.prototype, "userVolumeSizeGib", {
        // user_volume_size_gib - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('user_volume_size_gib');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsWorkspacesWorkspaceWorkspaceProperties;
}(cdktf.ComplexComputedList));
exports.DataAwsWorkspacesWorkspaceWorkspaceProperties = DataAwsWorkspacesWorkspaceWorkspaceProperties;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html aws_workspaces_workspace}
*/
var DataAwsWorkspacesWorkspace = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesWorkspace, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html aws_workspaces_workspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesWorkspaceConfig = {}
    */
    function DataAwsWorkspacesWorkspace(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_workspaces_workspace',
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
        _this._userName = config.userName;
        _this._workspaceId = config.workspaceId;
        return _this;
    }
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "bundleId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // bundle_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bundle_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "computerName", {
        // computer_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('computer_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsWorkspacesWorkspace.prototype.resetDirectoryId = function () {
        this._directoryId = undefined;
    };
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "ipAddress", {
        // ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "rootVolumeEncryptionEnabled", {
        // root_volume_encryption_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('root_volume_encryption_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsWorkspacesWorkspace.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "userName", {
        get: function () {
            return this.getStringAttribute('user_name');
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsWorkspacesWorkspace.prototype.resetUserName = function () {
        this._userName = undefined;
    };
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "userNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "userVolumeEncryptionEnabled", {
        // user_volume_encryption_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('user_volume_encryption_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "volumeEncryptionKey", {
        // volume_encryption_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_encryption_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "workspaceId", {
        get: function () {
            return this.getStringAttribute('workspace_id');
        },
        set: function (value) {
            this._workspaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsWorkspacesWorkspace.prototype.resetWorkspaceId = function () {
        this._workspaceId = undefined;
    };
    Object.defineProperty(DataAwsWorkspacesWorkspace.prototype, "workspaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workspaceId;
        },
        enumerable: false,
        configurable: true
    });
    // workspace_properties - computed: true, optional: false, required: false
    DataAwsWorkspacesWorkspace.prototype.workspaceProperties = function (index) {
        return new DataAwsWorkspacesWorkspaceWorkspaceProperties(this, 'workspace_properties', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsWorkspacesWorkspace.prototype.synthesizeAttributes = function () {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            user_name: cdktf.stringToTerraform(this._userName),
            workspace_id: cdktf.stringToTerraform(this._workspaceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsWorkspacesWorkspace.tfResourceType = "aws_workspaces_workspace";
    return DataAwsWorkspacesWorkspace;
}(cdktf.TerraformDataSource));
exports.DataAwsWorkspacesWorkspace = DataAwsWorkspacesWorkspace;
