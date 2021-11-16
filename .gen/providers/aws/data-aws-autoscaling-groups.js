"use strict";
// https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html
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
exports.DataAwsAutoscalingGroups = void 0;
var cdktf = require("cdktf");
function dataAwsAutoscalingGroupsFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html aws_autoscaling_groups}
*/
var DataAwsAutoscalingGroups = /** @class */ (function (_super) {
    __extends(DataAwsAutoscalingGroups, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html aws_autoscaling_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAutoscalingGroupsConfig = {}
    */
    function DataAwsAutoscalingGroups(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_groups',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsAutoscalingGroups.prototype, "arns", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('arns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroups.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroups.prototype, "names", {
        // names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAutoscalingGroups.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAutoscalingGroups.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsAutoscalingGroups.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsAutoscalingGroups.prototype.synthesizeAttributes = function () {
        return {
            filter: cdktf.listMapper(dataAwsAutoscalingGroupsFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAutoscalingGroups.tfResourceType = "aws_autoscaling_groups";
    return DataAwsAutoscalingGroups;
}(cdktf.TerraformDataSource));
exports.DataAwsAutoscalingGroups = DataAwsAutoscalingGroups;
