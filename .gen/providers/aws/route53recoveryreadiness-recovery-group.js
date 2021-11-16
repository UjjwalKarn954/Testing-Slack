"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html
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
exports.Route53RecoveryreadinessRecoveryGroup = void 0;
var cdktf = require("cdktf");
function route53RecoveryreadinessRecoveryGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html aws_route53recoveryreadiness_recovery_group}
*/
var Route53RecoveryreadinessRecoveryGroup = /** @class */ (function (_super) {
    __extends(Route53RecoveryreadinessRecoveryGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html aws_route53recoveryreadiness_recovery_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessRecoveryGroupConfig
    */
    function Route53RecoveryreadinessRecoveryGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53recoveryreadiness_recovery_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cells = config.cells;
        _this._recoveryGroupName = config.recoveryGroupName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "arn", {
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
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "cells", {
        get: function () {
            return this.getListAttribute('cells');
        },
        set: function (value) {
            this._cells = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessRecoveryGroup.prototype.resetCells = function () {
        this._cells = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "cellsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cells;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "recoveryGroupName", {
        get: function () {
            return this.getStringAttribute('recovery_group_name');
        },
        set: function (value) {
            this._recoveryGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "recoveryGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recoveryGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessRecoveryGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessRecoveryGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessRecoveryGroup.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessRecoveryGroup.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53RecoveryreadinessRecoveryGroup.prototype.synthesizeAttributes = function () {
        return {
            cells: cdktf.listMapper(cdktf.stringToTerraform)(this._cells),
            recovery_group_name: cdktf.stringToTerraform(this._recoveryGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: route53RecoveryreadinessRecoveryGroupTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53RecoveryreadinessRecoveryGroup.tfResourceType = "aws_route53recoveryreadiness_recovery_group";
    return Route53RecoveryreadinessRecoveryGroup;
}(cdktf.TerraformResource));
exports.Route53RecoveryreadinessRecoveryGroup = Route53RecoveryreadinessRecoveryGroup;
