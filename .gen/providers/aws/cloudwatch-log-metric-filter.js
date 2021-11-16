"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html
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
exports.CloudwatchLogMetricFilter = void 0;
var cdktf = require("cdktf");
function cloudwatchLogMetricFilterMetricTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_value: cdktf.stringToTerraform(struct.defaultValue),
        dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct.dimensions),
        name: cdktf.stringToTerraform(struct.name),
        namespace: cdktf.stringToTerraform(struct.namespace),
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter}
*/
var CloudwatchLogMetricFilter = /** @class */ (function (_super) {
    __extends(CloudwatchLogMetricFilter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogMetricFilterConfig
    */
    function CloudwatchLogMetricFilter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_log_metric_filter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._logGroupName = config.logGroupName;
        _this._name = config.name;
        _this._pattern = config.pattern;
        _this._metricTransformation = config.metricTransformation;
        return _this;
    }
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "logGroupName", {
        get: function () {
            return this.getStringAttribute('log_group_name');
        },
        set: function (value) {
            this._logGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "logGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "metricTransformation", {
        get: function () {
            return this.interpolationForAttribute('metric_transformation');
        },
        set: function (value) {
            this._metricTransformation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogMetricFilter.prototype, "metricTransformationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricTransformation;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchLogMetricFilter.prototype.synthesizeAttributes = function () {
        return {
            log_group_name: cdktf.stringToTerraform(this._logGroupName),
            name: cdktf.stringToTerraform(this._name),
            pattern: cdktf.stringToTerraform(this._pattern),
            metric_transformation: cdktf.listMapper(cloudwatchLogMetricFilterMetricTransformationToTerraform)(this._metricTransformation)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchLogMetricFilter.tfResourceType = "aws_cloudwatch_log_metric_filter";
    return CloudwatchLogMetricFilter;
}(cdktf.TerraformResource));
exports.CloudwatchLogMetricFilter = CloudwatchLogMetricFilter;
