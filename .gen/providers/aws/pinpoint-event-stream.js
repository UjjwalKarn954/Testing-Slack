"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html
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
exports.PinpointEventStream = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html aws_pinpoint_event_stream}
*/
var PinpointEventStream = /** @class */ (function (_super) {
    __extends(PinpointEventStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html aws_pinpoint_event_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointEventStreamConfig
    */
    function PinpointEventStream(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_event_stream',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._destinationStreamArn = config.destinationStreamArn;
        _this._roleArn = config.roleArn;
        return _this;
    }
    Object.defineProperty(PinpointEventStream.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEventStream.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEventStream.prototype, "destinationStreamArn", {
        get: function () {
            return this.getStringAttribute('destination_stream_arn');
        },
        set: function (value) {
            this._destinationStreamArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEventStream.prototype, "destinationStreamArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationStreamArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEventStream.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEventStream.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointEventStream.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PinpointEventStream.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            destination_stream_arn: cdktf.stringToTerraform(this._destinationStreamArn),
            role_arn: cdktf.stringToTerraform(this._roleArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PinpointEventStream.tfResourceType = "aws_pinpoint_event_stream";
    return PinpointEventStream;
}(cdktf.TerraformResource));
exports.PinpointEventStream = PinpointEventStream;
