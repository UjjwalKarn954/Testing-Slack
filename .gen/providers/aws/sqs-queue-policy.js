"use strict";
// https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html
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
exports.SqsQueuePolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html aws_sqs_queue_policy}
*/
var SqsQueuePolicy = /** @class */ (function (_super) {
    __extends(SqsQueuePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html aws_sqs_queue_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SqsQueuePolicyConfig
    */
    function SqsQueuePolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sqs_queue_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._policy = config.policy;
        _this._queueUrl = config.queueUrl;
        return _this;
    }
    Object.defineProperty(SqsQueuePolicy.prototype, "id", {
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
    Object.defineProperty(SqsQueuePolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueuePolicy.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueuePolicy.prototype, "queueUrl", {
        get: function () {
            return this.getStringAttribute('queue_url');
        },
        set: function (value) {
            this._queueUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueuePolicy.prototype, "queueUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueUrl;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SqsQueuePolicy.prototype.synthesizeAttributes = function () {
        return {
            policy: cdktf.stringToTerraform(this._policy),
            queue_url: cdktf.stringToTerraform(this._queueUrl)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SqsQueuePolicy.tfResourceType = "aws_sqs_queue_policy";
    return SqsQueuePolicy;
}(cdktf.TerraformResource));
exports.SqsQueuePolicy = SqsQueuePolicy;
