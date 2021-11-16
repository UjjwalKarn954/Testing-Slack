"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html
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
exports.MacieS3BucketAssociation = void 0;
var cdktf = require("cdktf");
function macieS3BucketAssociationClassificationTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        continuous: cdktf.stringToTerraform(struct.continuous),
        one_time: cdktf.stringToTerraform(struct.oneTime)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html aws_macie_s3_bucket_association}
*/
var MacieS3BucketAssociation = /** @class */ (function (_super) {
    __extends(MacieS3BucketAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html aws_macie_s3_bucket_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MacieS3BucketAssociationConfig
    */
    function MacieS3BucketAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie_s3_bucket_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucketName = config.bucketName;
        _this._memberAccountId = config.memberAccountId;
        _this._prefix = config.prefix;
        _this._classificationType = config.classificationType;
        return _this;
    }
    Object.defineProperty(MacieS3BucketAssociation.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MacieS3BucketAssociation.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MacieS3BucketAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MacieS3BucketAssociation.prototype, "memberAccountId", {
        get: function () {
            return this.getStringAttribute('member_account_id');
        },
        set: function (value) {
            this._memberAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    MacieS3BucketAssociation.prototype.resetMemberAccountId = function () {
        this._memberAccountId = undefined;
    };
    Object.defineProperty(MacieS3BucketAssociation.prototype, "memberAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memberAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MacieS3BucketAssociation.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    MacieS3BucketAssociation.prototype.resetPrefix = function () {
        this._prefix = undefined;
    };
    Object.defineProperty(MacieS3BucketAssociation.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MacieS3BucketAssociation.prototype, "classificationType", {
        get: function () {
            return this.interpolationForAttribute('classification_type');
        },
        set: function (value) {
            this._classificationType = value;
        },
        enumerable: false,
        configurable: true
    });
    MacieS3BucketAssociation.prototype.resetClassificationType = function () {
        this._classificationType = undefined;
    };
    Object.defineProperty(MacieS3BucketAssociation.prototype, "classificationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._classificationType;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MacieS3BucketAssociation.prototype.synthesizeAttributes = function () {
        return {
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            member_account_id: cdktf.stringToTerraform(this._memberAccountId),
            prefix: cdktf.stringToTerraform(this._prefix),
            classification_type: cdktf.listMapper(macieS3BucketAssociationClassificationTypeToTerraform)(this._classificationType)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MacieS3BucketAssociation.tfResourceType = "aws_macie_s3_bucket_association";
    return MacieS3BucketAssociation;
}(cdktf.TerraformResource));
exports.MacieS3BucketAssociation = MacieS3BucketAssociation;
