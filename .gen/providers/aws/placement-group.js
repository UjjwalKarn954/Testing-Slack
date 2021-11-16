"use strict";
// https://www.terraform.io/docs/providers/aws/r/placement_group.html
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
exports.PlacementGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html aws_placement_group}
*/
var PlacementGroup = /** @class */ (function (_super) {
    __extends(PlacementGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html aws_placement_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PlacementGroupConfig
    */
    function PlacementGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_placement_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._partitionCount = config.partitionCount;
        _this._strategy = config.strategy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(PlacementGroup.prototype, "arn", {
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
    Object.defineProperty(PlacementGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlacementGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlacementGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlacementGroup.prototype, "partitionCount", {
        get: function () {
            return this.getNumberAttribute('partition_count');
        },
        set: function (value) {
            this._partitionCount = value;
        },
        enumerable: false,
        configurable: true
    });
    PlacementGroup.prototype.resetPartitionCount = function () {
        this._partitionCount = undefined;
    };
    Object.defineProperty(PlacementGroup.prototype, "partitionCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._partitionCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlacementGroup.prototype, "placementGroupId", {
        // placement_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('placement_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlacementGroup.prototype, "strategy", {
        get: function () {
            return this.getStringAttribute('strategy');
        },
        set: function (value) {
            this._strategy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlacementGroup.prototype, "strategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._strategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlacementGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    PlacementGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(PlacementGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlacementGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    PlacementGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(PlacementGroup.prototype, "tagsAllInput", {
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
    PlacementGroup.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            partition_count: cdktf.numberToTerraform(this._partitionCount),
            strategy: cdktf.stringToTerraform(this._strategy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PlacementGroup.tfResourceType = "aws_placement_group";
    return PlacementGroup;
}(cdktf.TerraformResource));
exports.PlacementGroup = PlacementGroup;
