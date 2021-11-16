"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html
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
exports.Ec2ManagedPrefixListEntryA = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html aws_ec2_managed_prefix_list_entry}
*/
var Ec2ManagedPrefixListEntryA = /** @class */ (function (_super) {
    __extends(Ec2ManagedPrefixListEntryA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html aws_ec2_managed_prefix_list_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ManagedPrefixListEntryAConfig
    */
    function Ec2ManagedPrefixListEntryA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_managed_prefix_list_entry',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cidr = config.cidr;
        _this._description = config.description;
        _this._prefixListId = config.prefixListId;
        return _this;
    }
    Object.defineProperty(Ec2ManagedPrefixListEntryA.prototype, "cidr", {
        get: function () {
            return this.getStringAttribute('cidr');
        },
        set: function (value) {
            this._cidr = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixListEntryA.prototype, "cidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixListEntryA.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ManagedPrefixListEntryA.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ec2ManagedPrefixListEntryA.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixListEntryA.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixListEntryA.prototype, "prefixListId", {
        get: function () {
            return this.getStringAttribute('prefix_list_id');
        },
        set: function (value) {
            this._prefixListId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixListEntryA.prototype, "prefixListIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefixListId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2ManagedPrefixListEntryA.prototype.synthesizeAttributes = function () {
        return {
            cidr: cdktf.stringToTerraform(this._cidr),
            description: cdktf.stringToTerraform(this._description),
            prefix_list_id: cdktf.stringToTerraform(this._prefixListId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2ManagedPrefixListEntryA.tfResourceType = "aws_ec2_managed_prefix_list_entry";
    return Ec2ManagedPrefixListEntryA;
}(cdktf.TerraformResource));
exports.Ec2ManagedPrefixListEntryA = Ec2ManagedPrefixListEntryA;
