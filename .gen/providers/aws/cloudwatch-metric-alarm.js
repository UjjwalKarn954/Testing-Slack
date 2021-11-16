"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html
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
exports.CloudwatchMetricAlarm = void 0;
var cdktf = require("cdktf");
function cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct.dimensions),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        period: cdktf.numberToTerraform(struct.period),
        stat: cdktf.stringToTerraform(struct.stat),
        unit: cdktf.stringToTerraform(struct.unit)
    };
}
function cloudwatchMetricAlarmMetricQueryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        expression: cdktf.stringToTerraform(struct.expression),
        id: cdktf.stringToTerraform(struct.id),
        label: cdktf.stringToTerraform(struct.label),
        return_data: cdktf.booleanToTerraform(struct.returnData),
        metric: cdktf.listMapper(cloudwatchMetricAlarmMetricQueryMetricToTerraform)(struct.metric)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm}
*/
var CloudwatchMetricAlarm = /** @class */ (function (_super) {
    __extends(CloudwatchMetricAlarm, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricAlarmConfig
    */
    function CloudwatchMetricAlarm(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_metric_alarm',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._actionsEnabled = config.actionsEnabled;
        _this._alarmActions = config.alarmActions;
        _this._alarmDescription = config.alarmDescription;
        _this._alarmName = config.alarmName;
        _this._comparisonOperator = config.comparisonOperator;
        _this._datapointsToAlarm = config.datapointsToAlarm;
        _this._dimensions = config.dimensions;
        _this._evaluateLowSampleCountPercentiles = config.evaluateLowSampleCountPercentiles;
        _this._evaluationPeriods = config.evaluationPeriods;
        _this._extendedStatistic = config.extendedStatistic;
        _this._insufficientDataActions = config.insufficientDataActions;
        _this._metricName = config.metricName;
        _this._namespace = config.namespace;
        _this._okActions = config.okActions;
        _this._period = config.period;
        _this._statistic = config.statistic;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._threshold = config.threshold;
        _this._thresholdMetricId = config.thresholdMetricId;
        _this._treatMissingData = config.treatMissingData;
        _this._unit = config.unit;
        _this._metricQuery = config.metricQuery;
        return _this;
    }
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "actionsEnabled", {
        get: function () {
            return this.getBooleanAttribute('actions_enabled');
        },
        set: function (value) {
            this._actionsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetActionsEnabled = function () {
        this._actionsEnabled = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "actionsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actionsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "alarmActions", {
        get: function () {
            return this.getListAttribute('alarm_actions');
        },
        set: function (value) {
            this._alarmActions = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetAlarmActions = function () {
        this._alarmActions = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "alarmActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alarmActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "alarmDescription", {
        get: function () {
            return this.getStringAttribute('alarm_description');
        },
        set: function (value) {
            this._alarmDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetAlarmDescription = function () {
        this._alarmDescription = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "alarmDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alarmDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "alarmName", {
        get: function () {
            return this.getStringAttribute('alarm_name');
        },
        set: function (value) {
            this._alarmName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "alarmNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alarmName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "comparisonOperator", {
        get: function () {
            return this.getStringAttribute('comparison_operator');
        },
        set: function (value) {
            this._comparisonOperator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "comparisonOperatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comparisonOperator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "datapointsToAlarm", {
        get: function () {
            return this.getNumberAttribute('datapoints_to_alarm');
        },
        set: function (value) {
            this._datapointsToAlarm = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetDatapointsToAlarm = function () {
        this._datapointsToAlarm = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "datapointsToAlarmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._datapointsToAlarm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "dimensions", {
        get: function () {
            return this.interpolationForAttribute('dimensions');
        },
        set: function (value) {
            this._dimensions = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetDimensions = function () {
        this._dimensions = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "dimensionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dimensions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "evaluateLowSampleCountPercentiles", {
        get: function () {
            return this.getStringAttribute('evaluate_low_sample_count_percentiles');
        },
        set: function (value) {
            this._evaluateLowSampleCountPercentiles = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetEvaluateLowSampleCountPercentiles = function () {
        this._evaluateLowSampleCountPercentiles = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "evaluateLowSampleCountPercentilesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._evaluateLowSampleCountPercentiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "evaluationPeriods", {
        get: function () {
            return this.getNumberAttribute('evaluation_periods');
        },
        set: function (value) {
            this._evaluationPeriods = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "evaluationPeriodsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._evaluationPeriods;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "extendedStatistic", {
        get: function () {
            return this.getStringAttribute('extended_statistic');
        },
        set: function (value) {
            this._extendedStatistic = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetExtendedStatistic = function () {
        this._extendedStatistic = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "extendedStatisticInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extendedStatistic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "insufficientDataActions", {
        get: function () {
            return this.getListAttribute('insufficient_data_actions');
        },
        set: function (value) {
            this._insufficientDataActions = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetInsufficientDataActions = function () {
        this._insufficientDataActions = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "insufficientDataActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insufficientDataActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "metricName", {
        get: function () {
            return this.getStringAttribute('metric_name');
        },
        set: function (value) {
            this._metricName = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetMetricName = function () {
        this._metricName = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "metricNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "okActions", {
        get: function () {
            return this.getListAttribute('ok_actions');
        },
        set: function (value) {
            this._okActions = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetOkActions = function () {
        this._okActions = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "okActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._okActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "period", {
        get: function () {
            return this.getNumberAttribute('period');
        },
        set: function (value) {
            this._period = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetPeriod = function () {
        this._period = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "periodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._period;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "statistic", {
        get: function () {
            return this.getStringAttribute('statistic');
        },
        set: function (value) {
            this._statistic = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetStatistic = function () {
        this._statistic = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "statisticInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statistic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "threshold", {
        get: function () {
            return this.getNumberAttribute('threshold');
        },
        set: function (value) {
            this._threshold = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetThreshold = function () {
        this._threshold = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "thresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._threshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "thresholdMetricId", {
        get: function () {
            return this.getStringAttribute('threshold_metric_id');
        },
        set: function (value) {
            this._thresholdMetricId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetThresholdMetricId = function () {
        this._thresholdMetricId = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "thresholdMetricIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thresholdMetricId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "treatMissingData", {
        get: function () {
            return this.getStringAttribute('treat_missing_data');
        },
        set: function (value) {
            this._treatMissingData = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetTreatMissingData = function () {
        this._treatMissingData = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "treatMissingDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._treatMissingData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "unit", {
        get: function () {
            return this.getStringAttribute('unit');
        },
        set: function (value) {
            this._unit = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetUnit = function () {
        this._unit = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "unitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "metricQuery", {
        get: function () {
            return this.interpolationForAttribute('metric_query');
        },
        set: function (value) {
            this._metricQuery = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricAlarm.prototype.resetMetricQuery = function () {
        this._metricQuery = undefined;
    };
    Object.defineProperty(CloudwatchMetricAlarm.prototype, "metricQueryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricQuery;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchMetricAlarm.prototype.synthesizeAttributes = function () {
        return {
            actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
            alarm_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._alarmActions),
            alarm_description: cdktf.stringToTerraform(this._alarmDescription),
            alarm_name: cdktf.stringToTerraform(this._alarmName),
            comparison_operator: cdktf.stringToTerraform(this._comparisonOperator),
            datapoints_to_alarm: cdktf.numberToTerraform(this._datapointsToAlarm),
            dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(this._dimensions),
            evaluate_low_sample_count_percentiles: cdktf.stringToTerraform(this._evaluateLowSampleCountPercentiles),
            evaluation_periods: cdktf.numberToTerraform(this._evaluationPeriods),
            extended_statistic: cdktf.stringToTerraform(this._extendedStatistic),
            insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._insufficientDataActions),
            metric_name: cdktf.stringToTerraform(this._metricName),
            namespace: cdktf.stringToTerraform(this._namespace),
            ok_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._okActions),
            period: cdktf.numberToTerraform(this._period),
            statistic: cdktf.stringToTerraform(this._statistic),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            threshold: cdktf.numberToTerraform(this._threshold),
            threshold_metric_id: cdktf.stringToTerraform(this._thresholdMetricId),
            treat_missing_data: cdktf.stringToTerraform(this._treatMissingData),
            unit: cdktf.stringToTerraform(this._unit),
            metric_query: cdktf.listMapper(cloudwatchMetricAlarmMetricQueryToTerraform)(this._metricQuery)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchMetricAlarm.tfResourceType = "aws_cloudwatch_metric_alarm";
    return CloudwatchMetricAlarm;
}(cdktf.TerraformResource));
exports.CloudwatchMetricAlarm = CloudwatchMetricAlarm;
