"use strict";
// https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription.html
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
exports.SecurityhubProductSubscription = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription.html aws_securityhub_product_subscription}
*/
var SecurityhubProductSubscription = /** @class */ (function (_super) {
    __extends(SecurityhubProductSubscription, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription.html aws_securityhub_product_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubProductSubscriptionConfig
    */
    function SecurityhubProductSubscription(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_securityhub_product_subscription',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._productArn = config.productArn;
        return _this;
    }
    Object.defineProperty(SecurityhubProductSubscription.prototype, "arn", {
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
    Object.defineProperty(SecurityhubProductSubscription.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubProductSubscription.prototype, "productArn", {
        get: function () {
            return this.getStringAttribute('product_arn');
        },
        set: function (value) {
            this._productArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubProductSubscription.prototype, "productArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecurityhubProductSubscription.prototype.synthesizeAttributes = function () {
        return {
            product_arn: cdktf.stringToTerraform(this._productArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityhubProductSubscription.tfResourceType = "aws_securityhub_product_subscription";
    return SecurityhubProductSubscription;
}(cdktf.TerraformResource));
exports.SecurityhubProductSubscription = SecurityhubProductSubscription;
