"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html
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
exports.Macie2FindingsFilter = void 0;
var cdktf = require("cdktf");
function macie2FindingsFilterFindingCriteriaCriterionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.listMapper(cdktf.stringToTerraform)(struct.eq),
        eq_exact_match: cdktf.listMapper(cdktf.stringToTerraform)(struct.eqExactMatch),
        field: cdktf.stringToTerraform(struct.field),
        gt: cdktf.stringToTerraform(struct.gt),
        gte: cdktf.stringToTerraform(struct.gte),
        lt: cdktf.stringToTerraform(struct.lt),
        lte: cdktf.stringToTerraform(struct.lte),
        neq: cdktf.listMapper(cdktf.stringToTerraform)(struct.neq)
    };
}
function macie2FindingsFilterFindingCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        criterion: cdktf.listMapper(macie2FindingsFilterFindingCriteriaCriterionToTerraform)(struct.criterion)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter}
*/
var Macie2FindingsFilter = /** @class */ (function (_super) {
    __extends(Macie2FindingsFilter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2FindingsFilterConfig
    */
    function Macie2FindingsFilter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie2_findings_filter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._action = config.action;
        _this._description = config.description;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._position = config.position;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._findingCriteria = config.findingCriteria;
        return _this;
    }
    Object.defineProperty(Macie2FindingsFilter.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2FindingsFilter.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Macie2FindingsFilter.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2FindingsFilter.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Macie2FindingsFilter.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2FindingsFilter.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(Macie2FindingsFilter.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "position", {
        get: function () {
            return this.getNumberAttribute('position');
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2FindingsFilter.prototype.resetPosition = function () {
        this._position = undefined;
    };
    Object.defineProperty(Macie2FindingsFilter.prototype, "positionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2FindingsFilter.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Macie2FindingsFilter.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2FindingsFilter.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Macie2FindingsFilter.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "findingCriteria", {
        get: function () {
            return this.interpolationForAttribute('finding_criteria');
        },
        set: function (value) {
            this._findingCriteria = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2FindingsFilter.prototype, "findingCriteriaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._findingCriteria;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Macie2FindingsFilter.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            position: cdktf.numberToTerraform(this._position),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            finding_criteria: cdktf.listMapper(macie2FindingsFilterFindingCriteriaToTerraform)(this._findingCriteria)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Macie2FindingsFilter.tfResourceType = "aws_macie2_findings_filter";
    return Macie2FindingsFilter;
}(cdktf.TerraformResource));
exports.Macie2FindingsFilter = Macie2FindingsFilter;
