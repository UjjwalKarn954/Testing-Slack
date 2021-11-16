"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html
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
exports.CloudwatchEventApiDestination = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination}
*/
var CloudwatchEventApiDestination = /** @class */ (function (_super) {
    __extends(CloudwatchEventApiDestination, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventApiDestinationConfig
    */
    function CloudwatchEventApiDestination(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_api_destination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._connectionArn = config.connectionArn;
        _this._description = config.description;
        _this._httpMethod = config.httpMethod;
        _this._invocationEndpoint = config.invocationEndpoint;
        _this._invocationRateLimitPerSecond = config.invocationRateLimitPerSecond;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "arn", {
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
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "connectionArn", {
        get: function () {
            return this.getStringAttribute('connection_arn');
        },
        set: function (value) {
            this._connectionArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "connectionArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventApiDestination.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "httpMethod", {
        get: function () {
            return this.getStringAttribute('http_method');
        },
        set: function (value) {
            this._httpMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "httpMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "invocationEndpoint", {
        get: function () {
            return this.getStringAttribute('invocation_endpoint');
        },
        set: function (value) {
            this._invocationEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "invocationEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invocationEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "invocationRateLimitPerSecond", {
        get: function () {
            return this.getNumberAttribute('invocation_rate_limit_per_second');
        },
        set: function (value) {
            this._invocationRateLimitPerSecond = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventApiDestination.prototype.resetInvocationRateLimitPerSecond = function () {
        this._invocationRateLimitPerSecond = undefined;
    };
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "invocationRateLimitPerSecondInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invocationRateLimitPerSecond;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventApiDestination.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchEventApiDestination.prototype.synthesizeAttributes = function () {
        return {
            connection_arn: cdktf.stringToTerraform(this._connectionArn),
            description: cdktf.stringToTerraform(this._description),
            http_method: cdktf.stringToTerraform(this._httpMethod),
            invocation_endpoint: cdktf.stringToTerraform(this._invocationEndpoint),
            invocation_rate_limit_per_second: cdktf.numberToTerraform(this._invocationRateLimitPerSecond),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchEventApiDestination.tfResourceType = "aws_cloudwatch_event_api_destination";
    return CloudwatchEventApiDestination;
}(cdktf.TerraformResource));
exports.CloudwatchEventApiDestination = CloudwatchEventApiDestination;
