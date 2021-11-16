"use strict";
// https://www.terraform.io/docs/providers/aws/r/transfer_access.html
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
exports.TransferAccess = void 0;
var cdktf = require("cdktf");
function transferAccessHomeDirectoryMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        entry: cdktf.stringToTerraform(struct.entry),
        target: cdktf.stringToTerraform(struct.target)
    };
}
function transferAccessPosixProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        gid: cdktf.numberToTerraform(struct.gid),
        secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct.secondaryGids),
        uid: cdktf.numberToTerraform(struct.uid)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access}
*/
var TransferAccess = /** @class */ (function (_super) {
    __extends(TransferAccess, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferAccessConfig
    */
    function TransferAccess(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_transfer_access',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._externalId = config.externalId;
        _this._homeDirectory = config.homeDirectory;
        _this._homeDirectoryType = config.homeDirectoryType;
        _this._policy = config.policy;
        _this._role = config.role;
        _this._serverId = config.serverId;
        _this._homeDirectoryMappings = config.homeDirectoryMappings;
        _this._posixProfile = config.posixProfile;
        return _this;
    }
    Object.defineProperty(TransferAccess.prototype, "externalId", {
        get: function () {
            return this.getStringAttribute('external_id');
        },
        set: function (value) {
            this._externalId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "externalIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "homeDirectory", {
        get: function () {
            return this.getStringAttribute('home_directory');
        },
        set: function (value) {
            this._homeDirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferAccess.prototype.resetHomeDirectory = function () {
        this._homeDirectory = undefined;
    };
    Object.defineProperty(TransferAccess.prototype, "homeDirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._homeDirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "homeDirectoryType", {
        get: function () {
            return this.getStringAttribute('home_directory_type');
        },
        set: function (value) {
            this._homeDirectoryType = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferAccess.prototype.resetHomeDirectoryType = function () {
        this._homeDirectoryType = undefined;
    };
    Object.defineProperty(TransferAccess.prototype, "homeDirectoryTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._homeDirectoryType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferAccess.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(TransferAccess.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferAccess.prototype.resetRole = function () {
        this._role = undefined;
    };
    Object.defineProperty(TransferAccess.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "serverId", {
        get: function () {
            return this.getStringAttribute('server_id');
        },
        set: function (value) {
            this._serverId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "serverIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "homeDirectoryMappings", {
        get: function () {
            return this.interpolationForAttribute('home_directory_mappings');
        },
        set: function (value) {
            this._homeDirectoryMappings = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferAccess.prototype.resetHomeDirectoryMappings = function () {
        this._homeDirectoryMappings = undefined;
    };
    Object.defineProperty(TransferAccess.prototype, "homeDirectoryMappingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._homeDirectoryMappings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferAccess.prototype, "posixProfile", {
        get: function () {
            return this.interpolationForAttribute('posix_profile');
        },
        set: function (value) {
            this._posixProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferAccess.prototype.resetPosixProfile = function () {
        this._posixProfile = undefined;
    };
    Object.defineProperty(TransferAccess.prototype, "posixProfileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._posixProfile;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TransferAccess.prototype.synthesizeAttributes = function () {
        return {
            external_id: cdktf.stringToTerraform(this._externalId),
            home_directory: cdktf.stringToTerraform(this._homeDirectory),
            home_directory_type: cdktf.stringToTerraform(this._homeDirectoryType),
            policy: cdktf.stringToTerraform(this._policy),
            role: cdktf.stringToTerraform(this._role),
            server_id: cdktf.stringToTerraform(this._serverId),
            home_directory_mappings: cdktf.listMapper(transferAccessHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
            posix_profile: cdktf.listMapper(transferAccessPosixProfileToTerraform)(this._posixProfile)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    TransferAccess.tfResourceType = "aws_transfer_access";
    return TransferAccess;
}(cdktf.TerraformResource));
exports.TransferAccess = TransferAccess;
