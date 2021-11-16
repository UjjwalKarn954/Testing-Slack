"use strict";
// https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html
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
exports.DataAwsRoute53DelegationSet = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html aws_route53_delegation_set}
*/
var DataAwsRoute53DelegationSet = /** @class */ (function (_super) {
    __extends(DataAwsRoute53DelegationSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html aws_route53_delegation_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53DelegationSetConfig
    */
    function DataAwsRoute53DelegationSet(scope, id, config) {
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
        _this._id = config.id;
        return _this;
    }
    Object.defineProperty(DataAwsRoute53DelegationSet.prototype, "arn", {
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
    Object.defineProperty(DataAwsRoute53DelegationSet.prototype, "callerReference", {
        // caller_reference - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('caller_reference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53DelegationSet.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53DelegationSet.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53DelegationSet.prototype, "nameServers", {
        // name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('name_servers');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRoute53DelegationSet.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRoute53DelegationSet.tfResourceType = "aws_route53_delegation_set";
    return DataAwsRoute53DelegationSet;
}(cdktf.TerraformDataSource));
exports.DataAwsRoute53DelegationSet = DataAwsRoute53DelegationSet;
