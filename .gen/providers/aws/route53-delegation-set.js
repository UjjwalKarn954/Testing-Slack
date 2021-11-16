"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html
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
exports.Route53DelegationSet = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html aws_route53_delegation_set}
*/
var Route53DelegationSet = /** @class */ (function (_super) {
    __extends(Route53DelegationSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html aws_route53_delegation_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53DelegationSetConfig = {}
    */
    function Route53DelegationSet(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_delegation_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._referenceName = config.referenceName;
        return _this;
    }
    Object.defineProperty(Route53DelegationSet.prototype, "arn", {
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
    Object.defineProperty(Route53DelegationSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53DelegationSet.prototype, "nameServers", {
        // name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53DelegationSet.prototype, "referenceName", {
        get: function () {
            return this.getStringAttribute('reference_name');
        },
        set: function (value) {
            this._referenceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53DelegationSet.prototype.resetReferenceName = function () {
        this._referenceName = undefined;
    };
    Object.defineProperty(Route53DelegationSet.prototype, "referenceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._referenceName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53DelegationSet.prototype.synthesizeAttributes = function () {
        return {
            reference_name: cdktf.stringToTerraform(this._referenceName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53DelegationSet.tfResourceType = "aws_route53_delegation_set";
    return Route53DelegationSet;
}(cdktf.TerraformResource));
exports.Route53DelegationSet = Route53DelegationSet;
