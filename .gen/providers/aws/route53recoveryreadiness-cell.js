"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html
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
exports.Route53RecoveryreadinessCell = void 0;
var cdktf = require("cdktf");
function route53RecoveryreadinessCellTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html aws_route53recoveryreadiness_cell}
*/
var Route53RecoveryreadinessCell = /** @class */ (function (_super) {
    __extends(Route53RecoveryreadinessCell, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html aws_route53recoveryreadiness_cell} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessCellConfig
    */
    function Route53RecoveryreadinessCell(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53recoveryreadiness_cell',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cellName = config.cellName;
        _this._cells = config.cells;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "arn", {
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
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "cellName", {
        get: function () {
            return this.getStringAttribute('cell_name');
        },
        set: function (value) {
            this._cellName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "cellNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cellName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "cells", {
        get: function () {
            return this.getListAttribute('cells');
        },
        set: function (value) {
            this._cells = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessCell.prototype.resetCells = function () {
        this._cells = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "cellsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cells;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "parentReadinessScopes", {
        // parent_readiness_scopes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('parent_readiness_scopes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessCell.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessCell.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessCell.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessCell.prototype, "timeoutsInput", {
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
    Route53RecoveryreadinessCell.prototype.synthesizeAttributes = function () {
        return {
            cell_name: cdktf.stringToTerraform(this._cellName),
            cells: cdktf.listMapper(cdktf.stringToTerraform)(this._cells),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: route53RecoveryreadinessCellTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53RecoveryreadinessCell.tfResourceType = "aws_route53recoveryreadiness_cell";
    return Route53RecoveryreadinessCell;
}(cdktf.TerraformResource));
exports.Route53RecoveryreadinessCell = Route53RecoveryreadinessCell;
