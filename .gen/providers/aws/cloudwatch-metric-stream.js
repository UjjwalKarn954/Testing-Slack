"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html
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
exports.CloudwatchMetricStream = void 0;
var cdktf = require("cdktf");
function cloudwatchMetricStreamExcludeFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        namespace: cdktf.stringToTerraform(struct.namespace)
    };
}
function cloudwatchMetricStreamIncludeFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        namespace: cdktf.stringToTerraform(struct.namespace)
    };
}
function cloudwatchMetricStreamTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html aws_cloudwatch_metric_stream}
*/
var CloudwatchMetricStream = /** @class */ (function (_super) {
    __extends(CloudwatchMetricStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html aws_cloudwatch_metric_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricStreamConfig
    */
    function CloudwatchMetricStream(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_metric_stream',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._firehoseArn = config.firehoseArn;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._outputFormat = config.outputFormat;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._excludeFilter = config.excludeFilter;
        _this._includeFilter = config.includeFilter;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(CloudwatchMetricStream.prototype, "arn", {
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
    Object.defineProperty(CloudwatchMetricStream.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "firehoseArn", {
        get: function () {
            return this.getStringAttribute('firehose_arn');
        },
        set: function (value) {
            this._firehoseArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "firehoseArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firehoseArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "lastUpdateDate", {
        // last_update_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_update_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricStream.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(CloudwatchMetricStream.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricStream.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(CloudwatchMetricStream.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "outputFormat", {
        get: function () {
            return this.getStringAttribute('output_format');
        },
        set: function (value) {
            this._outputFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "outputFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricStream.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CloudwatchMetricStream.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricStream.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CloudwatchMetricStream.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "excludeFilter", {
        get: function () {
            return this.interpolationForAttribute('exclude_filter');
        },
        set: function (value) {
            this._excludeFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricStream.prototype.resetExcludeFilter = function () {
        this._excludeFilter = undefined;
    };
    Object.defineProperty(CloudwatchMetricStream.prototype, "excludeFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "includeFilter", {
        get: function () {
            return this.interpolationForAttribute('include_filter');
        },
        set: function (value) {
            this._includeFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricStream.prototype.resetIncludeFilter = function () {
        this._includeFilter = undefined;
    };
    Object.defineProperty(CloudwatchMetricStream.prototype, "includeFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchMetricStream.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchMetricStream.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(CloudwatchMetricStream.prototype, "timeoutsInput", {
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
    CloudwatchMetricStream.prototype.synthesizeAttributes = function () {
        return {
            firehose_arn: cdktf.stringToTerraform(this._firehoseArn),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            output_format: cdktf.stringToTerraform(this._outputFormat),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            exclude_filter: cdktf.listMapper(cloudwatchMetricStreamExcludeFilterToTerraform)(this._excludeFilter),
            include_filter: cdktf.listMapper(cloudwatchMetricStreamIncludeFilterToTerraform)(this._includeFilter),
            timeouts: cloudwatchMetricStreamTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchMetricStream.tfResourceType = "aws_cloudwatch_metric_stream";
    return CloudwatchMetricStream;
}(cdktf.TerraformResource));
exports.CloudwatchMetricStream = CloudwatchMetricStream;
