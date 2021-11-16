"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html
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
exports.S3AccountPublicAccessBlock = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block}
*/
var S3AccountPublicAccessBlock = /** @class */ (function (_super) {
    __extends(S3AccountPublicAccessBlock, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3AccountPublicAccessBlockConfig = {}
    */
    function S3AccountPublicAccessBlock(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_account_public_access_block',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._blockPublicAcls = config.blockPublicAcls;
        _this._blockPublicPolicy = config.blockPublicPolicy;
        _this._ignorePublicAcls = config.ignorePublicAcls;
        _this._restrictPublicBuckets = config.restrictPublicBuckets;
        return _this;
    }
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccountPublicAccessBlock.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "blockPublicAcls", {
        get: function () {
            return this.getBooleanAttribute('block_public_acls');
        },
        set: function (value) {
            this._blockPublicAcls = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccountPublicAccessBlock.prototype.resetBlockPublicAcls = function () {
        this._blockPublicAcls = undefined;
    };
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "blockPublicAclsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockPublicAcls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "blockPublicPolicy", {
        get: function () {
            return this.getBooleanAttribute('block_public_policy');
        },
        set: function (value) {
            this._blockPublicPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccountPublicAccessBlock.prototype.resetBlockPublicPolicy = function () {
        this._blockPublicPolicy = undefined;
    };
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "blockPublicPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockPublicPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "ignorePublicAcls", {
        get: function () {
            return this.getBooleanAttribute('ignore_public_acls');
        },
        set: function (value) {
            this._ignorePublicAcls = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccountPublicAccessBlock.prototype.resetIgnorePublicAcls = function () {
        this._ignorePublicAcls = undefined;
    };
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "ignorePublicAclsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignorePublicAcls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "restrictPublicBuckets", {
        get: function () {
            return this.getBooleanAttribute('restrict_public_buckets');
        },
        set: function (value) {
            this._restrictPublicBuckets = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccountPublicAccessBlock.prototype.resetRestrictPublicBuckets = function () {
        this._restrictPublicBuckets = undefined;
    };
    Object.defineProperty(S3AccountPublicAccessBlock.prototype, "restrictPublicBucketsInput", {
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
    S3AccountPublicAccessBlock.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            block_public_acls: cdktf.booleanToTerraform(this._blockPublicAcls),
            block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
            ignore_public_acls: cdktf.booleanToTerraform(this._ignorePublicAcls),
            restrict_public_buckets: cdktf.booleanToTerraform(this._restrictPublicBuckets)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3AccountPublicAccessBlock.tfResourceType = "aws_s3_account_public_access_block";
    return S3AccountPublicAccessBlock;
}(cdktf.TerraformResource));
exports.S3AccountPublicAccessBlock = S3AccountPublicAccessBlock;
