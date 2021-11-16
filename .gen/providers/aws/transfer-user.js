"use strict";
// https://www.terraform.io/docs/providers/aws/r/transfer_user.html
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
exports.TransferUser = void 0;
var cdktf = require("cdktf");
function transferUserHomeDirectoryMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        entry: cdktf.stringToTerraform(struct.entry),
        target: cdktf.stringToTerraform(struct.target)
    };
}
function transferUserPosixProfileToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user}
*/
var TransferUser = /** @class */ (function (_super) {
    __extends(TransferUser, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferUserConfig
    */
    function TransferUser(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_transfer_user',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._homeDirectory = config.homeDirectory;
        _this._homeDirectoryType = config.homeDirectoryType;
        _this._policy = config.policy;
        _this._role = config.role;
        _this._serverId = config.serverId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._userName = config.userName;
        _this._homeDirectoryMappings = config.homeDirectoryMappings;
        _this._posixProfile = config.posixProfile;
        return _this;
    }
    Object.defineProperty(TransferUser.prototype, "arn", {
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
    Object.defineProperty(TransferUser.prototype, "homeDirectory", {
        get: function () {
            return this.getStringAttribute('home_directory');
        },
        set: function (value) {
            this._homeDirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferUser.prototype.resetHomeDirectory = function () {
        this._homeDirectory = undefined;
    };
    Object.defineProperty(TransferUser.prototype, "homeDirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._homeDirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "homeDirectoryType", {
        get: function () {
            return this.getStringAttribute('home_directory_type');
        },
        set: function (value) {
            this._homeDirectoryType = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferUser.prototype.resetHomeDirectoryType = function () {
        this._homeDirectoryType = undefined;
    };
    Object.defineProperty(TransferUser.prototype, "homeDirectoryTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._homeDirectoryType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferUser.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(TransferUser.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "serverId", {
        get: function () {
            return this.getStringAttribute('server_id');
        },
        set: function (value) {
            this._serverId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "serverIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferUser.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(TransferUser.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferUser.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(TransferUser.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "userName", {
        get: function () {
            return this.getStringAttribute('user_name');
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "userNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "homeDirectoryMappings", {
        get: function () {
            return this.interpolationForAttribute('home_directory_mappings');
        },
        set: function (value) {
            this._homeDirectoryMappings = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferUser.prototype.resetHomeDirectoryMappings = function () {
        this._homeDirectoryMappings = undefined;
    };
    Object.defineProperty(TransferUser.prototype, "homeDirectoryMappingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._homeDirectoryMappings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferUser.prototype, "posixProfile", {
        get: function () {
            return this.interpolationForAttribute('posix_profile');
        },
        set: function (value) {
            this._posixProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferUser.prototype.resetPosixProfile = function () {
        this._posixProfile = undefined;
    };
    Object.defineProperty(TransferUser.prototype, "posixProfileInput", {
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
    TransferUser.prototype.synthesizeAttributes = function () {
        return {
            home_directory: cdktf.stringToTerraform(this._homeDirectory),
            home_directory_type: cdktf.stringToTerraform(this._homeDirectoryType),
            policy: cdktf.stringToTerraform(this._policy),
            role: cdktf.stringToTerraform(this._role),
            server_id: cdktf.stringToTerraform(this._serverId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_name: cdktf.stringToTerraform(this._userName),
            home_directory_mappings: cdktf.listMapper(transferUserHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
            posix_profile: cdktf.listMapper(transferUserPosixProfileToTerraform)(this._posixProfile)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    TransferUser.tfResourceType = "aws_transfer_user";
    return TransferUser;
}(cdktf.TerraformResource));
exports.TransferUser = TransferUser;
