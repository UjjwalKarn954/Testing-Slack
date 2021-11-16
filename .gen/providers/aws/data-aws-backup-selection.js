"use strict";
// https://www.terraform.io/docs/providers/aws/d/backup_selection.html
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
exports.DataAwsBackupSelection = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html aws_backup_selection}
*/
var DataAwsBackupSelection = /** @class */ (function (_super) {
    __extends(DataAwsBackupSelection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html aws_backup_selection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupSelectionConfig
    */
    function DataAwsBackupSelection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_selection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._planId = config.planId;
        _this._selectionId = config.selectionId;
        return _this;
    }
    Object.defineProperty(DataAwsBackupSelection.prototype, "iamRoleArn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // iam_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iam_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupSelection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupSelection.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupSelection.prototype, "planId", {
        get: function () {
            return this.getStringAttribute('plan_id');
        },
        set: function (value) {
            this._planId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupSelection.prototype, "planIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._planId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupSelection.prototype, "resources", {
        // resources - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('resources');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupSelection.prototype, "selectionId", {
        get: function () {
            return this.getStringAttribute('selection_id');
        },
        set: function (value) {
            this._selectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupSelection.prototype, "selectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selectionId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsBackupSelection.prototype.synthesizeAttributes = function () {
        return {
            plan_id: cdktf.stringToTerraform(this._planId),
            selection_id: cdktf.stringToTerraform(this._selectionId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsBackupSelection.tfResourceType = "aws_backup_selection";
    return DataAwsBackupSelection;
}(cdktf.TerraformDataSource));
exports.DataAwsBackupSelection = DataAwsBackupSelection;
