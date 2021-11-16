"use strict";
// https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html
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
exports.GuarddutyFilter = void 0;
var cdktf = require("cdktf");
function guarddutyFilterFindingCriteriaCriterionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        equals: cdktf.listMapper(cdktf.stringToTerraform)(struct.equalTo),
        field: cdktf.stringToTerraform(struct.field),
        greater_than: cdktf.stringToTerraform(struct.greaterThan),
        greater_than_or_equal: cdktf.stringToTerraform(struct.greaterThanOrEqual),
        less_than: cdktf.stringToTerraform(struct.lessThan),
        less_than_or_equal: cdktf.stringToTerraform(struct.lessThanOrEqual),
        not_equals: cdktf.listMapper(cdktf.stringToTerraform)(struct.notEquals)
    };
}
function guarddutyFilterFindingCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        criterion: cdktf.listMapper(guarddutyFilterFindingCriteriaCriterionToTerraform)(struct.criterion)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter}
*/
var GuarddutyFilter = /** @class */ (function (_super) {
    __extends(GuarddutyFilter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyFilterConfig
    */
    function GuarddutyFilter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_guardduty_filter',
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
        _this._detectorId = config.detectorId;
        _this._name = config.name;
        _this._rank = config.rank;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._findingCriteria = config.findingCriteria;
        return _this;
    }
    Object.defineProperty(GuarddutyFilter.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyFilter.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GuarddutyFilter.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "detectorId", {
        get: function () {
            return this.getStringAttribute('detector_id');
        },
        set: function (value) {
            this._detectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "detectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._detectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "rank", {
        get: function () {
            return this.getNumberAttribute('rank');
        },
        set: function (value) {
            this._rank = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "rankInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyFilter.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GuarddutyFilter.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyFilter.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GuarddutyFilter.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "findingCriteria", {
        get: function () {
            return this.interpolationForAttribute('finding_criteria');
        },
        set: function (value) {
            this._findingCriteria = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyFilter.prototype, "findingCriteriaInput", {
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
    GuarddutyFilter.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            description: cdktf.stringToTerraform(this._description),
            detector_id: cdktf.stringToTerraform(this._detectorId),
            name: cdktf.stringToTerraform(this._name),
            rank: cdktf.numberToTerraform(this._rank),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            finding_criteria: cdktf.listMapper(guarddutyFilterFindingCriteriaToTerraform)(this._findingCriteria)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GuarddutyFilter.tfResourceType = "aws_guardduty_filter";
    return GuarddutyFilter;
}(cdktf.TerraformResource));
exports.GuarddutyFilter = GuarddutyFilter;
