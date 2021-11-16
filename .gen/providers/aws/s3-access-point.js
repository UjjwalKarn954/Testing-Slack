"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_access_point.html
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
exports.S3AccessPoint = void 0;
var cdktf = require("cdktf");
function s3AccessPointPublicAccessBlockConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        block_public_acls: cdktf.booleanToTerraform(struct.blockPublicAcls),
        block_public_policy: cdktf.booleanToTerraform(struct.blockPublicPolicy),
        ignore_public_acls: cdktf.booleanToTerraform(struct.ignorePublicAcls),
        restrict_public_buckets: cdktf.booleanToTerraform(struct.restrictPublicBuckets)
    };
}
function s3AccessPointVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        vpc_id: cdktf.stringToTerraform(struct.vpcId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point}
*/
var S3AccessPoint = /** @class */ (function (_super) {
    __extends(S3AccessPoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3AccessPointConfig
    */
    function S3AccessPoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_access_point',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._bucket = config.bucket;
        _this._name = config.name;
        _this._policy = config.policy;
        _this._publicAccessBlockConfiguration = config.publicAccessBlockConfiguration;
        _this._vpcConfiguration = config.vpcConfiguration;
        return _this;
    }
    Object.defineProperty(S3AccessPoint.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccessPoint.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(S3AccessPoint.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "domainName", {
        // domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "hasPublicAccessPolicy", {
        // has_public_access_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_public_access_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "networkOrigin", {
        // network_origin - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccessPoint.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(S3AccessPoint.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "publicAccessBlockConfiguration", {
        get: function () {
            return this.interpolationForAttribute('public_access_block_configuration');
        },
        set: function (value) {
            this._publicAccessBlockConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccessPoint.prototype.resetPublicAccessBlockConfiguration = function () {
        this._publicAccessBlockConfiguration = undefined;
    };
    Object.defineProperty(S3AccessPoint.prototype, "publicAccessBlockConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicAccessBlockConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3AccessPoint.prototype, "vpcConfiguration", {
        get: function () {
            return this.interpolationForAttribute('vpc_configuration');
        },
        set: function (value) {
            this._vpcConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    S3AccessPoint.prototype.resetVpcConfiguration = function () {
        this._vpcConfiguration = undefined;
    };
    Object.defineProperty(S3AccessPoint.prototype, "vpcConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3AccessPoint.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket: cdktf.stringToTerraform(this._bucket),
            name: cdktf.stringToTerraform(this._name),
            policy: cdktf.stringToTerraform(this._policy),
            public_access_block_configuration: cdktf.listMapper(s3AccessPointPublicAccessBlockConfigurationToTerraform)(this._publicAccessBlockConfiguration),
            vpc_configuration: cdktf.listMapper(s3AccessPointVpcConfigurationToTerraform)(this._vpcConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3AccessPoint.tfResourceType = "aws_s3_access_point";
    return S3AccessPoint;
}(cdktf.TerraformResource));
exports.S3AccessPoint = S3AccessPoint;
