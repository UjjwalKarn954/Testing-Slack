"use strict";
// https://www.terraform.io/docs/providers/aws/d/s3_bucket.html
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
exports.DataAwsS3Bucket = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket.html aws_s3_bucket}
*/
var DataAwsS3Bucket = /** @class */ (function (_super) {
    __extends(DataAwsS3Bucket, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket.html aws_s3_bucket} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3BucketConfig
    */
    function DataAwsS3Bucket(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        return _this;
    }
    Object.defineProperty(DataAwsS3Bucket.prototype, "arn", {
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
    Object.defineProperty(DataAwsS3Bucket.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3Bucket.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3Bucket.prototype, "bucketDomainName", {
        // bucket_domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3Bucket.prototype, "bucketRegionalDomainName", {
        // bucket_regional_domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_regional_domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3Bucket.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3Bucket.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3Bucket.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3Bucket.prototype, "websiteDomain", {
        // website_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('website_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3Bucket.prototype, "websiteEndpoint", {
        // website_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('website_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsS3Bucket.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsS3Bucket.tfResourceType = "aws_s3_bucket";
    return DataAwsS3Bucket;
}(cdktf.TerraformDataSource));
exports.DataAwsS3Bucket = DataAwsS3Bucket;
