"use strict";
// https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html
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
exports.SecurityhubStandardsSubscription = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html aws_securityhub_standards_subscription}
*/
var SecurityhubStandardsSubscription = /** @class */ (function (_super) {
    __extends(SecurityhubStandardsSubscription, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html aws_securityhub_standards_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubStandardsSubscriptionConfig
    */
    function SecurityhubStandardsSubscription(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_securityhub_standards_subscription',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._standardsArn = config.standardsArn;
        return _this;
    }
    Object.defineProperty(SecurityhubStandardsSubscription.prototype, "id", {
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
    Object.defineProperty(SecurityhubStandardsSubscription.prototype, "standardsArn", {
        get: function () {
            return this.getStringAttribute('standards_arn');
        },
        set: function (value) {
            this._standardsArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsSubscription.prototype, "standardsArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._standardsArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecurityhubStandardsSubscription.prototype.synthesizeAttributes = function () {
        return {
            standards_arn: cdktf.stringToTerraform(this._standardsArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityhubStandardsSubscription.tfResourceType = "aws_securityhub_standards_subscription";
    return SecurityhubStandardsSubscription;
}(cdktf.TerraformResource));
exports.SecurityhubStandardsSubscription = SecurityhubStandardsSubscription;
