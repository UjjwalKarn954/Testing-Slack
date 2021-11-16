"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html
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
exports.CloudwatchLogResourcePolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html aws_cloudwatch_log_resource_policy}
*/
var CloudwatchLogResourcePolicy = /** @class */ (function (_super) {
    __extends(CloudwatchLogResourcePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html aws_cloudwatch_log_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogResourcePolicyConfig
    */
    function CloudwatchLogResourcePolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_log_resource_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._policyDocument = config.policyDocument;
        _this._policyName = config.policyName;
        return _this;
    }
    Object.defineProperty(CloudwatchLogResourcePolicy.prototype, "id", {
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
    Object.defineProperty(CloudwatchLogResourcePolicy.prototype, "policyDocument", {
        get: function () {
            return this.getStringAttribute('policy_document');
        },
        set: function (value) {
            this._policyDocument = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogResourcePolicy.prototype, "policyDocumentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyDocument;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogResourcePolicy.prototype, "policyName", {
        get: function () {
            return this.getStringAttribute('policy_name');
        },
        set: function (value) {
            this._policyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogResourcePolicy.prototype, "policyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchLogResourcePolicy.prototype.synthesizeAttributes = function () {
        return {
            policy_document: cdktf.stringToTerraform(this._policyDocument),
            policy_name: cdktf.stringToTerraform(this._policyName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchLogResourcePolicy.tfResourceType = "aws_cloudwatch_log_resource_policy";
    return CloudwatchLogResourcePolicy;
}(cdktf.TerraformResource));
exports.CloudwatchLogResourcePolicy = CloudwatchLogResourcePolicy;
