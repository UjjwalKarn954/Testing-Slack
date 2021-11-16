"use strict";
// https://www.terraform.io/docs/providers/aws/d/backup_plan.html
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
exports.DataAwsBackupPlan = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html aws_backup_plan}
*/
var DataAwsBackupPlan = /** @class */ (function (_super) {
    __extends(DataAwsBackupPlan, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html aws_backup_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupPlanConfig
    */
    function DataAwsBackupPlan(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_plan',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._planId = config.planId;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsBackupPlan.prototype, "arn", {
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
    Object.defineProperty(DataAwsBackupPlan.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupPlan.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupPlan.prototype, "planId", {
        get: function () {
            return this.getStringAttribute('plan_id');
        },
        set: function (value) {
            this._planId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupPlan.prototype, "planIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._planId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupPlan.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsBackupPlan.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsBackupPlan.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupPlan.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsBackupPlan.prototype.synthesizeAttributes = function () {
        return {
            plan_id: cdktf.stringToTerraform(this._planId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsBackupPlan.tfResourceType = "aws_backup_plan";
    return DataAwsBackupPlan;
}(cdktf.TerraformDataSource));
exports.DataAwsBackupPlan = DataAwsBackupPlan;
