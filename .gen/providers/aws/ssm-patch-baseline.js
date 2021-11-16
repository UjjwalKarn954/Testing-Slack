"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html
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
exports.SsmPatchBaseline = void 0;
var cdktf = require("cdktf");
function ssmPatchBaselineApprovalRulePatchFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function ssmPatchBaselineApprovalRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        approve_after_days: cdktf.numberToTerraform(struct.approveAfterDays),
        approve_until_date: cdktf.stringToTerraform(struct.approveUntilDate),
        compliance_level: cdktf.stringToTerraform(struct.complianceLevel),
        enable_non_security: cdktf.booleanToTerraform(struct.enableNonSecurity),
        patch_filter: cdktf.listMapper(ssmPatchBaselineApprovalRulePatchFilterToTerraform)(struct.patchFilter)
    };
}
function ssmPatchBaselineGlobalFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function ssmPatchBaselineSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configuration: cdktf.stringToTerraform(struct.configuration),
        name: cdktf.stringToTerraform(struct.name),
        products: cdktf.listMapper(cdktf.stringToTerraform)(struct.products)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html aws_ssm_patch_baseline}
*/
var SsmPatchBaseline = /** @class */ (function (_super) {
    __extends(SsmPatchBaseline, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html aws_ssm_patch_baseline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmPatchBaselineConfig
    */
    function SsmPatchBaseline(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_patch_baseline',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._approvedPatches = config.approvedPatches;
        _this._approvedPatchesComplianceLevel = config.approvedPatchesComplianceLevel;
        _this._approvedPatchesEnableNonSecurity = config.approvedPatchesEnableNonSecurity;
        _this._description = config.description;
        _this._name = config.name;
        _this._operatingSystem = config.operatingSystem;
        _this._rejectedPatches = config.rejectedPatches;
        _this._rejectedPatchesAction = config.rejectedPatchesAction;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._approvalRule = config.approvalRule;
        _this._globalFilter = config.globalFilter;
        _this._source = config.source;
        return _this;
    }
    Object.defineProperty(SsmPatchBaseline.prototype, "approvedPatches", {
        get: function () {
            return this.getListAttribute('approved_patches');
        },
        set: function (value) {
            this._approvedPatches = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetApprovedPatches = function () {
        this._approvedPatches = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "approvedPatchesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvedPatches;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "approvedPatchesComplianceLevel", {
        get: function () {
            return this.getStringAttribute('approved_patches_compliance_level');
        },
        set: function (value) {
            this._approvedPatchesComplianceLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetApprovedPatchesComplianceLevel = function () {
        this._approvedPatchesComplianceLevel = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "approvedPatchesComplianceLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvedPatchesComplianceLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "approvedPatchesEnableNonSecurity", {
        get: function () {
            return this.getBooleanAttribute('approved_patches_enable_non_security');
        },
        set: function (value) {
            this._approvedPatchesEnableNonSecurity = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetApprovedPatchesEnableNonSecurity = function () {
        this._approvedPatchesEnableNonSecurity = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "approvedPatchesEnableNonSecurityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvedPatchesEnableNonSecurity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "operatingSystem", {
        get: function () {
            return this.getStringAttribute('operating_system');
        },
        set: function (value) {
            this._operatingSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetOperatingSystem = function () {
        this._operatingSystem = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "operatingSystemInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operatingSystem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "rejectedPatches", {
        get: function () {
            return this.getListAttribute('rejected_patches');
        },
        set: function (value) {
            this._rejectedPatches = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetRejectedPatches = function () {
        this._rejectedPatches = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "rejectedPatchesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rejectedPatches;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "rejectedPatchesAction", {
        get: function () {
            return this.getStringAttribute('rejected_patches_action');
        },
        set: function (value) {
            this._rejectedPatchesAction = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetRejectedPatchesAction = function () {
        this._rejectedPatchesAction = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "rejectedPatchesActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rejectedPatchesAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "approvalRule", {
        get: function () {
            return this.interpolationForAttribute('approval_rule');
        },
        set: function (value) {
            this._approvalRule = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetApprovalRule = function () {
        this._approvalRule = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "approvalRuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvalRule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "globalFilter", {
        get: function () {
            return this.interpolationForAttribute('global_filter');
        },
        set: function (value) {
            this._globalFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetGlobalFilter = function () {
        this._globalFilter = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "globalFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchBaseline.prototype, "source", {
        get: function () {
            return this.interpolationForAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmPatchBaseline.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(SsmPatchBaseline.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsmPatchBaseline.prototype.synthesizeAttributes = function () {
        return {
            approved_patches: cdktf.listMapper(cdktf.stringToTerraform)(this._approvedPatches),
            approved_patches_compliance_level: cdktf.stringToTerraform(this._approvedPatchesComplianceLevel),
            approved_patches_enable_non_security: cdktf.booleanToTerraform(this._approvedPatchesEnableNonSecurity),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            operating_system: cdktf.stringToTerraform(this._operatingSystem),
            rejected_patches: cdktf.listMapper(cdktf.stringToTerraform)(this._rejectedPatches),
            rejected_patches_action: cdktf.stringToTerraform(this._rejectedPatchesAction),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            approval_rule: cdktf.listMapper(ssmPatchBaselineApprovalRuleToTerraform)(this._approvalRule),
            global_filter: cdktf.listMapper(ssmPatchBaselineGlobalFilterToTerraform)(this._globalFilter),
            source: cdktf.listMapper(ssmPatchBaselineSourceToTerraform)(this._source)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmPatchBaseline.tfResourceType = "aws_ssm_patch_baseline";
    return SsmPatchBaseline;
}(cdktf.TerraformResource));
exports.SsmPatchBaseline = SsmPatchBaseline;
