"use strict";
// https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html
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
exports.WorkspacesWorkspace = void 0;
var cdktf = require("cdktf");
function workspacesWorkspaceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
function workspacesWorkspaceWorkspacePropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        compute_type_name: cdktf.stringToTerraform(struct.computeTypeName),
        root_volume_size_gib: cdktf.numberToTerraform(struct.rootVolumeSizeGib),
        running_mode: cdktf.stringToTerraform(struct.runningMode),
        running_mode_auto_stop_timeout_in_minutes: cdktf.numberToTerraform(struct.runningModeAutoStopTimeoutInMinutes),
        user_volume_size_gib: cdktf.numberToTerraform(struct.userVolumeSizeGib)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace}
*/
var WorkspacesWorkspace = /** @class */ (function (_super) {
    __extends(WorkspacesWorkspace, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesWorkspaceConfig
    */
    function WorkspacesWorkspace(scope, id, config) {
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
        _this._bundleId = config.bundleId;
        _this._directoryId = config.directoryId;
        _this._rootVolumeEncryptionEnabled = config.rootVolumeEncryptionEnabled;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._userName = config.userName;
        _this._userVolumeEncryptionEnabled = config.userVolumeEncryptionEnabled;
        _this._volumeEncryptionKey = config.volumeEncryptionKey;
        _this._timeouts = config.timeouts;
        _this._workspaceProperties = config.workspaceProperties;
        return _this;
    }
    Object.defineProperty(WorkspacesWorkspace.prototype, "bundleId", {
        get: function () {
            return this.getStringAttribute('bundle_id');
        },
        set: function (value) {
            this._bundleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "bundleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bundleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "computerName", {
        // computer_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('computer_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "ipAddress", {
        // ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "rootVolumeEncryptionEnabled", {
        get: function () {
            return this.getBooleanAttribute('root_volume_encryption_enabled');
        },
        set: function (value) {
            this._rootVolumeEncryptionEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesWorkspace.prototype.resetRootVolumeEncryptionEnabled = function () {
        this._rootVolumeEncryptionEnabled = undefined;
    };
    Object.defineProperty(WorkspacesWorkspace.prototype, "rootVolumeEncryptionEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootVolumeEncryptionEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesWorkspace.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(WorkspacesWorkspace.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesWorkspace.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(WorkspacesWorkspace.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "userName", {
        get: function () {
            return this.getStringAttribute('user_name');
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "userNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "userVolumeEncryptionEnabled", {
        get: function () {
            return this.getBooleanAttribute('user_volume_encryption_enabled');
        },
        set: function (value) {
            this._userVolumeEncryptionEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesWorkspace.prototype.resetUserVolumeEncryptionEnabled = function () {
        this._userVolumeEncryptionEnabled = undefined;
    };
    Object.defineProperty(WorkspacesWorkspace.prototype, "userVolumeEncryptionEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userVolumeEncryptionEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "volumeEncryptionKey", {
        get: function () {
            return this.getStringAttribute('volume_encryption_key');
        },
        set: function (value) {
            this._volumeEncryptionKey = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesWorkspace.prototype.resetVolumeEncryptionKey = function () {
        this._volumeEncryptionKey = undefined;
    };
    Object.defineProperty(WorkspacesWorkspace.prototype, "volumeEncryptionKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeEncryptionKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesWorkspace.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(WorkspacesWorkspace.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspacesWorkspace.prototype, "workspaceProperties", {
        get: function () {
            return this.interpolationForAttribute('workspace_properties');
        },
        set: function (value) {
            this._workspaceProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkspacesWorkspace.prototype.resetWorkspaceProperties = function () {
        this._workspaceProperties = undefined;
    };
    Object.defineProperty(WorkspacesWorkspace.prototype, "workspacePropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workspaceProperties;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkspacesWorkspace.prototype.synthesizeAttributes = function () {
        return {
            bundle_id: cdktf.stringToTerraform(this._bundleId),
            directory_id: cdktf.stringToTerraform(this._directoryId),
            root_volume_encryption_enabled: cdktf.booleanToTerraform(this._rootVolumeEncryptionEnabled),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_name: cdktf.stringToTerraform(this._userName),
            user_volume_encryption_enabled: cdktf.booleanToTerraform(this._userVolumeEncryptionEnabled),
            volume_encryption_key: cdktf.stringToTerraform(this._volumeEncryptionKey),
            timeouts: workspacesWorkspaceTimeoutsToTerraform(this._timeouts),
            workspace_properties: cdktf.listMapper(workspacesWorkspaceWorkspacePropertiesToTerraform)(this._workspaceProperties)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WorkspacesWorkspace.tfResourceType = "aws_workspaces_workspace";
    return WorkspacesWorkspace;
}(cdktf.TerraformResource));
exports.WorkspacesWorkspace = WorkspacesWorkspace;
