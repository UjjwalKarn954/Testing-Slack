"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html
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
exports.S3BucketPublicAccessBlock = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html aws_s3_bucket_public_access_block}
*/
var S3BucketPublicAccessBlock = /** @class */ (function (_super) {
    __extends(S3BucketPublicAccessBlock, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html aws_s3_bucket_public_access_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketPublicAccessBlockConfig
    */
    function S3BucketPublicAccessBlock(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket_public_access_block',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._blockPublicAcls = config.blockPublicAcls;
        _this._blockPublicPolicy = config.blockPublicPolicy;
        _this._bucket = config.bucket;
        _this._ignorePublicAcls = config.ignorePublicAcls;
        _this._restrictPublicBuckets = config.restrictPublicBuckets;
        return _this;
    }
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "blockPublicAcls", {
        get: function () {
            return this.getBooleanAttribute('block_public_acls');
        },
        set: function (value) {
            this._blockPublicAcls = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketPublicAccessBlock.prototype.resetBlockPublicAcls = function () {
        this._blockPublicAcls = undefined;
    };
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "blockPublicAclsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockPublicAcls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "blockPublicPolicy", {
        get: function () {
            return this.getBooleanAttribute('block_public_policy');
        },
        set: function (value) {
            this._blockPublicPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketPublicAccessBlock.prototype.resetBlockPublicPolicy = function () {
        this._blockPublicPolicy = undefined;
    };
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "blockPublicPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockPublicPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "ignorePublicAcls", {
        get: function () {
            return this.getBooleanAttribute('ignore_public_acls');
        },
        set: function (value) {
            this._ignorePublicAcls = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketPublicAccessBlock.prototype.resetIgnorePublicAcls = function () {
        this._ignorePublicAcls = undefined;
    };
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "ignorePublicAclsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignorePublicAcls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "restrictPublicBuckets", {
        get: function () {
            return this.getBooleanAttribute('restrict_public_buckets');
        },
        set: function (value) {
            this._restrictPublicBuckets = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketPublicAccessBlock.prototype.resetRestrictPublicBuckets = function () {
        this._restrictPublicBuckets = undefined;
    };
    Object.defineProperty(S3BucketPublicAccessBlock.prototype, "restrictPublicBucketsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictPublicBuckets;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3BucketPublicAccessBlock.prototype.synthesizeAttributes = function () {
        return {
            block_public_acls: cdktf.booleanToTerraform(this._blockPublicAcls),
            block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
            bucket: cdktf.stringToTerraform(this._bucket),
            ignore_public_acls: cdktf.booleanToTerraform(this._ignorePublicAcls),
            restrict_public_buckets: cdktf.booleanToTerraform(this._restrictPublicBuckets)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3BucketPublicAccessBlock.tfResourceType = "aws_s3_bucket_public_access_block";
    return S3BucketPublicAccessBlock;
}(cdktf.TerraformResource));
exports.S3BucketPublicAccessBlock = S3BucketPublicAccessBlock;
