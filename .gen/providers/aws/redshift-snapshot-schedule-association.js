"use strict";
// https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html
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
exports.RedshiftSnapshotScheduleAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html aws_redshift_snapshot_schedule_association}
*/
var RedshiftSnapshotScheduleAssociation = /** @class */ (function (_super) {
    __extends(RedshiftSnapshotScheduleAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html aws_redshift_snapshot_schedule_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSnapshotScheduleAssociationConfig
    */
    function RedshiftSnapshotScheduleAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_redshift_snapshot_schedule_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._scheduleIdentifier = config.scheduleIdentifier;
        return _this;
    }
    Object.defineProperty(RedshiftSnapshotScheduleAssociation.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotScheduleAssociation.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotScheduleAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotScheduleAssociation.prototype, "scheduleIdentifier", {
        get: function () {
            return this.getStringAttribute('schedule_identifier');
        },
        set: function (value) {
            this._scheduleIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotScheduleAssociation.prototype, "scheduleIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheduleIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RedshiftSnapshotScheduleAssociation.prototype.synthesizeAttributes = function () {
        return {
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            schedule_identifier: cdktf.stringToTerraform(this._scheduleIdentifier)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RedshiftSnapshotScheduleAssociation.tfResourceType = "aws_redshift_snapshot_schedule_association";
    return RedshiftSnapshotScheduleAssociation;
}(cdktf.TerraformResource));
exports.RedshiftSnapshotScheduleAssociation = RedshiftSnapshotScheduleAssociation;
