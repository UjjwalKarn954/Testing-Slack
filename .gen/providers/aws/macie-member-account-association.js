"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html
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
exports.MacieMemberAccountAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html aws_macie_member_account_association}
*/
var MacieMemberAccountAssociation = /** @class */ (function (_super) {
    __extends(MacieMemberAccountAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html aws_macie_member_account_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MacieMemberAccountAssociationConfig
    */
    function MacieMemberAccountAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie_member_account_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._memberAccountId = config.memberAccountId;
        return _this;
    }
    Object.defineProperty(MacieMemberAccountAssociation.prototype, "id", {
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
    Object.defineProperty(MacieMemberAccountAssociation.prototype, "memberAccountId", {
        get: function () {
            return this.getStringAttribute('member_account_id');
        },
        set: function (value) {
            this._memberAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MacieMemberAccountAssociation.prototype, "memberAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memberAccountId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MacieMemberAccountAssociation.prototype.synthesizeAttributes = function () {
        return {
            member_account_id: cdktf.stringToTerraform(this._memberAccountId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MacieMemberAccountAssociation.tfResourceType = "aws_macie_member_account_association";
    return MacieMemberAccountAssociation;
}(cdktf.TerraformResource));
exports.MacieMemberAccountAssociation = MacieMemberAccountAssociation;
