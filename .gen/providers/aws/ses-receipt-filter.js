"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html
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
exports.SesReceiptFilter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html aws_ses_receipt_filter}
*/
var SesReceiptFilter = /** @class */ (function (_super) {
    __extends(SesReceiptFilter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html aws_ses_receipt_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptFilterConfig
    */
    function SesReceiptFilter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_receipt_filter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cidr = config.cidr;
        _this._name = config.name;
        _this._policy = config.policy;
        return _this;
    }
    Object.defineProperty(SesReceiptFilter.prototype, "arn", {
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
    Object.defineProperty(SesReceiptFilter.prototype, "cidr", {
        get: function () {
            return this.getStringAttribute('cidr');
        },
        set: function (value) {
            this._cidr = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptFilter.prototype, "cidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptFilter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptFilter.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptFilter.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptFilter.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptFilter.prototype, "policyInput", {
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
    SesReceiptFilter.prototype.synthesizeAttributes = function () {
        return {
            cidr: cdktf.stringToTerraform(this._cidr),
            name: cdktf.stringToTerraform(this._name),
            policy: cdktf.stringToTerraform(this._policy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesReceiptFilter.tfResourceType = "aws_ses_receipt_filter";
    return SesReceiptFilter;
}(cdktf.TerraformResource));
exports.SesReceiptFilter = SesReceiptFilter;
