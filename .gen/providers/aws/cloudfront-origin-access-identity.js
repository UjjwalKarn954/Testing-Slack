"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html
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
exports.CloudfrontOriginAccessIdentity = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity}
*/
var CloudfrontOriginAccessIdentity = /** @class */ (function (_super) {
    __extends(CloudfrontOriginAccessIdentity, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginAccessIdentityConfig = {}
    */
    function CloudfrontOriginAccessIdentity(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_origin_access_identity',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._comment = config.comment;
        return _this;
    }
    Object.defineProperty(CloudfrontOriginAccessIdentity.prototype, "callerReference", {
        // ==========
        // ATTRIBUTES
        // ==========
        // caller_reference - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('caller_reference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginAccessIdentity.prototype, "cloudfrontAccessIdentityPath", {
        // cloudfront_access_identity_path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudfront_access_identity_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginAccessIdentity.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontOriginAccessIdentity.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontOriginAccessIdentity.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginAccessIdentity.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginAccessIdentity.prototype, "iamArn", {
        // iam_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iam_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginAccessIdentity.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginAccessIdentity.prototype, "s3CanonicalUserId", {
        // s3_canonical_user_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('s3_canonical_user_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontOriginAccessIdentity.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontOriginAccessIdentity.tfResourceType = "aws_cloudfront_origin_access_identity";
    return CloudfrontOriginAccessIdentity;
}(cdktf.TerraformResource));
exports.CloudfrontOriginAccessIdentity = CloudfrontOriginAccessIdentity;
