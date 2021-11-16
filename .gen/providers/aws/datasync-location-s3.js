"use strict";
// https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html
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
exports.DatasyncLocationS3 = void 0;
var cdktf = require("cdktf");
function datasyncLocationS3S3ConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_access_role_arn: cdktf.stringToTerraform(struct.bucketAccessRoleArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3}
*/
var DatasyncLocationS3 = /** @class */ (function (_super) {
    __extends(DatasyncLocationS3, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationS3Config
    */
    function DatasyncLocationS3(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_datasync_location_s3',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._agentArns = config.agentArns;
        _this._s3BucketArn = config.s3BucketArn;
        _this._s3StorageClass = config.s3StorageClass;
        _this._subdirectory = config.subdirectory;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._s3Config = config.s3Config;
        return _this;
    }
    Object.defineProperty(DatasyncLocationS3.prototype, "agentArns", {
        get: function () {
            return this.getListAttribute('agent_arns');
        },
        set: function (value) {
            this._agentArns = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationS3.prototype.resetAgentArns = function () {
        this._agentArns = undefined;
    };
    Object.defineProperty(DatasyncLocationS3.prototype, "agentArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._agentArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "s3BucketArn", {
        get: function () {
            return this.getStringAttribute('s3_bucket_arn');
        },
        set: function (value) {
            this._s3BucketArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "s3BucketArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3BucketArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "s3StorageClass", {
        get: function () {
            return this.getStringAttribute('s3_storage_class');
        },
        set: function (value) {
            this._s3StorageClass = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationS3.prototype.resetS3StorageClass = function () {
        this._s3StorageClass = undefined;
    };
    Object.defineProperty(DatasyncLocationS3.prototype, "s3StorageClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3StorageClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "subdirectory", {
        get: function () {
            return this.getStringAttribute('subdirectory');
        },
        set: function (value) {
            this._subdirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "subdirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subdirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationS3.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DatasyncLocationS3.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationS3.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DatasyncLocationS3.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "uri", {
        // uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "s3Config", {
        get: function () {
            return this.interpolationForAttribute('s3_config');
        },
        set: function (value) {
            this._s3Config = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationS3.prototype, "s3ConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Config;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DatasyncLocationS3.prototype.synthesizeAttributes = function () {
        return {
            agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
            s3_bucket_arn: cdktf.stringToTerraform(this._s3BucketArn),
            s3_storage_class: cdktf.stringToTerraform(this._s3StorageClass),
            subdirectory: cdktf.stringToTerraform(this._subdirectory),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            s3_config: cdktf.listMapper(datasyncLocationS3S3ConfigToTerraform)(this._s3Config)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DatasyncLocationS3.tfResourceType = "aws_datasync_location_s3";
    return DatasyncLocationS3;
}(cdktf.TerraformResource));
exports.DatasyncLocationS3 = DatasyncLocationS3;
