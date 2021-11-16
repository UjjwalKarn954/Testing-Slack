"use strict";
// https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html
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
exports.RamPrincipalAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html aws_ram_principal_association}
*/
var RamPrincipalAssociation = /** @class */ (function (_super) {
    __extends(RamPrincipalAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html aws_ram_principal_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamPrincipalAssociationConfig
    */
    function RamPrincipalAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ram_principal_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._principal = config.principal;
        _this._resourceShareArn = config.resourceShareArn;
        return _this;
    }
    Object.defineProperty(RamPrincipalAssociation.prototype, "id", {
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
    Object.defineProperty(RamPrincipalAssociation.prototype, "principal", {
        get: function () {
            return this.getStringAttribute('principal');
        },
        set: function (value) {
            this._principal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamPrincipalAssociation.prototype, "principalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamPrincipalAssociation.prototype, "resourceShareArn", {
        get: function () {
            return this.getStringAttribute('resource_share_arn');
        },
        set: function (value) {
            this._resourceShareArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamPrincipalAssociation.prototype, "resourceShareArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceShareArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RamPrincipalAssociation.prototype.synthesizeAttributes = function () {
        return {
            principal: cdktf.stringToTerraform(this._principal),
            resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RamPrincipalAssociation.tfResourceType = "aws_ram_principal_association";
    return RamPrincipalAssociation;
}(cdktf.TerraformResource));
exports.RamPrincipalAssociation = RamPrincipalAssociation;
