"use strict";
// https://www.terraform.io/docs/providers/aws/r/backup_selection.html
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
exports.BackupSelection = void 0;
var cdktf = require("cdktf");
function backupSelectionSelectionTagToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html aws_backup_selection}
*/
var BackupSelection = /** @class */ (function (_super) {
    __extends(BackupSelection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html aws_backup_selection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupSelectionConfig
    */
    function BackupSelection(scope, id, config) {
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
        _this._iamRoleArn = config.iamRoleArn;
        _this._name = config.name;
        _this._planId = config.planId;
        _this._resources = config.resources;
        _this._selectionTag = config.selectionTag;
        return _this;
    }
    Object.defineProperty(BackupSelection.prototype, "iamRoleArn", {
        get: function () {
            return this.getStringAttribute('iam_role_arn');
        },
        set: function (value) {
            this._iamRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupSelection.prototype, "iamRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupSelection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupSelection.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupSelection.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupSelection.prototype, "planId", {
        get: function () {
            return this.getStringAttribute('plan_id');
        },
        set: function (value) {
            this._planId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupSelection.prototype, "planIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._planId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupSelection.prototype, "resources", {
        get: function () {
            return this.getListAttribute('resources');
        },
        set: function (value) {
            this._resources = value;
        },
        enumerable: false,
        configurable: true
    });
    BackupSelection.prototype.resetResources = function () {
        this._resources = undefined;
    };
    Object.defineProperty(BackupSelection.prototype, "resourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupSelection.prototype, "selectionTag", {
        get: function () {
            return this.interpolationForAttribute('selection_tag');
        },
        set: function (value) {
            this._selectionTag = value;
        },
        enumerable: false,
        configurable: true
    });
    BackupSelection.prototype.resetSelectionTag = function () {
        this._selectionTag = undefined;
    };
    Object.defineProperty(BackupSelection.prototype, "selectionTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selectionTag;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BackupSelection.prototype.synthesizeAttributes = function () {
        return {
            iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
            name: cdktf.stringToTerraform(this._name),
            plan_id: cdktf.stringToTerraform(this._planId),
            resources: cdktf.listMapper(cdktf.stringToTerraform)(this._resources),
            selection_tag: cdktf.listMapper(backupSelectionSelectionTagToTerraform)(this._selectionTag)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BackupSelection.tfResourceType = "aws_backup_selection";
    return BackupSelection;
}(cdktf.TerraformResource));
exports.BackupSelection = BackupSelection;
