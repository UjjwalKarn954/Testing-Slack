"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html
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
exports.SsmPatchGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html aws_ssm_patch_group}
*/
var SsmPatchGroup = /** @class */ (function (_super) {
    __extends(SsmPatchGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html aws_ssm_patch_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmPatchGroupConfig
    */
    function SsmPatchGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_patch_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._baselineId = config.baselineId;
        _this._patchGroup = config.patchGroup;
        return _this;
    }
    Object.defineProperty(SsmPatchGroup.prototype, "baselineId", {
        get: function () {
            return this.getStringAttribute('baseline_id');
        },
        set: function (value) {
            this._baselineId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchGroup.prototype, "baselineIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baselineId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchGroup.prototype, "patchGroup", {
        get: function () {
            return this.getStringAttribute('patch_group');
        },
        set: function (value) {
            this._patchGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmPatchGroup.prototype, "patchGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._patchGroup;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsmPatchGroup.prototype.synthesizeAttributes = function () {
        return {
            baseline_id: cdktf.stringToTerraform(this._baselineId),
            patch_group: cdktf.stringToTerraform(this._patchGroup)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmPatchGroup.tfResourceType = "aws_ssm_patch_group";
    return SsmPatchGroup;
}(cdktf.TerraformResource));
exports.SsmPatchGroup = SsmPatchGroup;
