"use strict";
// https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html
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
exports.SnsTopicPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html aws_sns_topic_policy}
*/
var SnsTopicPolicy = /** @class */ (function (_super) {
    __extends(SnsTopicPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html aws_sns_topic_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicPolicyConfig
    */
    function SnsTopicPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sns_topic_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        _this._policy = config.policy;
        return _this;
    }
    Object.defineProperty(SnsTopicPolicy.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicPolicy.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicPolicy.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicPolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopicPolicy.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SnsTopicPolicy.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            policy: cdktf.stringToTerraform(this._policy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SnsTopicPolicy.tfResourceType = "aws_sns_topic_policy";
    return SnsTopicPolicy;
}(cdktf.TerraformResource));
exports.SnsTopicPolicy = SnsTopicPolicy;
