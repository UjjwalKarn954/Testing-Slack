"use strict";
// https://www.terraform.io/docs/providers/aws/r/efs_access_point.html
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
exports.EfsAccessPoint = void 0;
var cdktf = require("cdktf");
function efsAccessPointPosixUserToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        gid: cdktf.numberToTerraform(struct.gid),
        secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct.secondaryGids),
        uid: cdktf.numberToTerraform(struct.uid)
    };
}
function efsAccessPointRootDirectoryCreationInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        owner_gid: cdktf.numberToTerraform(struct.ownerGid),
        owner_uid: cdktf.numberToTerraform(struct.ownerUid),
        permissions: cdktf.stringToTerraform(struct.permissions)
    };
}
function efsAccessPointRootDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        creation_info: cdktf.listMapper(efsAccessPointRootDirectoryCreationInfoToTerraform)(struct.creationInfo)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point}
*/
var EfsAccessPoint = /** @class */ (function (_super) {
    __extends(EfsAccessPoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsAccessPointConfig
    */
    function EfsAccessPoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_efs_access_point',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._fileSystemId = config.fileSystemId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._posixUser = config.posixUser;
        _this._rootDirectory = config.rootDirectory;
        return _this;
    }
    Object.defineProperty(EfsAccessPoint.prototype, "arn", {
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
    Object.defineProperty(EfsAccessPoint.prototype, "fileSystemArn", {
        // file_system_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('file_system_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsAccessPoint.prototype, "fileSystemId", {
        get: function () {
            return this.getStringAttribute('file_system_id');
        },
        set: function (value) {
            this._fileSystemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsAccessPoint.prototype, "fileSystemIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsAccessPoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsAccessPoint.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsAccessPoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsAccessPoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EfsAccessPoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsAccessPoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsAccessPoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EfsAccessPoint.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsAccessPoint.prototype, "posixUser", {
        get: function () {
            return this.interpolationForAttribute('posix_user');
        },
        set: function (value) {
            this._posixUser = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsAccessPoint.prototype.resetPosixUser = function () {
        this._posixUser = undefined;
    };
    Object.defineProperty(EfsAccessPoint.prototype, "posixUserInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._posixUser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsAccessPoint.prototype, "rootDirectory", {
        get: function () {
            return this.interpolationForAttribute('root_directory');
        },
        set: function (value) {
            this._rootDirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsAccessPoint.prototype.resetRootDirectory = function () {
        this._rootDirectory = undefined;
    };
    Object.defineProperty(EfsAccessPoint.prototype, "rootDirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootDirectory;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EfsAccessPoint.prototype.synthesizeAttributes = function () {
        return {
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            posix_user: cdktf.listMapper(efsAccessPointPosixUserToTerraform)(this._posixUser),
            root_directory: cdktf.listMapper(efsAccessPointRootDirectoryToTerraform)(this._rootDirectory)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EfsAccessPoint.tfResourceType = "aws_efs_access_point";
    return EfsAccessPoint;
}(cdktf.TerraformResource));
exports.EfsAccessPoint = EfsAccessPoint;
