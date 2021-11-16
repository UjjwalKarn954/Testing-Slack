"use strict";
// https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html
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
exports.RedshiftSnapshotCopyGrant = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html aws_redshift_snapshot_copy_grant}
*/
var RedshiftSnapshotCopyGrant = /** @class */ (function (_super) {
    __extends(RedshiftSnapshotCopyGrant, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html aws_redshift_snapshot_copy_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSnapshotCopyGrantConfig
    */
    function RedshiftSnapshotCopyGrant(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_redshift_snapshot_copy_grant',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._kmsKeyId = config.kmsKeyId;
        _this._snapshotCopyGrantName = config.snapshotCopyGrantName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "arn", {
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
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotCopyGrant.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "snapshotCopyGrantName", {
        get: function () {
            return this.getStringAttribute('snapshot_copy_grant_name');
        },
        set: function (value) {
            this._snapshotCopyGrantName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "snapshotCopyGrantNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotCopyGrantName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotCopyGrant.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotCopyGrant.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(RedshiftSnapshotCopyGrant.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RedshiftSnapshotCopyGrant.prototype.synthesizeAttributes = function () {
        return {
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            snapshot_copy_grant_name: cdktf.stringToTerraform(this._snapshotCopyGrantName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RedshiftSnapshotCopyGrant.tfResourceType = "aws_redshift_snapshot_copy_grant";
    return RedshiftSnapshotCopyGrant;
}(cdktf.TerraformResource));
exports.RedshiftSnapshotCopyGrant = RedshiftSnapshotCopyGrant;