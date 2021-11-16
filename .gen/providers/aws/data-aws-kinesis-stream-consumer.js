"use strict";
// https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html
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
exports.DataAwsKinesisStreamConsumer = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html aws_kinesis_stream_consumer}
*/
var DataAwsKinesisStreamConsumer = /** @class */ (function (_super) {
    __extends(DataAwsKinesisStreamConsumer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html aws_kinesis_stream_consumer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisStreamConsumerConfig
    */
    function DataAwsKinesisStreamConsumer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kinesis_stream_consumer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._streamArn = config.streamArn;
        return _this;
    }
    Object.defineProperty(DataAwsKinesisStreamConsumer.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStreamConsumer.prototype, "creationTimestamp", {
        // creation_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStreamConsumer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStreamConsumer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKinesisStreamConsumer.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsKinesisStreamConsumer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStreamConsumer.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStreamConsumer.prototype, "streamArn", {
        get: function () {
            return this.getStringAttribute('stream_arn');
        },
        set: function (value) {
            this._streamArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStreamConsumer.prototype, "streamArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._streamArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsKinesisStreamConsumer.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            stream_arn: cdktf.stringToTerraform(this._streamArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsKinesisStreamConsumer.tfResourceType = "aws_kinesis_stream_consumer";
    return DataAwsKinesisStreamConsumer;
}(cdktf.TerraformDataSource));
exports.DataAwsKinesisStreamConsumer = DataAwsKinesisStreamConsumer;
