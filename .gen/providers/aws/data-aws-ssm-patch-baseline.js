"use strict";
// https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html
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
exports.DataAwsSsmPatchBaseline = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html aws_ssm_patch_baseline}
*/
var DataAwsSsmPatchBaseline = /** @class */ (function (_super) {
    __extends(DataAwsSsmPatchBaseline, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html aws_ssm_patch_baseline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmPatchBaselineConfig
    */
    function DataAwsSsmPatchBaseline(scope, id, config) {
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
        _this._defaultBaseline = config.defaultBaseline;
        _this._namePrefix = config.namePrefix;
        _this._operatingSystem = config.operatingSystem;
        _this._owner = config.owner;
        return _this;
    }
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "defaultBaseline", {
        get: function () {
            return this.getBooleanAttribute('default_baseline');
        },
        set: function (value) {
            this._defaultBaseline = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsmPatchBaseline.prototype.resetDefaultBaseline = function () {
        this._defaultBaseline = undefined;
    };
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "defaultBaselineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultBaseline;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsmPatchBaseline.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "operatingSystem", {
        get: function () {
            return this.getStringAttribute('operating_system');
        },
        set: function (value) {
            this._operatingSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsmPatchBaseline.prototype.resetOperatingSystem = function () {
        this._operatingSystem = undefined;
    };
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "operatingSystemInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operatingSystem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmPatchBaseline.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSsmPatchBaseline.prototype.synthesizeAttributes = function () {
        return {
            default_baseline: cdktf.booleanToTerraform(this._defaultBaseline),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            operating_system: cdktf.stringToTerraform(this._operatingSystem),
            owner: cdktf.stringToTerraform(this._owner)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSsmPatchBaseline.tfResourceType = "aws_ssm_patch_baseline";
    return DataAwsSsmPatchBaseline;
}(cdktf.TerraformDataSource));
exports.DataAwsSsmPatchBaseline = DataAwsSsmPatchBaseline;
