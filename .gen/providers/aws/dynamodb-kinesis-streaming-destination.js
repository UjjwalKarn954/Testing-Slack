"use strict";
// https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html
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
exports.DynamodbKinesisStreamingDestination = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html aws_dynamodb_kinesis_streaming_destination}
*/
var DynamodbKinesisStreamingDestination = /** @class */ (function (_super) {
    __extends(DynamodbKinesisStreamingDestination, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html aws_dynamodb_kinesis_streaming_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbKinesisStreamingDestinationConfig
    */
    function DynamodbKinesisStreamingDestination(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dynamodb_kinesis_streaming_destination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._streamArn = config.streamArn;
        _this._tableName = config.tableName;
        return _this;
    }
    Object.defineProperty(DynamodbKinesisStreamingDestination.prototype, "id", {
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
    Object.defineProperty(DynamodbKinesisStreamingDestination.prototype, "streamArn", {
        get: function () {
            return this.getStringAttribute('stream_arn');
        },
        set: function (value) {
            this._streamArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbKinesisStreamingDestination.prototype, "streamArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._streamArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbKinesisStreamingDestination.prototype, "tableName", {
        get: function () {
            return this.getStringAttribute('table_name');
        },
        set: function (value) {
            this._tableName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbKinesisStreamingDestination.prototype, "tableNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DynamodbKinesisStreamingDestination.prototype.synthesizeAttributes = function () {
        return {
            stream_arn: cdktf.stringToTerraform(this._streamArn),
            table_name: cdktf.stringToTerraform(this._tableName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DynamodbKinesisStreamingDestination.tfResourceType = "aws_dynamodb_kinesis_streaming_destination";
    return DynamodbKinesisStreamingDestination;
}(cdktf.TerraformResource));
exports.DynamodbKinesisStreamingDestination = DynamodbKinesisStreamingDestination;
