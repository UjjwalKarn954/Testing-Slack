"use strict";
// https://www.terraform.io/docs/providers/aws/d/efs_access_point.html
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
exports.DataAwsEfsAccessPoint = exports.DataAwsEfsAccessPointRootDirectory = exports.DataAwsEfsAccessPointRootDirectoryCreationInfo = exports.DataAwsEfsAccessPointPosixUser = void 0;
var cdktf = require("cdktf");
var DataAwsEfsAccessPointPosixUser = /** @class */ (function (_super) {
    __extends(DataAwsEfsAccessPointPosixUser, _super);
    function DataAwsEfsAccessPointPosixUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEfsAccessPointPosixUser.prototype, "gid", {
        // gid - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('gid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPointPosixUser.prototype, "secondaryGids", {
        // secondary_gids - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('secondary_gids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPointPosixUser.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEfsAccessPointPosixUser;
}(cdktf.ComplexComputedList));
exports.DataAwsEfsAccessPointPosixUser = DataAwsEfsAccessPointPosixUser;
var DataAwsEfsAccessPointRootDirectoryCreationInfo = /** @class */ (function (_super) {
    __extends(DataAwsEfsAccessPointRootDirectoryCreationInfo, _super);
    function DataAwsEfsAccessPointRootDirectoryCreationInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEfsAccessPointRootDirectoryCreationInfo.prototype, "ownerGid", {
        // owner_gid - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('owner_gid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPointRootDirectoryCreationInfo.prototype, "ownerUid", {
        // owner_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('owner_uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPointRootDirectoryCreationInfo.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEfsAccessPointRootDirectoryCreationInfo;
}(cdktf.ComplexComputedList));
exports.DataAwsEfsAccessPointRootDirectoryCreationInfo = DataAwsEfsAccessPointRootDirectoryCreationInfo;
var DataAwsEfsAccessPointRootDirectory = /** @class */ (function (_super) {
    __extends(DataAwsEfsAccessPointRootDirectory, _super);
    function DataAwsEfsAccessPointRootDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEfsAccessPointRootDirectory.prototype, "creationInfo", {
        // creation_info - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('creation_info');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPointRootDirectory.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEfsAccessPointRootDirectory;
}(cdktf.ComplexComputedList));
exports.DataAwsEfsAccessPointRootDirectory = DataAwsEfsAccessPointRootDirectory;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point}
*/
var DataAwsEfsAccessPoint = /** @class */ (function (_super) {
    __extends(DataAwsEfsAccessPoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsAccessPointConfig
    */
    function DataAwsEfsAccessPoint(scope, id, config) {
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
        _this._accessPointId = config.accessPointId;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "accessPointId", {
        get: function () {
            return this.getStringAttribute('access_point_id');
        },
        set: function (value) {
            this._accessPointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "accessPointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessPointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "fileSystemArn", {
        // file_system_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('file_system_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "fileSystemId", {
        // file_system_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('file_system_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    // posix_user - computed: true, optional: false, required: false
    DataAwsEfsAccessPoint.prototype.posixUser = function (index) {
        return new DataAwsEfsAccessPointPosixUser(this, 'posix_user', index);
    };
    // root_directory - computed: true, optional: false, required: false
    DataAwsEfsAccessPoint.prototype.rootDirectory = function (index) {
        return new DataAwsEfsAccessPointRootDirectory(this, 'root_directory', index);
    };
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEfsAccessPoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEfsAccessPoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEfsAccessPoint.prototype.synthesizeAttributes = function () {
        return {
            access_point_id: cdktf.stringToTerraform(this._accessPointId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEfsAccessPoint.tfResourceType = "aws_efs_access_point";
    return DataAwsEfsAccessPoint;
}(cdktf.TerraformDataSource));
exports.DataAwsEfsAccessPoint = DataAwsEfsAccessPoint;
