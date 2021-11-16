"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html
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
exports.CloudwatchLogDestinationPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html aws_cloudwatch_log_destination_policy}
*/
var CloudwatchLogDestinationPolicy = /** @class */ (function (_super) {
    __extends(CloudwatchLogDestinationPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html aws_cloudwatch_log_destination_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogDestinationPolicyConfig
    */
    function CloudwatchLogDestinationPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_log_destination_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessPolicy = config.accessPolicy;
        _this._destinationName = config.destinationName;
        return _this;
    }
    Object.defineProperty(CloudwatchLogDestinationPolicy.prototype, "accessPolicy", {
        get: function () {
            return this.getStringAttribute('access_policy');
        },
        set: function (value) {
            this._accessPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogDestinationPolicy.prototype, "accessPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogDestinationPolicy.prototype, "destinationName", {
        get: function () {
            return this.getStringAttribute('destination_name');
        },
        set: function (value) {
            this._destinationName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogDestinationPolicy.prototype, "destinationNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogDestinationPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchLogDestinationPolicy.prototype.synthesizeAttributes = function () {
        return {
            access_policy: cdktf.stringToTerraform(this._accessPolicy),
            destination_name: cdktf.stringToTerraform(this._destinationName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchLogDestinationPolicy.tfResourceType = "aws_cloudwatch_log_destination_policy";
    return CloudwatchLogDestinationPolicy;
}(cdktf.TerraformResource));
exports.CloudwatchLogDestinationPolicy = CloudwatchLogDestinationPolicy;
