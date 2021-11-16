"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html
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
exports.SsmMaintenanceWindowTarget = void 0;
var cdktf = require("cdktf");
function ssmMaintenanceWindowTargetTargetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html aws_ssm_maintenance_window_target}
*/
var SsmMaintenanceWindowTarget = /** @class */ (function (_super) {
    __extends(SsmMaintenanceWindowTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html aws_ssm_maintenance_window_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowTargetConfig
    */
    function SsmMaintenanceWindowTarget(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_maintenance_window_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._ownerInformation = config.ownerInformation;
        _this._resourceType = config.resourceType;
        _this._windowId = config.windowId;
        _this._targets = config.targets;
        return _this;
    }
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTarget.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTarget.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "ownerInformation", {
        get: function () {
            return this.getStringAttribute('owner_information');
        },
        set: function (value) {
            this._ownerInformation = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTarget.prototype.resetOwnerInformation = function () {
        this._ownerInformation = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "ownerInformationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerInformation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "resourceType", {
        get: function () {
            return this.getStringAttribute('resource_type');
        },
        set: function (value) {
            this._resourceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "resourceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "windowId", {
        get: function () {
            return this.getStringAttribute('window_id');
        },
        set: function (value) {
            this._windowId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "windowIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._windowId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "targets", {
        get: function () {
            return this.interpolationForAttribute('targets');
        },
        set: function (value) {
            this._targets = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTarget.prototype, "targetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targets;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsmMaintenanceWindowTarget.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            owner_information: cdktf.stringToTerraform(this._ownerInformation),
            resource_type: cdktf.stringToTerraform(this._resourceType),
            window_id: cdktf.stringToTerraform(this._windowId),
            targets: cdktf.listMapper(ssmMaintenanceWindowTargetTargetsToTerraform)(this._targets)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmMaintenanceWindowTarget.tfResourceType = "aws_ssm_maintenance_window_target";
    return SsmMaintenanceWindowTarget;
}(cdktf.TerraformResource));
exports.SsmMaintenanceWindowTarget = SsmMaintenanceWindowTarget;
