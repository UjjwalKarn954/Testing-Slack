"use strict";
// https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html
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
exports.DatasyncLocationFsxWindowsFileSystem = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html aws_datasync_location_fsx_windows_file_system}
*/
var DatasyncLocationFsxWindowsFileSystem = /** @class */ (function (_super) {
    __extends(DatasyncLocationFsxWindowsFileSystem, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html aws_datasync_location_fsx_windows_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationFsxWindowsFileSystemConfig
    */
    function DatasyncLocationFsxWindowsFileSystem(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_datasync_location_fsx_windows_file_system',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domain = config.domain;
        _this._fsxFilesystemArn = config.fsxFilesystemArn;
        _this._password = config.password;
        _this._securityGroupArns = config.securityGroupArns;
        _this._subdirectory = config.subdirectory;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._user = config.user;
        return _this;
    }
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "arn", {
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
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "creationTime", {
        // creation_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationFsxWindowsFileSystem.prototype.resetDomain = function () {
        this._domain = undefined;
    };
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "fsxFilesystemArn", {
        get: function () {
            return this.getStringAttribute('fsx_filesystem_arn');
        },
        set: function (value) {
            this._fsxFilesystemArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "fsxFilesystemArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fsxFilesystemArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "securityGroupArns", {
        get: function () {
            return this.getListAttribute('security_group_arns');
        },
        set: function (value) {
            this._securityGroupArns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "securityGroupArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "subdirectory", {
        get: function () {
            return this.getStringAttribute('subdirectory');
        },
        set: function (value) {
            this._subdirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationFsxWindowsFileSystem.prototype.resetSubdirectory = function () {
        this._subdirectory = undefined;
    };
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "subdirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subdirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationFsxWindowsFileSystem.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationFsxWindowsFileSystem.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "uri", {
        // uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationFsxWindowsFileSystem.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DatasyncLocationFsxWindowsFileSystem.prototype.synthesizeAttributes = function () {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            fsx_filesystem_arn: cdktf.stringToTerraform(this._fsxFilesystemArn),
            password: cdktf.stringToTerraform(this._password),
            security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupArns),
            subdirectory: cdktf.stringToTerraform(this._subdirectory),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user: cdktf.stringToTerraform(this._user)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DatasyncLocationFsxWindowsFileSystem.tfResourceType = "aws_datasync_location_fsx_windows_file_system";
    return DatasyncLocationFsxWindowsFileSystem;
}(cdktf.TerraformResource));
exports.DatasyncLocationFsxWindowsFileSystem = DatasyncLocationFsxWindowsFileSystem;
