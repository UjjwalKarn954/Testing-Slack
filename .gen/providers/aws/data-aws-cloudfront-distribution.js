"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html
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
exports.DataAwsCloudfrontDistribution = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html aws_cloudfront_distribution}
*/
var DataAwsCloudfrontDistribution = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontDistribution, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html aws_cloudfront_distribution} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontDistributionConfig
    */
    function DataAwsCloudfrontDistribution(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_distribution',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._id = config.id;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "arn", {
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
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "domainName", {
        // domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "inProgressValidationBatches", {
        // in_progress_validation_batches - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('in_progress_validation_batches');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "lastModifiedTime", {
        // last_modified_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudfrontDistribution.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsCloudfrontDistribution.prototype, "tagsInput", {
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
    DataAwsCloudfrontDistribution.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudfrontDistribution.tfResourceType = "aws_cloudfront_distribution";
    return DataAwsCloudfrontDistribution;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudfrontDistribution = DataAwsCloudfrontDistribution;
