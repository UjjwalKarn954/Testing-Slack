"use strict";
// https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html
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
exports.DataAwsEbsSnapshotIds = void 0;
var cdktf = require("cdktf");
function dataAwsEbsSnapshotIdsFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html aws_ebs_snapshot_ids}
*/
var DataAwsEbsSnapshotIds = /** @class */ (function (_super) {
    __extends(DataAwsEbsSnapshotIds, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html aws_ebs_snapshot_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsSnapshotIdsConfig = {}
    */
    function DataAwsEbsSnapshotIds(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ebs_snapshot_ids',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._owners = config.owners;
        _this._restorableByUserIds = config.restorableByUserIds;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEbsSnapshotIds.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshotIds.prototype, "ids", {
        // ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshotIds.prototype, "owners", {
        get: function () {
            return this.getListAttribute('owners');
        },
        set: function (value) {
            this._owners = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshotIds.prototype.resetOwners = function () {
        this._owners = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshotIds.prototype, "ownersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owners;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshotIds.prototype, "restorableByUserIds", {
        get: function () {
            return this.getListAttribute('restorable_by_user_ids');
        },
        set: function (value) {
            this._restorableByUserIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshotIds.prototype.resetRestorableByUserIds = function () {
        this._restorableByUserIds = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshotIds.prototype, "restorableByUserIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restorableByUserIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsSnapshotIds.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsSnapshotIds.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEbsSnapshotIds.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEbsSnapshotIds.prototype.synthesizeAttributes = function () {
        return {
            owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
            restorable_by_user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._restorableByUserIds),
            filter: cdktf.listMapper(dataAwsEbsSnapshotIdsFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEbsSnapshotIds.tfResourceType = "aws_ebs_snapshot_ids";
    return DataAwsEbsSnapshotIds;
}(cdktf.TerraformDataSource));
exports.DataAwsEbsSnapshotIds = DataAwsEbsSnapshotIds;
