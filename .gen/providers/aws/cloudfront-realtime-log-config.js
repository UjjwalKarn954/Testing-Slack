"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html
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
exports.CloudfrontRealtimeLogConfig = void 0;
var cdktf = require("cdktf");
function cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        stream_arn: cdktf.stringToTerraform(struct.streamArn)
    };
}
function cloudfrontRealtimeLogConfigEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        stream_type: cdktf.stringToTerraform(struct.streamType),
        kinesis_stream_config: cdktf.listMapper(cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform)(struct.kinesisStreamConfig)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config}
*/
var CloudfrontRealtimeLogConfig = /** @class */ (function (_super) {
    __extends(CloudfrontRealtimeLogConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontRealtimeLogConfigConfig
    */
    function CloudfrontRealtimeLogConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_realtime_log_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._fields = config.fields;
        _this._name = config.name;
        _this._samplingRate = config.samplingRate;
        _this._endpoint = config.endpoint;
        return _this;
    }
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "arn", {
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
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "fields", {
        get: function () {
            return this.getListAttribute('fields');
        },
        set: function (value) {
            this._fields = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "fieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "samplingRate", {
        get: function () {
            return this.getNumberAttribute('sampling_rate');
        },
        set: function (value) {
            this._samplingRate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "samplingRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._samplingRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "endpoint", {
        get: function () {
            return this.interpolationForAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontRealtimeLogConfig.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontRealtimeLogConfig.prototype.synthesizeAttributes = function () {
        return {
            fields: cdktf.listMapper(cdktf.stringToTerraform)(this._fields),
            name: cdktf.stringToTerraform(this._name),
            sampling_rate: cdktf.numberToTerraform(this._samplingRate),
            endpoint: cdktf.listMapper(cloudfrontRealtimeLogConfigEndpointToTerraform)(this._endpoint)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontRealtimeLogConfig.tfResourceType = "aws_cloudfront_realtime_log_config";
    return CloudfrontRealtimeLogConfig;
}(cdktf.TerraformResource));
exports.CloudfrontRealtimeLogConfig = CloudfrontRealtimeLogConfig;
