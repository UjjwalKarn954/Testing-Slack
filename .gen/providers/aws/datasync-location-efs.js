"use strict";
// https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html
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
exports.DatasyncLocationEfs = void 0;
var cdktf = require("cdktf");
function datasyncLocationEfsEc2ConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupArns),
        subnet_arn: cdktf.stringToTerraform(struct.subnetArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs}
*/
var DatasyncLocationEfs = /** @class */ (function (_super) {
    __extends(DatasyncLocationEfs, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationEfsConfig
    */
    function DatasyncLocationEfs(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_datasync_location_efs',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._efsFileSystemArn = config.efsFileSystemArn;
        _this._subdirectory = config.subdirectory;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._ec2Config = config.ec2Config;
        return _this;
    }
    Object.defineProperty(DatasyncLocationEfs.prototype, "arn", {
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
    Object.defineProperty(DatasyncLocationEfs.prototype, "efsFileSystemArn", {
        get: function () {
            return this.getStringAttribute('efs_file_system_arn');
        },
        set: function (value) {
            this._efsFileSystemArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationEfs.prototype, "efsFileSystemArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._efsFileSystemArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationEfs.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationEfs.prototype, "subdirectory", {
        get: function () {
            return this.getStringAttribute('subdirectory');
        },
        set: function (value) {
            this._subdirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationEfs.prototype.resetSubdirectory = function () {
        this._subdirectory = undefined;
    };
    Object.defineProperty(DatasyncLocationEfs.prototype, "subdirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subdirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationEfs.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationEfs.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DatasyncLocationEfs.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationEfs.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationEfs.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DatasyncLocationEfs.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationEfs.prototype, "uri", {
        // uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationEfs.prototype, "ec2Config", {
        get: function () {
            return this.interpolationForAttribute('ec2_config');
        },
        set: function (value) {
            this._ec2Config = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationEfs.prototype, "ec2ConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ec2Config;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DatasyncLocationEfs.prototype.synthesizeAttributes = function () {
        return {
            efs_file_system_arn: cdktf.stringToTerraform(this._efsFileSystemArn),
            subdirectory: cdktf.stringToTerraform(this._subdirectory),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            ec2_config: cdktf.listMapper(datasyncLocationEfsEc2ConfigToTerraform)(this._ec2Config)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DatasyncLocationEfs.tfResourceType = "aws_datasync_location_efs";
    return DatasyncLocationEfs;
}(cdktf.TerraformResource));
exports.DatasyncLocationEfs = DatasyncLocationEfs;
