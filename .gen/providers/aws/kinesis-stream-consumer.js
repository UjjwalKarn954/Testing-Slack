"use strict";
// https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html
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
exports.KinesisStreamConsumer = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html aws_kinesis_stream_consumer}
*/
var KinesisStreamConsumer = /** @class */ (function (_super) {
    __extends(KinesisStreamConsumer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html aws_kinesis_stream_consumer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConsumerConfig
    */
    function KinesisStreamConsumer(scope, id, config) {
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
    Object.defineProperty(KinesisStreamConsumer.prototype, "arn", {
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
    Object.defineProperty(KinesisStreamConsumer.prototype, "creationTimestamp", {
        // creation_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStreamConsumer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStreamConsumer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStreamConsumer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStreamConsumer.prototype, "streamArn", {
        get: function () {
            return this.getStringAttribute('stream_arn');
        },
        set: function (value) {
            this._streamArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStreamConsumer.prototype, "streamArnInput", {
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
    KinesisStreamConsumer.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            stream_arn: cdktf.stringToTerraform(this._streamArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KinesisStreamConsumer.tfResourceType = "aws_kinesis_stream_consumer";
    return KinesisStreamConsumer;
}(cdktf.TerraformResource));
exports.KinesisStreamConsumer = KinesisStreamConsumer;
