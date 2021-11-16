"use strict";
// https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html
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
exports.RedshiftSnapshotSchedule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html aws_redshift_snapshot_schedule}
*/
var RedshiftSnapshotSchedule = /** @class */ (function (_super) {
    __extends(RedshiftSnapshotSchedule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html aws_redshift_snapshot_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSnapshotScheduleConfig
    */
    function RedshiftSnapshotSchedule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_redshift_snapshot_schedule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._definitions = config.definitions;
        _this._description = config.description;
        _this._forceDestroy = config.forceDestroy;
        _this._identifier = config.identifier;
        _this._identifierPrefix = config.identifierPrefix;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "arn", {
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
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "definitions", {
        get: function () {
            return this.getListAttribute('definitions');
        },
        set: function (value) {
            this._definitions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "definitionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._definitions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotSchedule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotSchedule.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotSchedule.prototype.resetIdentifier = function () {
        this._identifier = undefined;
    };
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "identifierPrefix", {
        get: function () {
            return this.getStringAttribute('identifier_prefix');
        },
        set: function (value) {
            this._identifierPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotSchedule.prototype.resetIdentifierPrefix = function () {
        this._identifierPrefix = undefined;
    };
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "identifierPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifierPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotSchedule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSnapshotSchedule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(RedshiftSnapshotSchedule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RedshiftSnapshotSchedule.prototype.synthesizeAttributes = function () {
        return {
            definitions: cdktf.listMapper(cdktf.stringToTerraform)(this._definitions),
            description: cdktf.stringToTerraform(this._description),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            identifier: cdktf.stringToTerraform(this._identifier),
            identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RedshiftSnapshotSchedule.tfResourceType = "aws_redshift_snapshot_schedule";
    return RedshiftSnapshotSchedule;
}(cdktf.TerraformResource));
exports.RedshiftSnapshotSchedule = RedshiftSnapshotSchedule;
