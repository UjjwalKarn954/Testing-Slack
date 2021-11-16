"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html
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
exports.S3BucketOwnershipControls = void 0;
var cdktf = require("cdktf");
function s3BucketOwnershipControlsRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object_ownership: cdktf.stringToTerraform(struct.objectOwnership)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html aws_s3_bucket_ownership_controls}
*/
var S3BucketOwnershipControls = /** @class */ (function (_super) {
    __extends(S3BucketOwnershipControls, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html aws_s3_bucket_ownership_controls} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketOwnershipControlsConfig
    */
    function S3BucketOwnershipControls(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket_ownership_controls',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._rule = config.rule;
        return _this;
    }
    Object.defineProperty(S3BucketOwnershipControls.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketOwnershipControls.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketOwnershipControls.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketOwnershipControls.prototype, "rule", {
        get: function () {
            return this.interpolationForAttribute('rule');
        },
        set: function (value) {
            this._rule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketOwnershipControls.prototype, "ruleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rule;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3BucketOwnershipControls.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            rule: cdktf.listMapper(s3BucketOwnershipControlsRuleToTerraform)(this._rule)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3BucketOwnershipControls.tfResourceType = "aws_s3_bucket_ownership_controls";
    return S3BucketOwnershipControls;
}(cdktf.TerraformResource));
exports.S3BucketOwnershipControls = S3BucketOwnershipControls;
